<template>
  <main>
    <Navbar/>
    <!--table-->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center">View Employee</h1>
          <a href="/employees/add" class="btn btn-primary">Add Employee</a>
          <div class="table-responsive overflow-x-auto">
            <table class="table table-striped">
              <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Position</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="employee in employees" :key="employee.id">
                <th scope="row">{{ employee.id }}</th>
                <td>{{ employee.position }}</td>
                <td>{{ employee.name }}</td>
                <td>{{ employee.surname }}</td>
                <td>{{ employee.email }}</td>
                <td>{{ employee.phone }}</td>
                <td>
                  <a class="btn btn-primary" :href="`/employees/edit/${employee.id}`">Edit</a>
                  <button class="btn btn-danger mx-2" @click="confirmDelete(employee.id)">Delete</button>
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
  name: "ViewEmployees",
  components: {
    Navbar
  },
  data() {
    return {
      employees: []
    };
  },
  beforeMount() {
    this.getEmployees();
  },
  methods: {
    getEmployees() {
      fetch('http://localhost:8080/employees')
          .then(res => res.json())
          .then(data => {
            this.employees = data;
            console.log(data);
          })
    },
    confirmDelete(id) {
      const result = window.confirm('Are you sure you want to delete this employee?');
      if (result) {
        this.deleteEmployees(id);
      }
    },
    deleteEmployees(id) {
      fetch(`http://localhost:8080/employees/${id}`, {
        method: 'DELETE'
      })
          .then(data => {
            console.log(data);
            this.getEmployees();
          })
          .catch(error => {
            console.error('Error deleting employee:', error);
          });
    }
  }
};
</script>

<style scoped>

</style>
