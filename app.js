$(document).ready(() => {
  const seTabs = document.querySelectorAll('[data-switcher]');
  const catTabs = document.querySelectorAll('[data-cat]');
  let prevPage = "1";

  seTabs.forEach((seChoice) => {
      const pageId = seChoice.dataset.tab;

      seChoice.addEventListener("click", () => {
          if (prevPage != pageId) {
              document.querySelector(".tabs .tab.is-active").classList.remove("is-active");
              seChoice.classList.add("is-active");

              prevPage = pageId;
              flipSE(pageId);
          }
      });
  });

  catTabs.forEach((catChoice) => {
      const catId = catChoice.dataset.etab;

      catChoice.addEventListener("click", () => {
          document.querySelector(".experience-tabs .etab.is-active").classList.remove("is-active");
          catChoice.classList.add("is-active");

          switchCategory(catId);
      });
  });

  const menuBtn = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-nav");
  const body = document.querySelector("body");

  const blurredDrop = document.querySelector(".blurred-drop");

  const navLinks = document.querySelectorAll(".mobile-nav .link");
  
  menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("is-active");
      mobileMenu.classList.toggle("is-active");
      body.classList.toggle("no-scroll");

      blurredDrop.classList.toggle("is-active");
      blurredDrop.style.animation = 'blurIt .33s ease forwards';

      navLinks.forEach((link, index) => {
          let anim = link.style.animation;

          if (anim && anim.split(" ").at(-1) === "navLinkSlideIn") {
              link.style.animation = 'navLinkSlideOut .1s ease forwards';
          } else {
              link.style.animation = `navLinkSlideIn .33s ease-in-out forwards ${index / 10}s`;
          }
      });
  });

  blurredDrop.addEventListener("click", () => {
      menuBtn.click();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.click();
    });
  });

  const arrows = document.querySelector(".arrows");
  arrows.addEventListener("click", () => {
    document.querySelector("#about").scrollIntoView();
  });

  const projectSources = [
    "https://github.com/zeekcollins/See-N-Say",
    "https://spotifyapi-app.herokuapp.com/",
    "https://zeekcollins.github.io/SimonGameChallenge/",
    "https://github.com/zeekcollins/Minesweeper"
  ];
  const bigCards = document.querySelectorAll(".tablet");
  const extraCards = document.querySelectorAll(".extras");

  bigCards.forEach((card, i) => {
    card.addEventListener("click", () => {
      window.open(projectSources[i], "_blank").focus();
    });
  });

  let p = bigCards.length;
  extraCards.forEach((card) => {
    card.addEventListener("click", () => {
      window.open(projectSources[p], "_blank").focus();
      p++;
    });
  });

  // Section Observer ****************************
  const myName = document.querySelector(".myName");
  const strName = myName.textContent;
  const nameArr = strName.split("");
  myName.textContent = "";

  for (let i = 0; i < nameArr.length; i++) {
    myName.innerHTML += "<span>" + nameArr[i] + "</span>";
  }
  

  i = 0;
  let timer = setInterval(fade, 75);
  function fade () {
    const span = myName.querySelectorAll("span")[i];
    span.classList.add("fade");
    i++;

    if (i === nameArr.length) {
      closeTimer();
      return;
    }
  }

  function closeTimer() {
    clearInterval(timer);
    timer = null;
  }

  const faders = document.querySelectorAll(".fade-in");
  const sliders = document.querySelectorAll(".slide-in");

  const options = {
    threshold: .10,
    rootMargin: "0px 0px 0px 0px"
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach((section) => {
    observer.observe(section);
  });

  sliders.forEach((slider) => {
    observer.observe(slider);
  });

  
  // *********************************************
  
  if (window.innerWidth < 1140) {
    let lastScrollTop = 0;
    console.log(lastScrollTop);
    const navBar = document.querySelector("header");
    console.log(navBar);
    window.addEventListener("scroll", () => {
        let currScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currScrollTop > lastScrollTop) {
            navBar.style.top = "-70px";
        } else {
            navBar.style.top = "0";
        }

        lastScrollTop = currScrollTop;
    });
  }

  // https://github.com/VincentGarreau/particles.js
  particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 750,
          "density": {
            "enable": true,
            "value_area": 789.1476416322727
          }
        },
        "color": {
          "value": "#763841"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.48927153781200905,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 0.2,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#763841",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1.5,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 83.91608391608392,
            "size": 1,
            "duration": 3,
            "opacity": 1,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
});

window.onresize = () => {
    location.reload();
}

function flipSE(pageId) {
  const currPage = document.querySelector(".categories .category.is-active");
  currPage.classList.remove("is-active");

  const newPage = document.querySelector(`.categories .category[data-category="${pageId}"]`);
  newPage.classList.add("is-active");

  flipContent(currPage.dataset.category);
}

function flipContent(contentId) {
  const oldContent = document.querySelector(".se-content .content.is-active");
  oldContent.classList.remove("is-active");
  let newContent;

  if (contentId === "1") {
      newContent = document.querySelector('[data-content="3"]');
      prevContent = oldContent;
      
  } else {
      
      newContent = prevContent
  }

  newContent.classList.add("is-active");
}

function switchCategory(catId) {
  const oldCategory = document.querySelector(".experience-tabs .etab.is-active");
  oldCategory.classList.remove("is-active");

  const newCategory = document.querySelector(`.experience-tabs .etab[data-etab="${catId}"]`);
  newCategory.classList.add("is-active");

  switchContent(newCategory.dataset.etab);
}

function switchContent(contentId) {
  const oldContent = document.querySelector(".se-content .content.is-active");
  oldContent.classList.remove("is-active");

  const newContent = document.querySelector(`.se-content .content[data-content="${contentId}"]`);
  newContent.classList.add("is-active");
}

// ************************************************************
$(document).ready(() => {
  const skillList = [
      "PHP", "jQuery", "NPM", 
      "Linux", "EJS", "MongoDB", "REST",
      "SQL", "Android", "Express"
  ];

  const photoList = [
      "python", "java", "javascript", 
      "mysql", "react", "git", "html",
      "css", "nodejs"
  ];

  const photos = [];
  photoList.forEach(() => {
      skillList.push("");
      photos.push(document.createElement("img"));
  });

  const n = skillList.length;
  for (var i = 0; i < n*3; i++) {
      var a = Math.floor(Math.random() * n);
      var b = Math.floor(Math.random() * n);

      while (a === b || (skillList[a].length > 0 && skillList[b].length > 0) || (skillList[a].length == 0 && skillList[b].length == 0)) {
          b = Math.floor(Math.random() * n);
      }

      var temp = skillList[a];
      skillList[a] = skillList[b];
      skillList[b] = temp;
  }

  const currWidth = window.visualViewport.width;
  let divisor = 4;

  if (currWidth <= 768) {
      divisor = 2;
  } else if (currWidth <= 1024) {
      divisor = 3;
  } else if (currWidth <= 1440) {
      divisor = 3.5
  }

  const settings = {
      // TagCloud: https://github.com/mcc108/TagCloud
      radius: window.visualViewport.width/divisor,
      maxSpeed: 'fast',
      initSpeed: 'fast',
      direction: 135,
      keep: true
  }

  // Create the tag cloud using the skillList
  // Set the tag cloud width to 90%
  const tagCloud = TagCloud(".sphere", skillList, settings);
  $(".tagcloud").css("width", "90%");
  
  var j = 0;
  var cloud = document.querySelectorAll(".tagcloud--item");
  for (var i = 0; i < cloud.length; i++) {
      if (j < photos.length && cloud[i].innerHTML.length === 0) {
          photos[j].src = "./images/tech-icons/" + photoList[j] + ".svg";
          cloud[i].appendChild(photos[j]);
          j++;
      }
  }
});
// ************************************************************
