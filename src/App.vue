<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
h1,h2,h3,h4,h5,h6,p,a,body, input, textarea {
  font-family: 'Poppins', sans-serif;
}
input,
label,
select,
button,
textarea
{
	margin:0;
	border:0;
	padding:0;
	display:inline-block;
	vertical-align:middle;
	white-space:normal;
	background:none;
	line-height:1;
}
input:focus, textarea:focus
{
	outline:0;
}
textarea
{
	vertical-align:top;
	overflow:auto;
}
::placeholder {
  color: #414141;
  opacity: 1;
}

:-ms-input-placeholder {
  color: #414141;
}

::-ms-input-placeholder {
  color: #414141;
}
.taskCard {
  display: inline-block;
  margin: 15px;
  padding: 20px 12px;
  width: 320px;
  min-height: 275px;
  background-color: #EEC8CE;
  color: #271F30;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.35);
  overflow: auto;
  max-height: 400px;
  margin-bottom: auto;
  transition: all .5s ease;
}
.taskBody{

}
.taskCardTitle {
  font-size: 16px;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 275px;
  margin-bottom: 0;
  padding-bottom: 0;
}
.taskCardDesc {
  font-size: 13px;
  font-weight: lighter;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 275px;
  margin-bottom: 0;
  padding-bottom: 0;
}
.task {
  background-color: #E8ADBF;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 6px;
  box-shadow: 2px 3px 7px 0px rgba(0,0,0,0.35);
}
.task:hover {
  cursor: pointer;
}
.dashboard {
  min-height: 100vh;
  background: rgb(142,65,98);
  background: linear-gradient(144deg, rgba(142,65,98,1) 0%, rgba(184,56,97,1) 41%, rgba(206,123,145,1) 100%);
}
.main-menu {
  background-color: #fff;
  color:black !important;
  padding: 16px;
  font-size: 20px;
  font-weight: 500;
}
.text-black, .text-black:hover, .text-black:active {
  color: #000;
}
.addTaskInput, .editTaskInput{
  background-color: rgba(0, 0, 0, 0);
  margin-left: 8px;
  font-size: 16px;
  font-weight: 500;
  color: black;
}
.editTaskInput {
  font-size: 18px;
  font-weight: 400;
}
.addCardInput, .editCardInput {
  background-color: rgba(0, 0, 0, 0);
  margin-left: 8px;
  font-size: 1.70rem;
  font-weight: 500;
  color: black;
}
.addCardInput {
  max-height: 33px;
}
.addCardInput, .addTaskInput {
  max-width: 290px
}
.editInput {
  width: 80%;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.25);
  padding: 10px;
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
.closeCard {
  font-size: 24px;
  float: right;
  display: inline;
  margin-top:-12px;
}
.closeCard:hover {
  color:gray;
  cursor: pointer;
}
.closeTask {
  font-size: 18px;
  float: right;
  display: inline;
  margin-top:-10px;
}
.closeTask:hover, .closeTask:focus {
  color:gray;
}
.logo-img {
  height: 45px;
  transition: 0.5s;
}
.logo-img:hover {
  transform: scale(1.04);
}
@media screen and (max-width:400px) {
  .logo-img {
    height: 36px;
  }
  .main-menu {
    font-size: 17px;
  }
}

/**TRANSITIONS **/
.slide-right-enter {
  transform: translateX(25px);
}
.slide-right-enter-active {
  transition: all 0.4s ease;
}
.slide-up-enter {
  transform: translateY(30px);
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all .4s ease;
}
.slide-up-leave-to {
  transform: translateY(-30px);
}

.fade-enter {
  opacity:0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-leave-to {
  opacity:0;
}
</style>
