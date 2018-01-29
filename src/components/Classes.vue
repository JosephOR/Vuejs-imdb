<template>
  <div class="classes">
    <div class="inner-container">
      <div class="class-list">
        <h1 class="title">classes</h1>
        <ul class="classes-ul">
          <li v-for='clas in classes'  class="classes-li" v-on:click='getStudents(clas)'>
            {{ clas.name }}
          </li>
        </ul>
      </div>
      <students v-bind:students="classStudents" v-bind:classid="selectedId"></students>
    </div>
  </div>
</template>
<script>
import Students from './students';
  export default {
    components: {
      'students': Students
    },
    created() {
      this.$http.get("https://vuejs-sample-a08b4.firebaseio.com/classes.json")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.classes = data;
      })
      .catch(err => console.error(err))
    },
    data(){
      return {
        classes: [],
        classStudents: [],
        selectedId: ''
      }
    },
    methods: {
      getStudents: function(event) {
        // console.log(event);
        this.selectedId = event.id;
        this.$http.get("https://vuejs-sample-a08b4.firebaseio.com/students.json")
        .then(function(data){
           return data.json();
         })
         .then(data => {
           let key = Object.keys(data);
           this.classStudents = data[key];
         })
      }
    }
  }
</script>
<style lang="scss">
$classes-bg: #e4f9f3;

.classes {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: $classes-bg
}
.inner-container {
  width: 40%;
  display: flex;
  padding: 10px;
  border: 1px solid grey;
  margin: 10px;
  border-radius: 5px;
}
.class-list {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-right: 1px solid grey;
}
.classes-ul {
margin: 0;
padding: 0
}
.classes-li {
  list-style-type: none;
  padding: 10px
}
.classes-li:hover {
  background: white;
  cursor: pointer;
}
</style>
