// cheesify.js

// Listen for messages on the content page
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'cheesify') cheesify();
    if (request.action === 'acceptrequest') acceptrequest();
  }
);

// Our image replacement script
function cheesify() {
  alert("sam !!1");
  /*document.querySelectorAll('img').forEach( (img) => {
    img.src = `https://source.unsplash.com/${img.width}x${img.height}/?cheese&${Math.random()}`;
    img.srcset = img.src;
  })*/
  var counter=0, htmlCode, ipos;
    var buttons = document.getElementsByTagName("span");
 
    for (i = 0; i < buttons.length; i++){
           htmlCode = buttons[i].outerHTML.toLowerCase();
           ipos = htmlCode.indexOf("add friend");
           if(counter<=5)
           {
           if(ipos > -1){
                 buttons[i].click();
                 console.log("Done");
                 counter++;
           }
           }
    }
    alert ("Done "+counter)
}

function acceptrequest()
{

  alert ("acceptrequest");
  var counter=0, htmlCode, ipos;
 
  var buttons = document.getElementsByTagName("span");

  for (i = 0; i < buttons.length; i++){
         htmlCode = buttons[i].outerHTML.toLowerCase();
         ipos = htmlCode.indexOf("confirm");

         if(ipos > -1){
               buttons[i].click();
               console.log("Done");
               counter++;
         }
  }

  alert(counter + " friend requests auto confirmed");
}