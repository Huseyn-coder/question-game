let dogrular = 0
let sehvler = 0
const questions =[
  {
     question:"Azerbaycanin paytaxti haradir?",
     answers:[
         {answer:"Baki",
           dogrudurmu:true},
         {answer: "Gence",
           dogrudurmu:false},
         {answer:"Sumqayit",
            dogrudurmu:false}
     ]
 },
 {
    question:"Bayragimizda hansi reng yoxdur?",
      answers:[
      {answer:"Qirmizi",
    dogrudurmu: false},
    {answer:"Sari",
  dogrudurmu:true},
     {answer:"Yasil",
      dogrudurmu:false}
      ]
 },
 {
  question:"Hansi dil front-end'e aiddir?",
  answers:[
      {answer:"Java Script",
        dogrudurmu:true},
      {answer: "Java",
        dogrudurmu:false},
      {answer:"Python",
         dogrudurmu:false}
  ]
},
{
  question:"En cox ehalisi olan olke hansidir?",
  answers:[
      {answer:"Chin",
        dogrudurmu:true},
      {answer: "Rusiya",
        dogrudurmu:false},
      {answer:"Hindistan",
         dogrudurmu:false}
  ]
},
{
  question:"Fullstack developer hansini bilmelidir?",
  answers:[
      {answer:"Front-end",
        dogrudurmu:false},
      {answer: "back-end",
        dogrudurmu:false},
      {answer:"front-end ve back-end",
         dogrudurmu:true}
  ]
}
 ]

let index = 0;

function sualiGoster() {
  progressBariArtir()
  const x = questions[index]

  for(let i = 0; i < x.answers.length; i++){
    const btn = document.querySelector('#cavab' + (i+1))
    document.querySelector("#cavab1").style.backgroundColor = "white"
    document.querySelector("#cavab2").style.backgroundColor = "white"
    document.querySelector("#cavab3").style.backgroundColor = "white"
    btn.innerHTML = x.answers[i].answer
    btn.onclick = function () {
        if(x.answers[i].dogrudurmu) {
        dogrular++
        btn.style.backgroundColor = "green"
      } else {
        sehvler++
        btn.style.backgroundColor = "red"

      }
      setTimeout(() => {
        next();
      }, 1000);
  
    }
    console.log(dogrular/(questions.length) * 100)
  }
  document.querySelector("#sual").innerHTML = x.question
  document.querySelector("#faiz").innerHTML = Math.floor(dogrular/(questions.length) * 100) 
}

function next() {
  index++
  if(index >= questions.length){
    document.querySelector("#start-1").style.display = "block"
    document.querySelector("#sual-bolmesi").style.display = "none";

  } else {

    sualiGoster()
  }
  document.querySelector("#question-i").innerHTML = index+1
}


function progressBariArtir () {
  const faiz = 100 * (index) / (questions.length)
  document.querySelector("#indicator").style.width = faiz + "%"
  
}


document.querySelector("#start").onclick = function () {
  index = 0
    dogrular = 0
    sehvler = 0
    document.body.style.backgroundImage = "url(./assets/neon-frame-background-empty-neon-light-sign-wallpaper_691560-5713.avif)"
    document.querySelector("#question-i").innerHTML = index+1
    document.querySelector("#cavab1").style.display = "block"
    document.querySelector("#cavab2").style.display = "block"
    document.querySelector("#cavab3").style.display = "block"
    document.querySelector("#progress-bar").style.display = "block"
    document.querySelector("#sual").style.display = "block"
    sualiGoster()
    document.querySelector("#start").innerHTML = "RESTART"
    document.querySelector("#start-1").style.display = "none"
    document.querySelector("#sual-bolmesi").style.display = "block"
}
document.querySelector("#exit").onclick = function () {
  window.close()
}