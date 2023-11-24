<template>
  <main>
    <Navbar/>
    <div class="my-5">
      <div class="mx-auto w-25" style="max-width: 100%">
        <h2 class="text-center mb-3">Add Payment</h2>
        <form @submit.prevent="addPayment">
          <!-- client selection -->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="client" class="form-label">Client</label>
              <select v-model="payment.clientId" class="form-select" required>
                <option v-for="client in clients" :key="client.id" :value="client.id">
                  {{ client.name }} {{ client.surname }}
                </option>
              </select>
            </div>
          </div>
          <!-- project selection -->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="project" class="form-label">Project</label>
              <select v-model="payment.projectId" class="form-select" required>
                <option v-for="project in projects" :key="project.id" :value="project.id">
                  {{ project.name }}
                </option>
              </select>
            </div>
          </div>
          <!-- amount -->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="amount" class="form-label">Amount</label>
              <div class="input-group">
                <span class="input-group-text">у грн</span>
                <input type="number" name="amount" id="amount" class="form-control" placeholder="Сума" required
                       v-model="payment.amount" @input="checkAmount">
              </div>
              <div id="amount_error" class="invalid">{{ errorMessages.amount }}</div>
            </div>
          </div>
          <!-- payment method -->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="paymentMethod" class="form-label">Payment Method</label>
              <select v-model="payment.paymentMethod" class="form-select" required>
                <option value="Готівка">Готівка</option>
                <option value="Картка">Картка</option>
                <option value="Банківський переказ">Банківський переказ</option>
                <option value="PayPal">PayPal</option>
              </select>
            </div>
          </div>
          <!-- status -->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="status" class="form-label">Status</label>
              <select v-model="payment.status" class="form-select" required>
                <option value="Очікується">Очікується</option>
                <option value="Завершено">Завершено</option>
                <option value="Скасовано">Скасовано</option>
                <option value="Повернуто">Повернуто</option>
                <option value="У процесі">У процесі</option>
              </select>
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
  name: "AddPayment",
  components: {
    Navbar,
  },
  data() {
    return {
      payment: {
        clientId: '',
        projectId: '',
        amount: 0,
        paymentMethod: '',
        status: '',
      },
      errorMessages: {
        amount: ''
      },
      clients: [],
      projects: [],
    };
  },
  beforeMount() {
    this.getClients();
    this.getProjects();
  },
  computed: {
    isFormInvalid() {
      return Object.values(this.errorMessages).some(message => message !== '');
    }
  },
  methods: {
    addPayment() {
      if (!this.isFormInvalid) {
        fetch("http://localhost:8080/payments/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.payment),
        })
            .then((response) => response.json())
            .then((data) => {
              console.log("Payment added successfully:", data);
              this.$router.push("/payments");
            })
      }
    },
    getClients() {
      fetch("http://localhost:8080/clients")
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            this.clients = data;
            console.log("Clients data:", data);
          })
          .catch((error) => {
            console.error("Error fetching clients:", error);
          });
    },
    getProjects() {
      fetch("http://localhost:8080/projects")
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            this.projects = data;
            console.log("Projects data:", data);
          })
          .catch((error) => {
            console.error("Error fetching projects:", error);
          });
    },
    checkAmount() {
      const amount = this.payment.amount;
      this.errorMessages.amount = this.validateAmount(amount);
    },
    validateAmount(amount) {
      let error = "";
      if (amount < 0) {
        error += "Сума не може бути від'ємним. ";
      }
      return error;
    }
  },
};
</script>

<style scoped>
.invalid{
  color: red;
}
</style>
