const 8ball = (user_question) => {
    const user_question.self = user_question;
    console.log(user_question);

    const phrases_yes = ["It is certain", "Without a doubt", "You may rely on it", "Yes definitely", "It is decidedly so", "As I see it, yes", "Most likely", "Yes", "Outlook good", "Signs point to yes"]
    const phrases_no = ["Don’t count on it", "Outlook not so good", "My sources say no", "Very doubtful", "My reply is no"]
    const phrases_try_again = ["Reply hazy try again", "Better not tell you now", "Ask again later", "Cannot predict now", "Concentrate and ask again"];
        //the magic 8 ball response.

    const reply_yes = ["Plan 'A' it is!", "I knew you had it in you.", "Go get them!", "Good on ya!", "Ask her out!", "Buy that cat!", "You're pretty handsome.", "I'm 100% confident.", "Let's do this.", "We are green for go."]
    const reply_no = ["You coward.", "I didn't think so.", "Stick to using crayons.", "Avoid ink, and stick with the pencils.", "Script-Kiddy!"];
        //the program's reply based on yes, or no. 'Try again' does not generate a reply.

    const yes_no_try = Math.floor((Math.random() * 3));
    const reply = 0;
    switch (yes_no_try) {
        case 0:
            reply = Math.floor((math.random() * 10))
            console.log(phrases_yes[reply]);
            console.log(reply_yes[reply]);
            break;
        case 1:
            reply = Math.floor((Math.random() * 5));
            console.log(phrases_no[reply]);
            console.log(reply_no[reply]);
            break;
        case 2:
            reply = Math.floor((Math.random() * 5));
            console.log(phrases_try_again);
            break;
        //selects yes, no, or try by randomly assign a number from 0-2, then selects a random phrase and reply if any by same method.
    }
}

