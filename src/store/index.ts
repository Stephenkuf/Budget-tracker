import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      id:'',
      firstName:'',
      lastName:'',
      department:'',
      faculty:''
    },
    budgetsPassed:[],
    pendingBudgets:[],
    departments:[],
    faculties:[],

    budgets:[
              {
                id:0,
                user:'',
                faculty:'social sciences',
                department:'psychology', 
                budgetYear:1930,
                items:[
                  { title:'Pizzard',
                    units:23,
                    price:122500
                  }
                ],
                status:'pending'
              },
              {
                id:1,
                user:'',
                faculty:' sciences',
                department:'chemistry', 
                budgetYear:1930,
                items:[
                  { title:'Sharwarms',
                    units:23,
                    price:100
                  }
                ],
                status:'pending'
              },
              {
                id:1,
                user:'',
                faculty:'Law',
                department:'Law', 
                budgetYear:1930,
                items:[
                  { title:'Rolls royce',
                    units:2,
                    price:230000000
                  }
                ],
                status:'approved'
              }
    ],
    // budget:{
    //   id:0,
    //   faculty:"",
    //   department:"",
    //   items:{},
    //   year:0,
    //   status:'pending'       
    // },   
    selectedBudget:[ 
     
    ]
  },
  mutations:{

      addBudget (state , payload) {
        // mutate state
        state.budgets.push(payload)
      },
      displayBudget(state ,payload ){
        state.selectedBudget = payload
      }    

  },
  actions: {
    addBudget({commit},payload){
      this.commit('addBudget' , payload)
    },
    displayBudget({commit},payload){
      this.commit('displayBudget', payload )      
    }
  },
  getters:{
   
    budgets: state => {
      return state.budgets
    },
    budgetsNo: state =>{
      return state.budgets.length
    },
    selectedBudget: state =>{
      return state.selectedBudget
    },
 
  },
  modules: {
  }
})
