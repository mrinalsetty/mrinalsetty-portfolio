export default function AchievementsSection() {
  const achievements = [
    "Deloitte USI: Received Spot Award for the contributions towards the successful scaling up & meeting the demands of EDP 2.0 Initiative",
    "Deloitte USI: Industry Proficiency Bronze Badge × 3",
    "Completed 3000+ Client service hours at Deloitte",
    "Earned HackerRank CPP Gold badge (5 Stars)",
    "Cleared JEE Mains and Qualified for JEE Advanced",
    "Distinction Holder (CBSE Class 10 Topper)",
  ];

  return (
    <section
      id="achievements"
      className="section-scroll-target container-narrow py-16 sm:py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
          Achievements
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Professional achievements and academic accomplishments
        </p>
      </div>

      <div className="modern-card p-8">
        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-blue-600/20 
                         hover:bg-slate-800/50 hover:border-blue-400/40 transition-all duration-200 cursor-hover"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
              <span className="text-slate-300 text-sm leading-relaxed">
                {achievement}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
