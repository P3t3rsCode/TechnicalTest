<template>
  <div id="people">
    <h2>Our Team</h2>
    <div class="table">
      <table>
        <tr class="row_h">
          <th>Name</th>
          <th>Position</th>
          <th>Speciality</th>
        </tr>
        <tr class="row" v-for="member in team.team" v-bind:key="member.id">
          <td class="data">{{member.name}}</td>
          <td class="data">{{member.position}}</td>
          <td class="data">{{member.speciality}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "People",
  data() {
    return {
      team: null
    };
  },
  created() {
    axios
      .get("https://p3t3rscode.github.io/json-server/db.json")
      .then(res => {
        this.team = res.data;
       // console.log(this.team);
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
#people {
  padding: 0.5em;
  margin-top: 0.5em;
}
h2 {
  color: hsl(204, 89%, 36%);
  font-size: 30px;
  font-weight: 600;
}
.table {
  padding: 1em;
}
.row {
  background: rgb(231, 232, 233);
  padding: 2em;
  border-bottom: 1px solid #666;
}

tr:nth-child(even){
  background: rgb(219, 219, 219);
}
.data {
  padding: 1em;
  font-size: 14px;
}
table {
  margin: 0 auto;
  background: rgb(231, 232, 233);
  text-align: center;
}
.row_h th{
  font-weight: 700;
    padding: 1em;
}
</style>
