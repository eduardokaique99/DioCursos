class Classe {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === 'mago') {
            ataque = 'magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'espada';
        } else if (this.tipo === 'monge') {
            ataque = 'artes marciais';
        } else if (this.tipo === 'ninja') {
            ataque = 'shuriken';
        } else {
            ataque = 'ataque desconhecido';
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}
const heroi1 = new Classe("Roberto", 25, "guerreiro");
heroi1.atacar();

const heroi2 = new Classe("Mariana", 20, "mago");
heroi2.atacar();

const heroi3 = new Classe("Jorge", 30, "ninja");
heroi3.atacar();

const heroi4 = new Classe("Jurema", 35, "monge");
heroi4.atacar();
