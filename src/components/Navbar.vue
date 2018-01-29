<template>
<header>
  <router-link to="/schools" class="link">Schools</router-link>
  <router-link to="/movies" class="link">Movies</router-link>
</header>
</template>

<script type="text/javascript">
  export default {
    data(){
      return {
        test: 'nav'
      }
    }
  }
</script>

<style media="screen">
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 70px;
    background: #55efc4;
  }
  .link {
    padding-bottom: 4px;
    margin: 0px 5px;
    text-decoration: none;
    color: #333333;
    border-bottom: 2px solid #55efc4;
  }
  .link:hover {
    border-bottom: 2px solid white;
  }
  .router-link-exact-active {
    border-bottom: 2px solid white;
  }

</style>
