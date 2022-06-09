<script>
import Footer from "./Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>

<template>
<hr>
  <main class="mt-4">
    <img src="https://pcmartmatara.com/wp-content/uploads/2022/02/Logo.jpg" alt="hero" />
    <p>
      <strong class="text-center title">PC and COMPUTER MART:</strong>
      <span class="tab"></span>Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Minus eligendi natus, dolore magni eius similique odio,
      hic laboriosam explicabo facere neque illum nihil molestias blanditiis
      exercitationem, ullam voluptas ut ratione esse dolorum optio. Enim odio
      delectus laudantium consequatur reprehenderit autem, architecto quasi
      dolor modi itaque dolorum distinctio fuga fugit mollitia, nostrum magni
      libero. Delectus inventore hic sint a, atque nisi, adipisci laboriosam
      officia quos error velit! Autem, veritatis facere eum expedita delectus,
      deleniti voluptas ducimus in nam, error beatae vero!
    </p>
  </main>
</template>
<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
img {
  width: 60%;
  height: 450px;
  border-radius: 10px;
}
p {
  width: 40%;
  padding: 10px;
  background: rgb(255, 145, 0);
  height: 450px;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 10px;
  color: rgb(41, 38, 38);
  tab-size: 5;
}
.tab {
  margin-left: 20px;
}
.title {
  font-size: 20px;
  margin: 10px;
  color: white;
}
</style>
