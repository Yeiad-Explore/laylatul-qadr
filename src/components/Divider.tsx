export default function Divider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--gold-dim)] to-transparent relative z-10 my-0 mx-auto">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--ink)] px-4 text-[var(--gold)] text-lg">
        ✦
      </div>
    </div>
  );
}
