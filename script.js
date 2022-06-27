let objeto = {
    nome: "Evelyn",
    idade: 17,
    human: true,
}

console.log(objeto)

objeto.impostor = "sus";

delete objeto.idade

console.log(objeto)

let cadastro = [
    {
        nome: "boosfer",
        idade: 20,
        telefone: "234-5678",
        amigos: ["kier","dev","yello","qndres"]
    },
    {
        nome: "kier",
        idade: 19,
        telefone: "2345-678",
        amigos: ["boosfer","dev","yello","qndres"]
    },
    {
        nome: "dev",
        idade: 18,
        telefone: "2345678",
        amigos: ["boosfer","kier","yello","qndres"]
    },
    {
        nome: "qndres",
        idade: 21,
        telefone: "23456-78",
        amigos: ["kier","dev","yello","boosfer"]
    },
    {
        nome: "yello",
        idade: 18,
        telefone: "23-45678",
        amigos: ["wool","boosfer","kier","dev","qndres"]
    }
]
for ( x = 0; x <= 4; x++){
console.log(cadastro[x].amigos[x])
}