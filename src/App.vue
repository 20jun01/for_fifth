<template>
  <main>
    <div :class="$style.container">
      <header :class="$style.header">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/axios">Axios</router-link>
        |
        <router-link to="/signup">SignUp</router-link>
        |
        <router-link to="/login">Login</router-link>
        |
        <router-link to="/logout">logout</router-link>
        |
        <router-link to="/Home">City</router-link>
        |
        <router-link to="/countries">Countries</router-link>

      </header>

      <router-view />
    </div>
  </main>
</template>

<style module>
.container {
  max-width: fit-content;
  margin: auto;
}
.header {
  display: flex;
  justify-content: center;
}
</style>
