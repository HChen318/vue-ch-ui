<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Demo />

    <m-card
      imgSrc="react.png"
      summary="react"
    />
    <br />
    <m-card
      imgSrc="vue.png"
      summary="vue"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 · 528人学习</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </m-card>
    <br />
    <m-card imgSrc="angular.png" :width="370" :imgHeight="90">
      angular js
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">4步骤 · 6门课</div>
          <div class="level">10965收藏</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199A1;
  margin-bottom: 8px;
}

.price {
  color: #F01414;
}

.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
