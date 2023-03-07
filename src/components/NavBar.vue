<script setup>
  import { pushRoute } from "../router";
  const clickHandler = () => {
    pushRoute("/");
  };
</script>

<template>
  <header>
    <nav>
      <div class="logo" @click="clickHandler">
        <!--?xml version="1.0" standalone="no"?-->
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stop-color="rgba(248, 117, 55, 1)"
                offset="0%"
                data-darkreader-inline-stopcolor=""
                style="--darkreader-inline-stopcolor: #a93a06"
              ></stop>
              <stop
                id="stop2"
                stop-color="rgba(158.795, 0, 246.996, 1)"
                offset="100%"
                data-darkreader-inline-stopcolor=""
                style="--darkreader-inline-stopcolor: #7f00c6"
              ></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient)"
            d="M26.2,-30.8C33.9,-24.8,39.9,-16.5,42.4,-6.8C44.9,2.8,43.9,13.8,39,22.7C34.1,31.7,25.3,38.6,15.9,40.8C6.4,43,-3.7,40.6,-13.2,36.8C-22.6,33.1,-31.3,28.1,-35.9,20.5C-40.5,13,-40.9,2.9,-38,-5.5C-35.1,-13.9,-29,-20.6,-22.1,-26.8C-15.2,-32.9,-7.6,-38.6,0.8,-39.6C9.3,-40.6,18.5,-36.9,26.2,-30.8Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            stroke-width="0"
            style="transition: all 0.3s ease 0s"
          ></path>
        </svg>
      </div>
      <ul>
        <li><router-link to="/" class="link">首頁</router-link></li>
        <li>
          <router-link to="/shops/test" class="link">換一頁</router-link>
        </li>
      </ul>
      <div class="fake-div-for-align"></div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  nav {
    height: 5rem;
    background-color: #e9805a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      height: 100%;
      cursor: pointer;
      svg {
        height: 100%;
      }
    }

    ul {
      display: flex;
      list-style-type: none;
      gap: 3rem;

      li {
        padding: 1rem;
        .link {
          text-decoration: none;
          color: white;
          font-size: 1.2rem;
          display: block;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          &:hover {
            color: rgb(255, 249, 165);
            transform: scale(1.2);
          }
        }
      }
    }
  }
</style>
