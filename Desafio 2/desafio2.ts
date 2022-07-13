
type Pessoa = {
    nome: string,
    idade: number,
    profissao: Trabalho
}
enum Trabalho {
    Atriz,
    Padeiro
}

let pessoa1: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: Pessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: Trabalho.Padeiro
};

let pessoa3: Pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Pessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}




