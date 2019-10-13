let jokes = document.getElementById('jokes');


  setInterval(function(){

     try {
      async function f(){
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const contentType = response.headers.get('content-type');
          if (!contentType || !contentType.includes('application/json')) {
                  throw new TypeError("Oops, we haven't got JSON!");
                  }
             const json = await response.json();
             jokes.innerHTML=json.value;
                  }  
            f();
              } catch (error) {
         console.log('There has been a problem with your fetch operation: ', error.message);
      }
     
     },5000);