<template>
  <v-app>
    <v-app-bar app color="#aed269" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../src/assets/logosuper.png"
          transition="scale-transition"
          width="250"
        />
        <!-----
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
        --->
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <div class="contenedor">
        <router-view />
      </div>
    </v-main>

    <!-- Inicio pie del sitio -->
    <div class="prueba">
      <v-app-bar color="#aed269" dark>
        <!-- Copyright -->
        <div class="copy">
          © 2021 Copyright
          <a class="text-dark" href="https://mdbootstrap.com/"
            >CRUD asociados</a>
        </div>
        <v-btn depressed @click="AboutUs" class="btnFondo" color="white" text>
          <b class="us">About Us</b>
        </v-btn>
        <!-- Copyright -->
        <div class="imgface btface">
          <a href="https://www.facebook.com/" target="blank">
            <img src="./assets/facebook.png" />
          </a>
        </div>
        <div class="imginsta btsocial">
          <a href="https://www.instagram.com/" target="blank">
            <img src="./assets/instagram.png" />
          </a>
        </div>
        <div class="imgtwitter btsocial">
          <a href="https://twitter.com/" target="blank">
            <img src="./assets/twitter.png" />
          </a>
        </div>
      </v-app-bar>
    </div>
    <!-- fin pie del sitio -->
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    AboutUs() {
      this.$router.push("/aboutUs");
    },
  },
};
</script>
<style scoped>
v-main {
  background-color: #f4f4f4;
  margin-top: -25px;
}
.btnFondo {
  background-color: #aed269;
  margin-left: 400px;
}

.us {
  text-decoration: underline;
}

.copy {
  margin-left: 35px;
}

.btface {
  margin-left: 520px;
}

.btsocial {
  margin-left: 15px;
}
</style>
