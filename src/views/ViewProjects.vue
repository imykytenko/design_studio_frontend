<template>
  <main>
    <Navbar/>
    <!-- table -->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center">View Projects</h1>
          <a href="/projects/add" class="btn btn-primary">Add Project</a>
          <div class="table-responsive overflow-x-auto">
            <table class="table table-striped">
              <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Description</th>
                <th scope="col">Budget</th>
                <th scope="col">Action</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="project in projects" :key="project.id">
                <th scope="row">{{ project.id }}</th>
                <td>{{ project.name }}</td>
                <td>{{ project.startDate }}</td>
                <td>{{ project.endDate }}</td>
                <td>{{ project.description }}</td>
                <td>{{ project.budget }}</td>

                <td>
                  <router-link :to="`/projects/edit/${project.id}`" class="btn btn-primary">Edit</router-link>
                  <button class="btn btn-danger mx-2" @click="confirmDelete(project.id)">Delete</button>
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
  name: "ViewProjects",
  components: {
    Navbar,
  },
  data() {
    return {
      projects: [],
    };
  },
  beforeMount() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      fetch("http://localhost:8080/projects")
          .then((res) => res.json())
          .then((data) => {
            this.projects = data;
            console.log(data);
          })
          .catch((error) => {
            console.error("Error fetching projects:", error);
          });
    },
    confirmDelete(id) {
      const result = window.confirm("Are you sure you want to delete this project?");
      if (result) {
        this.deleteProject(id);
      }
    },
    deleteProject(id) {
      fetch(`http://localhost:8080/projects/${id}`, {
        method: "DELETE",
      })
          .then((data) => {
            console.log(data);
            this.getProjects();
          })
          .catch((error) => {
            console.error("Error deleting project:", error);
          });
    },
  },
};
</script>
