window.addEventListener('click', function(e){   
    if (document.getElementById('outside').contains(e.target)){
        window.history.back();
        this.console.log("back");
    } 
  });