 function createHearts() {
            const heartsContainer = document.getElementById('heartsContainer');
            for(let i = 0; i < 20; i++) {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = Math.random() * 100 + '%';
                heart.style.animationDelay = Math.random() * 3 + 's';
                heartsContainer.appendChild(heart);
            }
        }
        createHearts();

       document.addEventListener("DOMContentLoaded", function () {
            const noButton = document.getElementById("noButton");

            function moveButton() {
                const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
                const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
                noButton.style.left = `${x}px`;
                noButton.style.top = `${y}px`;
            }

            noButton.addEventListener("mouseover", moveButton);
            noButton.addEventListener("touchstart", moveButton);
        });


       document.addEventListener("DOMContentLoaded", function () {
            const noButton = document.getElementById("noButton1");

            function moveButton() {
                const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
                const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
                noButton.style.left = `${x}px`;
                noButton.style.top = `${y}px`;
            }

            noButton.addEventListener("mouseover", moveButton);
            noButton.addEventListener("touchstart", moveButton);
        });

       document.addEventListener("DOMContentLoaded", function () {
            const noButton = document.getElementById("noButton2");

            function moveButton() {
                const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
                const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
                noButton.style.left = `${x}px`;
                noButton.style.top = `${y}px`;
            }

            noButton.addEventListener("mouseover", moveButton);
            noButton.addEventListener("touchstart", moveButton);
        });
        // Enhanced button interactions
        document.querySelectorAll('.funny-button').forEach(button => {
            button.addEventListener('click', () => {
                button.style.animation = 'none';
                setTimeout(() => button.style.animation = 'pulse 2s infinite', 100);
            });
        });

        // Add confetti effect on final acceptance
        function createConfetti() {
            const colors = ['#ff6f61', '#ff4757', '#ff3366', '#ffffff'];
            for(let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.top = '-10px';
                confetti.style.borderRadius = '50%';
                confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear`;
                document.body.appendChild(confetti);

                setTimeout(() => confetti.remove(), 5000);
            }
        }


        // Update your event listeners to use showPage function
        document.getElementById("startButton").addEventListener("click", function() {
            showPage(document.getElementById("termsPopup"));
        });
        // ... update other event listeners similarly ...
        document.getElementById("startButton").addEventListener("click", function() {
            document.querySelector(".container").classList.add("hidden");
            document.getElementById("termsPopup").classList.remove("hidden");
        });
        
        document.getElementById("agreeButton").addEventListener("click", function() {
            document.getElementById("termsPopup").classList.add("hidden");
            document.getElementById("proposal").classList.remove("hidden");
        });

        function moveButton(button) {
            button.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
        }

        document.getElementById("noButton").addEventListener("mouseover", function() {
            moveButton(this);
        });

        document.getElementById("noButton1").addEventListener("mouseover", function() {
            moveButton(this);
        });

        document.getElementById("somethingButton").addEventListener("click", function() {
        document.getElementById("finalPage").classList.add("hidden");
        document.getElementById("seagullProtection").classList.remove("hidden");
    });
        
        document.getElementById("yesButton").addEventListener("click", function() {
            document.getElementById("proposal").classList.add("hidden");
            document.getElementById("foodChoice").classList.remove("hidden");
        });

         document.getElementById("pavBhajiButton").addEventListener("click", function() {
        document.getElementById("foodChoice").classList.add("hidden");
        document.getElementById("finalPage").classList.remove("hidden");
    });

           document.getElementById("dalChawalButton").addEventListener("click", function() {
        document.getElementById("foodChoice").classList.add("hidden");
        document.getElementById("dalChawalMessage").classList.remove("hidden");
    });

             document.getElementById("backToFood").addEventListener("click", function() {
        document.getElementById("dalChawalMessage").classList.add("hidden");
        document.getElementById("foodChoice").classList.remove("hidden");
    });

         document.getElementById("safeButton").addEventListener("click", function() {
            document.getElementById("seagullProtection").classList.add("hidden");
            document.getElementById("flowers").classList.remove("hidden");
        });

        document.getElementById("atLast").addEventListener("click", function() {
    document.getElementById("flowers").classList.add("hidden");
    document.getElementById("finalPage2").classList.remove("hidden"); // Fixed ID
});