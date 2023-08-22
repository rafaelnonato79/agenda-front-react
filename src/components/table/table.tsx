function Table(){
    return(
        <div className="col-8">
        <div className="row">
            <h1>Lista de Contatos</h1>
        </div>
        <table className="m-3 table table-striped table-hover">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        </div>
    )
}

export default Table