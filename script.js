
/* ===================================
   БРОНИРОВАНИЕ НОМЕРА
=================================== */

function bookRoom(roomName) {

    alert(
        "Вы выбрали номер: " +
        roomName +
        "\n\nНаш менеджер свяжется с вами для подтверждения бронирования."
    );

}

/* ===================================
   ФОРМА ОБРАТНОЙ СВЯЗИ
=================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form =
        document.getElementById("feedbackForm");

    if(form){

        form.addEventListener(
            "submit",
            function(event){

                event.preventDefault();

                alert(
                    "Спасибо за обращение!\n\n" +
                    "Ваше сообщение успешно отправлено."
                );

                form.reset();

            }
        );

    }

});

/* ===================================
   АНИМАЦИЯ ПОЯВЛЕНИЯ БЛОКОВ
=================================== */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        const elements =
            document.querySelectorAll(
                ".room-card, .service-card, .review-card, .adv-card, .extra-card, .faq-item, .stat-card"
            );

        const observer =
            new IntersectionObserver(

                entries => {

                    entries.forEach(entry => {

                        if(entry.isIntersecting){

                            entry.target.classList.add("show");

                        }

                    });

                },

                {
                    threshold:0.15
                }

            );

        elements.forEach(element => {

            element.classList.add("hidden");

            observer.observe(element);

        });

    }
);

/* ===================================
   КНОПКА НАВЕРХ
=================================== */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        const button =
            document.createElement("button");

        button.innerHTML = "↑";

        button.id = "scrollTopBtn";

        document.body.appendChild(button);

        window.addEventListener(
            "scroll",
            function(){

                if(window.scrollY > 300){

                    button.style.display = "block";

                }
                else{

                    button.style.display = "none";

                }

            }
        );

        button.addEventListener(
            "click",
            function(){

                window.scrollTo({

                    top:0,
                    behavior:"smooth"

                });

            }
        );

    }
);

/* ===================================
   ПРИВЕТСТВИЕ ПОСЕТИТЕЛЯ
=================================== */

window.addEventListener(
    "load",
    function(){

        console.log(
            "Добро пожаловать в Paradise Hotel!"
        );

    }
);
