<template>
<main>
  <Navbar/>
  <div class="row">
    <div class="col-lg-6">
      <div class="projects mt-4">
        <h3>Наші проекти</h3>
        <p>
          Ласкаво просимо до нашої студії дизайну! Ми робимо все можливе, щоб надати вам найкращі рішення
          в
          області
          дизайну. Наша команда професіоналів працює над різноманітними проектами, включаючи веб-дизайн,
          графічний дизайн та багато іншого. Перегляньте наші проекти нижче, щоб побачити нашу роботу.
        </p>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="news mt-4">
        <h3>Останні новини</h3>
        <p>
          Тут ви можете знайти останні новини та оновлення від нашої студії дизайну. Ми завжди намагаємося
          тримати вас в курсі наших проектів та інших подій у світі дизайну. Перегляньте наш блог, щоб
          дізнатися більше.Ми завжди в курсі найсвіжіших тенденцій та інновацій в світі дизайну.
        </p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-12">
      <div class="about mt-4">
        <h3>Про нас</h3>
        <p>
          Вітаємо вас у студії творчого дизайну, де кожен проект — це унікальна можливість втілити ваші
          ідеї у візуальну реальність.
          Ми — команда пристрасних та талановитих дизайнерів, які об'єднали свої сили, щоб створювати
          вражаючі та ефективні дизайн-рішення.<br>
          Наша місія — робити світ більш красивим та функціональним за допомогою вишуканого дизайну. Ми
          віримо, що кожен проєкт може вражати, надихати та висловлювати вашу унікальність. Незалежно від
          того, чи це веб-сайт, графічний елемент чи корпоративний стиль — ми прагнемо до винятковості в
          кожній деталі.<br>
          Ми розуміємо, що кожен клієнт — унікальний, тому ми підходимо до кожного проекту індивідуально.
          Наші дизайнери вивчають ваш бренд, розуміють вашу аудиторію та створюють рішення, які не лише
          відповідають вашим потребам, але й перевищують очікування.
        </p>
      </div>
    </div>
    </div>
</main>
  <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
main{
  padding-left: 15px;
  padding-right: 15px;
}
.projects {
  animation: fadeInUp 1s ease;
}

.news {
  animation: fadeInUp 1s ease;
}

.about {
  animation: fadeInUp 3s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

body {
  font-family: 'Georgia', serif;
}

header {
  background-color: #333;
}

.projects, .news, .about {
  border: 1px solid #333;
  padding: 15px;
  margin-bottom: 20px;
  font-family: 'Georgia', serif;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

</style>