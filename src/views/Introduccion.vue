<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/intro/img01.png", data-aos="zoom-in").mx-auto
      .col-lg-9
        p.mb-3(data-aos="fade-right") El componente formativo Principios normativos permite al aprendiz comprender la importancia de las normas, procedimientos y responsabilidades aplicadas al registro y atención de huéspedes en los establecimientos de alojamiento. Actualmente, la operación hotelera requiere garantizar procesos seguros, organizados y ajustados a disposiciones legales relacionadas con la identificación de huéspedes, el manejo documental y la protección de la información.

        .bg-fondo-1.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-0
          p.mb-0 A lo largo de este componente se abordarán temas relacionados con la normatividad hotelera, los procedimientos de <em>check-in</em>, la verificación documental, la seguridad de la información y los derechos y deberes del huésped y del establecimiento. De esta manera, el aprendiz fortalecerá competencias técnicas y éticas necesarias para desempeñarse adecuadamente en los procesos de recepción y servicio en el sector hotelero.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
