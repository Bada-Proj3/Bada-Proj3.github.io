window.addEventListener("load", () => {
    setTimeout(hideLoader, 4000);
    setTimeout(loadBs, 4000);
});

let webglContexts = []; // Array to store WebGL contexts

function hideLoader() {
    var loader = document.getElementById('loader');
    loader.style.display = 'none';

    const mobLDiv = document.querySelectorAll("div.loadMobile");
    mobLDiv.forEach(mob => {
        mob.classList.add("hidden");
        setTimeout(() => {
            mob.parentNode.removeChild(mob);
        }, 3000);
    });

    const canvases = document.querySelectorAll("canvas");
    canvases.forEach(canvas => {
        canvas.classList.add("hidden");
        setTimeout(() => {
            canvas.parentNode.removeChild(canvas);
        }, 3000);
        // Check if the canvas has a WebGL context
        const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (context) {
            webglContexts.push(context); // Store WebGL context for later use
        }
    });

    const scripts = document.querySelectorAll("script.loadAnimScripts");
    scripts.forEach(script => {
        script.classList.add("hidden");
        setTimeout(() => {
            script.parentNode.removeChild(script);
        }, 3000);
    });

    const divY = document.querySelectorAll("div#cavCon");
    divY.forEach(div => {
        div.classList.add("hidden");
        setTimeout(() => {
            div.parentNode.removeChild(div);
        }, 3000);
    });

    var sound = new Audio("../Sounds/Login.mp3");
    sound.play();

    stopWebGLRendering(); // Stop WebGL rendering after hiding elements
}

function stopWebGLRendering() {
    // Iterate over stored WebGL contexts and disable rendering
    webglContexts.forEach(context => {
        const ext = context.getExtension('WEBGL_lose_context');
        if (ext) {
            ext.loseContext(); // Lose WebGL context to stop rendering
        }
    });
}

function loadBs() {
    const bsFiles = document.querySelectorAll(".bsFiles");
    console.log(bsFiles);
    bsFiles.forEach(element => {
        element.removeAttribute("disabled");
    });
}

function load() {
    var screenWidth = screen.width;
    var loader = document.getElementById('loader');

    if (screenWidth >= 721) {
        loader.style.display = 'none';

        RGBA(`
        vec2 uv = gl_FragCoord.xy/resolution - 0.5;
        uv.x *= resolution.x/resolution.y;
        if (uv.x > 0.0) uv.y = -uv.y;
        
        float r = 0.2*cos(2.0*atan(uv.y, uv.x));
        float d = dot(uv, uv);
        float s = 0.0015/sqrt(d);
        float c = 1.0 - smoothstep(r, r+s, d)
                        - smoothstep(r, r-s, d);
        
        gl_FragColor = vec4(c, c, c, 1.0);
        
        vec3 p = vec3(0.5, 0.2, 0.33);
        r = sqrt(r);
        d = pow(d, 0.2) * 25.0;
        
        for (float i = 1e-6; i < 1.0; i += 0.05) {
            float t = 1.0 + time*1.5 + i;
            vec2 uv2 = uv + vec2(cos(t), sin(t)) * r;
            vec3 color = vec3(sin(t*4.0), cos(t*3.0), sin(t*7.0));
            c = smoothstep(i/d, 0.0, length(uv2));
            gl_FragColor += vec4(p * (1.0 + color) * c, 1.);   
        }
    `, {
        record: false
    });
    } else {
        // Show the loader
        loader.style.display = 'block';
    }
}
