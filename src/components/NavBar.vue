<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <div class="container hover-links">
      <router-link to="/" class="navbar-brand"
        >COMPUTER MART</router-link>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link hover-links">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link hover-links"
              >ABOUT</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/computer-items" class="nav-link hover-links"
              >ACCESSORIES LIST</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/create-new-computer" class="nav-link hover-links"
              >ACCESSORIES</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.hover-links:hover {
  color: rgb(255, 0, 0);

}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
