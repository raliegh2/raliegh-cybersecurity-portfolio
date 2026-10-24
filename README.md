# Raliegh Barnett Cybersecurity & Systems Portfolio

Static portfolio with 15 case studies: six recent system builds and nine existing security projects. The recent builds are Command Deck, LessonPlanToGo, Church Care Hub, Webaudit, Trading Assistant / MT5 AI Bridge, and DDoS Detector Dashboard.

## Website

https://raliegh2.github.io/raliegh-cybersecurity-portfolio/

GitHub profile: https://github.com/raliegh2

## Run locally

Run `python3 -m http.server 8000`, then open http://localhost:8000.

## Content

- `index.html`: profile, project cards, and structured case-study data.
- `script.js`: filters, search, theme selection, and accessible project dialogs.
- `styles.css`: responsive site and documentation-page styling.
- `assets/docs/`: six HTML system case studies and nine existing PDF reports.
- `assets/docs/SCREENSHOTS.md`: capture context and validation boundaries for new screenshots.
- `assets/images/`: actual application captures plus existing security evidence previews.

Some source repositories require access. Those links are explicitly labelled private; public visitors can still read the portfolio documentation. Local demo screenshots do not imply connected production systems or live trading results. The historical PDF collection covers the original nine security projects; the new system builds have separate HTML documentation.

## Publishing

The repository uses GitHub Pages. Publish from the configured Pages branch. All assets and documentation use relative paths compatible with the repository’s Pages URL.

## Integrated Engineering Suite

Five additional public project sections are available in [Portfolio Engineering Suite](https://github.com/raliegh2/portfolio-engineering-suite), with source, reproducible checks and sanitized evidence.

| Project | Implementation and case study |
|---|---|
| AI reliability and tool policies | [Live local-model evaluation, trusted tool boundaries and trace grading](https://github.com/raliegh2/portfolio-engineering-suite/blob/main/docs/tracks/ai-evaluation.md) |
| Security operations | [Actual Windows collection, RFC5424 syslog, six detections and analyst dispositions](https://github.com/raliegh2/portfolio-engineering-suite/blob/main/docs/tracks/security-operations.md) |
| Vulnerability management | [Trivy/SARIF imports, finding provenance and retest-gated remediation](https://github.com/raliegh2/portfolio-engineering-suite/blob/main/docs/tracks/vulnerability-management.md) |
| Secure cloud delivery | [Role-scoped Workers/D1 APIs, hardened containers, CI and independent recovery](https://github.com/raliegh2/portfolio-engineering-suite/blob/main/docs/tracks/secure-delivery.md) |
| Trading infrastructure | [Demo broker history, observed-price replay, cancellation acknowledgments and reconciliation](https://github.com/raliegh2/portfolio-engineering-suite/blob/main/docs/tracks/trading-infrastructure.md) |

Verification includes 71 automated tests, 100 actual Windows Application records, an actual demo-terminal read of 500 bars, a hardened image rescan, and a matching snapshot restore into an independent cloud database. [Read the dated integration evidence](https://github.com/raliegh2/portfolio-engineering-suite/blob/main/evidence/real-integrations.json) and [check hosted CI](https://github.com/raliegh2/portfolio-engineering-suite/actions).

The [cloud health endpoint](https://portfolio-engineering-sandbox.church-care-hub.workers.dev/health) is public; its data APIs require private role tokens and contain synthetic training data. Broker execution remains paper-only; no account credentials, raw workstation logs, private snapshots or trading-profit claims are published.
