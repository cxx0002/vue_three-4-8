<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { getVideoCategory } from "@/server/app/index.ts";
export default {
  name: "App",
  components: {},
  data() {
    return {
      act: 105
    };
  },
  mounted() {
    // console.log(process.env.VUE_APP_BASE_URL);
    this.init();
  },
  filter() {
  },
  component () {
  },
  methods: {
    async init() {
      if (this.act) {
        try {
          const result = await getVideoCategory({id:14});
        } catch (e) {
          throw new e();
        }
      } else {

      }
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/*#nav {*/
/*  padding: 30px;*/

/*  a {*/
/*    font-weight: bold;*/
/*    color: #2c3e50;*/

/*    &.router-link-exact-active {*/
/*      color: #42b983;*/
/*    }*/
/*  }*/
/*}*/
</style>
