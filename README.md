# Chonghua Li — personal portfolio

A bilingual, static portfolio. English is the default; `?lang=zh` selects Chinese. A language change preserves the page and fragment. No database, tracking or paid APIs.

## Structure
- `build.py`: editable bilingual content, experience and page shell; run with Python 3 to regenerate HTML/content.json.
- `dist/app.js`: rendering, project filtering, language switching and the simulated inventory calculator.
- `dist/style.css`: responsive layout and visual design.
- `dist/`: deployable website; source CSS/JS are intentionally maintained here.
- `.openai/hosting.json`: private preview Site identity.

## Run and verify
```sh
python3 build.py
node --check dist/app.js
python3 -m http.server 8000 --directory dist
```
Open http://localhost:8000/. No dependency installation or JavaScript bundler is needed.

## Update content
Edit profile, projects, experience and contact in `build.py`, then regenerate. Each project needs matching English and Chinese text and a unique slug. Add project data to the projects array; its detail page is generated automatically. Categories: coding, data, solution. Add only approved source/Demo links. The Coding category intentionally has no invented projects.

A public CV download and LinkedIn link are omitted pending confirmation. Do not add the supplied original CV directly: it contains telephone numbers and outdated employment wording. Photos can be added to dist/assets with meaningful alt text, then referenced by the components.

## Cloudflare Pages
Upload `dist` using Direct Upload, or connect a chosen GitHub repository with build command `python3 build.py` and output directory `dist`. Run the syntax check before deployment. No server functions are required. The root `404.html` handles missing routes. Configure your chosen domain through the hosting dashboard. Add canonical URLs and a sitemap only after the public domain is confirmed.

## Hosting and source
Public source repository: https://github.com/Ch-L-Glo/chonghua_portfolio
Target domain: chonghuali.com
Cloudflare Pages settings: production branch `main`, build command `python3 build.py`, output directory `dist`, root directory blank. Connect the repository, deploy, then add `chonghuali.com` under Custom domains. Let Cloudflare create the DNS record through that flow.
The existing ChatGPT Site is a separate preview and is not automatically updated by GitHub pushes.

## Content provenance and review
The uploaded CV provided KPMG, Roland Berger, Mitsubishi and education details. The CV still described KPMG as current; the 2026 transition to Emerge follows newer information in the conversation. Exact current job title and education wording should be confirmed before public launch. No quantitative performance claims are published. The diagrams and calculator are new illustrative work, not client screenshots.
