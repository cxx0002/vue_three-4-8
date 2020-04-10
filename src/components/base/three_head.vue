<template>
    <div class="three_head">
      <ul>
        <li>
          {{msg}}
        </li>
      </ul>
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  @Component
  export default class Three_head extends Vue {
    @Prop() private msg : any;
  }
</script>

<style scoped lang="scss">
.three_head{
  width:100%;
  height:50px;
  background: #060606;
  li{
    color:#efefef;
    line-height: 50px;
    font-weight: bold;
    text-align: center;
  }

}
</style>
