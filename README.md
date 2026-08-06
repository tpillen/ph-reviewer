# PH Alpha 0.3.1 — Clinical Scenario Data Engine

This release is a single-file, mobile-responsive reviewer application designed for Windows, macOS, iPad, and iPhone browsers.

## Included scenarios

1. Atopic dermatitis → Dupilumab
2. Basal cell carcinoma → Mohs surgery
3. Plaque psoriasis → Secukinumab

Selecting a scenario instantiates a complete synthetic case across intake, visit authorization, structured SOAP, treatment authorization, work queue, documents, billing handoff, audit, and data provenance.

## Repository replacement

1. Extract the ZIP outside your `ph-platform` repository.
2. Copy `index.html`, `README.md`, and the `docs` folder into the root of `ph-platform`.
3. Replace existing files when prompted.
4. Do not delete `.git`.
5. Commit in GitHub Desktop with:
   `Release PH Alpha 0.3.1 Clinical Scenario Data Engine`
6. Push origin.

## Testing on a computer

Double-click `index.html`. This build is self-contained and does not require Python or a local web server.

## Testing on iPad or iPhone

For reliable iPad/iPhone testing, publish `index.html` as a website through GitHub Pages or another static host. Then Mallory can open one normal web link in Safari.

## Safety

Synthetic data only. Do not enter real patient information.
