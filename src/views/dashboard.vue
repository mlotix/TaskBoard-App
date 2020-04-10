<template lang="html">
  <div>
    <div class="container-fluid dashboard">
      <div class="row p-4">
        <taskCard/>
      </div>
    </div>
    <div class="version">
      <a class="text-dark" style="font-size:13px"href="#" @click.prevent="resetData">Reset all data</a>
    </div>
      <div v-if="openedTask">
          <router-view/>
      </div>
  </div>
</template>

<script>
import taskCard from '@/components/taskCard.vue'
import newCard from '@/components/newCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    taskCard,
    newCard
  },
  computed: {
    ...mapState(['cards']),
    openedTask () {
      return this.$route.name === 'task'
    }
  },
  methods: {
    resetData() {
      if(confirm('Do you want to reset all data?')) {
        this.$store.dispatch('resetData')
        this.$router.go()      
      }
    }
  }
}
</script>

<style lang="css" scoped >
  .version {
    position: fixed;
    right: 6px;
    bottom: 6px;
    background-color: rgba(255, 255, 255, 0.6);
    display: inline-block;
    padding: 10px;
  }
  .version p {
    text-align: center;
    font-size: 10px;
    color:#000;
    margin: 0;
  }
  .fade-up-enter {
    opacity:0;
    transform: translateY(25px);
  }
  .fade-up-enter-active,
  .fade-up-leave-active {
    transition: all .4s ease;
  }
  .fade-up-leave-to {
    opacity:0;
    transform: translateY(-25px);
  }
</style>
