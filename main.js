document.getElementById("submit").addEventListener("click" , function(e){
  
   e.preventDefault();

   // var obj = {
   //    title: document.getElementById("titletext").value,
   //    body: document.getElementById("bodytext").value,
   //    userId: document.getElementById("userid").value,
   // }
fetch('https://jsonplaceholder.typicode.com/posts', {
   method: 'POST',
   body: new FormData(document.getElementById("myform")),
   headers: {
     'Content-type': 'application/x-www-form-urlencoded',
   },
 })
   .then((response) => response.json())
   .then((json) => console.log(json));
 
})


   // Post - to insert 
   // Put - to update
   // Delete - to delete
   // Get - to read (Default)

   // BODY -  { Form , JSON ,Text }: Data
  
   //   Header -{
   //   Content Type :'application / (json/text/form)' ; 
   //   }
