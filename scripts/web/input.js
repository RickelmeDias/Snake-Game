// Disable space on my input name:

function nospaces(t){
    if(t.value.match(/\s/g)){
      t.value=t.value.replace(/\s/g,'');
    }
  }