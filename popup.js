if ('SecurityPolicyViolationEvent' in window) { // Check browser support
    window.addEventListener('securitypolicyviolation', function(e) {
      console.log( e.violatedDirective, e.originalPolicy );
      });
    }
  document.getElementById("erase").addEventListener('click', deleteCookies);
  document.getElementById("jo").addEventListener('click', jojoPic);

  function getCook(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCook(name) {   
    document.cookie = name+'=; Max-Age=-99999999;path=/';  
}

function deleteCookies() {
    alert("Delete cookies !!!"+getCook("stop"));
    eraseCook("stop");
    alert("Deleted !!!"+getCook("stop")+" jo "+getCook("jojo"));
}

let file = "img/joseph.png";
let url = chrome.runtime.getURL(file);

function jojoPic() {
    let imgs = document.getElementsByTagName('img');

    for(imgElt of imgs) {
      imgElt.src = url;
    }
    document.cookie = "jojo"+'=1; Max-Age=10;path=/'
}