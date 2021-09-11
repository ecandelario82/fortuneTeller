

//delays javascript so HTML can load 
setTimeout(function () {

    

    const asksUrName = () => {
        userName = prompt('Please enter your name.');
        name1 = userName;
        while (name1 === '' || name1 === null) {
            alert('Oh no... It looks like the spirits have trapped you! You must enter a name to continue...');
            userName = prompt('Please enter your name.');
            name1 = userName;
            
        }
    }
           
    
    
    
    //Func - asks for question - MUST ENTER
    const asksAquestion = () => {
        asksUrName();
        let userQuestion = prompt(` Hello ${name1}. What is your question?`)
        let answer = userQuestion;
        while (answer === '' || answer === null) {
            alert("Ask a question. Don't be scared...");
            userQuestion = prompt(` Hello ${name1}. What is your question?`);
            answer = userQuestion;
        } if (answer) {
            continueon = alert(`${name1} you asked: "${userQuestion}?" Please wait while I establish contact with the spirits...`);
        }
    }
    
    
    asksAquestion();
       
    
      
    
    
    //Random number between 1 - 8
    let randomNumber = () => {
        return Math.floor(Math.random() * 8 + 1);
    }
    
    //Random selection
    let eightBall = randomNumber();
    
    
        switch (eightBall) {
        case 1: alert('It is certain...');
            break;
        case 2: alert('It is decidedly so...');
            break;
        case 3: alert('Reply hazy, try again...');
            break;
        case 4: alert('Cannot predict now.');
            break;
        case 5: alert('Do not count on it.');
            break;
        case 6: alert('My sources say, no.');
            break;
        case 7: alert('Outlook is not so good.');
            break;
        case 8: alert('All signs point to yes!');
            break;
        }
    
    
    
    }, 3000)
    
    

    