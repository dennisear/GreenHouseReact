import {createGlobalStyle} from 'styled-components'

const GlobalStyles=createGlobalStyle` 

/* -------------------- Header styles -------------------- */
.header{
    width: 100%;
    background: #856154;
    display: flex;
    justify-content: space-between;
}
.headerMenu{
    background: #C4C4C4;
    border:2px solid #A7AA0B;  
}
#btn-menu{
    display: none;
    padding-left: 1%;
}
.headerMenu label{
    display: none;
    width: 30px;
    height: 30px;
    padding: 10px;
    border:2px solid #A7AA0B;  
}
.menu ul{
    font-family: "Edmondsans";
    margin: 0;
    list-style: none;
    padding: 15px 20px;
    display: flex;
    text-decoration: none; 
    justify-content: space-evenly;
}
.menu li:hover{
    background: #A9D18E;    
}
.logo img{
    width: 140px;
    height: 105px;
}
.socialmedia img{
    width: 60px;
    height: 60px;
    padding-top: 20%;
}


/* ---------- Responsive design ---------- */
/*Menu on smartphones/tablets*/
@media only screen and (max-width:768px){
    .headerMenu label{
        display: block;
    }
    .menu{
        position: absolute;
        background: #C4C4C4;    
        width: 70%;
        margin-left: -80%;
    }
    .menu ul{
        flex-direction: column;
    }
    .menu li{
        border-top: 2px solid #A7AA0B;
        padding: 2% 1% 1% 2%;
    }
    #btn-menu:checked ~ .menu{
       margin: 0;
    }
} 

`;
export default GlobalStyles;