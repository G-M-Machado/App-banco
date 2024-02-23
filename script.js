class clientes {
    #nome;
    #sobrenome;
    #conta;
    #saldo;

    constructor (nome, sobrenome, conta, saldo) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#conta = conta;
        this.#saldo = saldo;
    }

    get nome() {
        return this.#nome;
    }

    get sobrenome() {
        return this.#sobrenome
    }

    get conta() {
        return this.#conta;
    }

    get saldo() {
        return this.#saldo
    }

    set saldo(saldo) {
        return this.#saldo = saldo;
    }

    saque(valor){
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            //TODO (mensagem erro)
        }
    }

    deposito(valor){
        if (valor > 0) {
            this.#saldo += valor;
        } else {
            //TODO (mensagem erro)
        }
    }
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    cadastroCliente();
    verificarClientes();
})

let cliente = [];

function cadastroCliente() {
    let nome = document.querySelector('#NomeDoCliente').value;
    let sobrenome = document.querySelector('#SobrenomeDoCliente').value;
    let conta = document.querySelector('#NumeroConta').value;
    let deposito = document.querySelector('#DepositoInicial').value;
    
    for (i = 0; i < cliente.length; i++) {
        if (cliente[i].conta == conta) {
            console.log("Esta conta já existe");
            return;
        }
    }

    if (deposito < 50) {
        console.log("Depósito mínimo para abertura de conta: R$50,00")
        return
    }

    let Novocliente = new clientes(nome, sobrenome, conta, deposito);
    cliente.push(Novocliente);
    return cliente;
}

function verificarClientes() {
    for (i = 0; i < cliente.length; i++) {
        console.log(cliente[i]);
    }
}

