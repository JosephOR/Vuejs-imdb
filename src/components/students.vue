<template id="">
  <div class="students">
    <h1>students</h1>
    <ul class="students-ul">
      <li v-for='student in studentsInClass'  class="students-li">
        <span>{{ student.name }}</span>
        <span></span>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default {
    props:['students', 'classid'],
    data(){
      return{

      }
    },
    computed: {
      studentsInClass: function () {
        let newList = [];
        let list = this.students;
        for (var i = 0; i < list.length; i++){
          let arr = list[i].classes;
          if(arr.indexOf(this.classid) > -1) {
            newList.push(list[i])
          }
        }
        return newList
      }
    }
  }
</script>

<style lang="scss">
.students {
  width: 50%;
  padding: 10px;
  margin-left: 10px;
}
.students-ul {
  margin: 0;
  padding: 0
}
.students-li {
  list-style-type: none;
  padding: 10px
}
.students-li:hover {
  background: white;
  cursor: pointer;
}
</style>
