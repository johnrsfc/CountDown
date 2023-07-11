const count = setInterval(() => {
        let newYear = new Date('May 20, 2023 23:15:30');
        let data = new Date();
    
        const resultInMs       = newYear - data;
        const differenceInDays = Math.abs(Math.floor(resultInMs / (1000 * 60 * 60 * 24)));

        const differenceInHours   = Math.abs(Math.floor( (resultInMs % (1000 * 60 * 60 * 24) ) / (1000 * 60 * 60)));
        const differenceInMinutes = Math.abs(Math.floor( (resultInMs % (1000 * 60 * 60)) / (1000 * 60) ));
        const differenceInSeconds = Math.abs(Math.floor((resultInMs % (1000 * 60)) / 1000));
    
        document.querySelector('.days').innerHTML    = `${differenceInDays}`;
        document.querySelector('.hours').innerHTML   = `${differenceInHours}`;
        document.querySelector('.minutes').innerHTML = `${differenceInMinutes}`;
        document.querySelector('.seconds').innerHTML = `${differenceInSeconds}`;

        if(count < 0) {
            clearInterval(resultInMs);
            alert('Irrrrul Chegou o Grande Dia!');
        }
}, 1000)
    

