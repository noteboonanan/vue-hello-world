<template>
  <div class="list">
    <div class="alert alert-primary" role="alert" v-for="(item, key) in todos" :key="key">
      <div class="d-flex align-items-center justify-content-between">
        <div class="title">
          {{item.val.item}}
          <div>
            <small>{{dateFormat(item.val.date)}}</small>
          </div>
        </div>
        <button
          class="btn m-2 btn-warning btn-sm shadow-sm border-0"
          @click="deleteContact(item.key)"
        >x</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  methods: {
    deleteContact(key) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert " + key,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          todosRef.child(key).remove();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    dateFormat(date) {
      let new_date = new Date(date);
      return (
        new_date.getDate() +
        "/" +
        new_date.getMonth() +
        "/" +
        new_date.getFullYear() +
        " " +
        new_date.getHours() +
        ":" +
        new_date.getMinutes() +
        ":" +
        new_date.getSeconds()
      );
    }
  }
};
</script>
