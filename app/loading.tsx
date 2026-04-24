export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary">
      <div className="font-display text-4xl font-extrabold text-white tracking-tight mb-8 animate-pulse">
        IT<span className="text-accent">versee</span>
      </div>
      <div className="w-12 h-12 rounded-full border-[3px] border-white/10 border-t-accent animate-spin mb-6" />
      <div className="font-sans text-sm text-white/50 tracking-widest animate-pulse">
        Please wait...
      </div>
    </div>
  );
}
