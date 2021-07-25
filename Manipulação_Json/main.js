// var JsonDB = 
//  {
//     "results":[]
//   };

var JsonDB = []
  

function Start(){
    if(!localStorage.getItem('SaveJson')){
        localStorage.setItem('SaveJson',JSON.stringify([]))
    }else{
        JsonDB = JSON.parse(localStorage.getItem('SaveJson'))    
        //console.log("JSON: " + JSON.stringify(JsonDB))
        console.log("JSON: " + JsonDB[0].id)
    }
}

  function RefreshJson (){
    Start();
    console.log(JSON.stringify(JsonDB))
    document.getElementById('json').innerHTML = JSON.stringify(JsonDB) 
  }
  
  RefreshJson()
  
  
  
  function add(){
     JsonDB = JSON.parse(localStorage.getItem('SaveJson'))
     var indexJson = JsonDB.length
     var getid = document.getElementById('add').value
     var getType = document.getElementById('type').value
        
     JsonDB[indexJson] = {'cod':indexJson,'idMovie':getid,'type': getType} 
    
   //console.log(JsonDB.results) 
   
   RefreshJson()
    
  }
  
  
  
  