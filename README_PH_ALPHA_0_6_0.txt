PH Alpha 0.6.0 — Clinical Document Intake & Mapping Lab

PURPOSE
First controlled ingestion/mapping prototype for PH.

WHAT THIS BUILD ADDS
- New "0. Document Intake Lab" navigation item
- TXT file import
- Built-in synthetic dermatology test note
- Original-source preservation in the active browser session
- SHA-256 source fingerprint when browser crypto is available
- Deterministic extraction of known clinical elements
- Proposed mapping into existing PH fields
- Confidence display
- Mapping exception queue
- Human acceptance before PH field population
- Intentional unmapped DLQI element to test schema-gap detection
- Audit entries for extraction and mapping acceptance

NOT YET INCLUDED
- PDF/DOCX parsing
- OCR for scanned PDF/JPEG/PNG
- Clinical image interpretation
- HL7/FHIR interfaces
- Persistent raw-document vault
- Replay/reprocessing store
- Mapping-version administration
- Production authentication/security
- Real patient data

TEST SEQUENCE
1. Open Alpha 0.6.0.
2. Start Clinical Review.
3. Select "0. Document Intake Lab."
4. Click "Load Built-in Synthetic Note."
5. Click "Extract & Propose Mapping."
6. Confirm known fields are mapped and DLQI appears under Unmapped.
7. Click "Accept Mapped Fields & Populate PH."
8. Open Intake and Structured SOAP to verify population.
9. Continue into Treatment Authorization / PA readiness.
10. Record defects using Reviewer Feedback.

DEPLOYMENT
Replace the ph-reviewer-live/index.html with PH_Alpha_0_6_0_index.html renamed to index.html.
Validate in ph-reviewer-live first. Promote the validated build to ph-platform only after testing passes.
