//promesas
  const promise = new Promise(function(resolve, reject){
    //Tarea asincrona
    setTimeout(function(){
      reject(new Error ('Se produjo un error'))
    }, 1000)

  })
 //suscribirse a promesa
 promise
   .then(function(){
      
      })
   .catch(function(err){
   
 })