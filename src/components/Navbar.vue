<template>
  <main>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">DesignStudio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportContent"
                aria-controls="navbarSupportContent" aria-expanded="false" aria-label="Toggle navigation"><span
            class="navbar-toggle-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a href="/" class="nav-link">Home</a> </li>
          </ul>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a href="/clients" class="nav-link">Clients</a> </li>
          </ul>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a href="/projects" class="nav-link">Projects</a> </li>
          </ul>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a href="/payments" class="nav-link">Payments</a> </li>
          </ul>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a href="/employees" class="nav-link">Employees</a> </li>
          </ul>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a href="/interiors" class="nav-link">Interiors</a> </li>
          </ul>
        </div>
      </div>
    </nav>
  </main>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
header .navbar-brand {
  color: #fff;
  transition: color 0.3s ease;
  font-size: 60px;
  font-family: 'Brush Script MT', cursive;
}
.navbar-brand{
  color: darkslateblue;
  transition: color 0.3s ease;
  font-size: 60px;
  font-family: 'Brush Script MT', cursive;
}
header .navbar-brand:hover {
  color: rgb(173 216 230);
}
</style>