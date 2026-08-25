PH Alpha 0.6.1 — External Source Records, Reconciliation & Source Anchoring

KEY CHANGES
- Outside documents do NOT create/open a clinic encounter.
- TXT ingestion inventories all Label: Value source elements.
- Source elements can be Mapped, Needs review, Unmapped, or Unclassified.
- Reconciliation percentage shows how much of the source was accounted for.
- Previsit Intelligence Summary is separate from the legal encounter note.
- Go-to-source navigation highlights the originating TXT line.
- PDF/JPEG/PNG may be registered as External Source Records without pretending OCR occurred.
- Existing central Feedback Log remains intact.

TEST
1. Deploy as ph-reviewer index.html.
2. Start Clinical Review > 0. Document Intake Lab.
3. Load a synthetic TXT template; Extract & Propose Mapping.
4. Review Source Elements / Accounted For / Unclassified / Reconciliation.
5. Use Go to source.
6. Review Previsit Intelligence Summary.
7. Accept mapped fields and verify Intake/SOAP.
8. Import PDF/JPEG/PNG: it should register without opening an encounter or claiming OCR.

Use synthetic/de-identified material only.
