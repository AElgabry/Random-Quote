var x;
var quote = 
[
    `"Be yourself; everyone else is already taken."<br>
        <span>-- Oscar Wilde</span>`,
    `"I'm selfish, impatient and a little insecure. I
     make mistakes, I am out of control and at times hard to handle. But if you can't 
     handle me at my worst, then you sure as hell don't deserve me at my best."<br>
     <span>-- Marilyn Monroe</span>`,
    `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."<br>
     <span>-- Albert Einstein</span>`,
    `"A room without books is like a body without a soul."<br>
     <span>-- Marcus Tullius Cicero</span>`,
    `"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."<br>
    <span>-- Maya Angelou</span>`,
    `"Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . ."<br>
     <span>-- C.S. Lewis, The Four Loves</span>`
]

function randomNumebr()
{
    var x = Math.floor(Math.random()*6);
    return x;
}

function generate()
{
    var num = randomNumebr();
    for(i=0 ; i < quote.length ; i++)
        {
            if(i==num)
                {
                    document.getElementById('quote').innerHTML = 
                    `
                        <p>${quote[num]}</p>
                    `
                }
        }
}
