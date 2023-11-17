<template id="taskList">
    <div class="container">
  <h1 class="">My Todo List</h1>
  <div class="card">
    <div class="flex">
      <input placeholder="Add new todo" v-model="newTask"/>
        <button @click="addTask">Add</button>
    </div>
  </div>
  <div class="card">
    <div class="card-inner">
      <h2>Todo</h2>
      <ul class="list">
        <li class="list-item" v-for="(task, key) in tasks" :key="key" :class="{completed: task.completed}">
          <div class="list-item-toggle" @click="completeTask(task.id)"></div><span>{{ task.name }}</span>
          <div class="list-item-delete" @click="removeTask(task.id)">X</div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
import axios from "axios";
export default {
    name: 'taskList',
      data() {
        return {
            tasks: [],
            newTask: '',
            baseURL: 'http://localhost:3000',
        };
      },
      mounted(){
        this.getTasks();
      },
    //   computed: {
    //     incomplete() {
    //       return this.tasks.filter(this.inProgress).length;
    //     }
    //   },
      methods: {
        getTasks()
        {
            axios.get(this.baseURL+'/tasks')
            .then(response => {
                this.tasks = response.data.tasks;
            })
        },
        addTask() {
          if (this.newTask) {
            axios.post(this.baseURL+'/add-task', {newTask: this.newTask})
            .then(response => {
                this.tasks = response.data.tasks;
            })
            this.newTask = '';
          }
        },
        completeTask(index) {
            axios.post(this.baseURL+'/complete-task', {id: index})
            .then(response => {
                this.tasks = response.data.tasks;
            })
        },
        removeTask(index) {
            axios.post(this.baseURL+'/remove-task', {id: index})
            .then(response => {
                this.tasks = response.data.tasks;
            })
        },
    //     clearCompleted() {
    //       this.tasks = this.tasks.filter(this.inProgress);
    //     },
    //     clearAll() {
    //       this.tasks = [];
    //     },
        
    //     inProgress(task) {
    //       return ! this.isCompleted(task);
    //     },
    //     isCompleted(task) {
    //       return task.completed;
    //     }
      }
}
</script>
<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  background: #faffff;
  font-size: 16px;
}

* {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #3d4855;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
}

.container {
  padding: 24px 0;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
}

.card {
  border-radius: 4px;
  box-shadow: 1px 1px 40px -10px #31505f30, 0px 1px 2px 0px #31505f30;
  background: white;
  margin-bottom: 24px;
}

.card-inner {
  padding: 16px 24px;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

input {
  border-radius: 4px;
  background: transparent;
  border: none;
  width: 100%;
  padding: 14px;
  font-size: 16px;
  border: 1px solid transparent;
  height: 100%;
  display: block;
  outline: none;
}

button {
  background: #4fc08d;
  padding: 10px 22px;
  border: none;
  color: white;
  border-radius: 4px;
  margin: 8px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 1px 1px 15px -2px #212c4430;
  transition: 0.15s;
}

button:hover {
  background: #42aa7b;
}

button:disabled {
  background: #e8e8e8;
  color: #555;
  box-shadow: none;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.list-item {
  padding: 12px 16px 12px 16px;
  border: 1px solid #e8e8e8;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 6px;
  border-radius: 4px;
}

.list-item:first-child {
  border-top: 1px solid #e8e8e8;
}

.list-item-toggle {
  border: 1px solid #e8e8e8;
  border-radius: 999px;
  height: 21px;
  width: 21px;
  margin-right: 16px;
}

.list-item-delete {
  margin-left: auto;
  color: tomato;
  margin-top: -2px;
  font-weight: bold;
  text-decoration: none !important;
}

.list-item.completed {
  border: 1px solid #4fc08d;
}

.list-item.completed span {
  text-decoration: line-through;
}

.list-item.completed .list-item-toggle {
  background: #4fc08d;
  border: #4fc08d;
}</style>