# Editing the portfolio

| Content | Source |
| --- | --- |
| Interface copy in both languages, contact links | data/site.ts |
| Case studies and builds (one list) | data/works.ts |
| Résumé timeline, including the internship under NUS | data/experience.ts |
| Skill groups and the shorter home toolkit | data/skills.ts |
| Credential names, verification links and badge paths | data/credentials.ts |
| Page shell: header, language switch, footer, 404 | components/Site.tsx |
| Home, Work, case page and About | components/Home.tsx, WorkIndex.tsx, ProjectDetail.tsx, About.tsx |
| Inventory coverage calculator | components/Calculator.tsx |
| Shared pieces: badges, section headings, covers, logos | components/ui.tsx |
| Design tokens, layout, Chinese typography, small screens, motion | app/globals.css |

## Pages

| Route | Content |
| --- | --- |
| / | Home |
| /work/ | Case studies (#cases) and builds (#builds) |
| /work/<id>/ | One page per case that has `detail` in data/works.ts |
| /about/ | Résumé on a single page: #experience, #skills, #credentials |

Each résumé entry is an anchor: /about/#emerge, #kpmg, #nus, #mitsubishi and #ecust.
The retired /play/ and /about/<stage>/ addresses redirect to /work/#builds and /about/#<stage> through public/_redirects.

## Work entries

Every entry in data/works.ts has a `kind` (case or build), a `status` (delivered, in-design, live or in-preparation), a `cover`, a title, summary and tags in both languages, and `links`.

- Only the links listed are rendered, in the order given. Each has a kind (github, figma or demo) and may carry its own label.
- A case with `detail` gets a page. `facts`, `flow` and `calculator` are optional extras; leave them out when there is nothing real to say.
- An entry with status in-preparation shows as a placeholder: no page, no buttons, and the standard "Summary, screenshots and links to follow." line. To publish it, add a cover, summary, tags and links, then change the status.
- The home page shows the featured case, three cards and the placeholders chosen at the bottom of data/works.ts.

## Languages

English is the default and is what the build renders. `?lang=zh` selects Chinese in the browser and keeps `<html lang>` in step; internal links carry the parameter. Store both language versions of a text together. Only the home page has a Chinese design board, so new Chinese interface text should follow its wording.

## Assets

Public artwork lives in public/assets. Use organizations for institutional marks, portrait for the web portrait, credentials for official badges, tools for technology icons, and projects for covers (16:10, named cover-*.svg). Keep an organization's original proportions. Use approved public visuals and distinguish delivered work from plans.

Fonts are self-hosted through @fontsource (IBM Plex Sans and IBM Plex Mono, Latin subset). Chinese uses the system font stack.

## Credentials and skills

Credential names, verification links and image paths live in data/credentials.ts.
Official badge assets are stored in public/assets/credentials/.
Skills are grouped in data/skills.ts and drawn from CV_LiChonghua.pdf.
The home page contains a shorter selection.

## Upcoming portfolio content

MCP and Business Ontology are listed as placeholders in data/works.ts.
Project details, screenshots, repository links and the use of React will be confirmed later.
