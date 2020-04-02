<template lang="html">
  <div>
    <transition-group tag="div" class="row" name="slide-up" appear>
      <div class="taskCard" v-for="(card, $cardIndex) in cards" :key="$cardIndex"
      draggable @drop="dropType($event, card.tasks, $cardIndex)" @dragover.prevent @dragenter.prevent @dragstart.self="dragCard($event, $cardIndex)">
        <p class="closeCard" @click="deleteCard($cardIndex)">&times</p>
        <h3 class="cardTitle">{{ card.title }}</h3>
        <div class="taskBody">
          <div class="task" v-for="( task, $taskIndex ) of card.tasks" :key="$taskIndex"
          draggable @dragstart="dragTask($event, $taskIndex, $cardIndex)" @click="openTask(task.id)"
          @dragover.prevent @dragenter.prevent @drop.stop="dropType($event, card.tasks, $cardIndex, $taskIndex)">
            <p class="taskCardTitle">{{ task.name }}</p>
            <p v-if="task.desc!== '' && task.desc"class="taskCardDesc"> {{ task.desc }} </p>
          </div>
          <div class="taskFooter">
            <input class="addTaskInput" placeholder="Add a new task..." @keyup.enter="addTaskNew($event, card.tasks)"/>
          </div>
        </div>
      </div>
      <newCard key="newCard"/>
    </transition-group>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import newCard from '@/components/newCard.vue'
export default {
  components: {
    newCard
  },
  data () {
    return {
      openedTask: { name: '' },
    }
  },
  props: ['number'],
  methods: {
    openTask (id) {
      this.$router.push({ name: 'task', params: {id: id }})
    },
    addTaskNew(e, tasks) {
      const newTask = e.target.value.trim()
      if(newTask !== '' && newTask !== ' ' && newTask) {
        this.$store.commit('ADD_NEW_TASK', { name: newTask, tasks })
        e.target.value = ''
      }
    },
    dragTask(e, taskIndex, cardIndex) {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'

      e.dataTransfer.setData('task-index', taskIndex)
      e.dataTransfer.setData('card-index', cardIndex)
      e.dataTransfer.setData('type', 'task')
    },
    dropTask(e, tasks, newTaskIndex) {
      const baseCardIndex = e.dataTransfer.getData('card-index')
      const baseCardTasks = this.cards[baseCardIndex].tasks
      const baseTaskIndex = e.dataTransfer.getData('task-index')
      const newTasks = tasks

      this.$store.commit('MOVE_TASK', { baseCardTasks, newTasks, baseTaskIndex, newTaskIndex })
    },
    dragCard(e, baseCardIndex) {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'

      e.dataTransfer.setData('card-index', baseCardIndex)
      e.dataTransfer.setData('type', 'card')
    },
    dropCard(e, newCardIndex) {
      const baseCardIndex = e.dataTransfer.getData('card-index')

      this.$store.commit('MOVE_CARD', { baseCardIndex, newCardIndex })
    },
    dropType(e, tasks, newCardIndex, newTaskIndex) {
      if(e.dataTransfer.getData('type') === 'task') {
        this.dropTask(e, tasks, newTaskIndex)
      }
      else {
        this.dropCard(e, newCardIndex)
      }
    },
    deleteCard(cardIndex) {
      var conf = confirm('Do you want to permanently delete this card?')

      if(conf === true) {
        this.$store.commit('DELETE_CARD', { cardIndex })
      }
    }
  },
  computed: mapState([
    'cards'
  ])
}
</script>

<style lang="css" scoped >
.cardTitle {
  font-weight: 500;
  margin-left: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 275px;
}
</style>
