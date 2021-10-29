document.body.addEventListener("wheel", e=>{
    if(e.ctrlKey)
      e.preventDefault();//prevent zoom
  });