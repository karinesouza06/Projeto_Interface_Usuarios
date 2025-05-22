import imagem1 from "../assets/bonnie.jpg"
import imagem2 from "../assets/caroline.jpg"
import imagem3 from "../assets/damon.jpg"
import imagem4 from "../assets/stefan.jpg"
import imagem5 from "../assets/ellena.jpg"
import imagem6 from "../assets/enzo.jpg"

function Images (){

    return(
        <>
        <div>
            <figure>
                <img src={imagem1} alt="Imagem de natureza"/>
                <figcaption>Caroline Forbs</figcaption>
            </figure>

            <figure>
                <img src={imagem2} alt="Imagem de natureza"/>
                <figcaption>Bonnie Bennet</figcaption>
            </figure>

            <figure>
                <img src={imagem3} alt="Imagem de natureza"/>
                <figcaption>Damon Salvatore</figcaption>
            </figure>

            <figure>
                <img src={imagem4} alt="Imagem de natureza"/>
                <figcaption>Stefan Salvatore</figcaption>
            </figure>

            <figure>
                <img src={imagem5} alt="Imagem de natureza"/>
                <figcaption>Elena Gilbert </figcaption>
            </figure>

            <figure>
                <img src={imagem6} alt="Imagem de natureza"/>
                <figcaption>Enzo </figcaption>
            </figure>
        </div>
        </>

    )
}

export default Images