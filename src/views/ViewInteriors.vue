<template>
  <main>
    <Navbar/>
    <!--table-->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center">View Interiors</h1>
          <a href="/interiors/add" class="btn btn-primary">Add Interior</a>
          <div class="table-responsive overflow-x-auto">
          <table class="table table-striped">
            <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Description</th>
              <th scope="col">Materials</th>
              <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="interior in interiors" :key="interior.id">
              <th scope="row">{{interior.id}}</th>
              <td>{{interior.description}}</td>
              <td>{{interior.materials}}</td>
              <td>
                <a class="btn btn-primary" :href="`/interiors/edit/${interior.id}`">Edit</a>
                <button class="btn btn-danger mx-2" @click="confirmDelete(interior.id)">Delete</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "ViewInteriors",
  components: {
    Navbar
  },
  data() {
    return {
      interiors: []
    }
  },
  beforeMount(){
    this.getInteriors()
  },
  methods: {
    getInteriors() {
      fetch('http://localhost:8080/interiors')
          .then(res => res.json())
          .then(data => {
            this.interiors = data
            console.log(data)
          })
    },
    confirmDelete(id) {
      const result = window.confirm('Are you sure you want to delete this interior?');
      if (result) {
        this.deleteInteriors(id);
      }
    },
    deleteInteriors(id) {
      fetch(`http://localhost:8080/interiors/${id}`, {
        method: 'DELETE'
      })
          .then(data => {
            console.log(data)
            this.getInteriors()
          })
    }
  },
}
</script>


<style scoped>

</style>