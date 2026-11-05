export default function ContactIcon({ kind }: { kind: 'linkedin' | 'email' }) {
  return <svg aria-hidden="true" focusable="false" width="23" height="23" viewBox="0 0 24 24">
    {kind === 'linkedin' ? <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.57h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.45zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.1 20.45H3.54V8.99H7.1zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56c0 .95.79 1.72 1.77 1.72h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/> :
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><rect x="2" y="4.5" width="20" height="15" rx="2.5"/><path d="m3 6 9 7 9-7"/></g>}
  </svg>;
}
