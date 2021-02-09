 document.querySelector('.get-jokes').addEventListener('click', getJoke);

 function getJoke(e){
    const number = document.getElementById
    ('number').value;

    if(number.length == 0){
        const div = document.createElement('div');
        div.className = `alert error`;
        div.appendChild(document.createTextNode("Please fill the number"));
    
        const container = document.querySelector
        ('.container');
        const form = document.getElementById('form');
        container.insertBefore(div, form);
    
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    } else {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    
        xhr.onload = function (){
            const ul = document.querySelector('.jokes');
            let output ='';
            const jokes = JSON.parse(xhr.responseText);
           
            if(jokes.type ==='success'){
                jokes.value.forEach(function(joke){
                    output +=`<li>${joke.joke} </li>`
                })
            } else {
                output +=`<li>Something went wrong!!</li>` ;
            }
    
            ul.innerHTML = output;
    
        }
        
        xhr.send();
    }

    
    setTimeout(() => {
        document.querySelector('.jokes').innerHTML = ``;
    }, 8000*number);
    
    

    
    e.preventDefault();  
}