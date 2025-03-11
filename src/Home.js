import ImagensArvores from "./components/info/ImagensArvores"
import PauBrasil from "./assets/5.png"
import DetalhesPauBrasil from "./assets/6.png"
import PauPombo from './assets/7.png'
import DetalhesPauPombo from './assets/8.png'
import Ingacipo from './assets/9.png'
import DetalhesIngacipo from './assets/10.png'
import Caja from './assets/11.png'
import DetalhesCaja from './assets/10.png'
import Amescla from './assets/11.png'
import DetalhesAmescla from './assets/12.png'
import BiribaBranca from './assets/13.png'
import DetalhesBiribaBranca from './assets/14.png'
import Sambaquim from './assets/17.png'
import DetalhesSambaquim from './assets/19.png'
import Inhare from './assets/20.png'
import DetalhesInhare from './assets/21.png'
import Pixirica from './assets/22.png'
import DetalhesPixirica from './assets/23.png'
import Visgueiro from './assets/24.png'
import DetalhesVisgueiro from './assets/25.png'
import RelacaoDasFamilias from './assets/26.png'
import Referencias1 from './assets/27.png'
import Referencias2 from './assets/28.png'
import Referencias3 from './assets/29.png'
import Referencias4 from './assets/30.png'
import Final from './assets/31.png'


export default function Home() {

    return (
        <>
            <div className="container-arvores">
                <h1>Espécies arbóreas na trilha das lianas do Parque Estadual Dois Irmãos</h1>
            </div>
            <div className="container-arvores">
                <ImagensArvores imagem={PauBrasil} />
                <ImagensArvores imagem={DetalhesPauBrasil} />
            </div>
            <div className="container-arvores">
                <ImagensArvores imagem={PauPombo} />
                <ImagensArvores imagem={DetalhesPauPombo} />
            </div>
            <div className="container-arvores">
                <ImagensArvores imagem={Ingacipo} />
                <ImagensArvores imagem={DetalhesIngacipo} />
            </div>
            <div className="container-arvores">
                <ImagensArvores imagem={Caja} />
                <ImagensArvores imagem={DetalhesCaja} />
            </div>
            <div className="container-arvores">
                <ImagensArvores imagem={Amescla} />
                <ImagensArvores imagem={DetalhesAmescla} />
            </div>
            <div className="container-arvores">
                <ImagensArvores imagem={BiribaBranca} />
                <ImagensArvores imagem={DetalhesBiribaBranca} />
            </div>
            <div className="container-arvores">
                <ImagensArvores imagem={Sambaquim} />
                <ImagensArvores imagem={DetalhesSambaquim} />
            </div>
            <div className="container-arvores">
                <ImagensArvores imagem={Inhare} />
                <ImagensArvores imagem={DetalhesInhare} />
            </div>
            <div className="container-arvores">
                <ImagensArvores imagem={Pixirica} />
                <ImagensArvores imagem={DetalhesPixirica} />
            </div>
            <div className="container-arvores">
                <ImagensArvores imagem={Visgueiro} />
                <ImagensArvores imagem={DetalhesVisgueiro} />
            </div>
            <div className="container-arvores">
                <ImagensArvores imagem={RelacaoDasFamilias} />
                <ImagensArvores imagem={Referencias1} />
                <ImagensArvores imagem={Referencias2} />
                <ImagensArvores imagem={Referencias3} />
                <ImagensArvores imagem={Referencias4} />
                <ImagensArvores imagem={Final} />

            </div>
        </>

    )

}