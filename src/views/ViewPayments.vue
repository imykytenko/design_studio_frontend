<template>
  <main>
    <Navbar/>
    <!--table-->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center">View Payments</h1>
          <a href="/payments/add" class="btn btn-primary">Add Payment</a>
          <div class="table-responsive overflow-x-auto">
            <table class="table table-striped">
              <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Client</th>
                <th scope="col">Project</th>
                <th scope="col">Amount</th>
                <th scope="col">Payment Method</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="payment in payments" :key="payment.id">
                <th scope="row">{{ payment.id }}</th>
                <td>{{ payment.client.name }} {{ payment.client.surname }}</td>
                <td>{{ payment.project.name }}</td>
                <td>{{ payment.amount }}</td>
                <td>{{ payment.paymentMethod }}</td>
                <td>{{ payment.status }}</td>
                <td>
                  <a class="btn btn-primary" :href="`/payments/edit/${payment.id}`">Edit</a>
                  <button class="btn btn-danger mx-2" @click="confirmDelete(payment.id)">Delete</button>
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
  name: "ViewPayments",
  components: {
    Navbar,
  },
  data() {
    return {
      payments: [],
    };
  },
  beforeMount() {
    this.getPayments();
  },
  methods: {
    getPayments() {
      fetch("http://localhost:8080/payments")
          .then((res) => res.json())
          .then((data) => {
            this.payments = data;
            console.log(data);

            // Fetch client and project details for each payment
            this.payments.forEach((payment) => {
              this.getClientDetails(payment.clientId).then((client) => {
                payment.client = client;
              });
              this.getProjectDetails(payment.projectId).then((project) => {
                payment.project = project;
              });
            });
          });
    },
    confirmDelete(id) {
      const result = window.confirm("Are you sure you want to delete this payment?");
      if (result) {
        this.deletePayment(id);
      }
    },
    deletePayment(id) {
      fetch(`http://localhost:8080/payments/${id}`, {
        method: "DELETE",
      })
          .then((data) => {
            console.log(data);
            this.getPayments();
          })
          .catch((error) => {
            console.error("Error deleting payment:", error);
          });
    },
    getClientDetails(clientId) {
      const endpoint = `http://localhost:8080/clients/${clientId}`;
      return fetch(endpoint).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });
    },
    getProjectDetails(projectId) {
      const endpoint = `http://localhost:8080/projects/${projectId}`;
      return fetch(endpoint).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });
    },
  },
};
</script>