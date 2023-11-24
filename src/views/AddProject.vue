<template>
  <main>
    <Navbar/>
    <div class="my-5">
      <div class="mx-auto w-25" style="max-width: 100%">
        <h2 class="text-center mb-3">Add Project</h2>
        <form @submit.prevent="addProject">
          <!--name-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" name="name" id="name" class="form-control" placeholder="Name" required
                     v-model="project.name" @input="checkName">
              <div id="name_error" class="invalid">{{ errorMessages.name }}</div>
            </div>
          </div>
          <!--start date-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="startDate" class="form-label">Start Date</label>
              <input type="date" name="startDate" id="startDate" class="form-control" required
                     v-model="project.startDate" @input="checkStartDate">
              <div id="startDate_error" class="invalid">{{ errorMessages.startDate }}</div>
            </div>
          </div>
          <!--end date-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="endDate" class="form-label">End Date</label>
              <input type="date" name="endDate" id="endDate" class="form-control"
                     v-model="project.endDate" @input="checkEndDate">
              <div id="endDate_error" class="invalid">{{ errorMessages.endDate }}</div>
            </div>
          </div>
          <!--description-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="description" class="form-label">Description</label>
              <textarea name="description" id="description" class="form-control" placeholder="Description"
                        v-model="project.description" @input="checkDescription"></textarea>
              <div id="description_error" class="invalid">{{ errorMessages.description }}</div>
            </div>
          </div>
          <!--budget-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="budget" class="form-label">Budget</label>
              <div class="input-group">
                <span class="input-group-text">у грн</span>
                <input type="number" name="budget" id="budget" class="form-control" placeholder="Budget" required
                       v-model="project.budget" @input="checkBudget">
              </div>
              <div id="budget_error" class="invalid">{{ errorMessages.budget }}</div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 form-group">
              <input type="submit" value="Submit" class="btn btn-primary w-100" :disabled="isFormInvalid">
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "AddProject",
  components: {
    Navbar
  },
  data() {
    return {
      project: {
        name: '',
        startDate: '',
        endDate: '',
        description: '',
        budget: 0
      },
      errorMessages: {
        name: '',
        startDate: '',
        endDate: '',
        description: '',
        budget: ''
      },
    }
  },
  computed: {
    isFormInvalid() {
      return Object.values(this.errorMessages).some(message => message !== '');
    }
  },
  methods: {
    addProject() {
      if (!this.isFormInvalid) {
        fetch('http://localhost:8080/projects/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.project)
        })
            .then(data => {
              console.log(data)
              this.$router.push("/projects")
            })
            .catch(error => {
              console.error('Error adding project:', error);
            });
      }
    },
    checkName() {
      const name = this.project.name;
      this.errorMessages.name = this.validateName(name);
    },
    validateName(name) {
      let error = "";
      if (!name.trim()) {
        error += "Поле ім'я не може бути порожнім. ";
      }
      if (name.length > 50) {
        error += "Має бути до 50 символів. ";
      }
      return error;
    },
    checkStartDate() {
      const startDate = this.project.startDate;
      this.errorMessages.startDate = this.validateStartDate(startDate);
    },
    validateStartDate(startDate) {
      let error = "";
      const currentDate = new Date();
      const selectedDate = new Date(startDate);

      if (selectedDate < currentDate) {
        error += "Дата початку повинна бути у майбутньому. ";
      }
      return error;
    },
    checkEndDate() {
      const endDate = this.project.endDate;
      this.errorMessages.endDate = this.validateEndDate(endDate);
    },
    validateEndDate(endDate) {
      let error = "";
      const startDate = new Date(this.project.startDate);
      const selectedEndDate = new Date(endDate);

      if (selectedEndDate < startDate) {
        error += "Дата закінчення повинна бути після дати початку. ";
      }
      return error;
    },
    checkDescription() {
      const description = this.project.description;
      this.errorMessages.description = this.validateDescription(description);
    },
    validateDescription(description) {
      let error = "";
      if (description.length > 500) {
        error += "Має бути до 500 символів. ";
      }
      return error;
    },
    checkBudget() {
      const budget = this.project.budget;
      this.errorMessages.budget = this.validateBudget(budget);
    },
    validateBudget(budget) {
      let error = "";
      if (budget < 0) {
        error += "Бюджет не може бути від'ємним. ";
      }
      return error;
    }
  }
}
</script>

<style scoped>
.invalid {
  color: red;
}
</style>
