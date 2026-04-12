export default function AppLoading() {
  return (
    <main className="premium-page-shell min-h-screen">
      <div className="mx-auto max-w-[1680px] px-6 py-8 sm:px-8">
        <div className="grid gap-6">
          <div className="premium-surface rounded-[2rem] p-6">
            <div className="animate-pulse">
              <div className="h-3 w-28 rounded-full bg-white/10" />
              <div className="mt-4 h-10 w-[40%] rounded-2xl bg-white/10" />
              <div className="mt-8 grid gap-4 md:grid-cols-4">
                <div className="h-28 rounded-[1.5rem] bg-white/8" />
                <div className="h-28 rounded-[1.5rem] bg-white/8" />
                <div className="h-28 rounded-[1.5rem] bg-white/8" />
                <div className="h-28 rounded-[1.5rem] bg-white/8" />
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <div className="premium-surface h-[320px] rounded-[2rem] p-6" />
            <div className="premium-surface h-[320px] rounded-[2rem] p-6" />
          </div>
        </div>
      </div>
    </main>
  );
}
