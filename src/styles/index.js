import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration:  none;
    outline: none;
    font-family: 'Ubuntu', sans-serif;
   
}
`;
export const MainWrapper = styled.div`
  text-align: center;
`;
export const MainContainer = styled.div`
  position:absolute;
    margin-left:500px;

.btn{
    padding: 2px 4px;
width:104px;
height: 30px;
background: #ffff;
box-shadow: 0px 4px 4px rgba(0,0, 0, 0.25);
border-radius: 10px;
border:none;
font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #000;
cursor:pointer;
&::placeholder{
    font-weight: 700;
    font-size:16px;
    line-height:24px;
   color: #000;
}
}
@media (max-width: 806px) {
    
    .mainContainerSub{
        margin-top:200px;
        }
    Input{
        position:absolute;
       left:-400px;
    }
    .btnOne{
        margin-top:40px;
        position:absolute;
        left:-499px;
    }
    .btnTwo{
        margin-top:80px;
        position:absolute;
        left:-500px;
    }

`

;

export const Cadastro = styled.div`
@media (max-width: 806px) {

  Flex{

    text-align:center;
    justify-content:center;
   }
}
@media (max-width: 390px) {

   Input{
    margin-right:150px;
    text-align:center;
    justify-content:center;
   }
}
`
export const Container = styled.div`
width: 100%;
min-height: 895px;
background: rgba(0, 0, 0, 0.1);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
dispay:flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 12px 25px;
}


.title{
font-weight: 600;
font-size: 48px;
line-height: 72px;
background-color:#000c0c;
width:500px;
margin-left:400px;
color: #5015bd;
cursor:pointer;
text-align: center;
}

@media (max-width: 806px) {
 
    .title{
        font-size:20px;
        width:50%;
        height:50px;
        padding:0px;
        text-align:center;
        margin-left:10px;
    }
    Button{
        margin-left:150px;
        margin-top:150px;
    }
 
  }
  @media (max-width: 806px) {
    .form{
        position:absolute;
        left:35px;
    }
  }
  @media (max-width: 390px){
    .title{
        width:100%
    }
  } 
`;
export  const Itens = styled.div`
@media (max-width: 806px) {
  overflor-y:hidden;
  }

`

export const Input = styled.input`
padding: 8px 24px;
width:224px;
height: 30px;
background: #ffff;
box-shadow: 0px 4px 4px rgba(0,0, 0, 0.25);
border-radius: 10px;
border:none;
font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #000;
&::placeholder{
    font-weight: 700;
    font-size:16px;
    line-height:24px;
   color: #000;

   @media (max-width: 806px) {
    Input{
        margin-left:50px;
    }
  }
}
`;
export const Button = styled.button`
position: absolute;
margin-left: 380px;
padding: 2px 4px;
width:104px;
height: 30px;
background: #ffff;
box-shadow: 0px 4px 4px rgba(0,0, 0, 0.25);
border-radius: 10px;
border:none;
font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #000;
cursor:pointer;
&::placeholder{
    font-weight: 700;
    font-size:16px;
    line-height:24px;
   color: #000;
&:hover{
    opacity:0.8;
    background-color: green;
    color:#ffff;
}
&:active{
    opacity:0.6;
}
@media (max-width: 806px) {
    .button{
        margin-left:150px;
    }
  }
`;

export const Flex = styled.div`
display: flex;
flex-direction: ${(props)=> props.direction || "column"};
justify-content:${(props)=> props.justify || "center"};
align-items: ${(props) => props.align || "center"};
gap:${(props)=> props.gap || "16px"};


`;
export const Ul = styled.ul`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top:100px;
@media (max-width: 806px) {
    .ul{
     margin-top:500px;  
    position:absolute;
     
    }
  }
    .ul i{
        position:absolute;
        left:50px;
        margin-top:-15px;
       
    }
    .ul button{
        position:absolute;
        left:130px;
        margin-top:-15px;
        }
      }
     .edit{
     margin-left:10px;
        }
      }
      @media (max-width: 390px){
        .salvar{
            margin-left:50px;
        }
}
`

export const Products = styled.div`

@media (max-width: 806px) {
    margin-top:490px;
    margin-left:-410px;
}
.salvar{
    margin-left:-5px;
}
@media (max-width: 390px) {
margin-top:490px;
margin-left:-20px;
}


`
export const H1 = styled.h1`
position: absolute;
margin-left:460px;
padding:10px 10px;
margin-top:25px;

@media (max-width: 806px) {
    .subTitle{
     position:absolute;
        width:100%;
        font-size:34px;
        margin-top:350px;
        left:-450px;
    }
  }

`
export const Item = styled.li`
padding: 13px 10px 13px 24px;
width: 354px;
min-height: 50px;
background: ${(props )=> (props.checked ? "#da2535": "#FFFFFF")};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
list-style: none;
display:flex;
align-items:center;
justify-content: space-between;
flex-wrap:wrap;

p {
    font-weight: 500;
    font-size:16px;
    line-height:24px;
    text-decoration-line: ${(props )=> (props.checked ? "line-through": "")};
    color:${(props )=> (props.checked ? "#ffff": "#000000")};
    justify-content: center;
    width:80%;
    overflow-wrap:break-word;
    word-wrap: break-word;
    word-break: break-word;
};
button{

    background: transparent;
    border: none;
    cursor:pointer;
    &:hover{
        opacity: 0.8;
    };
    &:active{
        opacity:0.6;
    }
};

i {
    font-size: 24px;
    color:#${(props )=> (props.checked ? "#ffffff": "#000000")};
}

`;


export const Spacer = styled.div`
width: 100%;
margin:${(props)=> props.margin || "20px"};
`;

