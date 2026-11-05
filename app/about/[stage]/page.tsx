import Portfolio from '../../../components/Portfolio';
import { stops } from '../../../data/stages';

type Props = { params: Promise<{ stage: string }> };
export function generateStaticParams() {
  return stops.map(([stage]) => ({ stage }));
}
export async function generateMetadata({ params }: Props) {
  const { stage } = await params;
  return { title: stops.find(([id]) => id === stage)?.[2] };
}
export default async function Page({ params }: Props) {
  const { stage } = await params;
  return <Portfolio view="stage" slug={stage} />;
}
