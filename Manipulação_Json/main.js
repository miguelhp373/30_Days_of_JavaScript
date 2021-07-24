var JsonDB = 
 {
    "results":[ 
    {
      'cod':'0' ,
      'idMovie':'588228' ,
      'type':'movie'
    },
       {
       'cod':'1', 
       'idMovie':'70523' ,
       'type':'tv'
    }
    ]
  };
  
  function RefreshJson (){
    document.getElementById('json').innerHTML = JSON.stringify(JsonDB, null, ' ') 
  }
  
  RefreshJson()
  
  
  
  function add(){
    
     var indexJson = JsonDB.results.length
     var getid = document.getElementById('add').value
     var getType = document.getElementById('type').value
        
     JsonDB.results[indexJson] = {'cod':indexJson,'idMovie':getid,'type': getType} 
    
   //console.log(JsonDB.results) 
   
   RefreshJson()
    
  }
  
  
  
  