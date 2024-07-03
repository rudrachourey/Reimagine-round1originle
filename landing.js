function textbreak() {
    var clutter = "";
    document
      .querySelector("#parent #text h1")
      .textContent.split("")
      .forEach(function (e) {
        clutter += `<span class="a">${e}</span>`;
      });
    document.querySelector("#parent #text h1").innerHTML = clutter;
  
    var clutter = "";
    document
      .querySelector("#parent #text h4")
      .textContent.split("")
      .forEach(function (e) {
        clutter += `<span class="b">${e}</span>`;
      });
    document.querySelector("#parent #text h4").innerHTML = clutter;
  
  
  }
  textbreak();
  
  function page1() {
    var tl = gsap.timeline();
  
    tl.from(
      "#text h1 .a",
      {
        x: "-100",
        duration: 0.8,
        delay: 3.8,
        opacity:0,
        stagger: 0.05,
        scrub: 2  ,
      },
      "a"
    );
  
    tl.from(
      "#text h4 .b",
      {
        x: "-100",
        duration: 0.8,
        delay: 3.8,
        opacity:0,
        stagger: 0.05,
        scrub: 1,
      },
      "a"
    );
    tl.from("#page1info h6",{
      x: "-100",
      duration: 1,
      delay: 3.8,
      opacity:0,
      stagger: 0.05,
      scrub: 1,
    },
    "a")
    tl.from("#page1button",{
      x: "-100",
      duration: 1,
      delay: 3.8,
      opacity:0,
      stagger: 0.05,
      scrub: 1,
    },"a")
    tl.from("#carspecs .cars",{
      x: "-300",
      duration: 1,
      delay: 3.8,
      opacity:0,
      stagger: 0.05,
      scrub: 1,
    },"a")
  }
  page1();
  
  
  
  function swiperjs() {
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  swiperjs();
  
  var timeout;
  
  function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);
  
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
  
      circleMouseFollower(xscale, yscale);
  
      timeout = setTimeout(function () {
        document.querySelector(
          "#circale"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
    });
  }
  circleChaptaKaro()
  
  
  function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector(
        "#circale"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }
  circleMouseFollower();
  
  
  
  var imgcover = document.querySelectorAll('.imgcover')
  
  
  imgcover.forEach(imgcover=>{
    gsap.to(imgcover,{
      scrollTrigger:{
        trigger:imgcover,
        scroller:"#main",
        start: "top 60%",
        // markers: true,
        // scrub: true
      },
      // y: 350,
      height:0,
      duration:1.3  ,
      ease:Expo.easeInOut
      
    })
    
  })
  