# YEAH member portal — UI ↔ data contract

For the IT team building the backend of **YEAH Future Talent**. It lists every value the three
front-end screens capture or display, the name each one is submitted under, its validation rule,
and the endpoint it belongs to. The UI is static HTML; nothing here is implemented server-side.

Files: `YEAH Portal Desktop.html`, `YEAH Portal Mobile.html` (preview both in `YEAH Portal Frames.html`).
Both files accept `?screen=login|register|hub`; mobile also takes `&tab=` and `&step=`.

In the markup, form controls carry the field name in `name=`, read-only values carry `data-field`,
and each record carries its id (`data-program-id`, `data-application-id`, `data-participation-id`).
Nothing in the UI displays this structure to the member — it is all in the markup.

---

## 1. Authentication — `POST /api/auth/google`

Google is the only identity provider in the UI. The email form on the login screen sends a
one-time link that still resolves to the same Google account.

```json
{ "provider": "google", "id_token": "<JWT>",
  "claims": { "sub": "…", "email": "…", "email_verified": true, "name": "…", "picture": "…" } }
```

| Rule | Behaviour the UI assumes |
|---|---|
| Lookup key | `claims.sub` — **never** email. Email is editable later and is not stable. |
| `member_found` | Redirect to the member hub. |
| `member_not_found` | Redirect to registration, pre-filled from `claims.name` and `claims.email`. |
| Email edited at registration | Store the new value as `email`; keep `claims.email` as `email_login`. The UI shows a warning that sign-in still uses the Google account, and sends `email_changed_from_google: true`. |

---

## 2. Registration — `POST /api/members`

Sent once, on the only submit button in the flow. The button is disabled until `pdpa_consent`
is true **and** every required field below is filled.

### Always present

| Field | Type | Required | Validation / enum |
|---|---|---|---|
| `google_sub` | string | yes | Primary key. Hidden input. |
| `auth_provider` | string | yes | `google` |
| `first_name`, `last_name` | string | yes | Pre-filled from Google, editable |
| `birthdate` | date `YYYY-MM-DD` | yes | Used only for age-banded eligibility |
| `email` | string | yes | Contact address; may differ from `email_login` |
| `email_login` | string | yes | The Google account's address |
| `email_changed_from_google` | bool | yes | Derived |
| `phone` | string | yes | Accepts `08x-xxx-xxxx`, `0xxxxxxxxx`, `+66xxxxxxxxx`; **normalised to E.164 (`+66…`) before sending** |
| `occupation_status` | enum | yes | `student` \| `professional` — drives the conditional block |
| `province` | string | yes | One of the 77 Thai provinces (mobile: searchable bottom sheet) |
| `referral_source` | enum | yes | `tiktok` \| `facebook` \| `instagram` \| `friend` \| `event` \| `university` \| `other` |
| `referral_detail` | string | only if `referral_source = other` | free text |
| `track_interest` | enum | no | `ai_product` \| `business_growth` \| `creative_media` \| `social_impact` \| `""` |
| `growth_goal` | string ≤300 | no | Shown on the hub as the member's Growth Goal |
| `membership_level` | enum | yes | Always `general` at creation |
| `locale` | enum | yes | `th` \| `en` — mirrors the header toggle |
| `signup_source` | string | yes | Entry point, e.g. `landing_join_cta` |
| `pdpa_consent` | bool | yes | Must be `true`; submit is blocked otherwise |
| `consent_version` | string | yes | `pdpa-2026-09-v1` — store the version, not just the flag |
| `marketing_opt_in` | bool | no | Separate from PDPA consent, never bundled with it |

### `occupation_status = student` → `academic{}`

| Field | Required | Enum |
|---|---|---|
| `university` | yes | list + "อื่น ๆ" |
| `faculty` | yes | free text |
| `year_of_study` | yes | `1` \| `2` \| `3` \| `4` \| `graduated` |
| `education_level` | yes | `high_school` \| `diploma` \| `bachelor` \| `master` \| `doctorate` |

### `occupation_status = professional` → `professional{}`

| Field | Required | Enum |
|---|---|---|
| `employment_type` | yes | `full_time` \| `part_time` \| `freelance` \| `business_owner` \| `between_jobs` |
| `department_field` | yes | free text |
| `organisation` | no | free text |
| `years_experience` | no | `0-1` \| `2-4` \| `5-9` \| `10+` (desktop only) |

Switching status re-scopes what is required: the other block's fields are dropped from the payload
and released from validation, so a half-filled student block never blocks a professional submit.

Expected response: `participant_id`, `membership_level: "general"`, `created_at`.

---

## 3. Member hub — `GET /api/members/me`

One read model backs the whole page. Shape:

```json
{
  "member": { "participant_id", "google_sub", "full_name", "avatar_url",
              "membership_level", "stage", "profile_completeness", "created_at",
              "…all registration fields…" },
  "skill_dimensions": { "hard_skill": 2, "ownership_execution": 3,
                        "collaboration_communication": 4, "adaptability": 1,
                        "multiplier_potential": 0 },
  "programs_open": [ … ], "applications": [ … ],
  "participations": [ … ], "evidence": [ … ], "notifications": [ … ]
}
```

### `member.membership_level` — five states

| Value | Name | Meaning |
|---|---|---|
| `general` | General Member | Assigned automatically on registration |
| `1` | Explorer | Entered a project, exploring where their skills fit |
| `2` | Builder | Actively executing projects, accumulating growth evidence |
| `3` | Leader | Taking leadership roles inside initiatives |
| `4` | Catalyst | Top performers driving impact and building the next generation |

`general` renders as the **locked state before Level 1**, with a three-step progress track
(profile complete · application sent · accepted). The same names are used on the landing page
(`YEAH Landing v3.html`) and must stay in sync.

### `member.stage` — journey, from the IT design brief

`clinic` → `selection` → `learning` → `builder` → `certified` → `multiply`. Kept in the read model
and in the data layer; the journey strip was removed from the member page, so nothing renders it
today.

### `skill_dimensions` — the five-dimension taxonomy

Counts, not scores, and uncapped. The UI states in both languages that `+1` is added **only after a
mentor or partner verifies the evidence** — the front end never increments anything itself.

### `programs_open[]` — the open-programs cards

| Field | Used for |
|---|---|
| `program_id`, `type` (`event` \| `bootcamp` \| `project` \| `clinic`) | Card id and filter chips |
| `title`, `description`, `cover_image_url` | Card head |
| `evidence_requirements[]` | Listed in the apply dialog, before the form |
| `intake`, `seats_taken` | "27/40" plus the seat bar; `seats_taken >= intake` disables Apply |
| `starts_at`, `ends_at`, `duration_label`, `location` | Meta row |
| `apply_deadline` (ISO 8601, +07:00) | **DD:HH:MM countdown.** Under 48h it flips to the high-contrast state; past the deadline the card reads Closed and Apply is disabled |
| `eligible_levels[]` | Five checkboxes `general,1,2,3,4`. A level not in the list renders unchecked; the member's own level is highlighted; if their level is absent, Apply is replaced by "Needs Level n" |

### `applications[]`

`application_id`, `program_id`, `status` ∈ `draft` \| `submitted` \| `waitlist` \| `reviewing` \|
`accepted` \| `rejected`, `stage_index` (0–3 → Submitted · Screening · Interview · Result),
`submitted_at`, `waitlist_position`.

### `participations[]` — past programs

`participation_id`, `program_id`, `role`, `attended_at`, `duration_label`, `location`,
`verification_status` ∈ `draft` \| `submitted` \| `verified` \| `needs_revision` \| `rejected`,
`verified_by`, `skill_delta{dimension: n}`, and `credential` when one was issued:
`{ credential_id, level: "01"|"02"|"03", status: "active"|"revoked"|"expired", qr_url }`.

Credential levels follow the design brief: 01 Certificate of Participation, 02 Certificate of Skill,
03 YEAH Certified (panel recommends, president approves).

### `evidence[]`, `notifications[]`

`evidence`: `evidence_id`, `type`, `title`, `url`, `visibility` ∈ `private` \| `link` \|
`public_metadata`, `status`. `notifications`: `id`, `type`, `title`, `body`, `read`, `created_at`.

---

## 4. Writes from the hub

| Action | Call | Payload |
|---|---|---|
| Apply to a program | `POST /api/applications` | `program_id`, `participant_id`, `motivation` (≤500, required), `evidence_url` (required, URL), `visibility`, `status: "submitted"`, `submitted_at` |
| Submit evidence | `POST /api/evidence` | `evidence_type` ∈ `yeah_activity` \| `project_output` \| `employment_outcome`, `activity_id`, `skill_dimension`, `evidence_url`, `description`, `status: "submitted"` — the UI sets no skill delta |
| Edit profile | `PATCH /api/members/me` | any registration field; `google_sub` is never editable |
| Share profile | `PATCH /api/members/me/visibility` | per-item booleans: display name + level, skill counts, credentials, contact email |
| Withdraw application | `DELETE /api/applications/{id}` | — |
| Export history | `GET /api/members/me/participations.csv` | — |

---

## 5. Things the UI deliberately does not do

- It never computes or displays a skill `+1` that has not come back verified from the server.
- It never treats email as an identity key.
- It never enables submit on an unconsented form, and it stores the consent **version**.
- It shows `general` as a real state, not as an empty Level 1.
- Deadlines, seat counts and eligibility are read from data; the four sample programs in each file
  (`PROGRAMS` array, top of the script block) are the only place to change them.

## 6. Still open

- Real copy, photography and partner logos — everything visible is placeholder in the brand's voice.
- The two headline figures on the login screen (100+ activities, 500+ past participants) are hard-coded
  and animate up on load; point them at `GET /api/stats` when it exists.
- Whether `birthdate` is needed at registration at all, or only when a program has an age band.
- Whether `track_interest` should become required once tracks are fixed.
- Level 3 panel and president approval screens are out of scope here; only the member-facing
  credential state (`active` / `revoked`) is rendered.
