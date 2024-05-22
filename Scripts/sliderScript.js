var counter = 2;
setInterval(function(){
    document.getElementById("slideRadio"+counter).checked = true;

    counter++;


    if(counter > 4)
    {
        counter = 1;
    }
}, 8000);
