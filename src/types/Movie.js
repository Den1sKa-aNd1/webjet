export class Movie {
    Title
    ID
    ExistsInBoth
    ExistsIn
    Price1
    Price2
    Poster
    constructor(movie) {
        if (movie !== undefined && movie !== null) {
            this.Title = movie.Title;
            this.ID = movie.ID;
            this.ExistsInBoth = movie.ExistsInBoth;
            this.ExistsIn = movie.ExistsIn;
            this.Price1 = movie.Price1;
            this.Price2 = movie.Price2;
            this.Poster = movie.Poster;
        } else {
            this.Title = '';
            this.ID = '';
            this.ExistsInBoth = false;
            this.ExistsIn = null;
            this.Price1 = null;
            this.Price2 = null;
            this.Poster = null;
        }
    }
}