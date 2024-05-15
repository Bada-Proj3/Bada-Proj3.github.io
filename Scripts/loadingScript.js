window.addEventListener("load", () => {
    setTimeout(remove,5000);
});

function remove()
{
    var loader = document.getElementById('loader');
    loader.style.display = 'none';

    const mobLDiv = document.querySelectorAll("div.loadMobile");
    console.log(mobLDiv);
    mobLDiv.forEach(mob => {
        mob.classList.add("hidden");
        setTimeout(() => {
            mob.parentNode.removeChild(mob);
        }, 1000); // wait for the transition duration
    });
    // Remove all canvas elements
    const canvases = document.querySelectorAll("canvas");
    canvases.forEach(canvas => {
        canvas.classList.add("hidden");
        setTimeout(() => {
            canvas.parentNode.removeChild(canvas);
        }, 1000); // wait for the transition duration
    });

    // Remove all script elements with class "x"
    const scripts = document.querySelectorAll("script.loadAnimScripts");
    scripts.forEach(script => {
        script.classList.add("hidden");
        setTimeout(() => {
            script.parentNode.removeChild(script);
        }, 1000); // wait for the transition duration
    });

    // Remove all div elements with id "y"
    const divY = document.querySelectorAll("div#cavCon");
    divY.forEach(div => {
        div.classList.add("hidden");
        setTimeout(() => {
            div.parentNode.removeChild(div);
        }, 1000); // wait for the transition duration
    });
}
