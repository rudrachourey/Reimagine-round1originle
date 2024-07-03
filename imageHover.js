var specs1 = document.getElementById("spec1");
var specs2 = document.getElementById("spec2");
var specs3 = document.getElementById("spec3");
var specs = document.getElementById("spec4");
var specs5 = document.getElementById("spec5");
var specs6 = document.getElementById("spec6");
var specs7 = document.getElementById("spec7");
var displayimagecont4 = document.querySelector(".displayimagecont4");
var aboutdeccontainer4 = document.querySelector(".aboutdeccontainer4");




specs.addEventListener("mouseenter", () => {
  gsap.to(specs, {
    width: "20%",
    left: "38%", // Adjust left to center the element
    duration: 1,
    zIndex: 9999,
    ease: "Expo.easeInOut",
  });

  gsap.to("#spec1", { width: "12.6%", duration: 1, ease: Expo.easeInOut });
  gsap.to("#spec2", {
    width: "12.3%",
    left: "12.9%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec3", {
    width: "12.3%",
    left: "25.5%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec5", {
    width: "12.4%",
    left: "58%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec6", { left: "70.5%", duration: 1, ease: Expo.easeInOut });
  gsap.to("#spec7", { left: "84.2%", duration: 1, ease: Expo.easeInOut });
});

specs.addEventListener("mouseleave", () => {
  gsap.to(specs, {
    width: "13.5%",
    left: "42%", // Adjust left to its original position
    duration: 1.5,
    height: "100%",
    top: "0%",
    zIndex: 9,
    ease: "Expo.easeInOut",
    borderRadius: "0",
  });


  gsap.to(displayimagecont4, {
    display: "initial",
    delay: 0.5,
    width: "10vw",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: "1",
  });


  gsap.to("#spec1", { width: "13.5%", duration: 1, ease: Expo.easeInOut });
  gsap.to("#spec2", {
    width: "13.5%",
    left: "14%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec3", {
    width: "13.5%",
    left: "28%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec5", {
    width: "13.5%",
    left: "56%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec6", {
    width: "13.5%",
    left: "70%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec7", {
    width: "13.5%",
    left: "84%",
    duration: 1,
    ease: Expo.easeInOut,
  });
});

const clickkro = () => {
  gsap.to(specs, {
    width: "120%",
    duration: 1,
    height: "105%",
    top: "-3%",
    left: "-10%",
    ease: "Expo.easeInOut",
    borderRadius: "10px",
    zIndex: 9999,
  });
  gsap.to(displayimagecont4, {
    display: "none",
    opacity: ".8",
    // delay: -0.1,
    // duration:1,
    ease:"Power.out"
  });


  setTimeout(() => {
    gsap.to(aboutdeccontainer4, {
      display: "flex",
      duration: 0.8,
    //   delay: 0.1,
    });
  }, 680);
};

specs.addEventListener("mouseleave", () => {
  gsap.to(aboutdeccontainer4, {
    display: "none",
    duration:1.8
  });
});

////////////////////////////////////1nd///////////////////////////////

var displayimagecont1 = document.querySelector(".displayimagecont1");
var aboutdeccontainer1 = document.querySelector(".aboutdeccontainer1");

specs1.addEventListener("mouseenter", () => {
  gsap.to(specs1, {
    width: "20%",
    // Adjust left to center the element
    duration: 1,
    zIndex: 9999,
    ease: Expo.easeInOut,
  });

  // gsap.to("#spec1", { width:"12.8%", duration: 1, ease: Expo.easeInOut });
  gsap.to("#spec2", {
    width: "12.5%",
    left: "20.4%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec3", {
    width: "12.5%",
    left: "33.3%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec4", {
    width: "12.5%",
    left: "46.2%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec5", {
    width: "12.5%",
    left: "59%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec6", {
    width: "12.5%",
    left: "71.6%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec7", { left: "84.2%", duration: 1, ease: Expo.easeInOut });
});

specs1.addEventListener("mouseleave", () => {
  gsap.to(specs1, {
    width: "13.5%",
    // Adjust left to its original position
    duration: 1,
    height: "100%",
    top: "0%",
    left: "0%",
    zIndex: 99,
    ease: "Expo.easeInOut",
    borderRadius: "0",
  });

  gsap.to(displayimagecont1, {
    display: "initial",
    delay: 0.5,
    width: "10vw",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: "1",
  });
  // gsap.to("#spec1", { width: "13.5%", duration: 1, ease: Expo.easeInOut });
  gsap.to("#spec2", {
    width: "13.5%",
    left: "14%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec3", {
    width: "13.5%",
    left: "28%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec4", {
    width: "13.5%",
    left: "42%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec5", {
    width: "13.5%",
    left: "56%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec6", {
    width: "13.5%",
    left: "70%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec7", {
    width: "13.5%",
    left: "84%",
    duration: 1,
    ease: Expo.easeInOut,
  });
});

const firstclick = () => {
  gsap.to(specs1, {
    width: "120%",
    duration: 1,
    height: "105%",
    top: "-3%",
    left: "-10%",
    ease: "Expo.easeInOut",
    borderRadius: "10px",
    zIndex: 9999,
  });

  gsap.to(displayimagecont1, {
    display: "none",
    opacity: ".8",
    // delay: -0.3,
    // duration: 1,
    ease: "Power.out",
  });

  setTimeout(() => {
    gsap.to(aboutdeccontainer1, {
      display: "flex",
      duration: 0.8,
    });
  }, 680);
};

specs1.addEventListener("mouseleave", () => {
  gsap.to(aboutdeccontainer1, {
    display: "none",
    duration:1.8
  });
});









/////////////////////2nd////////////////...///////////////////






var displayimagecont2 = document.querySelector(".displayimagecont2");
var aboutdeccontainer2 = document.querySelector(".aboutdeccontainer2");

specs2.addEventListener("mouseenter", () => {
  gsap.to(specs2, {
    width: "20%",
    left: "12.5%",
    duration: 1,
    zIndex: 9999,
    ease: "Expo.easeInOut",
  });

  gsap.to("#spec1", {
    width: "12%",
    duration: 1,
    delay: 0.3,
    ease: " Expo.easeInOut",
  });
  gsap.to("#spec3", {
    width: "12.5%",
    left: "32.9%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec4", {
    width: "12.5%",
    left: "44.8%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec5", {
    width: "13.1%",
    left: "57.5%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec6", { left: "70.7%", duration: 1, ease: Expo.easeInOut });
  gsap.to("#spec7", { left: "84.4%", duration: 1, ease: Expo.easeInOut });
});

specs2.addEventListener("mouseleave", () => {
  gsap.to(specs2, {
    width: "13.5%",
    // Adjust left to its original position
    duration: 1,
    height: "100%",
    top: "0%",
    left: "0%",
    zIndex: 99,
    ease: "Expo.easeInOut",
    borderRadius: "0",

  });

  gsap.to(displayimagecont2, {
    display: "initial",
    delay: 0.6,
    width: "10vw",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: "1",
  });

  gsap.to("#spec1", { width: "13.5%", duration: 1, ease: Expo.easeInOut });
  gsap.to("#spec2", {
    width: "13.5%",
    left: "14%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec3", {
    width: "13.5%",
    left: "28%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec4", {
    width: "13.5%",
    left: "42%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec5", {
    width: "13.5%",
    left: "56%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec6", {
    width: "13.5%",
    left: "70%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec7", {
    width: "13.5%",
    left: "84%",
    duration: 1,
    ease: Expo.easeInOut,
  });
});

const secondclick = () => {
  gsap.to(specs2, {
    width: "120%",
    duration: 1,
    height: "105%",
    top: "-3%",
    left: "-10%",
    ease: "Expo.easeInOut",
    borderRadius: "10px",
    zIndex: 9999,
  });

  gsap.to(displayimagecont2, {
    display: "none",
    opacity: ".8",
    // delay: -0.3,
    // duration: .8,
    ease: "Power.out",
  });

  setTimeout(() => {
    gsap.to(aboutdeccontainer2, {
      display: "flex",
    //   duration: 1.5,
    });
  }, 680);
};

specs2.addEventListener("mouseleave", () => {
  gsap.to(aboutdeccontainer2, {
    display: "none",
    duration:.3
  });
});





////////////////////// THRID walaa////////////////////////////////////





var displayimagecont3 = document.querySelector(".displayimagecont3");
var aboutdeccontainer3 = document.querySelector(".aboutdeccontainer3");


specs3.addEventListener("mouseenter", () => {
  gsap.to(specs3, {
    width: "20%",
    left: "25%",
    duration: 1,
    zIndex: 9999,
    ease: "Expo.easeInOut",
  });

  gsap.to("#spec1", {
    width: "12.6%",
    duration: 1,
    delay: 0.2,
    ease: " Expo.easeInOut",
  });
  gsap.to("#spec2", {
    width: "11.6%",
    left: "13%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec4", {
    width: "12.5%",
    left: "45.3%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec5", {
    width: "12%",
    left: "58%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec6", {
    width: "13.6%",
    left: "70.2%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec7", { left: "84%", duration: 1});
});

specs3.addEventListener("mouseleave", () => {
  gsap.to(specs3, {
    width: "13.5%",
    // Adjust left to its original position
    duration: 1,
    height: "100%",
    top: "0%",
    left: "0%",
    zIndex: 99,
    borderRadius: "0",
    ease: "Expo.easeInOut",
  });

  gsap.to(displayimagecont3, {
    display: "initial",
    delay: 0.3,
    width: "10vw",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: "1",
  });

  gsap.to("#spec1", { width: "13.5%", duration: 1, ease: Expo.easeInOut });
  gsap.to("#spec2", {
    width: "13.5%",
    left: "14%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec3", {
    width: "13.5%",
    left: "28%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec4", {
    width: "13.5%",
    left: "42%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec5", {
    width: "13.5%",
    left: "56%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec6", {
    width: "13.5%",
    left: "70%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec7", {
    width: "13.5%",
    left: "84%",
    duration: 1,
    ease: Expo.easeInOut,
  });
});

const thirdclick = () => {
  gsap.to(specs3, {
    width: "120%",
    duration: 1,
    height: "105%",
    top: "-3%",
    left: "-10%",
    ease: "Expo.easeInOut",
    borderRadius: "10px",
    zIndex: 9999,
  });

  gsap.to(displayimagecont3, {
    display: "none",
    opacity: ".8",
    // delay: -0.3,
    // duration: 1,
    ease: "Power.out",
  });

  setTimeout(() => {
    gsap.to(aboutdeccontainer3, {
      display: "flex",
    //   duration: 0.2,
    });
  }, 680);

};

specs2.addEventListener("mouseleave", () => {
  gsap.to(aboutdeccontainer3, {
    display: "none",
    duration:.7
  });
});









////////////////////////Fifth walaaaaaaaaaa/////////////////////////






var displayimagecont5 = document.querySelector(".displayimagecont5");
var aboutdeccontainer5 = document.querySelector(".aboutdeccontainer5");



specs5.addEventListener("mouseenter", () => {
  gsap.to(specs5, {
    width: "20%",
    left: "51%",
    duration: 1,
    zIndex: 9999,
    ease: "Expo.easeInOut",
  });

  gsap.to("#spec1", {
    width: "12.6%",
    duration: 1,
    delay: 0.2,
    ease: " Expo.easeInOut",
  });
  gsap.to("#spec2", {
    width: "11.6%",
    left: "13%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec3", {
    width: "12.6%",
    left: "25%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec4", {
    width: "12.8%",
    left: "38%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  // gsap.to("#spec5", { width:"12%", left: "58%", duration: 1, ease: Expo.easeInOut });
  gsap.to("#spec6", {
    width: "13.4%",
    left: "71.1%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec7", { left: "84.6%", duration: 1, ease: Expo.easeInOut });
});

specs5.addEventListener("mouseleave", () => {
  gsap.to(specs5, {
    width: "13.5%",
    // Adjust left to its original position
    duration: 1,
    height: "100%",
    top: "0%",
    left: "0%",
    zIndex: 99,
    borderRadius: "0px",
    ease: "Expo.easeInOut",
  });


  
  gsap.to(displayimagecont5, {
    display: "initial",
    delay: 0.3,
    width: "10vw",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: "1",
  });



  gsap.to("#spec1", { width: "13.5%", duration: 1, ease: Expo.easeInOut });
  gsap.to("#spec2", {
    width: "13.5%",
    left: "14%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec3", {
    width: "13.5%",
    left: "28%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec4", {
    width: "13.5%",
    left: "42%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec5", {
    width: "13.5%",
    left: "56%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec6", {
    width: "13.5%",
    left: "70%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec7", {
    width: "13.5%",
    left: "84%",
    duration: 1,
    ease: Expo.easeInOut,
  });
});

const fifthclick = () => {
  gsap.to(specs5, {
    width: "120%",
    duration: 1,
    height: "105%",
    top: "-3%",
    left: "-10%",
    borderRadius: "10px",
    zIndex: 9999,
    ease:"Expo.easeInOut"
  });

  gsap.to(displayimagecont5, {
    display: "none",
    opacity: ".8",
    delay: -0.2,
    duration: .6,
    ease: "Power.out",
  });

  setTimeout(() => {
    gsap.to(aboutdeccontainer5, {
      display: "flex",
      duration: 0.8,
    });
  }, 680);

};

specs5.addEventListener("mouseleave", () => {
  gsap.to(aboutdeccontainer5, {
    display: "none",
    // duration:
  });
});



////////////////////////////////  Sixth walaaa  /////////////////





var displayimagecont6 = document.querySelector(".displayimagecont6");
var aboutdeccontainer6 = document.querySelector(".aboutdeccontainer6");






specs6.addEventListener("mouseenter", () => {
  gsap.to(specs6, {
    width: "20%",
    left: "64.5%",
    duration: 1,
    zIndex: 9999,
    ease: "Expo.easeInOut",
  });

  gsap.to("#spec1", {
    width: "12.6%",
    duration: 1,
    delay: 0.2,
    ease: " Expo.easeInOut",
  });
  gsap.to("#spec2", {
    width: "11.6%",
    left: "13%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec3", {
    width: "12.6%",
    left: "25%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec4", {
    width: "13%",
    left: "38%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec5", {
    width: "13%",
    left: "51.3%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec7", { left: "84.6%", duration: 1, ease: Expo.easeInOut });
});

specs6.addEventListener("mouseleave", () => {
  gsap.to(specs6, {
    width: "13.5%",
    // Adjust left to its original position
    duration: 1,
    height: "100%",
    top: "0%",
    left: "0%",
    zIndex: 99,
    borderRadius: "0",
    ease: "Expo.easeInOut",
  });


  
  
  gsap.to(displayimagecont6, {
    display: "initial",
    delay: 0.3,
    width: "10vw",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: "1",
  });


  gsap.to("#spec1", { width: "13.5%", duration: 1, ease: Expo.easeInOut });
  gsap.to("#spec2", {
    width: "13.5%",
    left: "14%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec3", {
    width: "13.5%",
    left: "28%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec4", {
    width: "13.5%",
    left: "42%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec5", {
    width: "13.5%",
    left: "56%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec6", {
    width: "13.5%",
    left: "70%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec7", {
    width: "13.5%",
    left: "84%",
    duration: 1,
    ease: Expo.easeInOut,
  });
});

const sixthclick = () => {
  gsap.to(specs6, {
    width: "120%",
    duration: 1,
    height: "105%",
    top: "-3%",
    left: "-10%",
    ease: "Expo.easeInOut",
    borderRadius: "10px",
    zIndex: 9999,
  });

  gsap.to(displayimagecont6, {
    display: "none",
    opacity: ".8",
    delay: -0.6,
    duration: 1,
    ease: "Power.out",
  });

  setTimeout(() => {
    gsap.to(aboutdeccontainer6, {
      display: "flex",
      duration: 0.8,
    });
  }, 680);

};

specs2.addEventListener("mouseleave", () => {
  gsap.to(aboutdeccontainer6, {
    display: "none",
    // duration:
  });
});





////////////////////////seventh Walaaaaaaaa////////////////////////////////////



var displayimagecont7 = document.querySelector(".displayimagecont7");
var aboutdeccontainer7 = document.querySelector(".aboutdeccontainer7");





specs7.addEventListener("mouseenter", () => {
  gsap.to(specs7, {
    width: "20%",
    left: "78%",
    duration: 1,
    zIndex: 9999,
    ease: "Expo.easeInOut",
  });

  gsap.to("#spec1", {
    width: "12.6%",
    duration: 1,
    delay: 0.2,
    ease: " Expo.easeInOut",
  });
  gsap.to("#spec2", {
    width: "11.6%",
    left: "13%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec3", {
    width: "12.6%",
    left: "25%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec4", {
    width: "13%",
    left: "38%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec5", {
    width: "13.4%",
    left: "51.3%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec6", {
    width: "12.8%",
    left: "65%",
    duration: 1,
    ease: Expo.easeInOut,
  });
});

specs7.addEventListener("mouseleave", () => {
  gsap.to(specs7, {
    width: "13.5%",
    // Adjust left to its original position
    duration: 1,
    height: "100%",
    top: "0%",
    left: "0%",
    zIndex: 99,
    borderRadius:"0",
    ease: "Expo.easeInOut",
  });

  
  gsap.to(displayimagecont7, {
    display: "initial",
    delay: 0.3,
    width: "10vw",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: "1",
  });


  gsap.to("#spec1", { width: "13.5%", duration: 1, ease: Expo.easeInOut });
  gsap.to("#spec2", {
    width: "13.5%",
    left: "14%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec3", {
    width: "13.5%",
    left: "28%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec4", {
    width: "13.5%",
    left: "42%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec5", {
    width: "13.5%",
    left: "56%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec6", {
    width: "13.5%",
    left: "70%",
    duration: 1,
    ease: Expo.easeInOut,
  });
  gsap.to("#spec7", {
    width: "13.5%",
    left: "84%",
    duration: 1,
    ease: Expo.easeInOut,
  });
});

const sevenclick = () => {
  gsap.to(specs7, {
    width: "120%",
    duration: 1,
    height: "105%",
    top: "-3%",
    left: "-10%",
    ease: "Expo.easeInOut",
    borderRadius: "10px",
    zIndex: 9999,
  });



gsap.to(displayimagecont7, {
  display: "none",
  opacity: ".8",
//   delay: -0.6,
//   duration: 1,
  ease: "Power.out",
});

setTimeout(() => {
  gsap.to(aboutdeccontainer7, {
    display: "flex",
    duration: 0.8,
  });
}, 680);

};

specs7.addEventListener("mouseleave", () => {
gsap.to(aboutdeccontainer7, {
  display: "none",
  // duration:
});
});
