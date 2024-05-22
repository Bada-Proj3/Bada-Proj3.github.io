function toggleCart()
{
    cont = document.getElementsByClassName("panContainer");
    cont = cont[0];
    if(cont.style.display == 'grid')
    {
        cont.style.display = 'none';    
    }
    else
    {
        cont.style.display = 'grid';
    }
    pan = document.getElementsByClassName("panieraff");
    pan = pan[0];
    pan.classList.toggle("showcart");
}