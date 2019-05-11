// Maps the label and comfort label to the skill chart UI

const skillMap = new Map();

const INITIAL_FILL_ANIMATION_DELAY = 0.6; // The initial delay before the bar fill animation can be played

const INITIAL_FADE_IN_ANIMATION_DELAY = 1; // The initial delay before the text fade-in animation can be played

const ANIMIMATION_DELAY_INCREMENT = 0.1; // Used to increase the delay for each additional label

const veryComfortableSkill = {
  width: "80%", // Width is the CSS width of the bar minus the label width
  comfortLevel: "Very Comfortable"
};

const comfortableSkill = {
  width: "60%",
  comfortLevel: "Comfortable"
};

const noviceSkill = {
  width: "40%",
  comfortLevel: "Novice"
};

const beginnerSkill = {
  width: "20%",
  comfortLevel: "Beginner"
};

skillMap.set("HTML", veryComfortableSkill);
skillMap.set("CSS", veryComfortableSkill);
skillMap.set("Javascript", veryComfortableSkill);
skillMap.set("Vue", comfortableSkill);
skillMap.set("React", veryComfortableSkill);
skillMap.set("UX/UI Design", noviceSkill);
skillMap.set("Go", beginnerSkill);
skillMap.set("SQL", noviceSkill);

let fillAnimDelay = INITIAL_FILL_ANIMATION_DELAY;
let fadeAnimDelay = INITIAL_FADE_IN_ANIMATION_DELAY;

// Javascript Map objects are ordered by insertion
skillMap.forEach(label => {
  fillAnimDelay = +(fillAnimDelay + ANIMIMATION_DELAY_INCREMENT).toFixed(2); // Makes sure calculations returns 2 decimal places
  label.fillAnimDelay = +(fillAnimDelay - ANIMIMATION_DELAY_INCREMENT).toFixed(
    2
  );

  fadeAnimDelay = +(fadeAnimDelay + ANIMIMATION_DELAY_INCREMENT).toFixed(2);
  label.fadeAnimDelay = +(fadeAnimDelay - ANIMIMATION_DELAY_INCREMENT).toFixed(
    2
  );
});

export default skillMap;
