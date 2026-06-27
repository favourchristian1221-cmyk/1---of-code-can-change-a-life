/* ==========================================
   One Line Can Change a Life
   script.js
========================================== */

/* ---------- Typing Title ---------- */

const titleText = "One Line of Code Can Change a Life";

let titleIndex = 0;

function typeTitle(){

    if(titleIndex < titleText.length){

        document.getElementById("title").innerHTML += titleText.charAt(titleIndex);

        titleIndex++;

        setTimeout(typeTitle,70);

    }

}

typeTitle();


/* ---------- Typing Code ---------- */

const codeText = 'console.log("Hello, World!");';

let codeIndex = 0;

function typeCode(){

    if(codeIndex < codeText.length){

        document.getElementById("code").innerHTML += codeText.charAt(codeIndex);

        codeIndex++;

        setTimeout(typeCode,40);

    }

}

typeCode();


/* ---------- Scroll Button ---------- */

function scrollToStory(){

    document.getElementById("story").scrollIntoView({

        behavior:"smooth"

    });

}


/* ---------- Dark / Light Mode ---------- */

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click",function(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        toggle.innerHTML="☀️";

    }

    else{

        toggle.innerHTML="🌙";

    }

});


/* ---------- Scroll Animation ---------- */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});


document.querySelectorAll(".story,.card").forEach((element)=>{

    observer.observe(element);

});


/* ---------- Footer Year ---------- */

const year = new Date().getFullYear();

const footer = document.querySelector(".footer");

footer.innerHTML += `<p style="margin-top:20px;">© ${year} • Built by Your Name</p>`;


/* ---------- Welcome Message ---------- */

setTimeout(()=>{

console.log("Welcome to my first coding project 🚀");

},1000);
