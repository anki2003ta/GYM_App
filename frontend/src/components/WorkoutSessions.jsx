import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
            Start with a 5-10 minute warm-up, including a treadmill jog and dynamic stretching. Then, move on to strength training, focusing on chest and triceps with exercises like bench press, incline press, and tricep pushdown. Next, target back and biceps with pull-ups, barbell rows, and bicep curls. Finish with legs and shoulders, doing squats, leg press, and military press. After strength training, do 20-30 minutes of cardio, choosing from treadmill, stationary bike, or rowing machine. Finally, cool down with 5-10 minutes of static stretching.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Energize your fitness routine with our high-intensity bootcamp! Designed for all levels, this dynamic program combines strength, cardio, and endurance training to help you burn calories, build muscle, and boost stamina. Led by expert trainers, each session is packed with variety and motivation to keep you pushing your limits. Join us and transform your fitness journey!
        Here 's are example structure for a gym booicamp:
        </p>
        <div className="bootcamps">
          <div>
            <h4>Theme: Full-Body Transformation Bootcamp
            </h4>
            <p>
            Duration: 4-6 weeks<br/>
            Frequency: 3-4 sessions per week<br/>
            Class Duration: 45-60 minutes<br/>
            <h4>Key Features:</h4>Dynamic Workouts,Special Focus Days,Skill Levels,Nutritional Guidance.

            </p>
          </div>
          <div>
            <h4>Theam: Strength Warrior Bootcamp</h4>
            <p>
              Focus: Building muscle and enhancing strength<br/>
              Duration: 4 weeks<br/>
              <h4>Key Features:</h4>Circuit Training,Special Sessions,Progression Goals,Community Leaderboards,End Event.
            </p>
          </div>
          <div>
            <h4>Theam:Zen & Burn Bootcamp</h4>
            <p>
              Focus: Mind-body balance with light cardio.<br/>
              Duration: 3 weeks<br/>
              <h4>Key Features:</h4>Morning Flow,Afternoon Burn,Mindfulness Sessions,Takeaways.
            </p>
          </div>
          <div>
            <h4>Theam:Athletic Performance Bootcamp</h4>
            <p>
                Focus: Improve agility, speed, and endurance for athletes.<br/>
                Duration: 6 weeks<br/>
                <h4>Key Features:</h4>Speed Drills,Endurance Building,Agility Work,Sports Integration,Performance Testing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;