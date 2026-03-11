export default function Hero() {
  return (
    <section
      id="home"
      className="section-wrapper bg-slate-900"
      style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(30,58,138,0.55), transparent 55%)' }}
    >
      <div className="content-container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="inline-block rounded-full border border-amber-300/70 bg-amber-300/15 px-4 py-1 text-sm font-semibold text-amber-200">
            Mathematics Teacher
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold leading-tight tracking-wide text-white sm:text-5xl">
            Madhavi Khandavilli
          </h1>
          <p className="mt-5 font-heading text-xl font-semibold tracking-wide text-amber-300 sm:text-2xl">Msc., Mphil.</p>
          <div className="heading-accent" />
          <p className="mt-6 max-w-xl text-base text-slate-200 sm:text-lg">
            Structured concept-building, exam strategy, and high-precision problem-solving for Class 10, 11, 12, and
            Engineering Mathematics.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="primary-btn">
              Get Started
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white px-6 py-3 text-sm font-semibold text-white transition duration-200 ease-in-out hover:scale-[1.02] hover:bg-white/10"
            >
              Watch Video Demo
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/25 bg-white/10 p-6">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:34px_34px]" />
          <div className="relative space-y-3 text-right font-heading text-2xl font-semibold text-amber-300 sm:text-3xl">
            <p>f(x) = x² + 2x + 1</p>
            <p>∫ x dx = x²/2 + C</p>
            <p>sin²θ + cos²θ = 1</p>
            <p>π • Σ • Δ</p>
          </div>
        </div>
      </div>
    </section>
  );
}
