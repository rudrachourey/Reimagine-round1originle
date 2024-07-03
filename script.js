function loco() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  
  loco();
  
  
  gsap.to('#loader',{
    duration:3,
    onStart:function(){
      var loader= document.querySelector("#loader");
    var text =  document.querySelector(".text");
    
    setTimeout(function(){
        loader.style.display = "none";
    },3800)
    var timer = 0;
    setInterval(function(){
      if(timer <=   100){
        text.innerHTML = timer ++;
      }
    },22)
         }
    
    
  })
  
  
  function forDescramble(){
    $(document).ready(function() {
      var $scramble = $(".scramble");
      $scramble.scramble(3000, 20, "alphabet", true);
    });
  }
  
  
  forDescramble();
   
  
  
  
  
  function circal() {
    var main = document.querySelector("#main");
    var circale = document.querySelector(".circale");
    var about = document.querySelector(".aboutcontainer");
    main.addEventListener("mousemove", function (dets) {
      gsap.to(circale, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.4,
      });
    });
  
    about.addEventListener("mouseenter", function () {
      circale.innerHTML = "CLICK";
      circale.style.backgroundColor = "rgba(255, 255, 255, 0.475)";
      circale.style.color = "white";
      gsap.to(".circale", {
        scale: 5,
        // backgroundColor: "#ffffff70",
      });
    });
    about.addEventListener("mouseleave", function () {
      circale.innerHTML = "";
      gsap.to(".circale", {
        scale: 1,
        backgroundColor: "white",
      });
    });
  
  
    about.addEventListener("click",()=>{
      setTimeout(() => {
        circale.innerHTML = `<span> MOVE </span> </br> <p>Aside</p> ` ;
      }, 600);(()=>{
      })
    })
  
  }
  
  
  var tl = gsap.timeline({
    repeat: -1,
  });
  tl.to(
    ".imgcontainer",
    {
      ease: Expo.easeInOut,
      width: "100%",
      stagger: 4,
      duration: 1,
    },
    "a"
  )
  
    .to(
      ".text h1",
      {
        ease: Expo.easeInOut,
        stagger: 4,
        top: "-7px",
        duration: 1,
      },
      "a"
    )
  
    .to(
      ".text h1",
      {
        delay: 2.5,
        ease: Expo.easeInOut,
        stagger: 4,
        top: "-120%",
        duration: 1.5,
      },
      "a"
    );
  
  gsap.from(" #top", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#top",
      start: "top 90%",
      // markers:true,
      scrub: true,
    },
    x: -900,
  });
  
  gsap.from("#middle", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#middle",
      start: "top 100%",
      // markers:true,
      scrub: true,
    },
    x: 1200,
    // width:0
  });
  
  gsap.to("#big-div", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#big-div",
      start: "top -20%",
      // markers:true,
      scrub: true,
      // pin: true
    },
    height: "155%",
    width: "100%",
    rotate: 30,
  });
  
  gsap.to("#directimg", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#directimg",
      start: "top -20%",
      // markers:true,
      scrub: 4,
      // pin: true
    },
    width: "70%",
    height: "70%",
  });
  
  gsap.from("#bottom", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#bottom",
      start: "top 250%",
      // markers:true,
      scrub: true,
    },
    x: -800,
    // width: 0
  });
  
  gsap.to(".tilte-wraper", {
    scrollTrigger: {
      scroller: "#main",
      trigger: ".tilte-wraper",
      start: "top 0%",
      end: "bottom -100%",
      // markers:true,
      scrub: true,
      pin: true,
    },
    // y:200
  });
  
  var bottomnav = document.querySelector(".bottomnav #button");
  
  bottomnav.addEventListener("mouseenter", () => {
    gsap.to(".textcontainer", {
      y: "-18%",
      duration: 1,
    });
  });
  
  bottomnav.addEventListener("mouseleave", () => {
    gsap.to(".textcontainer", {
      y: "0%",
      duration: 1,
    });
  });
  
  function canvas() {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
  
    function files(index) {
      var data = `
  ./tmp/0001.png
  ./tmp/0002.png
  ./tmp/0003.png
  ./tmp/0004.png
  ./tmp/0005.png
  ./tmp/0006.png
  ./tmp/0007.png
  ./tmp/0008.png
  ./tmp/0009.png
  ./tmp/0010.png
  ./tmp/0011.png
  ./tmp/0012.png
  ./tmp/0013.png
  ./tmp/0014.png
  ./tmp/0015.png
  ./tmp/0016.png
  ./tmp/0017.png
  ./tmp/0018.png
  ./tmp/0019.png
  ./tmp/0020.png
  ./tmp/0021.png
  ./tmp/0022.png
  ./tmp/0023.png
  ./tmp/0024.png
  ./tmp/0025.png
  ./tmp/0026.png
  ./tmp/0027.png
  ./tmp/0028.png
  ./tmp/0029.png
  ./tmp/0030.png
  ./tmp/0031.png
  ./tmp/0032.png
  ./tmp/0033.png
  ./tmp/0034.png
  ./tmp/0035.png
  ./tmp/0036.png
  ./tmp/0037.png
  ./tmp/0038.png
  ./tmp/0039.png
  ./tmp/0040.png
  ./tmp/0041.png
  ./tmp/0042.png
  ./tmp/0043.png
  ./tmp/0044.png
  ./tmp/0045.png
  ./tmp/0046.png
  ./tmp/0047.png
  ./tmp/0048.png
  ./tmp/0049.png
  ./tmp/0050.png
  ./tmp/0051.png
  ./tmp/0052.png
  ./tmp/0053.png
  ./tmp/0054.png
  ./tmp/0055.png
  ./tmp/0056.png
  ./tmp/0057.png
  ./tmp/0058.png
  ./tmp/0059.png
  ./tmp/0060.png
  ./tmp/0061.png
  ./tmp/0062.png
  ./tmp/0063.png
  ./tmp/0064.png
  ./tmp/0065.png
  ./tmp/0066.png
  ./tmp/0067.png
  ./tmp/0068.png
  ./tmp/0069.png
  ./tmp/0070.png
  ./tmp/0071.png
  ./tmp/0072.png
  ./tmp/0073.png
  ./tmp/0074.png
  ./tmp/0075.png
  ./tmp/0076.png
  ./tmp/0077.png
  ./tmp/0078.png
  ./tmp/0079.png
  ./tmp/0080.png
  ./tmp/0081.png
  ./tmp/0082.png
  ./tmp/0083.png
  ./tmp/0084.png
  ./tmp/0085.png
  ./tmp/0086.png
  ./tmp/0087.png
  ./tmp/0088.png
  ./tmp/0089.png
  ./tmp/0090.png
  ./tmp/0091.png
  ./tmp/0092.png
  ./tmp/0093.png
  ./tmp/0094.png
  ./tmp/0095.png
  ./tmp/0096.png
  ./tmp/0097.png
  ./tmp/0098.png
  ./tmp/0099.png
  ./tmp/0100.png
  ./tmp/0101.png
  ./tmp/0102.png
  ./tmp/0103.png
  ./tmp/0104.png
  ./tmp/0105.png
  ./tmp/0106.png
  ./tmp/0107.png
  ./tmp/0108.png
  ./tmp/0109.png
  ./tmp/0110.png
  ./tmp/0111.png
  ./tmp/0112.png
  ./tmp/0113.png
  ./tmp/0114.png
  ./tmp/0115.png
  ./tmp/0116.png
  ./tmp/0117.png
  ./tmp/0118.png
  ./tmp/0119.png
  ./tmp/0120.png
  ./tmp/0121.png
  ./tmp/0122.png
  ./tmp/0123.png
  ./tmp/0124.png
  ./tmp/0125.png
  ./tmp/0126.png
  ./tmp/0127.png
  ./tmp/0128.png
  ./tmp/0129.png
  ./tmp/0130.png
  ./tmp/0131.png
  ./tmp/0132.png
  ./tmp/0133.png
  ./tmp/0134.png
  ./tmp/0135.png
  ./tmp/0136.png
  ./tmp/0137.png
  ./tmp/0138.png
  ./tmp/0139.png
  ./tmp/0140.png
  ./tmp/0141.png
  ./tmp/0142.png
  ./tmp/0143.png
  ./tmp/0144.png
  ./tmp/0145.png
  ./tmp/0146.png
  ./tmp/0147.png
  ./tmp/0148.png
  ./tmp/0149.png
  ./tmp/0150.png
  ./tmp/0151.png
  ./tmp/0152.png
  ./tmp/0153.png
  ./tmp/0154.png
  ./tmp/0155.png
  ./tmp/0156.png
  ./tmp/0157.png
  ./tmp/0158.png
  ./tmp/0159.png
  ./tmp/0160.png
  ./tmp/0161.png
  ./tmp/0162.png
  ./tmp/0163.png
  ./tmp/0164.png
  ./tmp/0165.png
  ./tmp/0166.png
  ./tmp/0167.png
  ./tmp/0168.png
  ./tmp/0169.png
  ./tmp/0170.png
  ./tmp/0171.png
  ./tmp/0172.png
  ./tmp/0173.png
  ./tmp/0174.png
  ./tmp/0175.png
  ./tmp/0176.png
  ./tmp/0177.png
  ./tmp/0178.png
  ./tmp/0179.png
  ./tmp/0180.png
  ./tmp/0181.png
  ./tmp/0182.png
  ./tmp/0183.png
  ./tmp/0184.png
  ./tmp/0185.png
  ./tmp/0186.png
  ./tmp/0187.png
  ./tmp/0188.png
  ./tmp/0189.png
  ./tmp/0190.png
  ./tmp/0191.png
  ./tmp/0192.png
  ./tmp/0193.png
  ./tmp/0194.png
  ./tmp/0195.png
  ./tmp/0196.png
  ./tmp/0197.png
  ./tmp/0198.png
  ./tmp/0199.png
  ./tmp/0200.png
  ./tmp/0201.png
  ./tmp/0202.png
  ./tmp/0203.png
  ./tmp/0204.png
  ./tmp/0205.png
  ./tmp/0206.png
  ./tmp/0207.png
  ./tmp/0208.png
  ./tmp/0209.png
  ./tmp/0210.png
  ./tmp/0211.png
  ./tmp/0212.png
  ./tmp/0213.png
  ./tmp/0214.png
  ./tmp/0215.png
  ./tmp/0216.png
  ./tmp/0217.png
  ./tmp/0218.png
  ./tmp/0219.png
  ./tmp/0220.png
  ./tmp/0221.png
  ./tmp/0222.png
  ./tmp/0223.png
  ./tmp/0224.png
  ./tmp/0225.png
  ./tmp/0226.png
  ./tmp/0227.png
  ./tmp/0228.png
  ./tmp/0229.png
  ./tmp/0230.png
  ./tmp/0231.png
  ./tmp/0232.png
  ./tmp/0233.png
  ./tmp/0234.png
  ./tmp/0235.png
  ./tmp/0236.png
  ./tmp/0237.png
  ./tmp/0238.png
  ./tmp/0239.png
  ./tmp/0240.png
  ./tmp/0241.png
  ./tmp/0242.png
  ./tmp/0243.png
  ./tmp/0244.png
  ./tmp/0245.png
  ./tmp/0246.png
  ./tmp/0247.png
  ./tmp/0248.png
  ./tmp/0249.png
  ./tmp/0250.png
  ./tmp/0251.png
  ./tmp/0252.png
  ./tmp/0253.png
  ./tmp/0254.png
  ./tmp/0255.png
  ./tmp/0256.png
  ./tmp/0257.png
  ./tmp/0258.png
  ./tmp/0259.png
  ./tmp/0260.png
  ./tmp/0261.png
  ./tmp/0262.png
  ./tmp/0263.png
  ./tmp/0264.png
  ./tmp/0265.png
  ./tmp/0266.png
  ./tmp/0267.png
  ./tmp/0268.png
  ./tmp/0269.png
  ./tmp/0270.png
  ./tmp/0271.png
  ./tmp/0272.png
  ./tmp/0273.png
  ./tmp/0274.png
  ./tmp/0275.png
  ./tmp/0276.png
  ./tmp/0277.png
  ./tmp/0278.png
  ./tmp/0279.png
  ./tmp/0280.png
  ./tmp/0281.png
  ./tmp/0282.png
  ./tmp/0283.png
  ./tmp/0284.png
  ./tmp/0285.png
  ./tmp/0286.png
  ./tmp/0287.png
  ./tmp/0288.png
  ./tmp/0289.png
  ./tmp/0290.png
  ./tmp/0291.png
  ./tmp/0292.png
  ./tmp/0293.png
  ./tmp/0294.png
  ./tmp/0295.png
  ./tmp/0296.png
  ./tmp/0297.png
  ./tmp/0298.png
  ./tmp/0299.png
  ./tmp/0300.png
  ./tmp/0301.png
  ./tmp/0302.png
  ./tmp/0303.png
  ./tmp/0304.png
  ./tmp/0305.png
  ./tmp/0306.png
  ./tmp/0307.png
  ./tmp/0308.png
  ./tmp/0309.png
  ./tmp/0310.png
  ./tmp/0311.png
  ./tmp/0312.png
  ./tmp/0313.png
  ./tmp/0314.png
  ./tmp/0315.png
  ./tmp/0316.png
  ./tmp/0317.png
  ./tmp/0318.png
  ./tmp/0319.png
  ./tmp/0320.png
  ./tmp/0321.png
  ./tmp/0322.png
  ./tmp/0323.png
  ./tmp/0324.png
  ./tmp/0325.png
  ./tmp/0326.png
  ./tmp/0327.png
  ./tmp/0328.png
  ./tmp/0329.png
  ./tmp/0330.png
  ./tmp/0331.png
  ./tmp/0332.png
  ./tmp/0333.png
  ./tmp/0334.png
  ./tmp/0335.png
  ./tmp/0336.png
  ./tmp/0337.png
  ./tmp/0338.png
  ./tmp/0339.png
  ./tmp/0340.png
  ./tmp/0341.png
  ./tmp/0342.png
  ./tmp/0343.png
  ./tmp/0344.png
  ./tmp/0345.png
  ./tmp/0346.png
  ./tmp/0347.png
  ./tmp/0348.png
  ./tmp/0349.png
  ./tmp/0350.png
  ./tmp/0351.png
  ./tmp/0352.png
  ./tmp/0353.png
  ./tmp/0354.png
  ./tmp/0355.png
  ./tmp/0356.png
  ./tmp/0357.png
  ./tmp/0358.png
  ./tmp/0359.png
  ./tmp/0360.png
  ./tmp/0361.png
  ./tmp/0362.png
  ./tmp/0363.png
  ./tmp/0364.png
  ./tmp/0365.png
  ./tmp/0366.png
  ./tmp/0367.png
  ./tmp/0368.png
  ./tmp/0369.png
  ./tmp/0370.png
  ./tmp/0371.png
  ./tmp/0372.png
  ./tmp/0373.png
  ./tmp/0374.png
  ./tmp/0375.png
  ./tmp/0376.png
  ./tmp/0377.png
  ./tmp/0378.png
  ./tmp/0379.png
  ./tmp/0380.png
  ./tmp/0381.png
  ./tmp/0382.png
  ./tmp/0383.png
  ./tmp/0384.png
  ./tmp/0385.png
  ./tmp/0386.png
  ./tmp/0387.png
  ./tmp/0388.png
  ./tmp/0389.png
  ./tmp/0390.png
  ./tmp/0391.png
  ./tmp/0392.png
  ./tmp/0393.png
  ./tmp/0394.png
  ./tmp/0395.png
  ./tmp/0396.png
  ./tmp/0397.png
  ./tmp/0398.png
  ./tmp/0399.png
  ./tmp/0400.png
  ./tmp/0401.png
  ./tmp/0402.png
  ./tmp/0403.png
  ./tmp/0404.png
  ./tmp/0405.png
  ./tmp/0406.png
  ./tmp/0407.png
  ./tmp/0408.png
  ./tmp/0409.png
  ./tmp/0410.png
  ./tmp/0411.png
  ./tmp/0412.png
  ./tmp/0413.png
  ./tmp/0414.png
  ./tmp/0415.png
  ./tmp/0416.png
  ./tmp/0417.png
  ./tmp/0418.png
  ./tmp/0419.png
  ./tmp/0420.png
  ./tmp/0421.png
  ./tmp/0422.png
  ./tmp/0423.png
  ./tmp/0424.png
  ./tmp/0425.png
  ./tmp/0426.png
  ./tmp/0427.png
  ./tmp/0428.png
  ./tmp/0429.png
  ./tmp/0430.png
  ./tmp/0431.png
  ./tmp/0432.png
  ./tmp/0433.png
  ./tmp/0434.png
  ./tmp/0435.png
  ./tmp/0436.png
  ./tmp/0437.png
  ./tmp/0438.png
  ./tmp/0439.png
  ./tmp/0440.png
  ./tmp/0441.png
  ./tmp/0442.png
  ./tmp/0443.png
  ./tmp/0444.png
  ./tmp/0445.png
  ./tmp/0446.png
  ./tmp/0447.png
  ./tmp/0448.png
  ./tmp/0449.png
  ./tmp/0450.png
  ./tmp/0451.png
  ./tmp/0452.png
  ./tmp/0453.png
  ./tmp/0454.png
  ./tmp/0455.png
  ./tmp/0456.png
  ./tmp/0457.png
  ./tmp/0458.png
  ./tmp/0459.png
  ./tmp/0460.png
  ./tmp/0461.png
  ./tmp/0462.png
  ./tmp/0463.png
  ./tmp/0464.png
  ./tmp/0465.png
  ./tmp/0466.png
  ./tmp/0467.png
  ./tmp/0468.png
  ./tmp/0469.png
  ./tmp/0470.png
  ./tmp/0471.png
  ./tmp/0472.png
  ./tmp/0473.png
  ./tmp/0474.png
  ./tmp/0475.png
  ./tmp/0476.png
  ./tmp/0477.png
  ./tmp/0478.png
  ./tmp/0479.png
  ./tmp/0480.png
  ./tmp/0481.png
  ./tmp/0482.png
  ./tmp/0483.png
  ./tmp/0484.png
  ./tmp/0485.png
  ./tmp/0486.png
  ./tmp/0487.png
  ./tmp/0488.png
  ./tmp/0489.png
  ./tmp/0490.png
  ./tmp/0491.png
  ./tmp/0492.png
  ./tmp/0493.png
  ./tmp/0494.png
  ./tmp/0495.png
  ./tmp/0496.png
  ./tmp/0497.png
  ./tmp/0498.png
  ./tmp/0499.png
  ./tmp/0500.png
  ./tmp/0501.png
  ./tmp/0502.png
  ./tmp/0503.png
  ./tmp/0504.png
  ./tmp/0505.png
  ./tmp/0506.png
  ./tmp/0507.png
  ./tmp/0508.png
  ./tmp/0509.png
  ./tmp/0510.png
  ./tmp/0511.png
  ./tmp/0512.png
  ./tmp/0513.png
  ./tmp/0514.png
  ./tmp/0515.png
  ./tmp/0516.png
  ./tmp/0517.png
  ./tmp/0518.png
  ./tmp/0519.png
  ./tmp/0520.png
  ./tmp/0521.png
  ./tmp/0522.png
  ./tmp/0523.png
  ./tmp/0524.png
  ./tmp/0525.png
  ./tmp/0526.png
  ./tmp/0527.png
  ./tmp/0528.png
  ./tmp/0529.png
  ./tmp/0530.png
  ./tmp/0531.png
  ./tmp/0532.png
  ./tmp/0533.png
  ./tmp/0534.png
  ./tmp/0535.png
  ./tmp/0536.png
  ./tmp/0537.png
  ./tmp/0538.png
  ./tmp/0539.png
  ./tmp/0540.png
  ./tmp/0541.png
  ./tmp/0542.png
  ./tmp/0543.png
  ./tmp/0544.png
  ./tmp/0545.png
  ./tmp/0546.png
  ./tmp/0547.png
  ./tmp/0548.png
  ./tmp/0549.png
  ./tmp/0550.png
  ./tmp/0551.png
  ./tmp/0552.png
  ./tmp/0553.png
  ./tmp/0554.png
  ./tmp/0555.png
  ./tmp/0556.png
  ./tmp/0557.png
  ./tmp/0558.png
  ./tmp/0559.png
  ./tmp/0560.png
  ./tmp/0561.png
  ./tmp/0562.png
  ./tmp/0563.png
  ./tmp/0564.png
  ./tmp/0565.png
  ./tmp/0566.png
  ./tmp/0567.png
  ./tmp/0568.png
  ./tmp/0569.png
  ./tmp/0570.png
  ./tmp/0571.png
  ./tmp/0572.png
  ./tmp/0573.png
  ./tmp/0574.png
  ./tmp/0575.png
  ./tmp/0576.png
  ./tmp/0577.png
  ./tmp/0578.png
  ./tmp/0579.png
  ./tmp/0580.png
  ./tmp/0581.png
  ./tmp/0582.png
  ./tmp/0583.png
  ./tmp/0584.png
  ./tmp/0585.png
  ./tmp/0586.png
  ./tmp/0587.png
  ./tmp/0588.png
  ./tmp/0589.png
  ./tmp/0590.png
  ./tmp/0591.png
  ./tmp/0592.png
  ./tmp/0593.png
  ./tmp/0594.png
  ./tmp/0595.png
  ./tmp/0596.png
  ./tmp/0597.png
  ./tmp/0598.png
  ./tmp/0599.png
  ./tmp/0600.png
  ./tmp/0601.png
  ./tmp/0602.png
  ./tmp/0603.png
  ./tmp/0604.png
  ./tmp/0605.png
  ./tmp/0606.png
  ./tmp/0607.png
  ./tmp/0608.png
  ./tmp/0609.png
  ./tmp/0610.png
  ./tmp/0611.png
  ./tmp/0612.png
  ./tmp/0613.png
  ./tmp/0614.png
  ./tmp/0615.png
  ./tmp/0616.png
  ./tmp/0617.png
  ./tmp/0618.png
  ./tmp/0619.png
  ./tmp/0620.png
  ./tmp/0621.png
  ./tmp/0622.png
  ./tmp/0623.png
  ./tmp/0624.png
  ./tmp/0625.png
  ./tmp/0626.png
  ./tmp/0627.png
  ./tmp/0628.png
  ./tmp/0629.png
  ./tmp/0630.png
  ./tmp/0631.png
  ./tmp/0632.png
  ./tmp/0633.png
  ./tmp/0634.png
  ./tmp/0635.png
  ./tmp/0636.png
  ./tmp/0637.png
  ./tmp/0638.png
  ./tmp/0639.png
  ./tmp/0640.png
  ./tmp/0641.png
  ./tmp/0642.png
  ./tmp/0643.png
  ./tmp/0644.png
  ./tmp/0645.png
  ./tmp/0646.png
  ./tmp/0647.png
  ./tmp/0648.png
  ./tmp/0649.png
  ./tmp/0650.png
  ./tmp/0651.png
  ./tmp/0652.png
  ./tmp/0653.png
  ./tmp/0654.png
  ./tmp/0655.png
  ./tmp/0656.png
  ./tmp/0657.png
  ./tmp/0658.png
  ./tmp/0659.png
  ./tmp/0660.png
  ./tmp/0661.png
  ./tmp/0662.png
  ./tmp/0663.png
  ./tmp/0664.png
  ./tmp/0665.png
  ./tmp/0666.png
  ./tmp/0667.png
  ./tmp/0668.png
  ./tmp/0669.png
  ./tmp/0670.png
  ./tmp/0671.png
  ./tmp/0672.png
  ./tmp/0673.png
  ./tmp/0674.png
  ./tmp/0675.png
  ./tmp/0676.png
  ./tmp/0677.png
  ./tmp/0678.png
  ./tmp/0679.png
  ./tmp/0680.png
  ./tmp/0681.png
  ./tmp/0682.png
  ./tmp/0683.png
  ./tmp/0684.png
  ./tmp/0685.png
  ./tmp/0686.png
  ./tmp/0687.png
  ./tmp/0688.png
  ./tmp/0689.png
  ./tmp/0690.png
  ./tmp/0691.png
  ./tmp/0692.png
  ./tmp/0693.png
  ./tmp/0694.png
  ./tmp/0695.png
  ./tmp/0696.png
  ./tmp/0697.png
  ./tmp/0698.png
  ./tmp/0699.png
  ./tmp/0700.png
  ./tmp/0701.png
  ./tmp/0702.png
  ./tmp/0703.png
  ./tmp/0704.png
  ./tmp/0705.png
  ./tmp/0706.png
  ./tmp/0707.png
  ./tmp/0708.png
  ./tmp/0709.png
  ./tmp/0710.png
  ./tmp/0711.png
  ./tmp/0712.png
  ./tmp/0713.png
  ./tmp/0714.png
  ./tmp/0715.png
  ./tmp/0716.png
  ./tmp/0717.png
  ./tmp/0718.png
  ./tmp/0719.png
  ./tmp/0720.png
  ./tmp/0721.png
  ./tmp/0722.png
  ./tmp/0723.png
  ./tmp/0724.png
  ./tmp/0725.png
  ./tmp/0726.png
  ./tmp/0727.png
  ./tmp/0728.png
  ./tmp/0729.png
  ./tmp/0730.png
  ./tmp/0731.png
  ./tmp/0732.png
  ./tmp/0733.png
  ./tmp/0734.png
  ./tmp/0735.png
  ./tmp/0736.png
  ./tmp/0737.png
  ./tmp/0738.png
  ./tmp/0739.png
  ./tmp/0740.png
  ./tmp/0741.png
  ./tmp/0742.png
  ./tmp/0743.png
  ./tmp/0744.png
  ./tmp/0745.png
  ./tmp/0746.png
  ./tmp/0747.png
  ./tmp/0748.png
  ./tmp/0749.png
  ./tmp/0750.png
  ./tmp/0751.png
  ./tmp/0752.png
  ./tmp/0753.png
  ./tmp/0754.png
  ./tmp/0755.png
  ./tmp/0756.png
  ./tmp/0757.png
  ./tmp/0758.png
  ./tmp/0759.png
  ./tmp/0760.png
  ./tmp/0761.png
  ./tmp/0762.png
  ./tmp/0763.png
  ./tmp/0764.png
  ./tmp/0765.png
  ./tmp/0766.png
  ./tmp/0767.png
  ./tmp/0768.png
  ./tmp/0769.png
  ./tmp/0770.png
  ./tmp/0771.png
  ./tmp/0772.png
  ./tmp/0773.png
  ./tmp/0774.png
  ./tmp/0775.png
  ./tmp/0776.png
  ./tmp/0777.png
  ./tmp/0778.png
  ./tmp/0779.png
  ./tmp/0780.png
  ./tmp/0781.png
  ./tmp/0782.png
  ./tmp/0783.png
  ./tmp/0784.png
  ./tmp/0785.png
  ./tmp/0786.png
  ./tmp/0787.png
  ./tmp/0788.png
  ./tmp/0789.png
  ./tmp/0790.png
  ./tmp/0791.png
  ./tmp/0792.png
  ./tmp/0793.png
  ./tmp/0794.png
  ./tmp/0795.png
  ./tmp/0796.png
  ./tmp/0797.png
  ./tmp/0798.png
  ./tmp/0799.png
  ./tmp/0800.png
  ./tmp/0801.png
  ./tmp/0802.png
  ./tmp/0803.png
  ./tmp/0804.png
  ./tmp/0805.png
  ./tmp/0806.png
  ./tmp/0807.png
  ./tmp/0808.png
  ./tmp/0809.png
  ./tmp/0810.png
  ./tmp/0811.png
  ./tmp/0812.png
  ./tmp/0813.png
  ./tmp/0814.png
  ./tmp/0815.png
  ./tmp/0816.png
  ./tmp/0817.png
  ./tmp/0818.png
  ./tmp/0819.png
  ./tmp/0820.png
  ./tmp/0821.png
  ./tmp/0822.png
  ./tmp/0823.png
  ./tmp/0824.png
  ./tmp/0825.png
  ./tmp/0826.png
  ./tmp/0827.png
  ./tmp/0828.png
  ./tmp/0829.png
  ./tmp/0830.png
  ./tmp/0831.png
  ./tmp/0832.png
  ./tmp/0833.png
  ./tmp/0834.png
  ./tmp/0835.png
  ./tmp/0836.png
  ./tmp/0837.png
  ./tmp/0838.png
  ./tmp/0839.png
  ./tmp/0840.png
  ./tmp/0841.png
  ./tmp/0842.png
  ./tmp/0843.png
  ./tmp/0844.png
  ./tmp/0845.png
  ./tmp/0846.png
  ./tmp/0847.png
  ./tmp/0848.png
  ./tmp/0849.png
  ./tmp/0850.png
  ./tmp/0851.png
  ./tmp/0852.png
  ./tmp/0853.png
  ./tmp/0854.png
  ./tmp/0855.png
  ./tmp/0856.png
  ./tmp/0857.png
  ./tmp/0858.png
  ./tmp/0859.png
  ./tmp/0860.png
  ./tmp/0861.png
  ./tmp/0862.png
  ./tmp/0863.png
  ./tmp/0864.png
  ./tmp/0865.png
  ./tmp/0866.png
  ./tmp/0867.png
  ./tmp/0868.png
  ./tmp/0869.png
  ./tmp/0870.png
  ./tmp/0871.png
  ./tmp/0872.png
  ./tmp/0873.png
  ./tmp/0874.png
  ./tmp/0875.png
  ./tmp/0876.png
  ./tmp/0877.png
  ./tmp/0878.png
  ./tmp/0879.png
  ./tmp/0880.png
  ./tmp/0881.png
  ./tmp/0882.png
  ./tmp/0883.png
  ./tmp/0884.png
  ./tmp/0885.png
  ./tmp/0886.png
  ./tmp/0887.png
  ./tmp/0888.png
  ./tmp/0889.png
  ./tmp/0890.png
  ./tmp/0891.png
  ./tmp/0892.png
  ./tmp/0893.png
  ./tmp/0894.png
  ./tmp/0895.png
  ./tmp/0896.png
  ./tmp/0897.png
  ./tmp/0898.png
  ./tmp/0899.png
  ./tmp/0900.png
  ./tmp/0901.png
  ./tmp/0902.png
  ./tmp/0903.png
  ./tmp/0904.png
  ./tmp/0905.png
  ./tmp/0906.png
  ./tmp/0907.png
  ./tmp/0908.png
  ./tmp/0909.png
  ./tmp/0910.png
  ./tmp/0911.png
  ./tmp/0912.png
  ./tmp/0913.png
  ./tmp/0914.png
  ./tmp/0915.png
  ./tmp/0916.png
  ./tmp/0917.png
  ./tmp/0918.png
  ./tmp/0919.png
  ./tmp/0920.png
  ./tmp/0921.png
  ./tmp/0922.png
  ./tmp/0923.png
  ./tmp/0924.png
  ./tmp/0925.png
  ./tmp/0926.png
  ./tmp/0927.png
  ./tmp/0928.png
  ./tmp/0929.png
  ./tmp/0930.png
  ./tmp/0931.png
  ./tmp/0932.png
  ./tmp/0933.png
  ./tmp/0934.png
  ./tmp/0935.png
  ./tmp/0936.png
  ./tmp/0937.png
  ./tmp/0938.png
  ./tmp/0939.png
  ./tmp/0940.png
  ./tmp/0941.png
  ./tmp/0942.png
  ./tmp/0943.png
  ./tmp/0944.png
  ./tmp/0945.png
  ./tmp/0946.png
  ./tmp/0947.png
  ./tmp/0948.png
  ./tmp/0949.png
  ./tmp/0950.png
  ./tmp/0951.png
  ./tmp/0952.png
  ./tmp/0953.png
  ./tmp/0954.png
  ./tmp/0955.png
  ./tmp/0956.png
  ./tmp/0957.png
  ./tmp/0958.png
  ./tmp/0959.png
  ./tmp/0960.png
  ./tmp/0961.png
  ./tmp/0962.png
  ./tmp/0963.png
  ./tmp/0964.png
  ./tmp/0965.png
  ./tmp/0966.png
  ./tmp/0967.png
  ./tmp/0968.png
  ./tmp/0969.png
  ./tmp/0970.png
  ./tmp/0971.png
  ./tmp/0972.png
  ./tmp/0973.png
  ./tmp/0974.png
  ./tmp/0975.png
  ./tmp/0976.png
  ./tmp/0977.png
  ./tmp/0978.png
     `;
      return data.split("\n")[index];
    }
  
    const frameCount = 978;
  
    const images = [];
    const imageSeq = {
      frame: 1,
    };
  
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
  
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 0.15,
        trigger: `#page3>canvas`,
        start: `top top`,
        end: `300% top`,
        scroller: `#main`,
      },
      onUpdate: render,
    });
  
    images[1].onload = render;
  
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }
  
    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
  
    ScrollTrigger.create({
      trigger: "#page3>canvas",
      pin: true,
      scroller: `#main`,
      start: `top top`,
      end: `280% top`,
      // markers: true
    });
  
    gsap.to("#page3", {
      scrollTrigger: {
        trigger: `#page3`,
        start: `top top`,
        end: `280%`,
        pin: true,
        scroller: `#page3`,
        // markers: true
      },
    });
  }
  
  
  
  
  
  
  
  
  canvas();
  circal();
  
  