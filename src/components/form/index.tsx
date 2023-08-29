import React, { useState } from "react";
import IContato from "../../types/contatos";
import Botao from "../Botao";

interface IformularioProps{
    setContatos: React.Dispatch<React.SetStateAction<IContato[]>>;
}

function Form({setContatos}:IformularioProps){
    
    const [nome, setNome] = useState("");
    const [fone, setFone] = useState("");

    function adicionarContato(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault(); 
        setContatos((contatos) => [...contatos, {nome, fone}]
        );
        setNome("");
        setFone("");
        const formulario = evento.target as HTMLFormElement;
        formulario.reset();
    }

    // function salvar(event: React.FormEvent<HTMLFormElement>){
    //     // previne o comportamento padrão do formulario
    //     event.preventDefault();
    //     //converte o evento para um elemento do DOM
    //     const formulario = event.target as HTMLFormElement;
    //     //cria um objeto FormData a partir do formulario
    //     const dados = new FormData(formulario);
    //     // cria um contato com os dados do formulario
    //     const contato: IContato = {
    //         nome: dados.get('nome') as string,
    //         fone: dados.get('fone') as string
    //     }
    //     console.log(contato);
    // }


    return(
        <div>
        <div className="d-flex justify-content-lg-center">
            <h1>Cadastro de Contatos</h1>
        </div>
        <form id="formulario-de-cadastro" className="m-3" onSubmit={adicionarContato}>
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                   <div className="input-group">
                        <span className="input-group-text">
                        <i className="fas fa-user"></i>
                        </span>
                        <input type="text" className="form-control" name="nome" id="nome"/>
                    </div>
            </div>
            <div className="mb-3">
                <label htmlFor="telefone" className="form-label">Telefone:</label>
                    <div className="input-group">
                        <span className="input-group-text">
                           <i className="fas fa-phone"></i>
                       </span>
                       <input type="tel" className="form-control" name="fone" id="fone"/>
                   </div>
            </div>
               <div className="mb-3 d-flex justify-content-lg-center">
                   <Botao type="submit" className="m-1 btn btn-primary" >
                      <i className="fas fa-floppy-disk"></i> Salvar
                   </Botao>
                   <Botao type="reset" className="m-1 btn btn-danger">
                      <i className="fas fa-broom"></i> Limpar
                  </Botao>
             </div>
          </form>
        </div>
    );
}

export default Form