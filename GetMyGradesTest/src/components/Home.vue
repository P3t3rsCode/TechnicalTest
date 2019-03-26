<template>
  <div id="home">
    <span>How Does Get My Grade Works ?</span>
    <div class="home-item">
      <img
        src="https://i0.wp.com/www.getmygrades.co.uk/wp-content/uploads/2019/01/1Asset-2@4x.png?w=1080&ssl=1"
      >
      <div>
      <p class="text">The Subject Breakdown displays all of our content included in a subject, tailored to the top exam boards and qualifications.</p>
      <p class="text">Our automatic colour-coding shows students and their parents/teachers, at a glance, what they’ve covered and how well they’ve done.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style >
#home{
  padding: 1em;
  margin-top: 1em;
}
span{
  color: hsl(204,89%,36%);
  font-size: 30px;
  font-weight: 700;
}
.home-item{
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  margin: 1em;
}
.home-item img{
  width: 510px;
  height: 290px;
}
.text{
  color: hsl(0,0%,40%);
  padding: 1em;
  font-size: 16px;
  text-align: left;
  font-weight: 500;
}
</style>
