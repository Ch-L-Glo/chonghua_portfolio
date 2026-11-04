import Portfolio from '../../../components/Portfolio';
import content from '../../../data/content.json';
export function generateStaticParams() { return content.projects.map(p => ({ slug: p.id })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return { title: content.projects.find(p => p.id === slug)?.en.subtitle }; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return <Portfolio view="project" slug={slug} />; }
