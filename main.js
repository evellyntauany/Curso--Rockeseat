function verificar(idade){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(idade >= 18){
                resolve()
            } else {
                reject()
            }
        }, 2000)
    })
}

verificar(30)
    .then(function() {
        console.log('Maior de 18 anos')
    })
    .catch(function() {
        console.log('Menor de 18 anos')
    })

    var listElement = document.querySelector('ul');
    var inputElement = document.querySelector('input');
    
    function renderRepositories(repositories){
    
    let tempo = setTimeout(function() {
        listElement.innerHTML  =  " " ;
        for(repo of repositories){
            const textElement = document.createTextNode(repo.name);
            const liElement = document.createElement('li');
    
            liElement.appendChild(textElement);
            listElement.appendChild(liElement);
        }
    }, 2000)
       
    }

    function renderLoading ( loading )  { 
            var textElement  =  document.createTextNode ( 'Carregando ...' ) ;
            var loadingElement  =  document.createElement ( 'li' ) ;
            loadingElement.appendChild ( textElement ) ;
            listElement.appendChild ( loadingElement );
      }

    function renderError ( loading )  {
        listElement.innerHTML  =  " " ;
        var textElement  =  document.createTextNode ( 'erro 404' ) ;
        var errorElement  =  document.createElement ( 'div' ) ;
        errorElement.style.color  =  "#F00" ;
        errorElement.style.fontSize = 30;
        errorElement.appendChild ( textElement ) ;
        listElement.appendChild ( errorElement ) ;
      }
    
    function listRepositories(){
        var user = inputElement.value;
    
        axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
          renderRepositories(response.data);
        })

        .catch ( function  ( )  {
            renderError( ) ;
          }) ;
    }