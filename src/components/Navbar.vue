<template lang="html">
  <div class="main-menu">
    <Nav class="navbar navbar-expand">
      <ul class="navbar-nav">
        <span style="margin-right:16px;"><img alt="logo" src="../assets/taskboard_logo.png" class="logo-img"/></span>
        <li class="nav-link"><router-link class="text-black" :to="{ name: 'Home'}">Home</router-link></li>
        <li class="nav-link"><router-link class="text-black" :to="{ name: 'Board'}">Board</router-link></li>
      </ul>
    </Nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped >
</style>
