# LessonPlanToGo production Blue Team assessment

Completed 6 October 2026 through Command Deck MCP.

Target: https://lessonplantogo.onrender.com
Observed destination: https://lessonplantogo.church-care-hub.workers.dev/

Command Deck: A / 100, zero findings above informational; Server: cloudflare reported as informational. This is a limited scanner score, not proof of comprehensive application security.

## Results

- Headers: CSP, HSTS (31536000 seconds; includeSubDomains), DENY framing, nosniff, no-referrer and restrictive Permissions-Policy present.
- TLS: both hosts negotiated TLS 1.3 / TLS_AES_256_GCM_SHA384 with validated certificates. Full protocol/cipher enumeration was not performed; deprecated protocol rejection is not proven.
- Cookies: no cookies observed on the anonymous root response. Authenticated Secure/HttpOnly/SameSite behavior remains untested.
- CORS: no allow-origin or allow-credentials headers on the sampled root, including the benign test Origin. Authenticated APIs and OPTIONS preflight remain untested.
- Exposed files: .env, .git/config, .git/HEAD, wp-config.php.bak, config.php.bak, .DS_Store, backup.zip, .htaccess, server-status and phpinfo.php returned 307 at Render. At the destination, nine returned 404 and wp-config.php.bak returned 403; the nonexistent control returned 404. No exposure observed on these paths.

## Manual observations

Informational: Cloudflare server banner reveals the edge provider. No version or exploit demonstrated. Accept or suppress where supported.

Low-priority hardening: CSP script-src and style-src allow unsafe-inline. Consider tested nonces/hashes and narrower third-party sources. No injection vulnerability demonstrated.

## Coverage and follow-up

Public unauthenticated HTTP and TLS checks only. No credentials, customer records or application changes. Validate session cookies and API CORS with a test account; enumerate protocols/ciphers with a compatible client; test CSP tightening in staging. Repeat after deployment changes.

The HTML report includes complete observed header values, path statuses and downloadable JSON evidence. No response bodies or cookie values are published.
