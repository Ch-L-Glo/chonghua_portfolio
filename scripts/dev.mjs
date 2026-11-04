import { spawn } from 'node:child_process';
const args = process.argv.slice(2);
const portIndex = args.indexOf('--port');
const child = spawn(process.execPath, ['node_modules/next/dist/bin/next','dev','--hostname','0.0.0.0','--port',portIndex >= 0 ? args[portIndex + 1] : '3000'], { stdio: 'inherit' });
child.on('exit', code => process.exit(code ?? 1));
for (const signal of ['SIGINT','SIGTERM']) process.on(signal, () => child.kill(signal));
