import React from "react";
import { useState } from "react";
import { Button, Container, Flex, H1, Input, Item, MainContainer, Products, Spacer, Ul } from "./styles";

function CadastroDePedidos() {

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [busca, setBusca] = useState('')

    const [listDados, setListDados] = useState(() => {
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

    const handleSearch = (event) => {
        setBusca(event.target.value)
    }

    const dadosFiltrados = listDados.filter((item) => {
        if (busca === '') {
            return item
          } else {
            return item.nome.toLowerCase().includes(busca.toLowerCase());
          }
    });
    const clearFilter = () => {
        const savedDados = localStorage.getItem("dados");
        setListDados(savedDados ? JSON.parse(savedDados) : []);
        setBusca('');
      };

    return (


        <Container style={{ justifyContent: "center" }}>

            <h1 className="title">Cadastro de Pedidos</h1>
            <Spacer />
            <form className="form" >
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
            <Button className="btn btn-outline-light" onClick={toCadastro}>Cadastrar</Button>
            <Spacer margin="16px" />
        

            <MainContainer>
                <div className="mainContainerSub">
                    <Input  type="text" onChange={handleSearch} placeholder="Pesquise o seu produto" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-outline-light btnOne" onClick={() => setListDados(dadosFiltrados)}>Buscar</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-outline-light btnTwo" onClick={clearFilter}>Limpar </button>
                </div>
            </MainContainer>

                <H1 >
                   <p className="subTitle">Produtos Cadastrados</p>
                </H1>
<Products>
                <Ul >

                    {listDados.map((item) => (
                        <div> 

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
                                        <button className="edit" onClick={(e) => editar(e, item)}>
                                            <i class="bx bx-edit"></i>
                                        </button>
                                    )}
                                </Flex>
                            </Item>

                            <Spacer margin="12px" />
                        </>
                                    </div>
                    ))}
                </Ul>
                    </Products>
         
        </Container>



                 


    )
}



export default CadastroDePedidos
