var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
var four = document.getElementById('four')
var five = document.getElementById('five')
var six = document.getElementById('six')
var seven = document.getElementById('seven')
var eight = document.getElementById('eight')
var nine = document.getElementById('nine')

var finalMessage = document.getElementById('final-message')
var finalMessageContainer = document.getElementById('final-message-container')
var playAgainButton = document.getElementById('play-again-button')

playAgainButton.addEventListener('click', function(){
    window.location.reload()
})

var classCell = document.getElementsByClassName('cell')
for (i=0;i<classCell.length;i++){
    classCell[i].classList.add("x")
    classCell[i].classList.add("o")
    classCell[i].classList.toggle("o")
    classCell[i].classList.toggle("x")
}

const codeP = '<img src="resources/img/code.png" style="width:100%" alt="">'
const tuP = '<img src="resources/img/tu.png" alt="" style="width:100%;">'
const htwP = '<img src="resources/img/htw.png" alt="" style="width:100%;">'
const humboldtP = '<img src="resources/img/humboldt.png" alt="" style="width:100%;">'

const chooseP1 = document.getElementById('choose-player-1')
const chooseP2 = document.getElementById('choose-player-2')

chooseP1.classList.add('animated')
chooseP2.classList.add('animated')

var p1sign = ""
var p2sign = ""

var iHinge = 0

chooseP1.addEventListener("change", function(){
    if (chooseP1.value=='code'){
        p1sign = codeP
        chooseP2.options[1].disabled = true;
    } else if (chooseP1.value=='tu'){
        p1sign = tuP
        chooseP2.options[2].disabled = true;
    } else if (chooseP1.value=='htw'){
        p1sign = htwP
        chooseP2.options[3].disabled = true;
    } else if (chooseP1.value=='humboldt'){
        p1sign = humboldtP
        chooseP2.options[4].disabled = true;
    }

    if (iHinge==0){
        chooseP1.classList.add('hinge')
        iHinge=1
    }

    if(chooseP1.value!=''&&chooseP2.value!=''){
        document.getElementById('menu-container').classList.add('animated')
        document.getElementById('menu-container').classList.add('rollOut')
    }
})

chooseP2.addEventListener("change", function(){
    if (chooseP2.value=='code'){
        p2sign = codeP
        chooseP1.options[1].disabled = true;
    } else if (chooseP2.value=='tu'){
        p2sign = tuP
        chooseP1.options[2].disabled = true;
    } else if (chooseP2.value=='htw'){
        p2sign = htwP
        chooseP1.options[3].disabled = true;
    } else if (chooseP2.value=='humboldt'){
        p2sign = humboldtP
        chooseP1.options[4].disabled = true;
    }

    if (iHinge==0){
        chooseP2.classList.add('hinge')
        iHinge=1
    }

    if(chooseP1.value!=''&&chooseP2.value!=''){
        document.getElementById('menu-container').classList.add('animated')
        document.getElementById('menu-container').classList.add('rollOut')
    }
})


for (i=0;i<classCell.length;i++){
    classCell[i].addEventListener('click', function toggler(){
        if (switcher==0){
            this.classList.toggle("x")
            this.innerHTML = p1sign
            this.removeEventListener('click', toggler)
            switcher=1
        } else if (switcher==1){
            this.classList.toggle("o")
            this.innerHTML = p2sign
            this.removeEventListener('click', toggler)
            switcher=0
        }

        if (one.innerHTML!=''&&one.innerHTML==two.innerHTML&&two.innerHTML==three.innerHTML){
                finalMessageContainer.style.display = "block"
            if(one.innerHTML==p1sign){
                finalMessage.innerText = `${chooseP1.value} wins!`
            } else if(one.innerHTML==p2sign){
                finalMessage.innerText = `${chooseP2.value} wins!`
            }
        } else if (four.innerHTML!=''&&four.innerHTML==five.innerHTML&&five.innerHTML==six.innerHTML){
            finalMessageContainer.style.display = "block"
            if(four.innerHTML==p1sign){                 
                finalMessage.innerText = `${chooseP1.value} wins!`
        } else if(four.innerHTML==p2sign){
                finalMessage.innerText = `${chooseP2.value} wins!`
            }
        } else if (seven.innerHTML!=''&&seven.innerHTML==eight.innerHTML&&eight.innerHTML==nine.innerHTML){
            finalMessageContainer.style.display = "block"
            if(seven.innerHTML==p1sign){                 
                finalMessage.innerText = `${chooseP1.value} wins!`             
        } else if(seven.innerHTML==p2sign){
                finalMessage.innerText = `${chooseP2.value} wins!`
            }
        } else if (one.innerHTML!=''&&one.innerHTML==four.innerHTML&&four.innerHTML==seven.innerHTML){
            finalMessageContainer.style.display = "block"
            if(one.innerHTML==p1sign){                 
                finalMessage.innerText = `${chooseP1.value} wins!`             
        } else if(one.innerHTML==p2sign){
                finalMessage.innerText = `${chooseP2.value} wins!`
            }
        } else if (two.innerHTML!=''&&two.innerHTML==five.innerHTML&&five.innerHTML==eight.innerHTML){
            finalMessageContainer.style.display = "block"
            if(two.innerHTML==p1sign){                 
                finalMessage.innerText = `${chooseP1.value} wins!`             
        } else if(two.innerHTML==p2sign){
                finalMessage.innerText = `${chooseP2.value} wins!`
            }
        } else if (three.innerHTML!=''&&three.innerHTML==six.innerHTML&&six.innerHTML==nine.innerHTML){
            finalMessageContainer.style.display = "block"
            if(three.innerHTML==p1sign){                 
                finalMessage.innerText = `${chooseP1.value} wins!` 
        } else if(three.innerHTML==p2sign){
                finalMessage.innerText = `${chooseP2.value} wins!`
            }
        }  else if (one.innerHTML!=''&&one.innerHTML==five.innerHTML&&five.innerHTML==nine.innerHTML){
            finalMessageContainer.style.display = "block"
            if(one.innerHTML==p1sign){                 
                finalMessage.innerText = `${chooseP1.value} wins!`
        } else if(one.innerHTML==p2sign){
                finalMessage.innerText = `${chooseP2.value} wins!`
            }
        }  else if (three.innerHTML!=''&&three.innerHTML==five.innerHTML&&five.innerHTML==seven.innerHTML){
            finalMessageContainer.style.display = "block"
            if(three.innerHTML==p1sign){                 
            finalMessage.innerText = `${chooseP1.value} wins!`
        } else if(three.innerHTML==p2sign){
            finalMessage.innerText = `${chooseP2.value} wins!`
            }
        }  else if (one.innerHTML!=''&&two.innerHTML!=''&&three.innerHTML!=''&&four.innerHTML!=''&&five.innerHTML!=''&&six.innerHTML!=''&&seven.innerHTML!=''&&eight.innerHTML!=''&&nine.innerHTML!=''){
            finalMessageContainer.style.display = "block"
            finalMessage.innerText = `It's a tie!`            
        }

    })
}


var switcher = 0