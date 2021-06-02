
function verificar(age){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(age >= 18){
                resolve()
            } else {
                reject()
            }
        }, 2000)
    })
}

verificar(20)
    .then(function() {
        console.log('Maior de 18 anos')
    })
    .catch(function() {
        console.log('Menor de 18 anos')
    })