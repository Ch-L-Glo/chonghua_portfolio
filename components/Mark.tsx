const paths: Record<string, React.ReactNode> = {
  database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/></>,
  chart: <><path d="M3 20h18M5 16v-5h3v5zm6 0V6h3v10zm6 0V3h3v13z"/></>,
  workflow: <><rect x="3" y="3" width="7" height="6" rx="1"/><rect x="14" y="15" width="7" height="6" rx="1"/><path d="M6 9v9h8m-4-12h7v9"/></>,
  network: <><circle cx="12" cy="12" r="3"/><path d="m10 10-5-5m9 5 5-5m-9 9-5 5m9-5 5 5"/><circle cx="4" cy="4" r="2"/><circle cx="20" cy="4" r="2"/><circle cx="4" cy="20" r="2"/><circle cx="20" cy="20" r="2"/></>
};
export default function Mark({name}:{name:string}) {
  return paths[name] ? <svg className="mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">{paths[name]}</svg> : <img className="mark" src={'/assets/tools/'+name+'.svg'} alt=""/>;
}
