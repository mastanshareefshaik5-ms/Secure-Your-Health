import "./HealthTips.css";

function HealthTips() {

  const tips = [

    {
      id: 1,
      title: "💧 Drink Plenty of Water",
      description:
        "Drink at least 2–3 liters of water every day to stay hydrated and maintain healthy body functions.",
    },

    {
      id: 2,
      title: "🥗 Eat Healthy Food",
      description:
        "Include fruits, vegetables, whole grains, and protein-rich foods in your daily diet.",
    },

    {
      id: 3,
      title: "🏃 Exercise Daily",
      description:
        "Perform at least 30 minutes of walking, jogging, cycling, or any physical activity every day.",
    },

    {
      id: 4,
      title: "😴 Get Enough Sleep",
      description:
        "Sleep for 7–8 hours daily to improve immunity, memory, and overall health.",
    },

    {
      id: 5,
      title: "🩺 Regular Health Checkups",
      description:
        "Visit your doctor regularly for preventive health checkups and early disease detection.",
    },

    {
      id: 6,
      title: "🚭 Avoid Smoking",
      description:
        "Smoking damages your lungs, heart, and blood vessels. Quitting smoking greatly improves health.",
    },

    {
      id: 7,
      title: "🍷 Avoid Alcohol",
      description:
        "Reduce or avoid alcohol consumption to protect your liver and overall health.",
    },

    {
      id: 8,
      title: "🧘 Reduce Stress",
      description:
        "Practice yoga, meditation, breathing exercises, or hobbies to reduce stress.",
    },

    {
      id: 9,
      title: "🧼 Maintain Hygiene",
      description:
        "Wash your hands frequently and maintain personal hygiene to prevent infections.",
    },

    {
      id: 10,
      title: "💉 Stay Vaccinated",
      description:
        "Take all recommended vaccinations to protect yourself and your family from diseases.",
    },

    {
      id: 11,
      title: "❤️ Maintain Healthy Weight",
      description:
        "Maintain a healthy BMI through balanced nutrition and regular physical activity.",
    },

    {
      id: 12,
      title: "🌞 Get Morning Sunlight",
      description:
        "Spend 15–20 minutes in morning sunlight for Vitamin D and stronger bones.",
    },

  ];

  return (

    <div className="healthtips-page">

      <div className="healthtips-header">

        <h1>Health Tips</h1>

        <p>
          Follow these simple daily habits to maintain a healthy and happy life.
        </p>

      </div>

      <div className="tips-grid">

        {tips.map((tip) => (

          <div className="tip-card" key={tip.id}>

            <h2>{tip.title}</h2>

            <p>{tip.description}</p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default HealthTips;