'use client';

import { useState } from 'react';
import type { Copy } from '../data/site';

const format = (value: string) => Number(value).toLocaleString('en-US');

// Months of cover = inventory on hand ÷ monthly demand. Inputs are illustrative.
export default function Calculator({ t }: { t: Copy }) {
  const c = t.calculator;
  const [demand, setDemand] = useState('1000');
  const [inventory, setInventory] = useState('3000');

  const valid = demand !== '' && inventory !== '' && Number(demand) > 0 && Number(inventory) >= 0;
  const ratio = valid ? Number(inventory) / Number(demand) : 0;
  const months = valid ? ratio.toFixed(1) : '—';
  const formula = valid ? `${format(inventory)} ÷ ${format(demand)} = ${months}` : c.invalid;
  const cover = `${Math.max(0, Math.min(100, (ratio / 12) * 100)).toFixed(1)}%`;

  return (
    <section className="section demo" id="calculator">
      <div className="wrap demo__panel">
        <div className="demo__head">
          <div>
            <p className="eyebrow demo__eyebrow">{c.exhibit}</p>
            <h2>{c.title}</h2>
          </div>
          <p className="demo__note">{c.note}</p>
        </div>

        <div className="demo__grid">
          <div className="field">
            <label htmlFor="calc-inventory">
              {c.inventory}
              <span>{c.unit}</span>
            </label>
            <input id="calc-inventory" type="number" inputMode="decimal" min="0" value={inventory} onChange={(event) => setInventory(event.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="calc-demand">
              {c.demand}
              <span>{c.unit}</span>
            </label>
            <input id="calc-demand" type="number" inputMode="decimal" min="1" value={demand} onChange={(event) => setDemand(event.target.value)} />
          </div>
          <div className="result">
            <p className="result__label">{c.months}</p>
            <output htmlFor="calc-inventory calc-demand" aria-live="polite">{months}</output>
            <p className="result__formula">{formula}</p>
          </div>
        </div>

        <div className="scale">
          <div className="scale__track" role="img" aria-label={c.scale}>
            <div className="scale__fill" style={{ width: cover }} />
          </div>
          <div className="scale__ticks" aria-hidden="true">
            <span>0</span>
            <span>3</span>
            <span>6</span>
            <span>9</span>
            <span>{c.scaleEnd}</span>
          </div>
        </div>

        <p className="demo__desc">{c.desc}</p>
      </div>
    </section>
  );
}
