class contas {
    #conta;
    #saldo
    #situacao;

    constructor(conta, saldo, situacao){
        this.#conta = conta;
        this.#saldo = saldo;
        this.#situacao = situacao;
    }

    get conta() {
        return this.#conta;
    }

    get saldo() {
        return this.#saldo
    }

    get situacao(){
        return this.#situacao
    }

    set saldo(saldo) {
        return this.#saldo = saldo;
    }

    saque(valor){
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            alert('saldo insuficiente')
        }
    }

    deposito(valor){
        if (valor > 0) {
            this.#saldo += valor;
        } else {
            alert('Depósito deve conter algum valor')
        }
    }
}

class clientes extends contas {
    #nome;
    #sobrenome;

    constructor (nome, sobrenome, conta, saldo, situacao) {
        super(conta, saldo, situacao);
        this.#nome = nome;
        this.#sobrenome = sobrenome;
    }

    get nome() {
        return this.#nome;
    }

    get sobrenome() {
        return this.#sobrenome
    }


}

document.querySelector('#formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    cadastroCliente();
    verificarClientes();
    verificarConta()

    document.querySelector('#NomeDoCliente').value = '';
    document.querySelector('#SobrenomeDoCliente').value = '';
    document.querySelector('#NumeroConta').value = '';
    document.querySelector('#DepositoInicial').value = '';
})

let cliente = [];
let numeroConta =[];

function cadastroCliente() {
    let nome = document.querySelector('#NomeDoCliente').value;
    let sobrenome = document.querySelector('#SobrenomeDoCliente').value;
    let conta = document.querySelector('#NumeroConta').value;
    let saldo = document.querySelector('#DepositoInicial').value;
    
    //for (i = 0; i < cliente.length; i++) {
    //    if (cliente[i].conta == conta) {
    //        console.log("Esta conta já existe");
    //        return;
    //    }
    //}

    if (cliente.some(c => c.conta == conta)) {
        console.log("Esta conta já existe");
        return;
    }

    if (saldo < 50) {
        console.log("Depósito mínimo para abertura de conta: R$50,00")
        return
    }

    let NovaConta = new contas(conta, saldo, situacao = true);
    numeroConta.push(NovaConta);

    let Novocliente = new clientes(nome, sobrenome, conta, saldo, situacao = true);
    cliente.push(Novocliente);

    document.querySelector('#confirmacao').textContent = `Cadastro de ${Novocliente.nome}, conta número ${NovaConta.conta} realizado com sucesso!`
    setTimeout(function(){
        document.querySelector("#confirmacao").textContent = '';
    }, 5000);


    return cliente, numeroConta;
}


function verificarClientes() {
    for (i = 0; i < cliente.length; i++) {
        console.log(cliente[i]);
    }
}

function verificarConta() {
    for (i = 0; i < numeroConta.length; i++) {
        console.log(numeroConta[i]);
    }
}




// pesquisa cliente

document.querySelector('#formConsulta').addEventListener('submit', function(event) {
    event.preventDefault();
    atualizarDados();

    document.querySelector('#consultaCliente').value = '';
    document.querySelector('#ConsultaConta').value = '';
})


function atualizarDados() {
    let nomeCliente = document.querySelector("#consultaCliente").value;
    let numeroConta = document.querySelector("#ConsultaConta").value;

    let clienteEncontrado = cliente.find(c => c.nome === nomeCliente && c.conta === numeroConta);

    if (clienteEncontrado) {
        document.querySelector('#nome').textContent = clienteEncontrado.nome + ' ' + clienteEncontrado.sobrenome;
        document.querySelector('#saldo').textContent = clienteEncontrado.saldo;
        document.querySelector('#situacao').textContent = clienteEncontrado.situacao ? 'Ativa' : 'Inativa';
    } else {
        console.log('Cliente não encontrado');
    }
}