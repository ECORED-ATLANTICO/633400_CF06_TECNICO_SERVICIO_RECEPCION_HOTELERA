<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Seguridad y protección de datos

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-21.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La transformación digital y el uso de herramientas tecnológicas en los establecimientos de alojamiento han incrementado la necesidad de proteger la información y garantizar la seguridad de los datos administrados durante la operación hotelera. Actualmente, los hoteles gestionan información relacionada con identidad de huéspedes, reservas, medios de pago, historial de estadías y registros operativos, por lo que la seguridad de la información se convierte en un aspecto fundamental para la continuidad del servicio, la confianza del cliente y el cumplimiento normativo.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.d-none.d-lg-block
        img(src="@/assets/curso/tema3/img02.png").mx-auto
      .col-lg-10
        p.mb-0(data-aos="fade-right") En la operación hotelera, la recepción y las áreas administrativas utilizan sistemas PMS, plataformas digitales y redes informáticas que permiten almacenar y compartir información en tiempo real. Aunque estas herramientas optimizan procesos y facilitan la gestión operativa, también pueden exponer al establecimiento a riesgos relacionados con accesos no autorizados, pérdida de información, ataques informáticos o uso inadecuado de datos personales. Debido a ello, los hoteles deben implementar medidas de seguridad orientadas a proteger tanto la infraestructura tecnológica como la información de huéspedes y colaboradores.


    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Seguridad de la información y protección de datos personales


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-9.order-2.order-lg-1
        p.mb-3(data-aos="fade-right") La seguridad de la información comprende el conjunto de medidas orientadas a proteger la confidencialidad, integridad y disponibilidad de los datos almacenados en sistemas físicos y digitales. En hotelería, esta protección resulta especialmente importante porque durante el proceso de reservas y registro se recopila información sensible relacionada con identidad, nacionalidad, historial de estadías, formas de pago y preferencias de los huéspedes.
        .bg-fondo-12.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-0
          p.mb-0 En Colombia, la Ley 1581 de 2012 establece disposiciones relacionadas con el tratamiento de datos personales y reconoce el derecho de las personas a conocer, actualizar y controlar la información suministrada a entidades públicas o privadas. En consecuencia, los establecimientos de alojamiento deben garantizar que la información recopilada sea utilizada únicamente para fines relacionados con la prestación del servicio y bajo criterios de confidencialidad y seguridad.
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img04.png", data-aos="zoom-in").mx-auto

    .bg-full-width.bg-fondo-13.px-5.py-4.mb-5(data-aos="fade-right")
      .container
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-8.mb-4.mb-lg-0
            img(src='@/assets/curso/tema3/img06.png', alt='').mx-auto
          .col-lg-9.col-md-12
            p.mb-3 Dentro de la operación hotelera, la protección de datos implica:
            SlyderF(columnas="col-lg-6 col-xl-4 col-md-12 col-sm-12")
              .tarjeta.bg-white.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8  
                    img(src='@/assets/curso/tema3/img07.svg' alt='', style="width: 100px;").mx-auto
                p.mb-0.text-center Restringir el acceso a información sensible.

              .tarjeta.bg-white.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8  
                    img(src='@/assets/curso/tema3/img07.svg' alt='', style="width: 100px;").mx-auto
                p.mb-0.text-center Custodiar documentos físicos y digitales.

              .tarjeta.bg-white.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8  
                    img(src='@/assets/curso/tema3/img07.svg' alt='', style="width: 100px;").mx-auto
                p.mb-0.text-center Solicitar autorización para el tratamiento de datos.

              .tarjeta.bg-white.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8  
                    img(src='@/assets/curso/tema3/img07.svg' alt='', style="width: 100px;").mx-auto
                p.mb-0.text-center Evitar divulgación de información a terceros no autorizados.

              .tarjeta.bg-white.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-8  
                    img(src='@/assets/curso/tema3/img07.svg' alt='', style="width: 100px;").mx-auto
                p.mb-0.text-center Aplicar protocolos de almacenamiento seguro.


    .row.justify-content-center.align-items-center.mb-3
      .col-lg-auto.d-none.d-lg-block
        img(src="@/assets/curso/tema3/img08.svg").mx-auto.w-50
      .col-lg
        p.mb-0(data-aos="fade-right") La seguridad de la información también fortalece la confianza del huésped. Cuando el establecimiento protege adecuadamente los datos personales y financieros, se genera mayor percepción de seguridad y profesionalismo en la prestación del servicio.


    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Seguridad digital y riesgos operativos

    .bg-full-width.bg-fondo-3.px-5.py-4
      img(src="@/assets/curso/tema3/img09.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text Los establecimientos de alojamiento utilizan redes informáticas, sistemas PMS, plataformas de pago y canales digitales que requieren mecanismos de protección frente a amenazas tecnológicas. La seguridad digital se enfoca precisamente en proteger equipos, redes y aplicaciones frente a ataques informáticos, accesos indebidos o pérdida de información.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-2.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema3/img10.png", data-aos="zoom-in")
      .col-lg-10
        p.mb-3(data-aos="fade-right") Muchos hoteles operan mediante modelos cliente/servidor, donde varios equipos se conectan a un servidor central que almacena la información de reservas, huéspedes y operación. Esta conectividad facilita el acceso en tiempo real, pero también incrementa los riesgos relacionados con <em>malware</em>, virus, robo de información o fraudes digitales.
        p.mb-0(data-aos="fade-right") Entre los principales riesgos operativos asociados a la seguridad digital en hotelería se encuentran:

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 #[b Figura 3.]
          span Riesgos operativos asociados a la seguridad digital  
        img.mb-2.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema3/img11.png", alt="La figura ilustra siete riesgos digitales en hoteles que afectan la información y la operación, destacando la importancia de la ciberseguridad preventiva.")
        img.mb-2.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema3/img12.png", alt="La figura ilustra siete riesgos digitales en hoteles que afectan la información y la operación, destacando la importancia de la ciberseguridad preventiva.")
        figcaption Nota. SENA, (2026).


    .row.mb-5.justify-content-center
      .col-lg-10
        p.mb-0 Un incidente de seguridad puede afectar la operación del hotel, generar pérdidas económicas y comprometer la confianza de los huéspedes. Por esta razón, los establecimientos implementan elementos básicos de seguridad digital para proteger sus sistemas de información:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        SlyderF(columnas="col-lg-4 col-xl-4 col-md-12 col-sm-12")
          .tarjeta.bg-fondo-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img13.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center #[b Antivirus]
            p.text-center Programas diseñados para detectar, bloquear y eliminar virus o amenazas informáticas que puedan afectar los equipos y sistemas del hotel.

          .tarjeta.bg-fondo-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img13.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center #[b #[em Firewalls]]
            p.text-center Herramientas de seguridad que controlan y filtran el tráfico de red, evitando accesos no autorizados a los sistemas hoteleros.

          .tarjeta.bg-fondo-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img13.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center #[b Sistemas de cifrado]
            p.text-center Mecanismos que protegen la información mediante códigos de seguridad para evitar que los datos puedan ser leídos por personas no autorizadas.

          .tarjeta.bg-fondo-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img13.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center #[b Copias de seguridad]
            p.text-center Respaldos de información almacenados de manera segura para recuperar datos en caso de fallas, pérdida o ataques informáticos.

          .tarjeta.bg-fondo-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img13.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center #[b Controles de acceso]
            p.text-center Procedimientos y configuraciones que limitan el acceso a la información y sistemas según las funciones y permisos de cada usuario.

          .tarjeta.bg-fondo-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img13.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center #[b Autenticación de usuarios]
            p.text-center Métodos utilizados para verificar la identidad de las personas que ingresan a los sistemas tecnológicos del hotel mediante contraseñas, códigos o validaciones de seguridad.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.bg-color-5.p-4
          p.mb-0 Asimismo, la seguridad digital no depende únicamente de la tecnología. El comportamiento del personal también influye significativamente en la prevención de incidentes relacionados con información y sistemas operativos.


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 4.
          span Riesgos digitales en hotelería
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Riesgo
                th Posible afectación
                th Medida preventiva
            tbody
              tr
                td Robo de información
                td Exposición de datos del huésped
                td Sistemas de encriptación
              tr
                td Virus o <em>malware</em>
                td Daños en el PMS
                td Antivirus y actualizaciones
              tr
                td Accesos no autorizados
                td Manipulación de información
                td Contraseñas seguras
              tr
                td Fraudes digitales
                td Pérdidas económicas
                td Plataformas de pago seguras
              tr
                td Pérdida de información
                td Afectación operativa
                td Copias de seguridad
    

    .bg-full-width.bg-fondo-14.tarjeta.mb-5
      .px-1.py-4.py-md-4.p-lg-4.px-lg-2(data-aos="fade-right")
        SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-9.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-3 Caso práctico
              p.mb-0 Durante su turno en recepción, un colaborador recibe un correo que aparenta ser del área de sistemas, solicitando actualizar con urgencia las credenciales del <em>Property Management System</em> (PMS) mediante un enlace externo. Al revisar el mensaje, identifica inconsistencias en el remitente y en la dirección del enlace, lo que le genera sospecha.
            .col-lg-3.col-md-6.order-2.order-lg-2
              img(src="@/assets/curso/tema3/img15.png", alt="").img-fluid.mx-auto.w-75
          
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-12.order-1.order-lg-1.mb-4.mb-lg-0
              p.mb-3 Siguiendo los protocolos de seguridad del hotel, el colaborador decide no ingresar al enlace ni proporcionar información. En su lugar, reporta inmediatamente el correo al área tecnológica para su verificación. Posteriormente, se confirma que se trataba de un intento de fraude tipo <em>phishing</em>.

              p.mb-0 Este caso evidencia que una acción aparentemente simple puede representar riesgos operativos y de seguridad, como el acceso no autorizado al sistema o la exposición de datos de huéspedes. La correcta aplicación de protocolos permite prevenir incidentes y proteger la información del establecimiento.

    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Buenas prácticas de ciberseguridad

    .container
      .row.justify-content-center.align-items-center.mb-5.bg-color-5(data-aos="fade-right")
        .col-lg-7.p-4.order-1.order-lg-1
          p.mb-3 La ciberseguridad en hotelería no depende únicamente de programas o herramientas tecnológicas, sino también de las prácticas implementadas diariamente por el personal operativo y administrativo. Muchas amenazas digitales ocurren debido a errores humanos relacionados con el manejo inadecuado de información, dispositivos o sistemas de acceso.
          p.mb-0 Debido a ello, los establecimientos de alojamiento promueven protocolos y buenas prácticas orientadas a fortalecer la seguridad informática y reducir riesgos operativos. Entre las principales recomendaciones se encuentran:
        .col-lg-5.p-0.order-2.order-lg-2
          img(src="@/assets/curso/tema3/img16.png", alt="")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 #[b Figura 4.]
          span Principales recomendaciones y buenas prácticas de ciberseguridad 
        img.mb-2.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema3/img17.svg", alt="La figura describe ocho recomendaciones de ciberseguridad para proteger datos, prevenir incidentes y garantizar la continuidad operativa del hotel.")
        img.mb-2.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema3/img18.svg", alt="La figura describe ocho recomendaciones de ciberseguridad para proteger datos, prevenir incidentes y garantizar la continuidad operativa del hotel.")
        figcaption Nota. SENA, (2026).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/tema3/img19.png").mx-auto
      .col-lg-9
        p.mb-3(data-aos="fade-right") La capacitación permanente del personal también constituye un elemento fundamental dentro de la seguridad digital. El conocimiento de protocolos y riesgos tecnológicos permite actuar de manera preventiva y fortalecer la protección de la información dentro del establecimiento.
        p.mb-0(data-aos="fade-right") En la actualidad, la ciberseguridad forma parte de la calidad del servicio hotelero. Un huésped no solo espera comodidad y buena atención, sino también la garantía de que su información personal y financiera será administrada de forma segura y responsable.


</template>

<script>
export default {
  name: 'Tema3',
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
