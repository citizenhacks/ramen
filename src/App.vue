<template>
  <router-view class="router-view"/>
</template>

<style lang="scss">
body {
  font-family: "Gilroy", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222222;
  font-weight: bold;
  margin: 0 auto;
  transition: 300ms all;
}

input {
  font-family: "Gilroy", Helvetica, Arial, sans-serif;
  font-size: 16px;
  background-color: #eeeeee;
  width: 100%;
  padding: 10px 15px;
  border: none;
  height: 48px;
}

input:focus {
  background-color: #e2e2e2;
}

textarea,
select,
input,
button {
  outline: none;
}

button {
  font-family: "Gilroy", Helvetica, Arial, sans-serif;
  background-color: #222222;
  padding: 10px 40px;
  width: 100%;
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  height: 56px;
  border: none;
}

button:hover {
  background-color: #000000;
}

* {
  box-sizing: border-box;
}

strong {
  font-weight: bold;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
</style>
