let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");


const gencompchoice=()=>
{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
const drawgame=()=>
{ 
    msg.innerText="Game was draw play again "
    msg.style.backgroundColor="lightblue";
    msg.style.color="black";

}

const showWinner=(userWin,userChoice,compchoice)=>
{
    if(userWin)
    {
        userscore++;
        userscorepara.innerText=userscore;
        
        msg.innerText=`You win! Your ${userChoice} beats ${compchoice} `;
         msg.style.backgroundColor="green";
         msg.style.color="white";
    }
    else
    {
        compscore++;
        compscorepara.innerText=compscore;
        
        msg.innerText=`You lost..Your ${compchoice} beats ${userChoice} `;
        msg.style.backgroundColor="red";
        msg.style.color="white";

    }
}

    
const playgame=(userChoice)=>
{
console.log("User choice = ",userChoice);
//Generate computer choice 
const compchoice=gencompchoice();
console.log("Computer Choice = ",compchoice);

if(userChoice===compchoice) 
{
    //draw game
    drawgame()
}
else
{
    let userWin=true;
    if(userChoice==="rock")
    {
        userWin=compchoice==="paper"? false:true;
    }
    else if(userChoice==="paper")
    {
        userWin=compchoice==="scissors"?false:true;
    }
    else
    {
        userWin=compchoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compchoice)
}
};

choices.forEach((choice) => {     
    choice.addEventListener("click",() =>
    {
        const userChoice=choice.getAttribute("id");
         playgame(userChoice);
    })

})