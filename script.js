// Só executa quando o html for carregado por completo
document.addEventListener('DOMContentLoaded', function () {
    //Botão qua vai buscar o conteúdo do gato
    const button = document.getElementById("fetch-cat-button");
    //container para exibir o gato
    const catContainer = document.getElementById("cat-container");
    //carregar o conteúdo
    const loadingElement = document.getElementById("loading");

    async function fetchCat() {
        // removeno classe da div
        loadingElement.classList.remove("hidden");
        //catContainer.innerHTML = "";

        try {
          const response = await fetch("https://api.thecatapi.com/v1/images/search")  

          const data = await response.json();

          if (data.length > 0) {
            //data[0] -> Acessando a primeira posição da lista

            const catUrl = data[0].url;

            const imgElement = document.createElement("img"); //Criando a imagem
            imgElement.src = catUrl;
            imgElement.alt = "Gato aleatorio";
            imgElement.style.maxWidth = "400px";
            imgElement.style.borderRadius = "8px";
            catContainer.appendChild(imgElement);

            
          } else {
            catContainer.innerText = "Não foi possível buscar o gato"
          }
          
        } catch (error) {
                catContainer.innerText = "Ocorreu um erro ao buscar a imagem";
        }finally { // Finally -> ele passa de qualquer maneira
            loadingElement.classLista.add("hidden");
        }
    }
    fetchCat();

    button.addEventListener("click", fetchCat);
})