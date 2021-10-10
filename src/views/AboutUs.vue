<template>
  <div class="integrantes">
    <div id="contImagAbout">
      <v-card id="contCardAbout" class="mx-auto" max-width="400">
        <v-img src="../assets/MyriamH.png"> </v-img>
        <div class="NombresInt">
          <h4><b>Myriam Hernandez</b></h4>
          <h6><b>Software Quality Assurance Analyst</b></h6>
        </div>
        <v-card-text class="text--primary">
          <div align="justify" class="descripcionInt">
            <p>
              Ingeniera Electrónica integral, comprometida y preparada para
              diseño de sistemas de optimización de procesos industriales,
              amplia experiencia en pruebas calidad de software, modelamiento y
              automatización de procesos de negocio BPMN.
            </p>
          </div>
        </v-card-text>
      </v-card>
    </div>
    <div id="contImagAbout">
      <v-card id="contCardAbout" class="mx-auto" max-width="400">
        <v-img src="../assets/Andres.png"> </v-img>
        <div class="NombresInt">
          <h4><b>Andres Mahecha</b></h4>
          <h6><b>Developer</b></h6>
        </div>
        <v-card-text class="text--primary">
          <div align="justify" class="descripcionInt">
            <p>
              Desarrollador Front-End, con conocimientos avanzados de
              procesamiento de señales de audio. Administrador de redes de datos
              CCNA. Entusiaste del código abierto, las redes descentralizadas y
              las criptomonedas. Diplomado en desarrollo Web UTP.
            </p>
          </div>
        </v-card-text>
      </v-card>
    </div>
    <div id="contImagAbout">
      <v-card id="contCardAbout" class="mx-auto" max-width="400">
        <v-img src="../assets/Himelda.png"> </v-img>
        <div class="NombresInt">
          <h4><b>Himelda Palacios</b></h4>
          <h6><b>Scrum Product Owner</b></h6>
        </div>
        <v-card-text class="text--primary">
          <div align="justify" class="descripcionInt">
            <p>
              Ingeniera de Sistemas bilingue, especialista en Banca y en
              Ingenieria de Software. Amplia experiencia en Scrum Agile,
              Innovacion, Transformación digital, Ingeniería de Requerimientos,
              Gestion de Proyectos y CMMI Development. Experiencia en áreas de
              TI del Sector Financiero y en Empresas de Tecnología. En la
              actualidad, Scrum Master en Avianca Holdings.
            </p>
          </div>
        </v-card-text>
      </v-card>
    </div>
    <div id="contImagAbout">
      <v-card id="contCardAbout" class="mx-auto" max-width="400">
        <v-img src="../assets/Leonardo.png"> </v-img>
        <div class="NombresInt">
          <h4><b>Leonardo Loaiza</b></h4>
          <h6><b>Developer</b></h6>
        </div>
        <v-card-text class="text--primary">
          <div align="justify" class="descripcionInt">
            <p>
              Gran experiencia como desarrollador Front-End, con experiencia y
              conocimientos en diseño web, lenguajes de programación, base de
              datos, servidores, API's y Sistemas de Control de Versiones.
              Educación Diplomado de programación Web del ministerio de las TIC.
            </p>
          </div>
        </v-card-text>
      </v-card>
    </div>
    <div id="contImagAbout">
      <v-card id="contCardAbout" class="mx-auto" max-width="400">
        <v-img src="../assets/William.png"> </v-img>
        <div class="NombresInt">
          <h4><b>William Peña</b></h4>
          <h6><b>Developer</b></h6>
        </div>
        <v-card-text class="text--primary">
          <div align="justify" class="descripcionInt">
            <p>
              Ingeniero de sistemas (pendiente tesis) de la Universidad San
              Martin. Experiencia como analista de Call center ETB. Asesor de
              tecnologías de información en PYMES y administrador. Desarrollador
              en Java, C++ y Python. Diplomado en desarrollo Web UTP.
            </p>
          </div>
        </v-card-text>
      </v-card>
    </div>
    <div>
      <v-col align="left">
        <v-btn id="BtFormAbout" depressed color="white" text @click="Volver1">
          Volver
        </v-btn>
      </v-col>
    </div>
  </div>
  
</template>

// <script>
export default {
  props: ["about"],
  data: () => {
    return {};
  },
  methods: {
    Volver1() {
      this.$router.push("/home");
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
  font-size: 2rem;
}

#contImagAbout {
  margin-top: 35px;
  margin-bottom: 35px;
  font-family: "Open Sans", sans-serif;
  max-width: 18%;
}

#contCardAbout {
  height: 100%;
  width: 100%;
}

/* #contImgn {
  height: 30%;
  width: 100%;
  object-fit: contain;
} */

.integrantes {
  display: flex;
  justify-content: left;
}

.NombresInt {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 15px;
}

#BtFormAbout {
  background-color: #724293;
}

.descripcionInt {
  padding-left: 2px;
}
</style>
