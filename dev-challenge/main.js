var tela = document.getElementById("game");
var ctx = tela.getContext('2d');

let pontos = 0
let inimigos = []
let balas = []
var mouse = {
    x: tela.width / 2,
    y: tela.height / 2
}

addEventListener('mousemove', (evento)=>{
    mouse.x = evento.clientX;
    mouse.y = evento.clientY;
})

addEventListener('click', atirar);
addEventListener('keypress', (evento)=>{
    if(evento.code == "Space")
        atirar();
})

class Circulo{
    constructor(x,y,r,c){
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;
    }

    desenhar(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fillStyle = this.c;
        ctx.fill();
        ctx.closePath();
    }

    update(){
        this.desenhar()
    }
}

function atirar(){
    console.log("PEI !");
    let bala = new Circulo(jogador.x, jogador.y, 15, '#fff');

    let vx = mouse.x - bala.x
    let vy = mouse.y - bala.y
    let velocidad = 50;

    let distancia = Math.sqrt(vx*vx + vy*vy);
    bala.dx = vx / distancia;
    bala.dy = vy / distancia;

    bala.dx *= velocidad
    bala.dy *= velocidad

    balas.push(bala)
}

var jogador;

function Iniciar(){
    jogador = new Circulo(0, tela.height/2, 30, '#dadada')
}

function Atualizar(){
    requestAnimationFrame(Atualizar)
    ctx.clearRect(0, 0, tela.width, tela.height);

    jogador.update();

    for(let i = 0; i< balas.length; i++){
        let bala = balas[i];

        bala.x += bala.dx;
        bala.y += bala.dy;

        bala.update();

        
    }

}

Iniciar();
circulo = new Circulo(20,20,2,true)
circulo.desenhar()
Atualizar();
