'use client';

import { useEffect, useRef } from 'react';
import { stops } from '../data/stages';

const labels: Record<string, [string, string]> = {
  emerge: ['Emerge Bioscience', 'Emerge Bioscience'],
  kpmg: ['KPMG Singapore', '毕马威新加坡'],
  nus: ['NUS', '新加坡国立大学'],
  mitsubishi: ['Mitsubishi Electric', '三菱电机'],
  ecust: ['ECUST', '华东理工大学'],
};

export default function StageNav({ id, zh }: { id: string; zh: boolean }) {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = track.current;
    const active = rail?.querySelector<HTMLElement>('[aria-current="page"]');
    if (rail && active) {
      rail.scrollLeft = active.offsetLeft - rail.offsetLeft - (rail.clientWidth - active.clientWidth) / 2;
    }
  }, [id, zh]);

  return (
    <nav className="stage-navigation" aria-label={zh ? '切换经历' : 'Browse experience'}>
      <button type="button" className="stage-scroll" aria-label={zh ? '向左滚动经历' : 'Scroll experience left'}
        onClick={() => track.current?.scrollBy({ left: -240, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>←</button>
      <div className="stage-tabs" ref={track}>
        {stops.map(([key, years]) => (
          <a href={'/about/' + key + '/' + (zh ? '?lang=zh' : '')}
            key={key} aria-current={key === id ? 'page' : undefined}>
            <span>{labels[key][zh ? 1 : 0]}</span>
            <small>{years}</small>
          </a>
        ))}
      </div>
      <button type="button" className="stage-scroll" aria-label={zh ? '向右滚动经历' : 'Scroll experience right'}
        onClick={() => track.current?.scrollBy({ left: 240, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>→</button>
    </nav>
  );
}
