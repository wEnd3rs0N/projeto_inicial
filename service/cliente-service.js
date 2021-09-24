const listaClientes = () => {
    return fetch(`http://localhost:3000/profiler`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            } else {
                throw new Error ('Não Foi Possivel Listar Os Cliente')
            }

        })
}

const criarCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profiler`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        if (resposta.ok) {
            return resposta.body
        } else {
            throw new Error ('Não Foi Possivel Criar Um Cliente')
        }
       
    })

}

const deleteCliente = (id) => {
    return fetch(`http://localhost:3000/profiler/${id}`, {
        method: 'DELETE'
    }).then( resposta => {
        if(!resposta.ok){
            throw new Error ('Não Foi Possivel Deletar Um Cliente')
        }
    })
}

const detalharCliente = (id) => {
    return fetch(`http://localhost:3000/profiler/${id}`)
        .then(resposta => {
            if(resposta.ok){
                return resposta.json()
            }else {
                throw new Error ('Não Foi Possivel Detalhar Um Cliente')
            }
        })
}

const atualizarCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profiler/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
        .then(resposta => {
            if(resposta.ok){
                return resposta.json()
            }else{
                throw new Error ('Não Foi Possivel Atualizar Um Cliente')
            } 
        })
}

export const clienteService = {
    listaClientes,
    criarCliente,
    deleteCliente,
    detalharCliente,
    atualizarCliente
}


