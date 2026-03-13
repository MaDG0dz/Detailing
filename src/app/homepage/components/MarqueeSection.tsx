import React from 'react';

const items = [
  'Keramische Coating',
  'Paint Protection Film',
  'Interieur Detailing',
  'Exterieur Polijsten',
  'Nano Bescherming',
  'Lakconservering',
  'Ruitenfilm',
  'Motorruimte Reiniging',
];

export default function MarqueeSection() {
  return (
    <div
      className="overflow-hidden py-5 border-b group"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="flex">
        <div className="marquee-track group-hover:[animation-play-state:paused]">
          {[...items, ...items]?.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 mx-8 text-[10px] font-medium uppercase tracking-[0.25em] transition-colors duration-300 hover:text-[rgba(201,168,76,0.8)] cursor-default"
              style={{ color: 'rgba(201,168,76,0.45)' }}
            >
              {item}
              <span
                className="inline-block w-1 h-1 rounded-full"
                style={{ background: 'rgba(201,168,76,0.3)' }}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}