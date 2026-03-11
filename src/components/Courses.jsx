const courses = [
  {
    desc: 'Build strong algebra, geometry, and arithmetic foundations with board-focused practice.',
    tag: 'Limited Seats',
    class:'10th'
  },
  {
    desc: 'Master trigonometry, sets, and coordinate geometry through concept-first teaching.',
    tag: 'High Demand',
    class:'11th'
  },
  {
    desc: 'Advanced calculus and vectors with test strategy for top exam performance.',
    tag: 'Exam Intensive',
    class:'12th'
  },
  {
    desc: 'Applied calculus and linear algebra tailored for semester and university success.',
    tag: 'Professional Track',
    class:'Competitive Exams'
  },
];

export default function Courses() {
  return (
    <section id="courses" className="section-wrapper bg-lightbg">
      <div className="content-container">
        <h2 className="font-heading text-3xl font-bold text-gray-900">CBSE/State syllabus</h2>
        <div className="heading-accent" />
        <p className="mt-5 text-gray-600">Structured sessions available in online mode only.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {courses.map((course, index) => (
            <article key={index} className="card-hover rounded-2xl bg-white p-6 shadow-lg">
              <div className="mb-4 inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-yellow-700">
                {course.tag}
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900">{course.class}</h3>
              <p className="mt-3 text-sm text-gray-600">{course.desc}</p>
              <p className="mt-4 text-sm font-medium text-secondary">Online Only</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
