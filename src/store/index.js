import Vue from 'vue'
import Vuex from 'vuex'
import { generateID } from '@/generate'

Vue.use(Vuex)

const user =
[
  {
    id: 1499,
    name: 'xawess'
  }
]

const cards = [
  {
    title: 'Do zrobienia',
    id: 0,
    user: 1499,
    tasks: [
      {
        name: 'Napisac aplikacje w JavaScript',
        desc: 'Termin do wtorku, technologia JavaScript i html',
        id: '0a'
      },
      {
        name: 'Nauczyc sie gotowac',
        desc: 'gotowanie kurczaka, zupy pomidorowej oraz gularzu',
        id: '1c'
      }
    ]
  },
  {
    title: 'W trakcie',
    id: 1,
    user: 1499,
    tasks: [
      {
        name: 'Nauka hiszpanskiego',
        desc: 'Nauczyc sie slowek z dzialu dom',
        id: '2b'
      }
    ]
  },
  {
    title: 'Zrobione',
    id: 2,
    user: 1499,
    tasks: [
      {
        name: 'Spacer po lesie',
        desc: 'Relaksujacy spacer po lesie kabackim',
        id: '3d'
      }
    ]
  }
]
export default new Vuex.Store({
  state: {
    cards: cards,
    user: user
  },
  getters: {
    getTask (state) {
      return (id) => {
        for (const card of state.cards) {
          for (const task of card.tasks) {
            if (task.id === id) {
              return task
            }
          }
        }
      }
    }
  },
  mutations: {
    EDIT_TASK (state, t) {
      for (const card of state.cards) {
        for (const task of card.tasks) {
          if (task.id === t.id) {
            task.name = t.name
            task.desc = t.desc
          }
        }
      }
    },
    ADD_NEW_TASK (state, { name, tasks }) {
      tasks.push({ name, desc: '', id: generateID(), })
    },
    ADD_NEW_CARD (state, payload) {
      let c = { title: payload, user: 1499, id: state.cards.length, tasks: [] }
      state.cards.push(c)
    },
    MOVE_TASK (state, { baseCardTasks, newTasks, baseTaskIndex, newTaskIndex }) {
      const theTask = baseCardTasks.splice(baseTaskIndex, 1)[0]
      if(newTaskIndex !== undefined) {
        newTasks.splice(newTaskIndex, 0, theTask)
      }
      else {
        newTasks.push(theTask)
      }

    },
    MOVE_CARD (state, { baseCardIndex, newCardIndex }) {
      const theCards = state.cards
      const theCard = theCards.splice(baseCardIndex, 1)[0]
      theCards.splice(newCardIndex, 0, theCard)
    },
    DELETE_CARD (state, { cardIndex }) {
      const theCards = state.cards
      theCards.splice(cardIndex, 1)
    }
  },
  actions: {
    editTask ({ state, commit }, t) {
      commit('EDIT_TASK', t)
    }
  },
  modules: {
  }
})
