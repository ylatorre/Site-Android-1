

var isIE = window.XDomainRequest ? true : false;         
var invocation = createCrossDomainRequest();         
var url = 'http://172.16.10.10'; // adresse IP serveur Arduino 
     
setInterval(function(){httpReq("vide");},1500);  //requete Http toutes les 1,5s 
   
   
  function createCrossDomainRequest(url, handler)         
  {             
    var request;  
    if (isIE)  
    {         
      if (window.ActiveXObject)  
      {             
        try  
        {                 
          request = new ActiveXObject("Msxml2.XMLHTTP"); 
        }  
        catch(e)  
        {                 
          request = new ActiveXObject("Microsoft.XMLHTTP");             
        }         
      } 
    }         
    else             
    {                 
      request = new XMLHttpRequest();             
    }             
    return request;         
  } 
   
  function handler(evtXHR)         
  {             
    if (invocation.readyState == 4)             
    {                
      if (invocation.status == 200)                 
      {                    
        outputResult();                 
      }                 
      else                 
      {                     
        //alert("Le serveur ne veut pas répondre!!!");                 
      }     
    }         
  } 
      
  /***************************************************************/ 
   
   
  function httpReq(val)        // pour envoyer une requete http 
  {        
    if (invocation)             
    {                                    
      invocation.open('POST', url, true); // méthode POST 
      invocation.onreadystatechange = handler;  
      invocation.setRequestHeader("Content-type", "application/x-www-form-urlencoded");    
      invocation.send(val);               
    }                   
    else             
    {                 
      var text = "No Invocation TookPlace At All";                 
      var textNode = document.createTextNode(text);                 
      var textDiv = document.getElementById("textDiv");                
      textDiv.appendChild(textNode);             
    }    
  } 
   
   
  function outputResult()       // Traitement de la réponse à la requete http 
  {            
  var response = invocation.responseText;  
   
  var rep1 = response.indexOf("*",0); //rep1->place "*" dans response 
 

 
  if (response.indexOf("EtatPortail",0)!=-1)  
    document.getElementById("ouvrir").innerHTML = "test"; 

  if (response.indexOf("EtatPortail",0)!=-1)  
    document.getElementById("fermer").innerHTML = "test2"; 


 
  } 












































// var isIE = window.XDomainRequest ? true : false;         
// var invocation = createCrossDomainRequest();         
// var url = 'http://172.16.10.10'; // adresse IP serveur Arduino 
     
// setInterval(function(){httpReq("vide");},1500);  //requete Http toutes les 1,5s 
   

//     function createCrossDomainRequest(url, handler)         
//     {             
//       var request;  
//       if (isIE)  
//       {         
//         if (window.ActiveXObject)  
//         {             
//           try  
//           {                 
//             request = new ActiveXObject("Msxml2.XMLHTTP"); 
//           }  
//           catch(e)  
//           {                 
//             request = new ActiveXObject("Microsoft.XMLHTTP");             
//           }         
//         } 
//       }         
//       else             
//       {                 
//         request = new XMLHttpRequest();             
//       }             
//       return request;         
//     } 
     
//     function handler(evtXHR)         
//     {             
//       if (invocation.readyState == 4)             
//       {                
//         if (invocation.status == 200)                 
//         {                    
//           outputResult();                 
//         }                 
//         else                 
//         {                     
//           //alert("Le serveur ne veut pas répondre!!!");                 
//         }     
//       }         
//     } 


//   function httpReq(val)        // pour envoyer une requete http 
//   {        
//     if (invocation)             
//     {                                    
//       invocation.open('POST', url, true); // méthode POST 
//       invocation.onreadystatechange = handler;  
//       invocation.setRequestHeader("Content-type", "application/x-www-form-urlencoded");    
//       invocation.send(val);               
//     }                   
//     else             
//     {                 
//       var text = "No Invocation TookPlace At All";                 
//       var textNode = document.createTextNode(text);                 
//       var textDiv = document.getElementById("textDiv");                
//       textDiv.appendChild(textNode);             
//     }    
//   } 





   
//   function outputResult()       // Traitement de la réponse à la requete http 
//   {            
//   var response = invocation.responseText;  
   
//   var rep1 = response.indexOf("*",0); //rep1->place "*" dans response 
 
//   document.getElementById("valPotar").innerHTML = "<p>"+response.substring(0,rep1)+"</p>"; 
 
//   if (response.indexOf("led0",0)!=-1)  
//     document.getElementById("EtatPortail").innerHTML = "<h1>Ouvert</h1>"; 

//   if (response.indexOf("led1",0)!=-1)  
//     document.getElementById("EtatPortail").innerHTML = "<h1>Fermer</h1>"; 

 
//   } 
