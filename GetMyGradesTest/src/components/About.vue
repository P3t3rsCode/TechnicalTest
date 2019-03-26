<template>
  <div id="about">
    <h1>About Us</h1>
    <h2>What is Get My Grades?</h2>
    <p class="text">Get My Grades is an innovative online learning platform that enables students to learn, revise and assess themselves. It automatically collects data on how students get on in each part of their course, so that parents, teachers and students can track their progress in real time. It provides more meaningful data to everyone whilst reducing teacher workload.</p>
    <p class="text">The Get My Grades platform is simple and easy to use – it is based on good teaching practice and the latest research. It even includes clearly signposted extra content that goes beyond the bare minimum of the course to encourage curiosity and help students make informed decisions about which subjects they might want to study in future.</p>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>


<style scoped>
#about{
  padding: 1em;
  margin-top: 1em;
}
h2,h1{
  color: hsl(204,89%,36%);
  font-size: 30px;
  font-weight: 700;
  margin-top: 1em;
}

.text{
  color: hsl(0,0%,40%);
  padding: 2em;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
}
</style>
