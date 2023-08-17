//importar o css, estilo da pagina
import { useState } from "react";
import CardServicos from "../../components/CardServicos";
import "./style.css"


//import das imagens




function listaServicos() {

     //os trem de ts faz aqui ó, nn dentro do return
   
     const [servicos, setServicos] = useState<any[]>([]);


    const [skillDigitada, setSkillDigitada] = useState<string>("");

    const [listaServicosFiltrados, setListaServicosFiltrados] = useState<any []>(servicos);
  
  
    function buscarPorSkill(event: any){
  
        event.preventDefault();
  
        const servicosFiltrados = servicos.filter((servicos: any) => servicos.skills.includes(skillDigitada.toLocaleUpperCase()));
  
  
        if(servicosFiltrados.length === 0){
          alert("Nenhum Servico com essa Skill foi encontrado!!!");
        }else{
          setListaServicosFiltrados(servicosFiltrados);
        }
  
    }
  
  
    function retornoServicosGeral(event: any){
  
      if(event.target.value === ""){
        setListaServicosFiltrados(servicos);
      }
  
      setSkillDigitada(event.target.value)
  
    }
  



    return(

        <>
        

  <main>
    <div className="container container_lista_servicos">
      <div className="lista_servicos_conteudo">
        <h1>Lista de Serviços</h1>
        <hr />
        <form method="post" onSubmit={buscarPorSkill}>
          <div className="wrapper_form">
            <label htmlFor="busca">Procurar serviços</label>
            <div className="campo-label">
              <input
                type="search"
                name="campo-busca"
                id="busca"
                placeholder="Buscar serviços por tecnologias..."
                onChange={retornoServicosGeral}
              />
              <button type="submit">Buscar</button>
            </div>
          </div>
        </form>
        <div className="wrapper_lista">
          <ul>
           <li>

            
          {listaServicosFiltrados.map((servicos: any, index: number) =>{

return <li>
    <CardServicos
      titulo={servicos.titulo}
      preco={servicos.preco}
      descricao={servicos.descricao}
      techs={servicos.skills}
    />
      </li>
}
)}

           </li>
          </ul>
        </div>
      </div>
    </div>
  </main>

        </>


    )


}

export default listaServicos;