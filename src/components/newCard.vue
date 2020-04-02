<template lang="html">
  <div class="taskCard">
    <input  class="addCardInput" type="text" @keyup.enter="addCard($event)" placeholder="Add a new card..."/>
    <div class="taskBody">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      newCard: { title: '', user:1499, id: null, tasks: [] }
    }
  },
  methods: {
    addNewCard () {
      if (this.newCard.title && this.newCard.title !== '' && this.newCard.title !== ' ') {
        let card = this.newCard
        this.$store.dispatch ('addCard', card)
        this.newCard.title = ''
      }
    },
    addCard (e) {
      const cardVal = e.target.value.trim()
      if (cardVal !== '' && cardVal !== ' ' && cardVal)
      this.$store.commit('ADD_NEW_CARD', cardVal)
      e.target.value = ''
    }
  },
  computed: {
    ...mapState(['cards'])
  }
}
</script>

<style lang="css" scoped >
</style>
