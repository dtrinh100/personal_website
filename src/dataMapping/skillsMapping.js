// Maps the label and comfort label for the skill chart UI

const skillMap = new Map();

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

export default skillMap;
