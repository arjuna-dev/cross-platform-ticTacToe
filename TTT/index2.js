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


function verifier(){

}

var container = document.getElementById("sub-container")

var rows = container.children;
var inrHTML;


var numberOfRows = document.getElementById("sub-container").childElementCount;

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
        
        //Check for vertical wins
        //Create matrix
        var matrix = []        
        var transposedMatrix = []
            
        for (var i = 0; i < rows.length; i++) {
            transposedMatrix.push([])
            matrix.push([])            
            var columns = rows[i].children;
            for (var j = 0; j < columns.length; j++) {
                matrix[i].push(columns[j].className)
          }
        }

        //Check for horizontal wins
        for(i=0;i<matrix.length;i++){  
            var className=""
            var counterX = 0          
            for(j=0;j<matrix[i].length;j++){
                if(className!="cell"&&className==matrix[i][j]){
                    counterX+=1
                }
                if(counterX==2){
                    console.log("We've got a horizontal winner");
                    if(className=="cell o"){
                        finalMessage.innerText = `${chooseP2.value} wins!`
                    }else if(className=="cell x"){
                        finalMessage.innerText = `${chooseP1.value} wins!`
                    }
                    finalMessageContainer.style.display = "block"
                }
                className=matrix[i][j]
            }    
        }
        //Check for vertical wins
        for(i=0;i<matrix.length;i++){  
            className=""
            var counterY = 0          
            for(j=0;j<matrix[i].length;j++){
                if(className!="cell"&&className==matrix[j][i]){
                    counterY+=1
                }
                if(counterY==2){
                    console.log("We've got a vertical winner");
                    if(className=="cell o"){
                        finalMessage.innerText = `${chooseP2.value} wins!`
                    }else if(className=="cell x"){
                        finalMessage.innerText = `${chooseP1.value} wins!`
                    }
                    finalMessageContainer.style.display = "block"
                }
                className=matrix[j][i]
            }    
        }
        //Check for diagonal wins 1
        className=""
        var counterZ = 0            
        for(i=0;i<matrix.length;i++){  
                if(className!="cell"&&className==matrix[i][i]){
                    counterZ+=1
                }
                if(counterZ==2){
                    console.log("We've got a diagonal winner");
                    if(className=="cell o"){
                        finalMessage.innerText = `${chooseP2.value} wins!`
                    }else if(className=="cell x"){
                        finalMessage.innerText = `${chooseP1.value} wins!`
                    }
                    finalMessageContainer.style.display = "block"
                }
                className=matrix[i][i]
        }
        //Check for diagonal wins 2
        className=""
        var counterW = 0            
        j=2;
        for(i=0;i<matrix.length;i++){  
            if(className!="cell"&&className==matrix[i][j]){
                counterW+=1
            }
            if(counterW==2){
                console.log("We've got a diagonal winner");
                if(className=="cell o"){
                    finalMessage.innerText = `${chooseP2.value} wins!`
                }else if(className=="cell x"){
                    finalMessage.innerText = `${chooseP1.value} wins!`
                }
                finalMessageContainer.style.display = "block"
            }
            className=matrix[i][j]
            j--;
        }

        //Check for draw
        var counterC = 0
        for(i=0;i<matrix.length;i++){   
            for(j=0;j<matrix[i].length;j++){
                if(matrix[i][j]=='cell x'||matrix[i][j]=='cell o'){
                    counterC += 1
                }
                if (counterC==9){
                    console.log("its a draw");
                    finalMessage.innerText = `${chooseP2.value} and ${chooseP1.value} tie!`
                    finalMessageContainer.style.display = "block"
                }
            }    
        }



    })
}


var switcher = 0