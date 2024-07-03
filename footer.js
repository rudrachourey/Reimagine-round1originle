function animateFooterText() {
    let clutter = "";
    document.querySelector(".footer-inside6 h1").textContent.split("").forEach(function (e) {
        clutter += `<span class="ab">${e}</span>`;
    });
    document.querySelector(".footer-inside6 h1").innerHTML = clutter;
  }
  
  function animateFooter() {
    gsap.from(".footer-inside6 h1 ", {
        scrollTrigger: {
            scroller: "#main",
            trigger: ".footer-inside6 h1 .ab",
            start: "980% 15%",
            // markers:true,
            end: "995% 15%",
            // pim:true,
            scrub: 5,
        },
       y:-380,
       stagger:1,
       duration:2
    });
}

  // Initialize everything
  
  
  
  animateFooter();
  animateFooterText();