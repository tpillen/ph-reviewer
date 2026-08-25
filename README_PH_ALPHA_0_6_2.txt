PH Alpha 0.6.2 — Multi-format External Source Extraction

SUPPORTED TEST INPUTS
- TXT: direct text normalization
- RTF: converted to normalized text
- DOCX: paragraph text extracted from word/document.xml
- Native PDF: embedded text extracted with [[PAGE n]] anchors
- Scanned PDF: OCR page-by-page with [[PAGE n]] anchors
- JPG/JPEG/PNG: OCR to normalized text

ARCHITECTURAL RULES
- Outside records remain External Source Records.
- Importing an outside record does NOT create/open a clinic encounter.
- Extracted text is a derived representation of the source.
- Mapping/reconciliation follows extraction; uncertain items remain Needs Review, Unmapped, or Unclassified.
- Previsit Intelligence Summary remains separate from the legal encounter note.
- Use synthetic/de-identified test material only.

IMPORTANT
This prototype loads JSZip, PDF.js and Tesseract.js from jsDelivr in the browser. Internet access is required for those libraries. OCR may take time, especially for multi-page scanned PDFs.

TEST
1. Deploy index.html to ph-reviewer and confirm Alpha 0.6.2.
2. Start Clinical Review > 0. Document Intake Lab.
3. Choose your DOCX acne template.
4. Wait for 'External DOCX extracted to normalized text.'
5. Click Extract & Propose Mapping.
6. Review Source Reconciliation, mapping exceptions, and Previsit Intelligence Summary.
7. Repeat with a native PDF.
8. Repeat with JPG/PNG or scanned PDF and observe OCR progress.
9. Confirm none of these actions opens a clinic encounter.
10. Record misses/mis-mappings using Reviewer Feedback.
