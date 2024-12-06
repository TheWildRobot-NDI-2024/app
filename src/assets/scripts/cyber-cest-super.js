document.addEventListener("DOMContentLoaded", () => {

  // set scroll position to 0
  
  // Initial animations when the page loads
  gsap.fromTo(
    "#title",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
  );
  
  // window.scrollTo(0, 0);
  console.log("DOM fully loaded and parsed");

  const chatbot = document.getElementById("chatbot");

  // Scroll-triggered animation
  const onScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const title = document.getElementById("title");
    const chatbot = document.getElementById("chatbot");

    if (scrollPosition > 50) {
      // Move the title upwards and fade out
      gsap.to("#title", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Bring the chatbot into view
      gsap.to("#chatbot", {
        y: -100,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to("#chatbot-icon", {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      });      

    } else {
      // Reset animation if scrolling back to the top
      gsap.to("#title", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to("#chatbot", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Hide the chatbot icon
      gsap.to("#chatbot-icon", {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "power2.out",
      });

    }
    if(scrollPosition > 1200){
      gsap.to('#game-intro',{
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      })

      gsap.to("#intro-text-1", {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to("#intro-text-2", {
        opacity: 1,
        x: 0,
        duration: 0.5,
        delay: 0.5,
        ease: "power2.out",
      });
      
      gsap.to("#intro-text-3", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 1,
        ease: "power2.out",
      });
    
      // Animation pour la question
      gsap.to("#start-question", {
        opacity: 1,
        duration: 1,
        delay: 1.5,
        ease: "power2.out",
      });
    
      // Animation pour les boutons
      gsap.to("#start-buttons", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 2,
        ease: "power2.out",
      });
    } else {
        gsap.to('#game-intro',{
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        })
  
        gsap.to("#intro-text-1", {
          opacity: 0,
          x: -50,
          duration: 1,
          ease: "power2.out",
        });

        gsap.to("#intro-text-2", {
          opacity: 0,
          x: -50,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
        });
      
        gsap.to("#intro-text-3", {
          opacity: 0,
          y: 50,
          duration: 1,
          delay: 1,
          ease: "power2.out",
        });
      
        // Animation pour la question
        gsap.to("#start-question", {
          opacity: 0,
          duration: 1,
          delay: 1.5,
          ease: "power2.out",
        });
      
        // Animation pour les boutons
        gsap.to("#start-buttons", {
          opacity: 0,
          y: 50,
          duration: 1,
          delay: 2,
          ease: "power2.out",
        });

        // cahce level 1
        gsap.to("#level-1", {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      }
  };


  // Attach the scroll event listener
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY
    console.log(scrollPosition);
    const animateObject = (element, start, end, time) => {
      if (scrollPosition > start) {
          gsap.to(element, {
              opacity: 1,
              y: end,
              duration: time,
              delay: 0.5,
              ease: 'power3.out'
          });
      } else {
        console.log("scrollPosition", scrollPosition);
          gsap.to(element, {
              opacity: 0,
              y: start,
              duration: time,
              ease: 'power3.out'
          });
      }
    };

    animateObject(chatbot, 50, -500, 1);

  });

  document.getElementById("start-level-1").addEventListener("click", () => {
    console.log("Niveau 1 : Phishing démarre !");
    // Ajoutez ici la logique pour afficher ou charger le niveau 1
    // augmenter le scroll
    window.scrollTo({ top: 1900, behavior: "smooth" });
    gsap.to("#game-intro", {
      opacity: 0,
      duration: 1,
      // pointerEvents: "none",
      ease: "power2.out",
      onComplete: () => {
        // Rendre la section Niveau 1 visible
        // document.getElementById("level-1").classList.remove("pointer-events-none");
        gsap.fromTo(
          "#level-1",
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "power2.out" }
        );

        // Animer le texte depuis la droite
        gsap.fromTo(
          "#level-1-text",
          { x: 200, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
      },
    });
  });

});
