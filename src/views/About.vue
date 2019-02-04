<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <listComponet :todos="todos"/>
        </div>
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="submit">
                <div class="form-group">
                  <label for>Todo</label>
                  <input type="text" class="form-control" v-model="todo">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import listComponet from "../components/List.vue";
export default {
  components: {
    listComponet
  },
  data() {
    return {
      todo: "",
      todos: []
    };
  },
  mounted() {
    todosRef.on("value", snapshots => {
      this.todos = [];
      snapshots.forEach(snapshot => {
        this.todos.push({ key: snapshot.key, val: snapshot.val() });
      });
      this.todos.reverse();
    });
  },
  methods: {
    submit() {
      this.insertToContact();
    },
    insertToContact() {
      let data = {
        date: new Date().toString(),
        item: this.todo
      };
      todosRef.push(data);
      this.todo = "";
    }
  }
};
</script>
