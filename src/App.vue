<template>
  <div id="nav" v-if="$store.state.user">
    <router-link class="nav_child" to="/">Home</router-link> |
    <router-link class="nav_child" to="/about">About</router-link>
    <button class="nav_child" @click="$store.dispatch('logout')">Logout</button>
  </div>
  <router-view/>
</template>
<script>
import {onBeforeMount} from 'vue'
import {useStore} from 'vuex'

  export default{
    setup(){
      const store = useStore()
      onBeforeMount(() => {
        store.dispatch('fetchUser')
      })

    }
  }
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav_child{
  margin: 5px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
