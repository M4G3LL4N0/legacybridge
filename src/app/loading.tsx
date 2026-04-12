export default function RootLoading() {
  return (
    <main className="premium-page-shell min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="premium-surface rounded-[2rem] p-8">
          <div className="animate-pulse">
            <div className="h-3 w-32 rounded-full bg-white/10" />
            <div className="mt-5 h-12 w-[60%] rounded-2xl bg-white/10" />
            <div className="mt-4 h-5 w-[78%] rounded-xl bg-white/10" />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="h-32 rounded-[1.5rem] bg-white/8" />
              <div className="h-32 rounded-[1.5rem] bg-white/8" />
              <div className="h-32 rounded-[1.5rem] bg-white/8" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
