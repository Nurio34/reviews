
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    {
        id: 5,
        name: 'nuri salih ersoy',
        job: 'the boss of all boss and the king of all kings',
        img: './image/ben1.jpg',
        text: `Ask me to "Emine" the "meşhur şampşirik umwey"`,
      }
    
  ]

const imgEl = document.querySelector("img")
const nameEl = document.getElementById("name")
const jobEl = document.querySelector(".job")
const textEl = document.querySelector(".text")
const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")
const supriseBtn = document.querySelector(".suprise")

let currentReview = 0
let randomNumber

imgEl.src = reviews[currentReview].img
nameEl.textContent = reviews[currentReview].name
jobEl.textContent = reviews[currentReview].job
textEl.textContent = reviews[currentReview].text



    rightBtn.addEventListener("click",function() {
        
        if(currentReview < 4) {
            currentReview ++
            showItem()
        } else if (currentReview >= 4) {
            currentReview = 0
            showItem()
        }
        
    })

    leftBtn.addEventListener("click",function() {
        
        if(currentReview > 0) {
            currentReview --
            showItem()
        } else if (currentReview <= 0) {
            currentReview = 4
            showItem()
        }
        
    })

    supriseBtn.addEventListener("click", function() {
        random()
        currentReview = randomNumber
        showItem()
    })

async function showItem() {

    imgEl.src = reviews[currentReview].img
    nameEl.textContent = reviews[currentReview].name
    jobEl.textContent = reviews[currentReview].job
    textEl.textContent = reviews[currentReview].text
}

function random() {
    randomNumber = Math.floor(Math.random()*5)
}
