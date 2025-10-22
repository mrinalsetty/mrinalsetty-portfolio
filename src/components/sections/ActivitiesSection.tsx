export default function ActivitiesSection() {
  const activities = [
    "Member of Google Developer Student Club",
    "Captain of the NIE College Tennis Team",
    "Certified Singer in Classical music",
    "Avid Traveller",
  ];

  return (
    <section
      id="activities"
      className="section-scroll-target container-narrow py-16 sm:py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
          Activities
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Extracurricular activities and personal interests
        </p>
      </div>

      <div className="modern-card p-8">
        <div className="grid gap-4 md:grid-cols-2">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-blue-600/20 
                         hover:bg-slate-800/50 hover:border-blue-400/40 transition-all duration-200 cursor-hover"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
              <span className="text-slate-300 text-sm leading-relaxed">
                {activity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
