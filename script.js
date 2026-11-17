let userText = document.getElementById('userText');

let output = document.getElementById('output')

let filterBtn = document.getElementById('filterBtn');

let  clearBtn = document.getElementById('clearBtn');

// words to censor
let words = ['annoying', 'careless', 'ridiculous', 'useless'];

// filter button
filterBtn.addEventListener('click',function() {
    let text = userText.value;
    
    words.forEach(function(word){
        let parts = text.split(word);

        text = parts.join(word[0]+'*'+word.slice(2));
    });

    output.textContent = text;
    userText.value = ''
});


clearBtn.addEventListener('click',function(){

    userText.value ='';
    output.textContent = 'filtered text';
});

