<template>
  <div id="navbar">
    <div class="logo">
      <img src="https://www.getmygrades.co.uk/wp-content/uploads/2017/03/Vertical-Logo.png">
    </div>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/people">People</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style >
#navbar {
  display: inline-block;
  padding: 1em;
  margin: 0;
  width: 97vw;
  box-shadow: 0px 1px 5px #555;
}
.logo img {
  float: left;
  width: 95px;
  height: 38px;
}
.links {
  float: right;
}
.links a {
  margin-left: 2em;
  text-decoration: none;
  font-weight: bold;
  color: #444;
}
</style>
