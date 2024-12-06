document.addEventListener("DOMContentLoaded", () => {

  // set scroll position to 0
  
  // Initial animations when the page loads
  gsap.fromTo(
    "#title",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power2.in" }
  );
  
  const chatbot = document.getElementById("chatbot");
  const gameIntro = document.getElementById("game-intro");
  const bouton = document.getElementById("start-buttons");
  const melsuspect = document.getElementById("level-1-mailsuspect");

  // niveau 1
  const level1 = document.getElementById("level-1-info");
  const quizniv1 = document.getElementById("quiz-niv-1");

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

    const animateObjectY = (element, start, end, time) => {
      if (scrollPosition > start) {
          gsap.to(element, {
              opacity: 1,
              y: end,
              duration: time,
              delay: 0.5,
              ease: 'power3.out'
          });
      } else {
          gsap.to(element, {
              opacity: 0,
              y: start,
              duration: time,
              ease: 'power3.out'
          });
      }
    };
  
    const animateObjectX = (element, start, end, time) => {
      if (scrollPosition > start) {
          gsap.to(element, {
              opacity: 1,
              x: end,
              duration: time,
              delay: 0.5,
              ease: 'power3.out'
          });
      } else {
          gsap.to(element, {
              opacity: 0,
              x: start,
              duration: time,
              ease: 'power3.out'
          });
      }
    }
    
    animateObjectY(chatbot, 50, -100, 1);
    animateObjectY(gameIntro, 1200, 0, 1);
    animateObjectY(bouton, 1100, 0, 1);
    animateObjectX("#level-1", 1800, 0, 1);

    animateObjectX(level1, 2500, 0, 2);
    animateObjectY(melsuspect, 2400, 0, 2);
    animateObjectY(quizniv1, 3500, 0, 2);   
    
    animateObjectX('#level-2', 4000, 0, 2);
    animateObjectY('#level-3', 8000, 0, 2);

  });

  document.getElementById("start-level-1").addEventListener("click", () => {
    // Ajoutez ici la logique pour afficher ou charger le niveau 1
    // augmenter le scroll
    window.scrollTo({ top: 2000, behavior: "smooth" });
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


document.addEventListener("DOMContentLoaded", () => {
  // Gestion des réponses du quiz
  const quizFeedback = document.getElementById("quiz-feedback");
  const quizResponse = document.getElementById("quiz-response");

  // Réponses possibles
  const answers = {
    "quiz-answer-1": "Bonne réponse ! L'adresse email est suspecte : elle contient un faux domaine.",
    "quiz-answer-2": "Bonne réponse ! Le lien de vérification est suspect.",
    "quiz-answer-3": "Pas tout à fait. L'urgence dans le message est un indice, mais ce n'est pas le principal élément suspect.",
  };

  // Gestion des clics sur les boutons de réponse
  document.querySelectorAll("#quiz-niv-1 button").forEach((button) => {
    button.addEventListener("click", () => {
      // Identifier la réponse
      const answerId = button.id;
      const feedback = answers[answerId];

      // Mettre à jour le feedback
      quizFeedback.textContent = feedback;

      // Appliquer un style de validation ou d'erreur
      if (answerId === "quiz-answer-1" || answerId === "quiz-answer-2") {
        quizFeedback.classList.remove("text-red-500");
        quizFeedback.classList.add("text-green-500");
      } else {
        quizFeedback.classList.remove("text-green-500");
        quizFeedback.classList.add("text-red-500");
      }

      // Afficher le feedback
      gsap.to("#quiz-response", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const emails = document.querySelectorAll("#emails > div");
  const correctAnswers = {
    0: "Phishing", // Email 1 est une tentative de phishing
    1: "Légitime", // Email 2 est légitime
    2: "Phishing", // Email 3 est une tentative de phishing
  };

  let score = 0;

  // Gestion des boutons pour chaque email
  emails.forEach((email, index) => {
    const buttons = email.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const userAnswer = button.textContent.trim(); // Obtenir la réponse cliquée
        const correctAnswer = correctAnswers[index]; // Réponse correcte pour cet email

        // Vérifier si la réponse est correcte
        if (userAnswer === correctAnswer) {
          score++; // Augmenter le score
        } 

        // Désactiver les boutons après une réponse
        buttons.forEach((btn) => (btn.disabled = true));

        // Vérifier si toutes les réponses ont été données
        if (Array.from(emails).every((email) =>
          Array.from(email.querySelectorAll("button")).every((btn) => btn.disabled)
        )) {
          showResult(score);
        }
      });
    });
  });

  // Afficher les résultats
  const showResult = (score) => {
    const resultElement = document.getElementById("case-result");
    const correctAnswersElement = document.getElementById("correct-answers");
    correctAnswersElement.textContent = score; // Mettre à jour le score

    // Afficher le résultat avec une animation GSAP
    gsap.to("#case-result", {
      opacity: 1,
      pointerEvents: "auto",
      duration: 1,
      ease: "power2.out",
    });
  };

  // Réinitialiser le cas pratique
  document.getElementById("restart-case").addEventListener("click", () => {
    score = 0;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const ransomwareButtons = document.querySelectorAll("#case-practice-2 button");
  const correctOption = "Signaler l'email au service IT"; // Réponse correcte
  const feedbackContainer = document.createElement("div");

  // Style pour le feedback
  feedbackContainer.classList.add("mt-4", "text-lg", "font-semibold", "p-4", "rounded-lg");

  // Ajout du feedback après les boutons
  document.querySelector("#case-practice-2").appendChild(feedbackContainer);

  // Gestion des clics sur les boutons
  ransomwareButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const userChoice = button.textContent.trim();

      // Réinitialiser les couleurs des boutons
      ransomwareButtons.forEach((btn) => {
        btn.classList.remove("bg-green-500", "hover:bg-green-700", "bg-red-500", "hover:bg-red-700");
      });

      // Afficher le feedback
      if (userChoice === correctOption) {
        feedbackContainer.textContent = "✅ Bonne réponse ! Signaler l'email au service IT est la meilleure pratique pour éviter les risques.";
        feedbackContainer.classList.remove("bg-red-500");
        feedbackContainer.classList.add("bg-green-500", "text-white");
        button.classList.add("bg-green-500", "hover:bg-green-700");
      } else if (userChoice === "Ouvrir la pièce jointe") {
        feedbackContainer.textContent = "❌ Mauvaise réponse ! Ouvrir une pièce jointe suspecte peut infecter votre ordinateur avec un ransomware.";
        feedbackContainer.classList.remove("bg-green-500");
        feedbackContainer.classList.add("bg-red-500", "text-white");
        button.classList.add("bg-red-500", "hover:bg-red-700");
      } else if (userChoice === "Ignorer l'email") {
        feedbackContainer.textContent = "⚠️ Réponse partiellement correcte. Ignorer l'email est mieux que de l'ouvrir, mais signaler au service IT est plus sécurisé.";
        feedbackContainer.classList.remove("bg-green-500", "bg-red-500");
        feedbackContainer.classList.add("bg-yellow-400", "text-black");
        button.classList.add("bg-blue-500", "hover:bg-blue-700");
      }

      // Désactiver les boutons après un clic
      // ransomwareButtons.forEach((btn) => (btn.disabled = true));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const networkButtons = document.querySelectorAll("#case-practice-3 button");
  const correctOption = "Passer au chiffrement WPA3 et définir un mot de passe complexe."; // Réponse correcte
  const feedbackContainer = document.createElement("div");

  // Style pour le feedback
  feedbackContainer.classList.add("mt-4", "text-lg", "font-semibold", "p-4", "rounded-lg");

  // Ajout du feedback après les boutons
  document.querySelector("#case-practice-3").appendChild(feedbackContainer);

  // Gestion des clics sur les boutons
  networkButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const userChoice = button.textContent.trim();
      // Afficher le feedback
      if (userChoice === correctOption) {
        feedbackContainer.textContent = "✅ Bonne réponse ! WPA3 est le standard de chiffrement le plus sécurisé, et un mot de passe complexe protège mieux votre réseau.";
      } else if (userChoice === "Laisser le chiffrement WEP et changer uniquement le mot de passe.") {
        feedbackContainer.textContent = "❌ Mauvaise réponse ! Le chiffrement WEP est obsolète et facile à pirater, même avec un mot de passe complexe.";
      } else if (userChoice === "Garder les paramètres actuels, mais limiter l’accès au réseau.") {
        feedbackContainer.textContent = "⚠️ Réponse partiellement correcte. Limiter l'accès aide, mais le chiffrement WEP reste une vulnérabilité majeure.";
      }
    });
  });
});
