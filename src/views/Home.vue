<template lang="html">
  <div class="home">
    <div class="jumbotron">
      <transition name="slide-right" appear>
        <h1 class="align-center">TaskBoard App</h1>
      </transition>
      <transition name="slide-right" appear>
        <h3>Organize your workflow with our app!</h3>
      </transition>
      <transition name="slide-right" appear>
        <button type="button" id="titleBtn" @mouseover="toggleBtn" @mouseleave="toggleBtn" @click.prevent="goToBoard" class="btn btn-lg btn-white btn-jumbo">Go to your board <fa-icon  v-if="hoveredBtn" icon="chevron-right" style="margin-left:3px;"/></button>
      </transition>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <transition name="slide-up" appear>
            <div class="home-card">
              <h3>To do</h3>
              <div class="home-card-body">
                <div class="home-card-task"></div>
                <div class="home-card-task"></div>
                <div class="home-card-task"></div>
              </div>
            </div>
          </transition>
        </div>
        <div class="col-sm-12 col-md-4">
          <transition name="slide-up" appear>
            <div class="home-card card2">
              <h3>Doing</h3>
              <div class="home-card-body">
                <div class="home-card-task"></div>
                <div class="home-card-task"></div>
                <div class="home-card-task"></div>
                <div class="home-card-task"></div>
              </div>
            </div>
          </transition>
        </div>
        <div class="col-sm-12 col-md-4">
          <transition name="slide-up" appear>
            <div class="home-card card3">
              <h3>Done</h3>
              <div class="home-card-body">
                <div class="home-card-task"></div>
                <div class="home-card-task"></div>
                <div class="home-card-task"></div>
                <div class="home-card-task" style="height:72px"></div>
                <div class="home-card-task"></div>
                <div class="home-card-task"></div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row ml-3 mr-3 home-text">
        <div class="col-12 col-md-8">
            <h2 class="home-title">Discover our taskboard</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="col-md-4"></div>
      </div>
      <div class="row ml-3 mr-3">
        <div class="col-md-3"></div>
        <div class="col-12 col-md-8">
          <h2 class="home-title">Upgrade your workflow</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="col-md-1"></div>
      </div>
      <div class="row ml-3 mr-3 home-text-margin">
        <div class="col-md-1"></div>
        <div class="col-12 col-md-8">
          <h2 class="home-title">See how it works</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
    <div class="container-fluid feature-bg">
      <div class="row ml-1 mr-1">
        <div class="col-md-1"></div>
        <div class="col col-md-10 feature-box">
          <div class="row">
            <div class="col-md">
              <h1 class="feature-icon"><fa-icon icon="cloud"/></h1>
              <h2 class="feature-title">Cloud storage</h2>
            </div>
            <div class="col-md">
              <h1 class="feature-icon"><fa-icon icon="shield-alt"/></h1>
              <h2 class="feature-title">High security</h2>
            </div>
            <div class="col-md">
              <h1 class="feature-icon"><fa-icon icon="sync"/></h1>
              <h2 class="feature-title">Real-time sync</h2>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="ml-1 mr-1 home-text-margin home-text">
        <h2 class="action-title text-center">Start using now!</h2>
        <h5 class="text-center">Join our free community and change your workflow for better.</h5>
        <div class="action-btn">
          <button type="button" @click.prevent="goToBoard" class="btn btn-lg btn-danger btn-jumbo">Open my board</button>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <footer>
        <p>© 2020 | <a href="https://michalmlotowski.com">Michał Młotowski</a>. All rights reserved. Demo website.</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hoveredBtn: false
    }
  },
  methods: {
    goToBoard() {
      this.$router.push({name: 'Board'})
    },
    toggleBtn() {
      this.hoveredBtn = !this.hoveredBtn
    }
  }
}
</script>

<style lang="css" scoped >
.jumbotron {
  background: rgb(142,65,98);
  background: linear-gradient(144deg, rgba(142,65,98,1) 0%, rgba(184,56,97,1) 41%, rgba(206,123,145,1) 100%);
  border-radius: 0px;
  color:#fff;
  padding: 75px 16px 125px;
}
.jumbotron h1 {
  font-weight: 600;
}
.jumbotron h3 {
  font-weight: 400;
}
.btn-white {
  background-color: #fff;
  border-radius: 25px;
}
.btn-white:hover, .btn-white:active, .btn-white:focus {
  background-color: #e2e2e2;
}
.btn-danger {
  background: rgb(142,65,98);
  background: linear-gradient(144deg, rgba(142,65,98,1) 0%, rgba(184,56,97,1) 41%, rgba(206,123,145,1) 100%);
  border: 0;
  border-radius: 25px;
}
.btn-danger:hover, .btn-danger:active, .btn-danger:focus {
  background: rgb(142,65,98);
  background: linear-gradient(144deg, rgba(142,65,98,1) 0%, rgba(142,65,98,1) 41%, rgba(142,65,98,1) 100%);
}
.btn-jumbo {
  padding: 20px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 50px;
  margin-top: 32px;
}
.home-card {
  margin-right:10%;
  margin-left: 10%;
  width: 80%;
  box-sizing: border-box;
  height: 250px;
  background-color: #EEC8CE;
  margin-top: -100px;
  border-radius: 10px;
  padding: 25px;
  transition: 0.5s
}
.card2 {
  height: 300px;
  margin-top: -150px;
  display: none;
}
.card3 {
  height: 475px;
  margin-top: -325px;
  display: none;
}
.home-card-body {
  margin: 25px 5px;
}
.home-card-task {
  width: 100%;
  height: 36px;
  border-radius: 5px;
  background-color: white;
  margin-top: 10px;
}
.home-title {
  font-weight: 600;
  color: rgba(184,56,97,1);
}
.home-text {
  margin-top: 75px !important;
}
.home-text-margin {
  margin-bottom: 75px !important;
}
.feature-box {
  box-sizing: border-box;
  width: 100%;
  min-height: 100px;
  background-color: rgba(206,123,145,1);
  border-radius: 10px;
  padding: 20px;
  color: #fff;
}
.feature-bg {
  background-color: rgba(206,123,145,1);
}
.feature-icon {
  margin-top: 10px;
  color: #fff;
  font-size: 75px;
  text-align: center;
}
.feature-title {
  font-weight: 600;
  text-align: center;
}
.action-title {
  font-weight: 600;
}
.action-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-card:hover, .home-card:active {
  transform: scale(1.03);
}
footer {
  border-top: 1px solid rgba(206,123,145,1);
  padding: 25px;
  text-align: center;
}
footer p, footer a {
  font-size: 18px;
  color: #000;
  margin: 0;
}
@media screen and (min-width: 768px) {
  .jumbotron {
    padding: 125px 32px 225px 32px;
  }
  .card3, .card2 {
    display: block;
  }
}
.slide-right-enter {
  transform: translateX(25px);
}
.slide-right-enter-active {
  transition: all 0.4s ease;
}
.slide-up-enter {
  transform: translateY(30px);
}
.slide-up-enter-active {
  transition: all .4s ease;
}
</style>
