import { Fragment, useState } from 'react';
import './App.css';
import Gif from './components/Gif';
import Header from './components/Header';
import Footer from './components/Footer';
import TrendingGifs from './components/TrendingGifs';

//API KEY: 7YoMbMhW5BJGREy7ucWELkRFmmH2czi8
function App() {
  //creamos un state para los gifs
  const [gif, setGif] = useState({});
  //URl de la API con resultados random
  const apiRandomURL = 'https://api.giphy.com/v1/gifs/random?api_key=7YoMbMhW5BJGREy7ucWELkRFmmH2czi8&tag=&rating=pg-13';
  //consultamos la API y obtenemos el resultado
  const getGif = async () => {
    try {
      const gifsApi = await fetch(apiRandomURL);
      const gif = await gifsApi.json();
      //del JSON obtengo el gif y su nombre
      setGif([gif.data.images.fixed_height.url, gif.data.title]);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Fragment>
        <Header />
        <div
          className="container d-flex flex-wrap justify-content-center align-items-center">
          <div className="card" style={{width:'18rem'}}>
            <div className="card-body d-flex flex-column align-items-center justify-content-between">
              <h5 className="card-title">Gif sorpresa</h5>
              <p className="card-text">Buscá un GIF aleatorio con un solo click!</p>
              <button
                className="btn btn-outline-light gradient"
                onClick={getGif}>
                Random Gif
              </button>
              <Gif gifProp={gif} />
            </div>
          </div>
        </div>
        <TrendingGifs />
        <Footer />
    </Fragment>
  );
}
export default App;
