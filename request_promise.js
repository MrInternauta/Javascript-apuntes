

function get(URL){
  return new Promise(function(resolve, reject){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      
      const DONE = 4
      const Ok = 200
      if (this.readyState === DONE){
        if(this.status === Ok){
          resolve(JSON.parse(this.responseText))
          //OK
        }else{
          reject(newError(`Error al realizar peticion: ${this.status}`))
        //error
        }
      }
    }

  xhr.open('GET', URL)
    xhr.send(null)
  })
}


function handleError(err){
  console.log(`ERROR: ${err}`)
}


let luke 
get('https://swapi.co/api/people/1/')
  .then(function(response){
    luke = response
    return get(luke.homeworld) 
  }).then(function(homeworld){
    luke.homeworld = homeworld
    console.log(`Luke nacio en ${luke.homeworld.name}`)
  }).catch((err)=>{
     handleError(err)
  })
