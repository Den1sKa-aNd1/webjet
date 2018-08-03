import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { getCinemaworldList, getFilmworldList, getMoviePriceById } from '../api/Apis'
import { Movie } from '../types/Movie'
 
export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: '', oneListOfMovies: [], 
            priceCinema: null, priceFilm: null, 
            showModal: false, currentTitle: '', isLoading: true };
    }
 
    async componentDidMount() {
        let cinemaWorldmovies = await getCinemaworldList();
        let filmWorldMovies = await getFilmworldList();
        if (cinemaWorldmovies && filmWorldMovies)
            this.createOneListOfMovies(cinemaWorldmovies, filmWorldMovies);
        else{
            this.setState({...this.state, error: 'Error. Please refresh the page'})
        }
        this.setState({...this.state, isLoading:false});
    }

    createOneListOfMovies(cinemaWorldmovies, filmWorldMovies) {
        let oneListOfMovies = [];
        if (cinemaWorldmovies && filmWorldMovies) {
            cinemaWorldmovies.map(movie1 => {
                filmWorldMovies.map(movie2 => {
                    if (movie1.Title === movie2.Title) {
                        let movieToPush = new Movie();
                        movieToPush.ID = movie1.ID;
                        movieToPush.Title = movie1.Title;
                        movieToPush.ExistsInBoth = true;
                        movieToPush.Poster = movie1.Poster;
                        oneListOfMovies.push(movieToPush);
                    }
                    return true;
                })
                return true;
            })
        }
        this.setState({ ...this.state, oneListOfMovies: oneListOfMovies });
    }
 
    async getPrices(movieId, inBoth, inFirst) {
        let price1 = null;
        let price2 = null;
        if (inBoth) {
            price1 = await getMoviePriceById('c' + movieId.substr(1), 'cinemaworld');
            price2 = await getMoviePriceById('f' + movieId.substr(1), 'filmworld');
            if(!price1) price1='Try again' 
            else price1 = Number(price1);
            if(!price2) price2='Try again';
            else price2 = Number(price2);

            this.setState({ ...this.state, priceCinema: price1, priceFilm: price2 });
        }
    }
 
    showModal = (movieId, movieTitle) => {
        this.setState({ ...this.state, showModal: true, currentTitle: movieTitle })
        this.getPrices(movieId, true, 0);
    }
    hideModal = () => {
        this.setState({ ...this.state, showModal: false, priceCinema: null, priceFilm: null })
    }
 
    render() {
        let { oneListOfMovies } = this.state;
        let cList, fList;
        if (oneListOfMovies) {
            cList = (
                <div>
                    <ul>
                        {oneListOfMovies.map(movie =>
                        <li key={movie.ID}>
                            <a onClick={() => this.showModal(movie.ID, movie.Title)}>
                                <img className='imgStyle' src={movie.Poster} alt={movie.Poster}/>
                            </a>
                        </li>)}
                    </ul>
                </div>
            )
        }
        let cinemaDealStyle = this.state.priceCinema < this.state.priceFilm ?
            'betterDealStyle' : 'normalDealStyle';
        let filmDealStyle = this.state.priceCinema > this.state.priceFilm ?
            'betterDealStyle' : 'normalDealStyle';
        if(this.state.isLoading){
            return(
                <div className="List">
                    <div><img src={logo} className="App-logo" alt="logo" /></div>
                    <div>loading...</div>
                </div>
            )
        }
        if(this.state.error){
            return(
                <div>{this.state.error}</div>
            )
        }
        return (
            <div style={{ flex: 1 }}>
                {cList}
                {fList}
                {this.state.showModal &&
                    <div className='modalWindow'>
                        <div className='modalContainer'>
                            <div className='pricesContainer'>
                                <div className='titleStyle'>{this.state.currentTitle}</div>
                                <div className={cinemaDealStyle}>Cinema World: ${this.state.priceCinema}</div>
                                <div className={filmDealStyle}>Film World: ${this.state.priceFilm}</div>
                            </div>
                            <button onClick={this.hideModal}>Back</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

