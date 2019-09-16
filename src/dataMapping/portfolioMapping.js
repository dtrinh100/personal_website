const portfolioMap = new Map();

portfolioMap.set("1", {
  title: "USASpending.gov",
  images: [
    {
      url: require("../assets/usaspending-carousel-1.png"),
      alt: "USASpending.gov homepage"
    },
    {
      url: require("../assets/usaspending-carousel-2.png"),
      alt: "Webpage showing Federal Accounts search results"
    },
    {
      url: require("../assets/usaspending-carousel-3.png"),
      alt: "Webpage showing Unreported Data"
    }
  ],
  about: `<p>This project was developed for the USDT during my time as a consultant for Booz Allen. The project was
    created as a part of the DATA ACT to help citizens visualize government spending data. I was one of the front-end
    developers on this project working on the React/Redux stack.</p>
    <p>The main challenge of this project for me was to learn React, since I originally did not have any React
    skills prior to this project. Through this project, I learned how to architect a React/Redux app from start
    to finish. On top of this, I also had to learn how to D3 to visualize data.</p>`,
  technology: [
    "HTML5",
    "CSS",
    "SASS",
    "Javascript",
    "React",
    "Redux",
    "Webpack",
    "Accessibility"
  ]
});

portfolioMap.set("2", {
  title: "Avatar Builder",
  imgURL: "",
  about: `<p>This project was a fun side project to allow me to understand how 3D works on the web. From this project,
  I learned about the basics of 3D/Game Programming, while also learning the Vue web framework as well. Overall,
  it was a fun project that allowed me to step away from my comfort zone.</p>`,
  technology: ["HTML5", "CSS", "Javascript", "Vue", "BabylonJS"]
});

portfolioMap.set("3", {
  title: "The Labs",
  imgURL: "",
  about: `<p>This project was a side project to help be expand my knowledge of the Vue framework. I used the Vue/Vuex
  stack along with the Ticketmaster's API to develop this app. The main challenge for this application was translating
  my React knowledge over to Vue and learn about what is unique to Vue. I also got a chance to learn more about
  unit testing and the Jest unit testing framework while working on this project.</p>`,
  technology: ["HTML5", "CSS", "Javascript", "Vue", "VueX", "Jest"]
});

export default portfolioMap;
