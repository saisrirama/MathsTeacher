const specialization = ['Algebra', 'Calculus', 'Trigonometry', 'Coordinate Geometry', 'Linear Algebra'];

export default function About() {
  return (
    <section id="about" className="section-wrapper bg-white">
      <div className="content-container grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="font-heading text-3xl font-bold text-gray-900">About</h2>
          <div className="heading-accent" />
          <p className="mt-6 text-gray-600">
            With focused academic mentoring and years of teaching experience, each session is designed to build concept
            clarity, problem-solving confidence, and exam readiness.
          </p>
          <p className="mt-4 text-gray-600">
            Students receive structured practice, strategic revision plans, and personalized support to strengthen
            fundamentals and perform consistently.
          </p>
        </div>

        <div className="card-hover rounded-2xl border border-gray-200 bg-white p-7 shadow-card">
          <h3 className="font-heading text-xl font-semibold text-gray-900">Core Specializations</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {specialization.map((topic) => (
              <li
                key={topic}
                className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-secondary"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
