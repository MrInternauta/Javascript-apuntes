const  makePrefixer = (pref)=>  (palabra)=> pref + palabra 

const PrefijoIn = makePrefixer('In');
PrefijoIn("creible")