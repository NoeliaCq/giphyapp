import React, { useEffect, useState } from 'react';
const TrendingGifs = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const trendingURL = 'https://api.giphy.com/v1/gifs/trending?api_key=7YoMbMhW5BJGREy7ucWELkRFmmH2czi8&limit=100&rating=pg-13'

    useEffect(() => {
        const getTrendingGifs = async () => {
            try {
                const trendingApi = await fetch(trendingURL);
                const trendingGifs = await trendingApi.json()
                console.log(trendingGifs)
                setData(trendingGifs.data);
            } catch (error) {
                console.log(error)
            }
        }
        getTrendingGifs();
    }, []);

    const renderGifs = () => {
        return data.map(gif => {
            return (
                <div key={gif.id} className="gif">
                    <img src={gif.images.fixed_height.url} alt={gif.title} title={gif.title} className="rounded-3" />

                </div>
            )
        })
    }

    const handleSearchChange = event => {
        setSearch(event.target.value);
    };
    const handleSubmit = async event => {
        //evitar que recargue la página
        event.preventDefault();
        try {
            const searchApi = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=7YoMbMhW5BJGREy7ucWELkRFmmH2czi8&q=${search}&limit=100&offset=0&rating=pg-13&lang=en`);
            const searchGifs = await searchApi.json();
            console.log(searchGifs)
            setData(searchGifs.data);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="m-2">
            <form className="form-inline justify-content-center align-item-center m-2">
                <input onChange={handleSearchChange} type="text" placeholder="Buscar" className="form-control w-25" />
                <button onClick={handleSubmit} type="submit" className="btn btn-primary">BUSCAR</button>
            </form>
            <div className="container gifs d-flex flex-wrap justify-center w-95 mb-5">{renderGifs()}</div>
        </div>
    )
};
export default TrendingGifs;