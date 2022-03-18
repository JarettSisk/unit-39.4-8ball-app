import React from "react";
import "./EightBall.css"

const EightBall = ({ answers }) => {
    const [message, setMessage] = React.useState("Think of a question");
    const [color, setColor] = React.useState("black");
    const [rotation, setRotation] = React.useState(0);
    // Function for picking and setting new answer
    const newAnswer = () => {
        const randomNum = Math.floor(Math.random()* answers.length) ;
        console.log(randomNum)
        const randomAnswer = answers[randomNum];
        setMessage(randomAnswer.msg);
        setColor(randomAnswer.color);
        
    }
    // Function for adding rotation to the text
    const spin = () => setRotation(rotation + 720);
    
    return (
        <div className="EightBall" style={{backgroundColor: color}} onClick={() => {newAnswer(); spin();}}>
            <h2 className="EightBall-message" style={{transform: `rotate(${rotation}deg)`}}>{message}</h2>
        </div>
    )
}

EightBall.defaultProps = {answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]};

export default EightBall;