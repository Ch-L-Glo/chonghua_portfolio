import Site from '../../../components/Site';
import { detailWorks, findWork } from '../../../data/works';

type Props = { params: Promise<{ slug: string }> };

// Only entries with a written case get a page; placeholders and link-only builds do not.
export function generateStaticParams() {
  return detailWorks.map((work) => ({ slug: work.id }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const work = findWork(slug);
  return { title: work?.title.en, description: work?.summary.en };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <Site view="project" slug={slug} />;
}
