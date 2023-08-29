import React from "react"
import IContato from "../../types/contatos"

function Table(){

    const contatos: IContato[]= [
        {nome:"Maria", fone:"1111-111"},
        {nome:"Joao", fone:"222-2222"},
        {nome:"Jose", fone:"3333-3333"},
        {nome:"Ana", fone: "4444-444"},  
        {nome:"Carlos",fone:"5555-5555"}  
    ];
    return(
        <div>
        <div className="d-flex justify-content-lg-center">
            <h1>Lista de Contatos</h1>
        </div>
        <table id="lista-de-contatos" className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {contatos.map((contato, indice) =>(
                    <tr key = {indice}>
                        <td>{ contato.nome}</td>
                        <td>{contato.fone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default Table