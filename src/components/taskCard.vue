<template lang="html">
  <div>
    <draggable :list='cards' group="cards" v-bind="dragOptionsCards">
      <transition-group tag="div" class="row" name="slide-up" appear>
        <div class="taskCard" v-for="(card, $cardIndex) in cards" :key="$cardIndex">
          <p class="closeCard" @click="deleteCard($cardIndex)">&times</p>
          <h3 class="cardTitle">{{ card.title }}</h3>
          <div class="taskBody">
            <draggable :list='card.tasks' group="tasks" v-bind="dragOptions">
              <div class="task" v-for="( task, $taskIndex ) of card.tasks" :key="$taskIndex" @click="openTask(task.id)">
              <p class="taskCardTitle">{{ task.name }}</p>
              <p v-if="task.desc!== '' && task.desc"class="taskCardDesc"> {{ task.desc }} </p>
              </div>
            </draggable>
          <div class="taskFooter">
            <input class="addTaskInput" placeholder="Add a new task..." @keyup.enter="addTaskNew($event, card.tasks)"/>
          </div>
        </div>
      </div>
      <newCard key="newCard"/>
    </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { mapState } from 'vuex'
import newCard from '@/components/newCard.vue'
export default {
  components: {
    newCard,
    draggable
  },
  data () {
    return {
      openedTask: { name: '' },
    }
  },
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
    deleteCard(cardIndex) {
      var conf = confirm('Do you want to permanently delete this card?')

      if(conf === true) {
        this.$store.commit('DELETE_CARD', { cardIndex })
      }
    }
  },
  computed: {
    ...mapState(['cards']),
    dragOptions() {
      return {
        animation: 200,
        group: "tasks",
        disabled: false,
        ghostClass: "ghost",
        delay: 100,
        delayOnTouchOnly: true
      }
    },
    dragOptionsCards() {
      return {
        animation: 200,
        group: "cards",
        disabled: false,
        ghostClass: "ghost",
        delay: 100,
        delayOnTouchOnly: true
      }
    }
  }
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
