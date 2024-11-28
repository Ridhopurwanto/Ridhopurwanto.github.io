const container = document.querySelector('.container');
const nav = document.querySelector('.nav');
const boxCont = document.querySelector('.boxCon');
const controls = document.querySelectorAll('.control');
const mulai = document.querySelector('.butCon button');

// main menu
controls.forEach((control) => {
    control.querySelector('input').addEventListener('input', (e) => {
        // console.log(e.target.value);
        control.querySelector('.bil').innerHTML = e.target.value;
    })
})

let set = 5;
let soal = 50;
let setTime = 60;
let time;

let operand1 = [];
let operand2 = [];
let temp = [];
let num;
let filled = false;
let activeSection = 0;
let score;
let duration;

let answers = [];
let corAnswers = [];

controls[0].querySelector('.input').value = setTime;
controls[1].querySelector('.input').value = soal;
controls[2].querySelector('.input').value = set;

controls[0].querySelector('.bil').innerHTML = setTime;
controls[1].querySelector('.bil').innerHTML = soal;
controls[2].querySelector('.bil').innerHTML = set;

// Function declaration

function makeInput(type, name, id, value){
    let radioButton = document.createElement('input');
    radioButton.type = type; 
    radioButton.name = name; 
    radioButton.id  = id;
    radioButton.value = value;
    return radioButton;
}

function makeLabel(target, txt){
    let label = document.createElement('label');
    label.setAttribute('for', target);
    label.appendChild(document.createTextNode(txt));
    return label;
}

function makeP(className, txt){
    let p = document.createElement('p');
    let str = txt;
    p.appendChild(document.createTextNode(str));
    p.setAttribute('class', className);
    return p;
}

function filledCheck(set){
    let result = true;
    for(let i = 0; i < set.length; i++){
        if((set[i] != 0) && (set[i] != 1)){
            result = false;
            i = set.length;
        }
    }
    return result;
}


let sectionWidth;
function pindah(){
        sectionWidth = container.clientWidth;
        document.querySelector('html').scrollTop = 0;
        container.scrollLeft = sectionWidth * activeSection + 4;
        nav.innerHTML = (activeSection) + '/' + operand1.length;
        time = setTime;
}

function answerCheck(){
    let result = [];
    let sum = 0;
    for(let i = 0; i < corAnswers.length; i++){
        for(let j = 0; j < corAnswers[0].length; j++){
            if (corAnswers[i][j] == answers[i][j]){sum += 1}
        }
        result.push(sum);
        sum = 0;
    }
    return result;
}

mulai.addEventListener('click', () => {
    setTime = controls[0].querySelector('.input').value;
    soal = controls[1].querySelector('.input').value;
    set = controls[2].querySelector('.input').value;

    for (let i = 0; i < set; i++) {
        for(let j = 0; j < soal; j++){
            num = Math.round(Math.random() * 99);
            temp.push(num);
        }
        operand1.push(temp);
        temp = [];
    }
    
    for (let i = 0; i < set; i++) {
        for(let j = 0; j < soal; j++){
            num = Math.round(Math.random() * 99);
            temp.push(num);
        }
        operand2.push(temp);
        temp = [];
    }

    // Prepare answer array

    
    for (let i = 0; i < operand1.length; i++){
        for(let j = 0; j < operand1[0].length; j++){
            temp[j] = 2;
        }
        answers.push(temp);
        temp = [];
    }

    //Prepare correct answer
    
    for (let i = 0; i < operand1.length; i++){
        for(let j = 0; j < operand1[0].length; j++){
            if ((operand1[i][j] + operand2[i][j]) % 2 == 0){
                temp[j] = 0;
            }else{ temp[j] = 1}
        }
        corAnswers.push(temp);
        temp = [];
    }

    // making hasil section
    for(let i = 0; i < operand1.length; i++){
        let div = document.createElement('div');
        div.setAttribute('class', 'box');
        div.appendChild(makeP('secNumber', i + 1));
        div.appendChild(makeP('correct', 0));
        boxCont.appendChild(div);
    }

// Making section element
    for(let i = 0; i < operand1.length; i++){
        let div = document.createElement('div');
        div.setAttribute('class', 'section');
        for(let j = 0; j < operand1[0].length; j++){
            let str = operand1[i][j] + ' + ' + operand2[i][j] + ' =...';
            div.appendChild(makeP('nomor', j + 1 + '.'));
            div.appendChild(makeP('soal', str));
            
            let radioCon = document.createElement('div');
            radioCon.setAttribute('class', 'radio');
            
            radioCon.appendChild(makeInput('radio', 'soal' + i + '' + j, 'soal' + i + '' + j +'0', 0));
            radioCon.appendChild(makeLabel('soal' + i + '' + j +'0', '0'));
            radioCon.appendChild(makeInput('radio', 'soal' + i + '' + j, 'soal' + i + '' + j +'1', 1));
            radioCon.appendChild(makeLabel('soal' + i + '' + j +'1', '1'));
            
            div.appendChild(radioCon);
            container.insertBefore(div, document.querySelector('.hasil'));
            document.querySelector('#soal' + i + '' + j +'0').addEventListener('change', () => {
                answers[i][j] = 0;
                if(filledCheck(answers[i])){
                    activeSection += 1;
                    if (activeSection == operand1.length+1){
                        clearInterval(duration);
                        score = answerCheck();
                        score.forEach((e,i) => boxCont.querySelectorAll('.correct')[i].innerHTML = e);
                        timeEl.parentElement.style.display = 'none';
                        // activeSection -= 1;
                    }
                    pindah();
                }
            });
            document.querySelector('#soal' + i + '' + j +'1').addEventListener('change', () => {
                answers[i][j] = 1;
                if(filledCheck(answers[i])){
                    activeSection += 1;
                    if (activeSection == operand1.length+1){
                        clearInterval(duration);
                        score = answerCheck();
                        score.forEach((e,i) => boxCont.querySelectorAll('.correct')[i].innerHTML = e);
                        timeEl.parentElement.style.display = 'none';
                        // activeSection -= 1;
                    }
                    pindah();
                }
            });
        }
    }
    activeSection += 1;
    mulai.querySelector('p').style.color = "#FCA311";
    mulai.querySelector('img').style.display = "block";
    setTimeout(() => {
        pindah();
        dur();
        duration = setInterval(dur, 1000);
    }, 1000);
    // Main interval

    const timeEl = document.querySelector('.time');
    time = setTime;
    function dur(){
        let sec = time % 60;
        let menit = (time - sec) / 60;
        timeEl.innerHTML = menit + '.' + sec;
        time -= 1;
        if(time < 0){
            activeSection += 1;
            if (activeSection == operand1.length+1){
                clearInterval(duration);
                score = answerCheck();
                score.forEach((e,i) => boxCont.querySelectorAll('.correct')[i].innerHTML = e);
                timeEl.parentElement.style.display = 'none';
                // activeSection -= 1;
            }
            pindah();
        }
    }
})

document.querySelector('html').scrollTop = 0;




