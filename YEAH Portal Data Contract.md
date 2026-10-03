# YEAH member portal — UI ↔ data contract

For the IT team building the backend of **YEAH Future Talent**. It lists every value the three
front-end screens capture or display, the name each one is submitted under, its validation rule,
and the endpoint it belongs to. The UI is static HTML; nothing here is implemented server-side.

Files: `YEAH Portal Desktop.html`, `YEAH Portal Mobile.html` (preview both in `YEAH Portal Frames.html`).
Both files accept `?screen=login|register|hub`, and `&mode=email` opens registration as the manual
sign-up form; mobile also takes `&tab=` and `&step=`. The school and university pickers read
`data/th-institutions.js`, shared by both files.

In the markup, form controls carry the field name in `name=`, read-only values carry `data-field`,
and each record carries its id (`data-program-id`, `data-application-id`, `data-participation-id`).
Nothing in the UI displays this structure to the member — it is all in the markup.

---

## 1. Authentication

Two identity providers: Google, and email + password. The login screen offers both; "Sign up" under it
opens the registration form directly, empty, with a password pair beside (desktop) or under (mobile)
the email field.

### `POST /api/auth/google`

```json
{ "provider": "google", "id_token": "<JWT>",
  "claims": { "sub": "…", "email": "…", "email_verified": true, "name": "…", "picture": "…" } }
```

| Rule | Behaviour the UI assumes |
|---|---|
| Lookup key | `claims.sub` — **never** email. Email is not stable (the member may use a different contact address than the Google one). |
| `member_found` | Redirect to the member hub. |
| `member_not_found` | Redirect to registration, pre-filled from `claims.name` and `claims.email`. |
| Email edited at registration | Store the new value as `email`; keep `claims.email` as `email_login`. The UI shows a warning that sign-in still uses the Google account, and sends `email_changed_from_google: true`. |

### `POST /api/auth/login` — email + password

```json
{ "provider": "email", "email": "…", "password": "…" }
```

The Sign in button stays disabled until the email is well-formed and the password is non-empty.
Success lands on the member hub. Return one generic error for a wrong email *or* a wrong password.
Every password field has a show/hide eye; it only changes the input type, nothing is sent.
On sign-up, the rule text under the password disappears once the password meets every rule, and
comes back if an edit breaks one.

### `POST /api/auth/password/forgot`

`{ "email": "…" }`. "Forgot your password?" opens a dialog (desktop) or bottom sheet (mobile),
pre-filled with whatever is in the login email field. The UI shows the same confirmation whether or
not the address has an account, so the endpoint must answer identically in both cases. The copy
promises a link that works for 30 minutes, and tells Google members they have no YEAH password.
The page that consumes the reset link is not designed yet.

## 2. Registration — `POST /api/members`

Sent once, on the only submit button in the flow. The button is disabled until `pdpa_consent`
is true **and** every required field below is filled. The same form serves both sign-up routes;
`auth_provider` decides which identity fields are sent.

### Always present

| Field | Type | Required | Validation / enum |
|---|---|---|---|
| `auth_provider` | enum | yes | `google` \| `email` |
| `google_sub` | string | if `google` | Primary key for Google members. Hidden input; not sent for `email` |
| `password` | string | if `email` | ≥ 8 chars with an uppercase letter, a lowercase letter, a digit and one of `@$!%*?&` (the UI allows only those symbols). The UI also requires a matching confirm field, which is **not** sent. Hash server-side; never log it — the prototype's console log shows `[redacted]` |
| `first_name`, `last_name` | string | yes | Pre-filled from Google. **Read-only after registration** |
| `first_name_en`, `last_name_en` | string | yes | English name, typed by the member. Latin letters, space, `.` `'` `-` only. Read-only after registration. Every name shown in EN mode (hub, card, saved QR picture) reads these |
| `birthdate` | date `YYYY-MM-DD` | yes | Used only for age-banded eligibility. Shown on the profile, read-only after registration |
| `email` | string | yes | Contact address; may differ from `email_login`. Shown on the profile, read-only after registration |
| `email_login` | string | yes | Google: the Google account's address. Email sign-up: same as `email` |
| `email_changed_from_google` | bool | if `google` | Derived |
| `phone` | string | yes | Accepts `08x-xxx-xxxx`, `0xxxxxxxxx`, `+66xxxxxxxxx`; **normalised to E.164 (`+66…`) before sending** |
| `occupation_status` | enum | yes | `school_student` (นักเรียน) \| `university_student` (นักศึกษา) \| `professional` (คนทำงาน) — drives the conditional block |
| `province` | string | yes | Thai name of one of the 77 provinces, whatever the page language (the label and sort order follow the language) |
| `referral_source` | enum | yes | `tiktok` \| `facebook` \| `instagram` \| `friend` \| `event` \| `university` \| `other` |
| `referral_detail` | string | only if `referral_source = other` | free text |
| `track_interest` | enum | no | `ai_product` \| `business_growth` \| `creative_media` \| `social_impact` \| `""` |
| `growth_goal` | string ≤300 | no | Shown on the hub as the member's Growth Goal |
| `membership_level` | enum | yes | Always `general` at creation |
| `locale` | enum | yes | `th` \| `en` — mirrors the header toggle |
| `signup_source` | string | yes | Entry point: `landing_join_cta` (Google) or `login_sign_up` (the Sign up link) |
| `pdpa_consent` | bool | yes | Must be `true`; submit is blocked otherwise |
| `consent_version` | string | yes | `pdpa-2026-09-v1` — store the version, not just the flag |
| `marketing_opt_in` | bool | no | Separate from PDPA consent, never bundled with it |

### Institution pickers

Both pickers open with a search box above the list. Each row shows one name only, in the page
language — Thai in TH mode, English in EN mode, for schools and universities alike. No province,
no second-language subtitle. The value sent is always the Thai name.

**Order.**
1. QS World University Rankings 2027 position, best first. This only applies to the 13 ranked
   Thai universities; a banded rank counts as the top of its band (`721-730` → 721, `1401+` → 1401).
2. Number of students, most first. Rows with no published count come after every counted row.
3. Alphabetical, in the language the page is showing.

The same order holds in the unfiltered list and in search results: typing only filters, it never
re-ranks.

**Search.** Every typed word must appear in the Thai name, English name or a common abbreviation
(`KU`, `มธ`, `มจธ`), so either language finds a school whichever mode the page is in. Thai and Arabic digits match each other; spaces, dots and brackets are ignored.
At most 80 (desktop) or 60 (mobile) rows are drawn, with a note to keep typing.
`อื่น ๆ (กรุณาระบุ)` is always pinned at the bottom, and is the highlighted choice when nothing
matches. Picking it sends the value `"other"` and opens a **required** free-text field underneath,
pre-filled with the search text.

The lists live in `data/th-institutions.js`; its header has the full source list.

- **school** — 14,586 places a นักเรียน can attend from ม.1 upward: the Ministry of Education's 2568
  register (every affiliation) plus the private-school licence register, keeping schools that teach
  ม.1 or above, with same-name schools merged. Stored as the Thai name. English names: established
  ones from Wikidata where they exist; the rest are generated — type translated ("โรงเรียน X" →
  "X School", "วิทยาลัยเทคนิค X" → "X Technical College") and the name romanized in RTGS. Generated
  names are readable but not official; replace them as schools supply their own. Size:
  - public (OBEC): enrolled students, OBEC open data 2563
  - vocational: ปวช. students, OVEC 2569
  - private: licensed capacity mapped onto the public-school enrollment at the same percentile,
    because capacity runs 3–5× above real enrollment
  - local-government, BMA, Buddhist, university demonstration and กศน. schools publish no count,
    so they rank after the rest (3,345 rows)
- **uni** — 175 universities, Rajabhat and Rajamangala universities, institutes, private colleges,
  and military, police and nursing academies (each with an English name), plus the 876 OVEC
  vocational colleges for ปวส. students, all ranked together. Size: current students at every
  level from MHESI open data 2568 (2567 where 2568 is missing); ปวส. students for vocational colleges.
  Nine have no published count (the four military and police academies, AIT, Webster, Mission
  College, Lumnamping College, Graduate School of Business Administration College, and Suratthani
  Rajabhat, which does not report to MHESI).

In production, serve both from `GET /api/reference/institutions?type=school|university` and send an
`institution_id` alongside the name; the prototype only has names.

### `occupation_status = school_student` → `academic{}`

| Field | Required | Enum |
|---|---|---|
| `school` | yes | Thai name from the school list, or `other` |
| `school_other` | only if `school = other` | free text |
| `grade_level` | yes | `m1`…`m6` (ม.1–ม.6) \| `voc1`…`voc3` (ปวช.1–3) |

### `occupation_status = university_student` → `academic{}`

| Field | Required | Enum |
|---|---|---|
| `university` | yes | Thai name from the university list, or `other` |
| `university_other` | only if `university = other` | free text |
| `faculty` | yes | free text |
| `year_of_study` | yes | integer `1`–`8` (no "graduated" option) |
| `education_level` | yes | `diploma` \| `bachelor` \| `master` \| `doctorate` |

### `occupation_status = professional` → `professional{}`

| Field | Required | Enum |
|---|---|---|
| `employment_type` | yes | `full_time` \| `part_time` \| `freelance` \| `business_owner` \| `between_jobs` |
| `department_field` | yes | free text |
| `organisation` | no | free text |
| `years_experience` | no | `0-1` \| `2-4` \| `5-9` \| `10+` |

Switching status re-scopes what is required: the other blocks' fields are dropped from the payload
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

`general` renders as the **locked state before Explorer**, with a three-step progress track
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
| `eligible_levels[]` | Five checkboxes `general,1,2,3,4`. A level not in the list renders unchecked; the member's own level is highlighted; if their level is absent, Apply is replaced by "Needs <tier name>" (tier names only — the UI shows no level numbers) |

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
| Edit profile | `PATCH /api/members/me` | **Editable:** `phone`, `occupation_status`, `university`, `faculty`, `year_of_study`, `education_level`, `province`, `track_interest`, `growth_goal`, `resume_file` (PDF/DOC/DOCX ≤5 MB — send as `multipart/form-data`; stored and returned as `member.resume_url`), `portfolio_url`, `linkedin_url` (must match `linkedin.com/in/…`). **Rejected with 400 if sent:** `first_name`, `last_name`, `first_name_en`, `last_name_en`, `birthdate`, `email`, `google_sub`, `referral_source`, `pdpa_consent`, `marketing_opt_in`. Shown on the profile: everything above except `google_sub`, `referral_source`, `pdpa_consent`, `marketing_opt_in` |
| Share profile | `PATCH /api/members/me/visibility` | per-item booleans: display name + level, skill counts, credentials, contact email |
| Withdraw application | `DELETE /api/applications/{id}` | — |
| Export history | `GET /api/members/me/participations.csv` | — |

### 4b. YEAH Future Talent application (mobile only, for now)

Tapping the hub banner opens a program popup; its สมัครเลย button opens a three-step application,
and sending it lands on a waiting-list screen. The program is configured in `FT` in the mobile script
(`program_id: PRG-FT-C1`). Only `apply_deadline` (2026-11-02 23:59 +07:00, from the banner) is real;
capacity, program dates and the selection timeline are placeholders.

**Program read model** — `FT`: `apply_deadline`, `capacity`, `seats_taken`, `starts_at`, `ends_at`,
`eligible_levels[]`, `routing_track` ∈ `standard` \| `fast`, `evidence_required` (bool), and the dates
`screening_test_at`, `interview_window`, `announce_at`. The popup shows slots remaining
(`capacity - seats_taken`) and a DD:HH:MM:SS countdown. When `seats_taken >= capacity` the CTA becomes
"join overfill queue". After the deadline the CTA is disabled. If the member's level is not in
`eligible_levels`, the form stays closed and an inline alert offers the tier guide or other programs.

**Pre-fill.** Every field the member record holds is filled in and tagged "from profile" (or "edited" once
changed). Everything stays editable, and edits never write back to the profile. The mapping:
`occupation_status` → `work_status` (`professional` → `employed`, otherwise `student`);
`school_student` → `education_level: high_school` with the school list; `year_of_study` 1–4 →
`year_1`…`year_4`, and 5 or more → `year_4_plus`; `referral_source` → `acquisition_channel`;
`growth_goal` → `goal_statement`.

`POST /api/applications`:

| Field | Required | Rule |
|---|---|---|
| `applicant.first_name`, `.last_name` | yes | ≥ 2 chars. Pre-filled from SSO, overridable |
| `applicant.email`, `.birthdate`, `.phone` | yes | email regex · `YYYY-MM-DD` · 10-digit Thai mobile, sent as E.164 |
| `applicant.work_status` | yes | `student` \| `employed` |
| `applicant.job_title` | if `employed` | free text |
| `applicant.education_level` | yes | `high_school` \| `diploma` \| `bachelor` \| `master` \| `doctorate` |
| `applicant.institution` (+ `institution_other`) | yes | Thai name from the school or university list, or `other` + free text |
| `applicant.faculty_major` | yes | free text (study track for high school) |
| `applicant.academic_year` | yes | `year_1`…`year_4` \| `year_4_plus` \| `alumnus`; high school `m4` \| `m5` \| `m6` |
| `applicant.province` | yes | Thai province name |
| `applicant.acquisition_channel` (+ `acquisition_detail`) | yes | the `referral_source` enum; detail required for `other` |
| `target_skill` (+ `target_skill_other`) | yes | one of 11 skill keys, or `other` + free text |
| `motivation`, `goal_statement` | yes | ≤ 500 chars each |
| `attached_participations[]` | no | participation ids. Verified ones start ticked |
| `portfolio_url` | if `evidence_required` | full URL |
| `linkedin_url` | no | `linkedin.com/in/…` |
| `evidence_files[]` | ≥ 1 if `evidence_required` | PDF/PNG/JPG, ≤ 10 MB each, checked before upload; send as `multipart/form-data` |
| `pdpa_consent`, `audit_consent` | yes | both must be true before Submit enables; `consent_version` is stored as well |
| `prefilled_fields[]`, `edited_fields[]` | — | which pre-filled values the applicant changed |

On submit the server stores an **immutable snapshot** of the application and the profile as they stand at
that moment. Expected response: `application_id`, `status: "waitlist"`, `queue_position`, `snapshot_id`.
Leaving the form mid-way keeps it as a draft (`status: "draft"`), and the banner and popup offer to continue.

The waiting-list screen counts down to `screening_test_at` (or to `announce_at` on the fast track). It shows
the read-only snapshot, the selection track and the next dates. The screening test, interview and result
screens are paused; a small "test · dev team only" line at the bottom of the screen is their placeholder.
No AI score, confidence or AI-decision label appears anywhere the member can see.

---

## 5. Things the UI deliberately does not do

- It never computes or displays a skill `+1` that has not come back verified from the server.
- It never treats email as an identity key for Google members (email-and-password members are keyed by
  the account the backend creates).
- It never enables submit on an unconsented form, and it stores the consent **version**.
- It shows `general` as a real state, not as an empty Explorer.
- It shows tiers by name only (General Member, Explorer, Builder, Leader, Catalyst), never with a level number.
- Deadlines, seat counts and eligibility are read from data. The four sample programs in each file live in
  the `PROGRAMS` array at the top of the script block. In the mobile file, the Future Talent program behind
  the hub banner lives in `FT` instead.

## 6. Still open

- Real copy, photography and partner logos — everything visible is placeholder in the brand's voice.
- The two headline figures on the login screen (100+ activities, 500+ past participants) are hard-coded
  and animate up on load; point them at `GET /api/stats` when it exists.
- Whether `birthdate` is needed at registration at all, or only when a program has an age band.
- Whether `track_interest` should become required once tracks are fixed.
- The YEAH Certified (credential 03) panel and president approval screens are out of scope here; only the member-facing
  credential state (`active` / `revoked`) is rendered.
- Email sign-up has no verification step in the UI yet (send a confirmation link before the account is
  usable?), and the reset-password landing page is not designed.
- The school list is the Ministry of Education's 2568 register. International schools outside it, and
  schools opened since, go through `อื่น ๆ`. Review `school_other` / `university_other` values
  periodically and add the recurring ones to the list.
