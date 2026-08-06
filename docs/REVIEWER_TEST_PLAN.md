# PH Alpha 0.3.1 Reviewer Test Plan

## iPad / Safari test

1. Open the published reviewer link in Safari.
2. Rotate between portrait and landscape.
3. Confirm navigation remains usable.
4. Select each of the three scenarios.
5. Confirm patient, diagnosis, service, work queue, and PA checklist change with the scenario.
6. Complete one open task.
7. Sign SOAP.
8. Run PA readiness.
9. Generate and sign a document.
10. Record approval and complete handoff.

## Expected result

Each scenario should populate the complete workflow without manual re-entry.

## Scenario-specific checks

### Atopic dermatitis
- Dupilumab requested
- Baseline laboratory screening initially missing
- Nursing task generated
- BSA and EASI visible

### BCC
- Mohs surgery / CPT 17311 requested
- Pathology and photograph requirements complete
- Provider signature initially missing

### Psoriasis
- Secukinumab requested
- PASI and BSA visible
- TB and hepatitis screening initially missing
- Nursing tasks generated
