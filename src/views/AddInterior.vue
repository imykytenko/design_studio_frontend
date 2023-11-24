<template>
  <main>
    <Navbar/>
    <div class="my-5">
      <div class="mx-auto w-25" style="max-width: 100%">
        <h2 class="text-center mb-3">Add Interior</h2>
        <form @submit.prevent="addInterior">
          <!--description-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="description" class="form-label">Description</label>
              <textarea name="description" id="description" class="form-control" placeholder="Description" required
                        v-model="interior.description" @input="checkDescription"></textarea>
              <div id="description_error" class="invalid">{{ errorMessages.description }}</div>
            </div>
          </div>
          <!--materials-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="materials" class="form-label">Materials</label>
              <input type="text" name="materials" id="materials" class="form-control" placeholder="Materials" required
                     v-model="interior.materials" @input="checkMaterials">
              <div id="materials_error" class="invalid">{{ errorMessages.materials }}</div>
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
  name: "AddInterior",
  components: {
    Navbar
  },
  data() {
    return {
      interior: {
        description: '',
        materials: ''
      },
      errorMessages: {
        description: '',
        materials: ''
      },
    }
  },
  computed: {
    isFormInvalid() {
      return Object.values(this.errorMessages).some(message => message !== '');
    }
  },
  methods: {
    addInterior() {
      if (!this.isFormInvalid) {
        fetch('http://localhost:8080/interiors/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.interior)
        })
            .then(data => {
              console.log(data)
              this.$router.push("/interiors")
            })
      }
    },
    checkDescription() {
      const description = this.interior.description;
      this.errorMessages.description = this.validateDescription(description);
    },
    validateDescription(description) {
      let error = "";
      if (!description.trim()) {
        error += "Поле опису не може бути порожнім";
      }
      return error;
    },
    checkMaterials() {
      const materials = this.interior.materials;
      this.errorMessages.materials = this.validateMaterials(materials);
    },
    validateMaterials(materials) {
      let error = "";
      if (!materials.trim()) {
        error += "Поле матеріалів не може бути порожнім";
      }
      return error;
    }
  }
}
</script>

<style scoped>
.invalid{
  color: red;
}
</style>
