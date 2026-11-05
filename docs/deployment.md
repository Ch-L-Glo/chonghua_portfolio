# Build and deployment

Cloudflare Pages builds main with Node.js 22. The configured command is python3 build.py and the publish directory is dist. The root entry point delegates to scripts/build.py.

| Script | Purpose |
| --- | --- |
| scripts/dev.mjs | Starts the local Next.js server and accepts a preview port |
| scripts/build.py | Installs locked dependencies with npm ci and runs npm run build |
| scripts/copy-export.mjs | Copies the Next.js static export from out to dist |

After a change, confirm the Cloudflare Pages check on the corresponding GitHub commit. The custom domain is chonghuali.com. Generated out, dist, .next and node_modules directories are ignored by Git.
