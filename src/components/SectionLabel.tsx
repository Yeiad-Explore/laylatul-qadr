type Props = { label: string };

export default function SectionLabel({ label }: Props) {
  return (
    <div className="font-['Cinzel'] text-[9px] sm:text-[10px] tracking-[4px] sm:tracking-[5px] uppercase text-[var(--gold)] mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3">
      <span className="block w-8 sm:w-10 h-px bg-[var(--gold-dim)]" />
      {label}
    </div>
  );
}
