function get(URL, callback){
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    const DONE = 4
    const Ok = 200
    if (this.readyState === DONE){
      if(this.status === Ok){
        callback(null, JSON.parse(this.responseText))
        //OK
      }else{
        callback(newError(`Error al realizar peticion: ${this.status}`))
        //error
      }
    }
  }

  xhr.open('GET', URL)
    xhr.send(null)
}


function handleError(err){
  console.log(`ERROR: ${err}`)
}

get('https://swapi.co/api/people/1/', function onResponse(err, luke){
  
  if (err){
    handleError(err)
    return
  }
   get(luke.homeworld, function onHomeworkResponse(err, homeworld){
     
     if (err){
       handleError(err)
       return
      } 
     luke.homeworld = homeworld
     console.log(`Luke nacio en ${luke.homeworld.name}`)
   })
   
  
})