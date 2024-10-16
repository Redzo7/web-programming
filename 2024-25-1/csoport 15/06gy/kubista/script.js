const canvas = document.querySelector("canvas");
const brush = canvas.getContext("2d");

brush.lineWidth = 8;
brush.lineJoin = "round"

const kubista = new Image();
kubista.src = "./kubista_kep.webp";

kubista.addEventListener("load", event => {
    // brush.drawImage(kubista, 450, 450);
    // brush.drawImage(kubista, 450, 450, 250, 250);
    brush.drawImage(kubista, 516, 185, 400, 600, 450, 450, 250, 350)
})

brush.fillStyle = "yellow";

brush.beginPath();
    brush.fillRect(0, 260, 200, 50);
    brush.rect(450, 250, 100, 100);
brush.stroke();

brush.beginPath();
    // vonalak kirajzolása
    brush.moveTo(0, 370);
    brush.lineTo(50, 360);
    brush.lineTo(50, 120);
    brush.lineTo(330, 120);
    brush.lineTo(330, 340);
    brush.lineTo(75, 550);
    brush.lineTo(0, 550)
// !!! enélkül nem rajzolja ki
brush.stroke();

brush.beginPath();
    brush.moveTo(40, 700);
    brush.lineTo(40, 550);

    brush.moveTo(250, 700);
    brush.lineTo(250, 405);
brush.stroke();

brush.beginPath();
    brush.moveTo(300, 700);
    brush.lineTo(250, 600);
brush.stroke();

brush.beginPath();
    brush.moveTo(60, 460);
    brush.lineTo(0, 460);

    brush.moveTo(60, 460);
    brush.lineTo(0, 445);

    brush.moveTo(60, 460);
    brush.lineTo(0, 485);
brush.stroke();

brush.beginPath();
    brush.moveTo(330, 200);
    brush.lineTo(170, 200);
brush.stroke();

brush.strokeStyle = "red"
brush.beginPath();
    brush.arc(330, 280, 50, 0, 2 * Math.PI);
brush.stroke();

