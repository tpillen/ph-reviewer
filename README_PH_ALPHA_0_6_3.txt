PH Alpha 0.6.3 — Narrative Clinical Interpretation + Fax/Image OCR

WHY THIS BUILD
Alpha 0.6.2 successfully extracted DOCX/PDF/image content to normalized text, but narrative clinical notes did not always advance into useful mapping because many real notes are sectioned prose rather than simple Label: Value records.

WHAT 0.6.3 ADDS
- Section-aware parsing for HISTORY/HPI, MEDICATIONS, EXAM, ASSESSMENT/DIAGNOSIS, PLAN, COUNSELING, LABS, PATHOLOGY and IMAGING/RADIOLOGY.
- Candidate Clinical Facts table.
- Context separation: current therapy vs planned therapy vs historical therapy.
- Recognition of diagnosis, ICD-10, acne severity, selected current/planned therapies, prior failures, follow-up, counseling, BMI, hematocrit, BSA, EASI and IGA/PGA.
- Narrative facts are merged with deterministic mappings instead of replacing them.
- Ambiguous or unsupported items remain Needs Review / Unmapped.
- Fax/JPG/JPEG/PNG use the existing OCR pipeline and are labeled as External fax/image/scanned records.
- Importing any outside record still does NOT create or open a clinic encounter.
- Existing central Feedback Log remains intact.

FIRST REGRESSION TEST
Use the same Established_Patient_Encounter_acne.docx that extracted successfully in 0.6.2.
Expected:
1. DOCX extracts to normalized text.
2. Extract & Propose Mapping advances the workflow.
3. Acne vulgaris / ICD-10 L70.0 are recognized.
4. Current tretinoin/clindamycin remain current therapy.
5. Doxycycline remains planned/conditional therapy, not current medication.
6. Follow-up and counseling appear as candidate facts.
7. BMI/Hct, if present and unsupported by the current PH schema, are exposed as Unmapped rather than silently lost.
8. No clinic encounter is created.

IMAGE/FAX TEST
Use a synthetic/de-identified JPG/PNG or scanned PDF. OCR progress should appear, extracted text should populate the source viewer, and the same narrative interpretation/mapping pipeline should run afterward.

Use synthetic/de-identified test data only.
