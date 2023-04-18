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

export const MainContainer = styled.div`
  display:flex;
 flex-direction:column;
 .mainContainerSub{
    display:flex;
    flex-direction:column;
}

.btns{
    display:flex;
    justify-content: space-evenly;
    padding:10px  10px;
}
.btnTwo{
    top:435px;
   
}
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

@media (max-width: 390px) {
        .btnTwo{
         
            top:425px;
            
        }   
    }
    

`;

export const Cadastro = styled.div`

@media (max-width: 806px) {

  Flex{
   
    justify-content:center;
   }
}
@media (max-width: 390px){
    .form{
       margin-left:150px;
     }
   } 
@media (max-width: 390px) {

   Input{
    margin-right:150px;
    
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
}

.itens-container{
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    width:100%;
}
.title{
    display:flex;
    justify-content:center;
    align-items:center;
font-weight: 600;
font-size: 48px;
line-height: 72px;
background-color:#000c0c;
width:500px;

color: #fff;
cursor:pointer;
text-align: center;
}
Button{
    display:flex
    justify-content:center;
    align-items:center;
    top:340px;
    
}
@media (max-width: 806px) {
 .itens-container{
    width:100%;
    flex-direction:column;
    overflow:hidden;
 }
    .title{
        font-size:20px;
        width:50%;
        height:50px;
       display:flex;
       align-items: center;
        text-align:center;
      
    }
    Button{
    left:90px;
    top:325px;
}
    Button{
    left:150px;
    top:325px;
}
.btnTwo{
   
    top:415px;
   
}   
 
  }
  @media (max-width: 806px) {
    
  }
  @media (max-width: 390px){
    .title{
        width:100%
    }
  } 
`;


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
display:flex;
justify-content:center;
left: 610px;
margin-bottom:120px;
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
`;

export const Flex = styled.div`
display: flex;
flex-direction: column;
gap:${(props) => props.gap || "10px"};
@media (max-width: 806px){
    display: flex;
    flex-direction: column;
    gap:${(props) => props.gap || "10px"};
}

`;
export const Ul = styled.ul`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top:100px;
@media (max-width: 806px) {
  
    .ul i{
        position:absolute;
        left:30px;
        margin-top:-15px;
       
    }
    .ul button{
        position:absolute;
        left:130px;
        margin-top:15px;
        }
      }
   
      @media (max-width: 390px){
        .salvar{
            margin-left:50px;
        }
}
`

export const Products = styled.div`

.salvar{
    margin-left:-5px;
}


`
export const H1 = styled.h1`
display:flex;
justify-content:center;
margin-top:60px;
`
export const Item = styled.li`
padding: 13px 10px 13px 24px;
width: 354px;
min-height: 50px;
background: ${(props) => (props.checked ? "#da2535" : "#FFFFFF")};
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
  
}

`;


export const Spacer = styled.div`
width: 100%;
margin:${(props) => props.margin || "20px"};
`;

