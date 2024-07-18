const mainText = document.getElementById('gameTitle');
const percentage = document.getElementById('percentage');
const smallText = document.getElementById('miniText');
const subBtn = document.getElementById('subBtn');


subBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    const firstName = document.getElementById('input1').value;
    const secondName = document.getElementById('input2').value;
    
    // let firstLetter1 = firstName.slice(0,1);
    // let remainingLetters1 = firstName.slice(1, secondName.length);
    // let firstLetter2 = secondName.slice(0,1);
    // let remainingLetters2 = secondName.slice(1, secondName.length);
    
    // const newUserName = firstLetter1.toUpperCase() + remainingLetters1.toLowerCase();
    // const newPartnerName = firstLetter2.toUpperCase() + remainingLetters2.toLowerCase();

    mainText.style.display = 'none';
    let loveScore = Math.random();
    loveScore = Math.floor(loveScore * 100) + 1;
    percentage.textContent = loveScore + '%'
    if (loveScore > 70) {
        document.getElementById('coupleNames').textContent =  firstName + ' and ' + secondName
        document.getElementById('coupleNames').style = 'font-size: 25px'
        smallText.textContent ="You're both so crazy in love! I'm afraid I'm terribly jealous."
    } else if (loveScore > 30 && loveScore <= 70){
        document.getElementById('coupleNames').textContent =  firstName + ' and ' + secondName
        document.getElementById('coupleNames').style = 'font-size: 25px'
        smallText.textContent ="Average! I guess you're both still tryna find some balance."
    } else{
        document.getElementById('coupleNames').textContent =  firstName + ' and ' + secondName
        document.getElementById('coupleNames').style = 'font-size: 25px'
        smallText.textContent ="Hmm... I think its safe to say you two go together like oil and water."
    }
})