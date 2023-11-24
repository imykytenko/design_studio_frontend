<template>
  <main>
    <Navbar/>
    <div class="my-5">
      <div class="mx-auto w-25" style="max-width: 100%">
        <h2 class="text-center mb-3">Update Client</h2>
        <form @submit.prevent="updateClient">
          <!--name-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" name="name" id="name" class="form-control" placeholder="Name" required
                     v-model="client.name" @input="checkName">
              <div id="name_error" class="invalid">{{ errorMessages.name }}</div>
            </div>
          </div>
          <!--surname-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="surname" class="form-label">Surname</label>
              <input type="text" name="surname" id="surname" class="form-control" placeholder="Surname" required
                     v-model="client.surname" @input="checkSurname">
              <div id="surname_error" class="invalid">{{ errorMessages.surname }}</div>
            </div>
          </div>
          <!--email-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" name="email" id="email" class="form-control" placeholder="Email" required
                     v-model="client.email" @input="checkEmail">
              <div id="email_error" class="invalid">{{ errorMessages.email }}</div>
            </div>
          </div>
          <!--phone-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="phone" class="form-label">Phone</label>
              <input type="text" name="phone" id="phone" class="form-control" placeholder="Phone"
                     v-mask="'+38 (0##) ###-##-##'" required v-model="client.phone">
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
  name: "UpdateClient",
  components: {
    Navbar
  },
  data() {
    return {
      client: {
        id: '',
        name: '',
        surname: '',
        email: '',
        phone: ''
      },
      errorMessages: {
        name: '',
        surname: '',
        email: '',
        phone: ''
      },
    }
  },
  beforeMount() {
    this.getClients()
  },
  computed: {
    isFormInvalid() {
      return Object.values(this.errorMessages).some(message => message !== '');
    }
  },
  methods: {
    getClients() {
      fetch(`http://localhost:8080/clients/${this.$route.params.id}`)
          .then(res => res.json())
          .then(data => {
            this.client = data;
            console.log(this.client)
          });
    },
    updateClient() {
      if (!this.isFormInvalid) {
        fetch('http://localhost:8080/clients/' + this.client.id, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.client)
        })
            .then(data => {
              console.log(data)
              this.$router.push("/clients")
            });
      }
    },
    checkName() {
      const name = this.client.name;
      this.errorMessages.name = this.validateName(name);
    },
    validateName(name) {
      let error = "";
      if (!name.trim()) {
        error += "Поле ім'я не може бути порожнім";
      }
      if (name.length > 15) {
        error += "Має бути до 15 символів. ";
      }
      if (/\d/.test(name)) {
        error += "Не можна вводити цифри. ";
      }
      if (name.charAt(0).toUpperCase() !== name.charAt(0)) {
        error += "Перша літера має бути великою. ";
      }
      return error;
    },
    checkSurname() {
      const surname = this.client.surname;
      this.errorMessages.surname = this.validateLastName(surname);
    },
    validateLastName(surname) {
      let error = "";
      if (!surname.trim()) {
        error += "Поле ім'я не може бути порожнім";
      }
      if (surname.length > 20) {
        error += "Має бути до 20 символів. ";
      }
      if (/\d/.test(surname)) {
        error += "Не можна вводити цифри. ";
      }
      if (surname.charAt(0).toUpperCase() !== surname.charAt(0)) {
        error += "Перша літера має бути великою. ";
      }
      return error;
    },
    checkEmail() {
      const email = this.client.email;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        this.errorMessages.email = "Неправильний формат електронної пошти";
      } else {
        this.errorMessages.email = "";
      }
    }
  }
}
</script>

<style scoped>

</style>