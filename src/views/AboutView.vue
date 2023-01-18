<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Test task about cities info</h2>

    <p class="about__subtitle">Using VueJS, create single page application.</p>
    <p class="about__subtitle">Main goal – display city details screen.</p>
    <div class="about__description">
      <p class="about__description-title">Code style to follow:</p>
      <ul class="about__list">
        <li class="about__list-item">CSS Animations;</li>
        <li class="about__list-item">
          Data models in TypeScript instead of pure JavaScript;
        </li>
        <li class="about__list-item">Do not use UI libs;</li>
        <li class="about__list-item">Do not use http request libs;</li>
        <li class="about__list-item">Use SCSS with BEM;</li>
        <li class="about__list-item">
          Responsive layout:
          <ul class="about__sublist">
            <li class="about__sublist-item">mobile (&lt; 900px window width),</li>
            <li class="about__sublist-item">desktop (&gt; 900px window width)</li>
          </ul>
        </li>
        <li class="about__list-item">
          [advanced]: toggle to switch day-night screen theming
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .about {
    &__subtitle{
      font-size: 14px;
      margin-top: 5px;
    }
    &__description {
      width: 300px;
      margin: 20px auto;
      &-title{
        font-weight: 600;
      }
    }
    &__list {
      font-size: 14px;
      margin-top: 10px;
      text-align: left;
      &-item{
        line-height: 18px;
        margin-bottom: 5px;
      }
    }
    &__sublist {
      font-size: 14px;
      margin-left: 20px;
      &-item{
        margin-bottom: 3px;
      }
    }
  }
</style>
