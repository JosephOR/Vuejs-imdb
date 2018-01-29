<template>
  <div class="">
    <div class="movie-search">
      <label for="">Search by film name</label>
      <input type="text" name="" value="" v-model='movieTitle'>
      <button class="search-btn" type="button" name="button" v-on:click="searchMovies">search</button>
      <icon name="search" class="svg"></icon>
    </div>
    <div class="movie-wrapper">
      <div class="movie-item" v-for='movie in movies'>
        <h4>{{movie.title}}</h4>
        <img v-bind:src='"http://image.tmdb.org/t/p/w500" + movie.poster_path' class='poster'>
        <article class="movie-desc">
          {{movie.overview}}
        </article>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data(){
      return {
        movies: [],
        movieTitle: ''
      }
    },
    methods: {
      searchMovies: function() {
        if (this.movieTitle !== '') {
          this.$http.get('https://api.themoviedb.org/3/search/movie?api_key=1830b7145532f6f462a3a5537112416d&query=' + this.movieTitle)
          .then(data => {
            this.movies = data.body.results
          })
          .catch(err => console.error(err))
        }
      }
    }
  }
</script>
<style lang="scss">
.movie-search {
  display: flex;
  justify-content: center;
  height: 25px;
  padding: 10px;
}
label {
  margin-right: 10px;
  align-self: flex-end;
}
.movie-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.movie-item {
  width: 230px;
  margin: 10px;
}
.poster {
  max-width: 100%
}
.movie-desc {
  height: 200px;
    overflow-x: hidden;
}
.search-btn {
  background: #3498db;
  font-family: Arial;
  color: #ffffff;
  font-size: 15px;
  border-radius: 5px 0 0 5px;
  text-decoration: none;
  border-color: #3498db
}

.search-btn:hover {
  background: #3cb0fd;
  text-decoration: none;
}
.svg {
  height: 19px;
  padding: 3px;
  background-color: #3498dc;
  fill: white;
  border-radius: 0px 5px 5px 0;
}
</style>
