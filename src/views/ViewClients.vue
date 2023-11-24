<template>
  <main>
    <Navbar/>
    <!--table-->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center">View Clients</h1>
          <a href="/clients/add" class="btn btn-primary">Add Clients</a>
          <div class="table-responsive overflow-x-auto">
            <table class="table table-striped">
              <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="client in clients" :key="client.id">
                <th scope="row">{{ client.id }}</th>
                <td>{{ client.name }}</td>
                <td>{{ client.surname }}</td>
                <td>{{ client.email }}</td>
                <td>{{ client.phone }}</td>
                <td>
                  <a class="btn btn-primary" :href="`/clients/edit/${client.id}`">Edit</a>
                  <button class="btn btn-danger mx-2" @click="confirmDelete(client.id)">Delete</button>
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
  name: "ViewClients",
  components: {
    Navbar
  },
  data() {
    return {
      clients: []
    }
  },
  beforeMount() {
    this.getClients()
  },
  methods: {
    getClients() {
      fetch('http://localhost:8080/clients')
          .then(res => res.json())
          .then(data => {
            this.clients = data
            console.log(data)
          })
    },
    confirmDelete(id) {
      const result = window.confirm('Are you sure you want to delete this client?');
      if (result) {
        this.deleteClients(id);
      }
    },
    deleteClients(id) {
      fetch(`http://localhost:8080/clients/${id}`, {
        method: 'DELETE'
      })
          .then(data => {
            console.log(data)
            this.getClients()
          })
    }
  },
}
</script>