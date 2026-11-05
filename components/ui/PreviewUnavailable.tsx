import Link from 'next/link';

export function PreviewUnavailable({ title, message }: { title: string; message: string }) {
  return (
    <div className="min-h-screen pt-40 pb-24 px-6 flex flex-col items-center justify-center text-center bg-background">
      <div className="max-w-xl space-y-6">
        <p className="text-xs font-mono tracking-widest text-accent uppercase">Preview only</p>
        <h1 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-white uppercase">{title}</h1>
        <p className="text-sm font-mono text-secondary leading-relaxed">{message}</p>
        <Link href="/shop" className="inline-block bg-white text-black px-6 py-3 text-xs font-mono font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors">
          Explore the collection
        </Link>
      </div>
    </div>
  );
}
