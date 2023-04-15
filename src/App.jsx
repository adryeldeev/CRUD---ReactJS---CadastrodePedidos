import React from "react";
import { useState } from "react";
import { Button, Container, Flex, H1, Input, Item, Spacer, Ul } from "./styles";



function CadastroDePedidos() {

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [quantidade, setQuantidade] = useState('')

    const [listDados, setListDados] = useState(()=> {
        const savedDados = localStorage.getItem("dados");
        return savedDados ? JSON.parse(savedDados) : [];
      });
    const [editando, setEditando] = useState(false);
    const [idEditando, setIdEditando] = useState(null);

    const onChangeNome = (event) => {
        setNome(event.target.value)
    }

    const onChangePreco = (event) => {
        setPreco(event.target.value)
    }
    const onChangeQuantidade = (event) => {
        setQuantidade(event.target.value)
    }

    const toCadastro = (event) => {
        event.preventDefault()

        if (!nome && !preco && !quantidade) return alert("Preencha uma tarefa");
        const newDados = {
            event: Math.random(),
            nome: nome,
            preco: preco,
            quantidade: quantidade,


        };
        setListDados([...listDados, newDados]);
        setNome("");
        setPreco("");
        setQuantidade("");

        const savedDados = localStorage.getItem("dados");
        let dados = savedDados ? JSON.parse(savedDados) : [];
        dados.push(newDados);
        localStorage.setItem("dados", JSON.stringify(dados));

    }
    const removeDado = (event) => {
        const newDados = listDados.filter((item) => item.event !== event)
        setListDados(newDados)
        localStorage.setItem('dados', JSON.stringify(newDados));
    }
    const editarDado = (event) => {
        event.preventDefault();
        const newDados = listDados.map((item) =>
            item.event === idEditando ? { ...item, nome, preco, quantidade } : item
        );
        setListDados(newDados);
        setNome("");
        setPreco("");
        setQuantidade("");
        setEditando(false);
        setIdEditando(null);
    };

    const editar = (event, item) => {
        event.preventDefault();
        setNome(item.nome);
        setPreco(item.preco);
        setQuantidade(item.quantidade);
        setEditando(true);
        setIdEditando(item.event);
    };

    return (

        <Container style={{ justifyContent: "center" }}>

            <h1 className="title">Cadastro de Pedidos</h1>
            <Spacer />
            <form >
                <Flex direction="row">
                    <label htmlFor="Nome">Nome do Produto</label>
                    <Input id="Nome"
                        type="text"
                        required="required"
                        placeholder="Nome"
                        value={nome}
                        onChange={onChangeNome}
                    ></Input>
                </Flex>
                <Spacer margin="16px" />
                <Flex direction="row">
                    <label htmlFor="Preço" id="">Preço do Produto</label>
                    <Input id="produto"
                        type="text"
                        required="required"
                        placeholder="Preço"
                        value={preco}
                        onChange={onChangePreco}
                    ></Input>
                </Flex>
                <Spacer margin="16px" />
                <Flex direction="row">
                    <label htmlFor="Quantidade" id="">Quantidade</label>
                    <Input id="quantidade"
                        type="text"
                        required="required"
                        placeholder="Quantidade"
                        value={quantidade}
                        onChange={onChangeQuantidade}
                    ></Input>
                </Flex>
            </form>
            <Spacer />
            <Button className="btn-form" onClick={toCadastro}>Cadastrar</Button>
            <Spacer margin="16px" />
            <div >

                <H1 className="subTitle">
                    Produtos Cadastrados
                </H1>

                <Ul>
                    {listDados.map((item) => (
                        <>
                            <Item >
                                <p>Produto: {item.nome}</p>
                                <p>Preço: R${item.preco},00</p>
                                <p>Quantidade: {item.quantidade}</p>
                                <Flex direction="row">
                                    <button onClick={() => removeDado(item.event)}>
                                        <i class="bx bx-trash"></i>
                                    </button>
                                    {editando && item.event === idEditando ? (
                                        <button onClick={editarDado}>Salvar</button>
                                    ) : (
                                        <button onClick={(e) => editar(e, item)}>
                                            <i class="bx bx-edit"></i>
                                        </button>
                                    )}
                                </Flex>
                            </Item>

                            <Spacer margin="12px" />
                        </>
                    ))}
                </Ul>
            </div>
        </Container>




    )
}



export default CadastroDePedidos