<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/multipleRoot">MultipleRoot</router-link> | 
    <router-link to="/component">Component</router-link> | 
    <router-link to="/props">Props</router-link> | 
    <router-link to="/class">Class</router-link> | 
    <router-link to="/slot">Slot</router-link> | 
    <router-link to="/teleport">Teleport</router-link> | 
    <router-link to="/reactive">Reactive</router-link> | 
    <router-link to="/computed">Computed</router-link> | 
    <router-link to="/watch">Watch</router-link> | 
    <router-link to="/emit">Emit</router-link> | 
    <router-link to="/composable">Composable</router-link> | 
    <router-link to="/torefs">toRefs</router-link> | 
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
