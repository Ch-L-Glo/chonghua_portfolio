# Editing the portfolio

| Content | Source |
| --- | --- |
| Home, navigation, contact and case templates | components/Portfolio.tsx |
| Bilingual case records and shared labels | data/content.json |
| Résumé order and summary copy | data/stages.ts |
| Résumé overview and individual stages | components/Journey.tsx and components/Stage.tsx |
| Independent projects, covers and links | components/Play.tsx |
| Shared typography, layout and motion | app/globals.css |

Public artwork lives in public/assets. Use organizations for institutional marks, portrait for the web portrait, tools for technology icons, and projects for project covers. Keep an organization's original proportions. Store both language versions of each case together. English is the default and ?lang=zh selects Chinese. Use approved public visuals and distinguish delivered work from plans.


## Credentials and skills

Credential names, verification links and image paths live in data/credentials.ts.
Official badge assets are stored in public/assets/credentials/.
Skills are grouped in components/Skills.tsx and drawn from CV_LiChonghua.pdf.
The homepage contains a shorter selection.

## Upcoming portfolio content

The owner plans to prepare MCP and Business Ontology projects for review.
Project details, screenshots, repository links and the use of React will be confirmed later.
