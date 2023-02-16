document.addEventListener("click", function(e) {
    const body = document.getElementsByTagName('body')[0];
    let x = e.clientX;
    let y = e.clientY + window.pageYOffset;
    const size = 500;

    const canvas = document.createElement('canvas');

    canvas.style.position = 'absolute';
    canvas.style.top = `${y - size}px`;
    canvas.style.left = `${x - size / 2}px`;
    canvas.style.height = `${size}px`;
    canvas.style.width = `${size}px`;
    canvas.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    canvas.style.zIndex = 9000;

    body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    ctx.height = size;
    ctx.width = size;

    const gravity = 1;

    const particals = [
        {
            posX: 150,
            posY: 150,
            vx: -10 + Math.random() * 20,
            vy: -5 - Math.random() * 10,
            color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        },
        {
            posX: 150,
            posY: 150,
            vx: -10 + Math.random() * 20,
            vy: -5 - Math.random() * 10,
            color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        },
        {
            posX: 150,
            posY: 150,
            vx: -10 + Math.random() * 20,
            vy: -5 - Math.random() * 10,
            color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        },
        {
            posX: 150,
            posY: 150,
            vx: -10 + Math.random() * 20,
            vy: -5 - Math.random() * 10,
            color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        },
        {
            posX: 150,
            posY: 150,
            vx: -10 + Math.random() * 20,
            vy: -5 - Math.random() * 10,
            color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        },
        {
            posX: 150,
            posY: 150,
            vx: -10 + Math.random() * 20,
            vy: -5 - Math.random() * 10,
            color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        },
        {
            posX: 150,
            posY: 150,
            vx: -10 + Math.random() * 20,
            vy: -5 - Math.random() * 10,
            color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        },
        {
            posX: 150,
            posY: 150,
            vx: -10 + Math.random() * 20,
            vy: -5 - Math.random() * 10,
            color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        },
        {
            posX: 150,
            posY: 150,
            vx: -10 + Math.random() * 20,
            vy: -5 - Math.random() * 10,
            color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        },
        {
            posX: 150,
            posY: 150,
            vx: -10 + Math.random() * 20,
            vy: -5 - Math.random() * 10,
            color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        },
    ];

    const interval = setInterval(() => {
        particals.forEach((partical, index) => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0)';
            ctx.fillRect(0, 0, size, size);

            ctx.beginPath();
            ctx.fillStyle = partical.color;
            // After setting the fill style, draw an arc on the canvas
            ctx.arc(partical.posX, partical.posY, 1, 0, Math.PI*2, true);
            ctx.closePath();
            ctx.fill();

            particals[index].posX += particals[index].vx;
            particals[index].posY += particals[index].vy;
            particals[index].vy += gravity;
        });
    }, 20)

    setTimeout(() => {
        clearInterval(interval);
        canvas.remove();
    }, 500);
}, false);
