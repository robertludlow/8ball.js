const 8ball = (userQuestion) => {
    this._userQuestion = userQuestion;
    console.log(userQuestion);

    const phrasesYes = ["It is certain", "Without a doubt", "You may rely on it", "Yes definitely", "It is decidedly so", "As I see it, yes", "Most likely", "Yes", "Outlook good", "Signs point to yes"]
    const phrasesNo = ["Don’t count on it", "Outlook not so good", "My sources say no", "Very doubtful", "My reply is no"]
    const phrasesTryAgain = ["Reply hazy try again", "Better not tell you now", "Ask again later", "Cannot predict now", "Concentrate and ask again"];
        //the magic 8 ball response.

    const replyYes = ["Plan 'A' it is!", "I knew you had it in you.", "Go get them!", "Good on ya!", "Ask her out!", "Buy that cat!", "You're pretty handsome.", "I'm 100% confident.", "Let's do this.", "We are green for go."]
    const replyNo = ["You coward.", "I didn't think so.", "Stick to using crayons.", "Avoid ink, and stick with the pencils.", "Script-Kiddy!"];
        //the program's reply based on yes, or no. 'Try again' does not generate a reply.

    const yesNoTry = Math.floor((Math.random() * 3));
    const reply = 0;
    switch (yesNoTry) {
        case 0:
            reply = Math.floor((math.random() * 10))
            console.log(phrasesYes[reply]);
            console.log(replyYes[reply]);
            break;
        case 1:
            reply = Math.floor((Math.random() * 5));
            console.log(phrasesNo[reply]);
            console.log(replyNo[reply]);
            break;
        case 2:
            reply = Math.floor((Math.random() * 5));
            console.log(phrasesTryAgain[reply]);
            break;
        //selects yes, no, or try by randomly assign a number from 0-2, then selects a random phrase and reply if any by same method.
    }
}

