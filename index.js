window.onload = ()=>{
    const colors = ["rgb(81, 99, 122)", "rgb(116, 91, 87)", "rgb(240, 240, 240)", "rgb(204, 204, 204)"];
    btn = document.querySelector('#btn');
    svgs = document.querySelectorAll('svg')
    countdown: 0;
    
    btn.addEventListener('click', () =>{
        svgs.forEach(svg =>{
            let random = Math.trunc(Math.random() * 4);;
            svg.style.fill = colors[random];
        });
    });



}

