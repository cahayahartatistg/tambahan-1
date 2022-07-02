import ReactDOM from "react-dom/client";


// function getNama(){
//     return "Cahaya";
// }


// const root = ReactDOM.createRoot(document.querySelector("div"));
// root.render(<h1>Caayyy</h1>);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<button>Login{getNama()}</button>);


// function Welcome(props){
//         return <h1>{props.name}Cantik deh </h1>;
    
// }  

/// 1properti

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<>
// <Welcome name = "Cahaya "/>
// <Welcome name = "Hartati "/>
// <Welcome name = "Sitanggang "/>
// </>)

// 2 properti

function Welcome(props){
            return <h1>{props.name}Cantik deh berumur{props.umur}</h1>;
        
    }  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
<Welcome name = "Cahaya " umur = {17}/>
<Welcome name = "Hartati " umur = {18}/>
<Welcome name = "Sitanggang " umur = {19}/>
</>)







