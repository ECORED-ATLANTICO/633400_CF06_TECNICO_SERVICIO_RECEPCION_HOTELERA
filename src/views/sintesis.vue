<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .bg-full-width.bg-fondo-3.px-5.py-4
      img(src="@/assets/curso/intro/img1.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text El componente formativo Principios normativos permite comprender la importancia de las normas, procedimientos y responsabilidades aplicadas a la operación de recepción y al registro de huéspedes dentro de los establecimientos de alojamiento. A lo largo de los contenidos se abordan aspectos relacionados con la normatividad hotelera, el proceso de <em>check-in</em>, la verificación documental, la tarjeta de registro hotelero y los protocolos de atención, fortaleciendo la comprensión de los procedimientos técnicos y legales requeridos para la prestación organizada y segura del servicio.

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-auto.d-none.d-lg-block
        img(src="@/assets/curso/intro/img03.svg").mx-auto
      .col-lg
        p.mb-0 Asimismo, se reconoce la importancia de la seguridad de la información, la protección de datos personales y la aplicación de buenas prácticas de ciberseguridad dentro de la operación hotelera moderna. De igual manera, se analizan temas relacionados con calidad del servicio, turismo responsable, prevención de riesgos y actualización normativa, permitiendo fortalecer criterios éticos, operativos y profesionales necesarios para garantizar experiencias seguras, responsables y orientadas a la calidad en el sector de alojamiento.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo Principios normativos permite comprender la importancia de las normas, procedimientos y responsabilidades aplicadas a la operación de recepción y al registro de huéspedes dentro de los establecimientos de alojamiento. A lo largo de los contenidos se abordan aspectos relacionados con la normatividad hotelera, el proceso de check-in, la verificación documental, la tarjeta de registro hotelero y los protocolos de atención, fortaleciendo la comprensión de los procedimientos técnicos y legales requeridos para la prestación organizada y segura del servicio. Asimismo, se reconoce la importancia de la seguridad de la información, la protección de datos personales y la aplicación de buenas prácticas de ciberseguridad dentro de la operación hotelera moderna. De igual manera, se analizan temas relacionados con calidad del servicio, turismo responsable, prevención de riesgos y actualización normativa, permitiendo fortalecer criterios éticos, operativos y profesionales necesarios para garantizar experiencias seguras, responsables y orientadas a la calidad en el sector de alojamiento.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
