<template lang="html">
  <transition name="fade" appear>
    <div class="taskModal-bg" @click.self='closeModal'>
      <transition name="slide-up" appear>
        <div class="taskModal">
          <div class="taskModal-head">
            <!--<p class="closeTask" @click="deleteTask()"><fa-icon icon="trash"/></p> COMING SOON-->
            <h3 v-if="!editMode">{{ task.name }}</h3>
            <input class="editCardInput editInput" v-if="editMode" value="editName" v-model="editName"/>
          </div>
          <div class="taskModal-body">
            <p v-if="!editMode">
              {{ task.desc }}
            </p>
            <textarea class="editTaskInput editInput" v-model="editDesc" v-if="editMode" rows="5">{{ editDesc }}</textarea>
          </div>
          <div class="taskModal-foot">
            <button type="button" class="btn btn-lg btn-white" v-if="!editMode" @click="toggleEdit">Edit</button>
            <button type="button" class="btn btn-lg btn-white" v-if="editMode" @click="cancelEdit">Cancel</button>
            <button type="button" class="btn btn-lg btn-danger ml-2" v-if="editMode" @click="saveEdit">Save</button>
            <button type="button" class="btn btn-lg btn-danger ml-2" v-if="!editMode" @click='closeModal'>Close</button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      editMode: false,
      editName: '',
      editDesc: ''
    }
  },
  methods: {
    closeModal () {
      if (!this.editMode) {
        this.$router.push({ name: 'Board' })
      }
    },
    toggleEdit () {
      this.editName = this.task.name
      this.editDesc = this.task.desc
      this.editMode = !this.editMode
    },
    saveEdit () {
      this.task.name = this.editName
      this.task.desc = this.editDesc
      this.$store.dispatch('editTask', this.task)
      this.editMode = !this.editMode
    },
    cancelEdit () {
      this.toggleEdit()
    }
  },
  computed: {
    ...mapGetters(['getTask']),
    task () {
      return this.getTask(this.$route.params.id)
    }
  }
}
</script>

<style lang="css" scoped >
  .taskModal-bg {
    background-color: rgba(0, 0, 0, 0.40);
    width: 100%;
    height:100%;
    left: 0;
    top:0;
    z-index: 5;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .taskModal {
    background-color: #EEC8CE;
    width: 80%;
    max-width: 700px;
    color: black;
    border-radius: 10px;
    z-index: 6;
    box-shadow: 2px 3px 12px 0px rgba(0,0,0,0.65);
  }
  .taskModal-head {
    padding: 20px;
  }
  .taskModal-body, .taskModal-foot {
    padding: 0px 20px 20px 20px;
  }
  .taskModal-foot {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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
</style>
