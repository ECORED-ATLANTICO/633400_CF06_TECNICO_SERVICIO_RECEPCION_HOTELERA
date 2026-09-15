<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Registro de huéspedes

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema2/img01.png", data-aos="zoom-in").mx-auto

      .col-lg-9
        p.mb-3(data-aos="fade-right") El registro de huéspedes constituye uno de los procesos más importantes dentro de la operación de recepción hotelera, debido a que permite formalizar la prestación del servicio de alojamiento, verificar la identidad del cliente y garantizar el cumplimiento de los procedimientos técnicos y normativos establecidos por el hotel. Este proceso no solo tiene una finalidad administrativa, sino también operativa, legal y de seguridad, ya que la información registrada sirve como soporte para el control de ocupación, la facturación, la protección de datos y el seguimiento de los huéspedes durante su permanencia en el establecimiento.
        .bg-fondo-6.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-0
          p.mb-0 En la actualidad, los procesos de registro se apoyan tanto en procedimientos manuales como en herramientas tecnológicas integradas a sistemas PMS, lo que facilita el almacenamiento, consulta y actualización de la información en tiempo real. En consecuencia, el personal de recepción debe aplicar protocolos claros relacionados con la atención, la verificación documental y el diligenciamiento correcto de los registros hoteleros.
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Proceso de <em>check-in</em>
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .bg-fondo-7.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-0
          .row.align-items-center.mb-0
            .col-lg-auto.d-none.d-lg-block
              img(src="@/assets/curso/tema2/img03.svg").mx-auto
            .col-lg
              p.mb-3 El <em>check-in</em> corresponde al proceso mediante el cual el huésped formaliza su ingreso al establecimiento de alojamiento. Durante este procedimiento, el área de recepción verifica la reserva, valida la identidad del cliente, confirma las condiciones del servicio y realiza el registro correspondiente dentro del sistema hotelero.
              p.mb-0 Aunque cada establecimiento puede tener procedimientos internos específicos, generalmente el proceso de <em>check-in</em> incluye las siguientes etapas:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        SlyderF(columnas="col-lg-4 col-xl-4 col-md-12 col-sm-12")
          .tarjeta.bg-fondo-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img06.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center #[b Saludo y bienvenida al huésped]
            p.text-center El recepcionista realiza el primer contacto con el huésped de manera cordial y profesional, generando una experiencia positiva desde el inicio. Esta etapa es clave para establecer confianza y proyectar la imagen del establecimiento.

          .tarjeta.bg-fondo-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img06.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center #[b Verificación de la reserva]
            p.text-center Se consulta en el sistema (PMS) la existencia de la reserva, validando fechas, tipo de habitación, número de personas y condiciones acordadas, con el fin de evitar inconsistencias en el servicio.

          .tarjeta.bg-fondo-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img06.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center #[b Solicitud y validación de documentos]
            p.text-center Se solicita el documento de identidad del huésped y se verifica su autenticidad. Este proceso es fundamental para cumplir con requisitos legales y garantizar la seguridad del establecimiento.

          .tarjeta.bg-fondo-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img06.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center #[b Diligenciamiento de la tarjeta de registro hotelero]
            p.text-center Se recopila y registra la información del huésped en el formato físico o digital, asegurando la trazabilidad de los datos y el cumplimiento de la normativa vigente.

          .tarjeta.bg-fondo-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img06.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center #[b Asignación de habitación]
            p.text-center Se asigna la habitación de acuerdo con la disponibilidad, la reserva realizada y los requerimientos del huésped. Este proceso se realiza mediante el sistema, garantizando control y organización.

          .tarjeta.bg-fondo-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img06.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center #[b Entrega de información sobre servicios y políticas]
            p.text-center Se informa al huésped sobre horarios, servicios disponibles, normas internas y condiciones del alojamiento, asegurando claridad y evitando posibles inconvenientes durante la estancia.

          .tarjeta.bg-fondo-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img06.svg' alt='', style="width: 100px;").mx-auto
            h4.text-center #[b Activación de acceso o llave de habitación]
            p.text-center Se entrega la llave física o tarjeta electrónica previamente activada, permitiendo el acceso a la habitación y a las áreas autorizadas del establecimiento.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-2.col-md-8.mb-4.mb-lg-0
        img(src="@/assets/curso/tema2/img07.png", data-aos="zoom-in").mx-auto

      .col-lg-10
        p.mb-3(data-aos="fade-right") El <em>check-in</em> representa uno de los primeros contactos directos entre el huésped y el hotel, por lo que influye significativamente en la percepción del servicio y en la experiencia del cliente. Debido a ello, el personal de recepción debe desarrollar el procedimiento con amabilidad, precisión y agilidad, garantizando al mismo tiempo el cumplimiento de las normas de seguridad y registro.
        p.mb-0 Además del aspecto operativo, este procedimiento tiene implicaciones legales relacionadas con identificación de huéspedes, control migratorio, protección de datos y trazabilidad de la ocupación hotelera.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Verificación documental


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-12.mb-4.mb-lg-0
        p.mb-0(data-aos="fade-right") La verificación documental es el procedimiento mediante el cual el personal de recepción valida la autenticidad y vigencia de los documentos presentados por el huésped al momento del registro. Este proceso es fundamental porque permite confirmar la identidad de la persona, garantizar la seguridad del establecimiento y cumplir las disposiciones legales aplicables al alojamiento.

      .col-lg-6.col-md-12.mb-0.mb-lg-0
        .bg-fondo-9.px-lg-4.py-lg-3.px-4.py-3.br-15(data-aos="fade-down")
          p.mb-1(data-aos="fade-right") Entre los documentos más utilizados para el registro hotelero se encuentran:

          ul.lista-ul.mb-0  
            li.mb-0
              i.lista-ul__vineta
              | Cédula de ciudadanía (mayores de edad).
            li.mb-0
              i.lista-ul__vineta
              | Tarjeta de identidad o registro civil (menores de edad).
            li.mb-0
              i.lista-ul__vineta
              | Pasaporte (ciudadanos extranjeros).
            li.mb-0
              i.lista-ul__vineta
              | Cédula de extranjería (extranjeros residentes en el país).
            li.mb-0
              i.lista-ul__vineta
              | Permisos migratorios.

      .col-lg-2.col-md-6.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema2/img09.png", data-aos="zoom-in").mx-auto


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema2/img10.png", data-aos="zoom-in").mx-auto
      .col-lg-9
        p.mb-3(data-aos="fade-right") La recepción debe revisar que los documentos correspondan con la persona presentada, se encuentren vigentes, no presenten alteraciones visibles y coincidan con la información de la reserva.
        p.mb-3(data-aos="fade-right") En huéspedes extranjeros, además de verificar el pasaporte, el establecimiento debe validar los requisitos migratorios exigidos por las autoridades colombianas. Esto contribuye al control legal y a la seguridad dentro del establecimiento de alojamiento.
        .cajon.bg-color-9.p-4
          p.mb-0 La verificación documental también ayuda a prevenir situaciones relacionadas con suplantación de identidad, fraudes o actividades ilícitas, fortaleciendo la protección tanto del huésped como del hotel.

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Registro de huéspedes nacionales y extranjeros

    .row.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-block
        img(src="@/assets/curso/tema2/img11.svg").mx-auto
      .col-lg
        p.mb-0 El procedimiento de registro puede variar dependiendo del origen del huésped y de las disposiciones legales relacionadas con identificación y control migratorio. En todos los casos, el establecimiento debe garantizar que la información suministrada sea verificada y registrada correctamente dentro del sistema hotelero.


    .row.mb-5.justify-content-center
      .col-lg-6.col-md-12.mb-4.mb-lg-0
        .bg-color-22.p-0.br-15.h-100
          figure
            img(src="@/assets/curso/tema2/img12.png", data-aos="zoom-in").mx-auto
          .p-4
            p.mb-3 En huéspedes nacionales, el proceso generalmente incluye:
            ul.lista-ul.mb-0
              li 
                i.lista-ul__vineta
                | Validación del documento de identidad.
              li 
                i.lista-ul__vineta
                | Confirmación de datos personales.
              li 
                i.lista-ul__vineta
                | Diligenciamiento de la tarjeta de registro hotelero.
              li 
                i.lista-ul__vineta
                | Aceptación de políticas internas.

      .col-lg-6.col-md-12.mb-0.mb-lg-0
        .bg-color-21.p-0.br-15.h-100
          figure
            img(src="@/assets/curso/tema2/img13.png", data-aos="zoom-in").mx-auto
          .p-4
            p.mb-3(data-aos="fade-right") En huéspedes extranjeros, además de los procedimientos anteriores, el hotel debe verificar:
            ul.lista-ul.mb-0
              li 
                i.lista-ul__vineta
                | Vigencia del pasaporte.
              li 
                i.lista-ul__vineta
                | Condición migratoria.
              li 
                i.lista-ul__vineta
                | Nacionalidad.
              li 
                i.lista-ul__vineta
                | Fecha de ingreso al país.

    .row.justify-content-center.mb-5
      p.mb-3(data-aos="fade-right") Este registro permite cumplir obligaciones relacionadas con control migratorio y estadísticas turísticas, además de fortalecer la seguridad dentro del establecimiento.
      p.mb-0(data-aos="fade-right") A continuación, le presentamos una tabla que registra los aspectos comparativos entre el ingreso de un huésped nacional y un extranjero a un establecimiento hotelero:




    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 
            b Tabla 3.
          span Aspectos comparativos del registro de huésped nacional y extranjero
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th Aspecto
                th Huésped nacional
                th Huésped extranjero
            tbody
              tr
                td Documento principal
                td Cédula de ciudadanía vigente
                td Pasaporte vigente
              tr
                td Documentos adicionales
                td Generalmente no requiere documentación adicional
                td Puede requerir visa, permiso de ingreso o soporte migratorio según nacionalidad y permanencia
              tr
                td Información requerida
                td Datos personales, dirección, contacto, ocupación y fechas de estadía
                td Datos personales, nacionalidad, país de residencia, motivo del viaje y fechas de ingreso al país
              tr
                td Registro en el PMS
                td Se diligencia el registro hotelero y se almacena la información en el sistema PMS
                td Se diligencia el registro hotelero incluyendo información migratoria y nacionalidad
              tr
                td Requisitos legales
                td Cumplimiento de políticas internas y normatividad turística nacional
                td Cumplimiento de requisitos migratorios y reportes establecidos por autoridades competentes
              tr
                td Control de identidad
                td Validación del documento y coincidencia con la reserva
                td Validación del pasaporte, vigencia y condición migratoria
              tr
                td Reportes y estadísticas
                td Información utilizada para control operativo y estadístico del hotel
                td Información utilizada para control migratorio y estadísticas turísticas nacionales
              tr
                td Nivel de verificación
                td Procedimiento estándar de validación documental
                td Procedimiento más detallado por requisitos migratorios y control internacional
              tr
                td Observación operativa
                td Registro generalmente más ágil y sencillo
                td Puede requerir validaciones adicionales o apoyo de autoridades migratorias

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.bg-color-23.p-4
          p.mb-0(data-aos="fade-right") En muchos hoteles, el PMS facilita este procedimiento mediante formularios digitales y lectura automática de documentos, optimizando tiempos y reduciendo errores en el registro.

    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Tarjeta de registro hotelero

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-3.mb-lg-0.order-2.order-lg-1
        p.mb-4(data-aos="fade-right") La tarjeta de registro hotelero (TRH) es el documento mediante el cual se formaliza el ingreso del huésped al hotel. Este formato recopila información relacionada con identidad, procedencia, ocupación, fechas de estadía y condiciones del servicio.

        .bg-fondo-10.px-lg-4.py-lg-3.px-4.py-3.br-15.mb-4(data-aos="fade-down")
          .col-lg-11.col-md-12
            p.mb-0(data-aos="fade-right").p-3 La TRH puede diligenciarse en formato físico o digital, dependiendo de las herramientas tecnológicas utilizadas por el hotel. Actualmente, muchos establecimientos integran este procedimiento directamente al PMS, permitiendo almacenar la información de manera automática y segura.


        .row.align-items-center.mb-0
          .col-lg-auto.d-none.d-lg-block
            img(src="@/assets/curso/tema2/img15.svg").mx-auto
          .col-lg
            p.mb-3(data-aos="fade-right") Entre los datos más comunes registrados en la TRH se encuentran el nombre completo, tipo y número de documento, nacionalidad, dirección y contacto, fechas de ingreso y salida del huésped, número de habitación, forma de pago y firma. 

            p.mb-0(data-aos="fade-right") A continuación, se presenta un ejemplo de tarjeta de registro hotelero:

      .col-lg-3.col-md-8.order-1.order-lg-2.mb-4.mb-lg-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema2/img16.png", data-aos="zoom-in").w-lg-75.mx-auto


    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 #[b Figura 2.]
          span Ejemplo de tarjeta de registro hotelero 
        img.mb-2(data-aos="fade-up", src="@/assets/curso/tema2/img17.png", alt="La figura 2 detalla un ejemplo de una tarjeta de registro hotelero empleada para registrar la información del huésped al momento de su ingreso al establecimiento de alojamiento. El formato contiene campos para datos de identificación, información personal, residencia, procedencia y destino del viaje, datos migratorios cuando corresponden, fechas de check-in y check-out, habitación asignada y cantidad de acompañantes.")
        //- img.mb-2.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema1/img16-m.png", alt="La figura presenta un decálogo de buenas prácticas orientadas a la protección de la información de los huéspedes en un establecimiento hotelero, destacando que estos datos son confidenciales y su resguardo es responsabilidad de todo el personal. Se enfatiza la necesidad de verificar la identidad del huésped antes de acceder o compartir información, evitar la divulgación de datos a personas no autorizadas y utilizar contraseñas seguras para el acceso a los sistemas. Además, se resaltan acciones clave como custodiar adecuadamente los documentos físicos y digitales, acceder únicamente a la información necesaria para las funciones laborales, usar de manera segura los dispositivos tecnológicos y reportar oportunamente cualquier incidente. En conjunto, estas prácticas buscan garantizar la seguridad de la información, proteger la privacidad del huésped y preservar la confianza y la reputación del hotel.")
        figcaption Nota. SENA, (2026).

    .row.justify-content-center.align-items-center.mb-5

      .col-lg-2.d-none.d-lg-block
        img(src="@/assets/curso/tema2/img18.png").mx-auto
      .col-lg
        p.mb-3(data-aos="fade-right") La correcta gestión de este documento es fundamental porque sirve como soporte administrativo, legal y operativo para el establecimiento. Además, la información registrada debe manejarse bajo criterios de confidencialidad y protección de datos personales.
        p(data-aos="fade-right").mb-0 Como se mencionó anteriormente, la tarjeta de registro hotelero es la prueba del contrato de hospedaje y está soportada jurídicamente en las siguientes leyes, decretos y resoluciones, emanados del Ministerio de Industria, Comercio y Turismo.


    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-md-6.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img20.png")
      .col-lg-9.mb-lg-0.order-2.order-lg-1
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-23")
          div(titulo="Ley 1558 de 2012")
            p.ms-5 Modifica la Ley General de Turismo y fortalece el control estadístico del sector hotelero.
            ul.lista-ul.ms-5.mb-0
              li 
                i.lista-ul__vineta
                | La información de las tarjetas de registro hotelero debe remitirse al DANE.
              li 
                i.lista-ul__vineta
                | Los datos se utilizan únicamente con fines estadísticos.
              li 
                i.lista-ul__vineta
                | La información debe manejarse bajo reserva y confidencialidad.

          div(titulo="Decreto 1074 de 2015")
            p.ms-5 Reglamenta la Tarjeta de Registro Hotelero para establecimientos de alojamiento turístico.
            ul.lista-ul.ms-5.mb-0
              li 
                i.lista-ul__vineta
                | Define requisitos mínimos para el registro de huéspedes.
              li 
                i.lista-ul__vineta
                p.mb-0 Establece la creación de un #[em software] nacional para el diligenciamiento de la TRH.
              li 
                i.lista-ul__vineta
                | Exige protección y manejo adecuado de datos personales.

          div(titulo="Información mínima obligatoria")
            p.ms-5 Mientras se implementa la plataforma tecnológica nacional, el registro hotelero debe incluir como mínimo:
            ul.lista-ul.ms-5.mb-0
              li 
                i.lista-ul__vineta
                | Nombre completo del huésped.
              li 
                i.lista-ul__vineta
                | Tipo y número de identificación.
              li 
                i.lista-ul__vineta
                | Nacionalidad.
              li 
                i.lista-ul__vineta
                | Fecha de ingreso (<em>check-in</em>).
              li 
                i.lista-ul__vineta
                | Fecha de salida (<em>check-out</em>).

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-md-6.col-lg-3.order-1.order-lg-1.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img21.png")
      .col-lg-9.mb-lg-0.order-2.order-lg-2
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-23")
          div(titulo="Decreto 1964 de 2016")
            p.ms-5 Actualiza los requisitos de la Tarjeta de Registro Hotelero.
            ul.lista-ul.ms-5.mb-0
              li 
                i.lista-ul__vineta
                | Incluye información del huésped, acompañantes y estadía.
              li 
                i.lista-ul__vineta
                | Exige conservar los registros por mínimo cinco años.
              li 
                i.lista-ul__vineta
                | Obliga a solicitar autorización para el tratamiento de datos personales.

          div(titulo="Protección de datos personales")
            p.ms-5 La información del huésped debe manejarse bajo criterios de confidencialidad y seguridad.
            ul.lista-ul.ms-5.mb-0
              li 
                i.lista-ul__vineta
                | El hotel debe informar el uso de los datos recolectados.
              li 
                i.lista-ul__vineta
                | El huésped debe autorizar el tratamiento de su información.
              li 
                i.lista-ul__vineta
                | El manejo de datos debe cumplir la Ley 1581 de 2012.

          div(titulo="Prevención de delitos en hotelería")
            p.ms-5 La operación hotelera también tiene responsabilidad social y preventiva.
            ul.lista-ul.ms-5.mb-0
              li 
                i.lista-ul__vineta
                | Ley 679 de 2001 y Ley 1336 de 2009: prevención de explotación sexual comercial de menores.
              li 
                i.lista-ul__vineta
                | Ley 985 de 2005: medidas contra la trata de personas.
              li 
                i.lista-ul__vineta
                | El personal hotelero debe reportar situaciones sospechosas.

          div(titulo="Importancia del registro hotelero")
            p.ms-5 El registro de huéspedes no es solo un procedimiento administrativo.
            ul.lista-ul.ms-5.mb-0
              li 
                i.lista-ul__vineta
                | Fortalece la seguridad del establecimiento.
              li 
                i.lista-ul__vineta
                | Garantiza control estadístico y legal.
              li 
                i.lista-ul__vineta
                | Protege al huésped y al hotel.
              li 
                i.lista-ul__vineta
                | Facilita la operación y la trazabilidad de la información.

    .row
      .col-lg-12
        .bg-color-1-degrade.p-4.mb-0.rounded-2.br-15
          .row.justify-content-center.align-items-center
            .col-lg-5.col-md-12.mb-4.mb-lg-0
              .row.align-items-center.mb-0
                .col-lg-auto.mb-4.mb-lg-0
                  img(src="@/assets/curso/tema2/img22.svg", style="max-width: 100px;").mx-auto
                .col-lg
                  p.mb-0 Para profundizar más sobre los textos, decretos y leyes que regulan la normatividad del registro hotelero en Colombia, consulte los siguientes anexos:
            .col-lg-7
              .row
                .col-lg-6.col-md-6.col-12.d-flex.mb-3
                  a.boton.w-full.color-acento-botones.justify-content-center(:href="obtenerLink('/downloads/Anexo_Ley_679_de_2001.pdf')" target="_blank")
                    span Ver anexo Ley 679 de 2001
                    i.fas.fa-file-download

                .col-lg-6.col-md-6.col-12.d-flex.mb-3
                  a.boton.w-full.color-acento-botones.justify-content-center(:href="obtenerLink('/downloads/Anexo_Ley_985_de_2005.pdf')" target="_blank")
                    span Ver anexo Ley 985 de 2005
                    i.fas.fa-file-download

                .col-lg-6.col-md-6.col-12.d-flex.mb-3
                  a.boton.w-full.color-acento-botones.justify-content-center(:href="obtenerLink('/downloads/Anexo_Ley_1558_de_2012.pdf')" target="_blank")
                    span Ver anexo Ley 1558 de 2012
                    i.fas.fa-file-download

                .col-lg-6.col-md-6.col-12.d-flex.mb-3
                  a.boton.w-full.color-acento-botones.justify-content-center(:href="obtenerLink('/downloads/Anexo_Decreto_1074_de_2015.pdf')" target="_blank")
                    span Ver anexo Decreto 1074 de 2015
                    i.fas.fa-file-download

                .col-lg-6.col-md-6.col-12.d-flex.mb-0
                  a.boton.w-full.color-acento-botones.justify-content-center(:href="obtenerLink('/downloads/Anexo_Decreto_2119_de_2018.pdf')" target="_blank")
                    span Ver anexo Decreto 2119 de 2018
                    i.fas.fa-file-download

    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Protocolos de atención en recepción

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-3.mb-lg-0.col-md-8.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema2/img23.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-3(data-aos="fade-right") La recepción constituye el principal punto de contacto entre el huésped y el establecimiento de alojamiento. En consecuencia, los protocolos de atención permiten estandarizar procedimientos y garantizar una experiencia organizada, segura y orientada a la calidad del servicio.
        p.mb-4 Los protocolos de recepción incluyen lineamientos relacionados con:
        .row.mb-3.mb-lg-2
          .col-xl-4.col-lg-6.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img24.svg' alt='')
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Presentación personal.

          .col-xl-4.col-lg-6.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img24.svg' alt='')
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Saludo y bienvenida.

          .col-xl-4.col-lg-6.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img24.svg' alt='')
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Comunicación verbal y no verbal.

          .col-xl-4.col-lg-6.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img24.svg' alt='')
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Manejo de solicitudes.

          .col-xl-4.col-lg-6.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img24.svg' alt='')
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Atención telefónica.

          .col-xl-4.col-lg-6.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img24.svg' alt='')
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Tratamiento respetuoso y confidencial.

          .col-xl-4.col-lg-6.col-md-6.col-sm-12.mb-3.mb-lg-4
            .tarjeta-avatar-b(data-aos="zoom-in").h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img24.svg' alt='')
              .tarjeta.tarjeta--azul.align-content-center
                .p-3
                  p.mb-0.text-bold Solución de situaciones especiales.


    .bloque-texto-g.bloque-texto-g--inverso.bg-color-22.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img25.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3 La atención en recepción debe desarrollarse bajo principios de cordialidad, eficiencia, discreción y profesionalismo. Asimismo, el personal debe mantener una actitud orientada a la solución de necesidades y al cumplimiento de las políticas internas del establecimiento.
        br
        br
        p.mb-0 Además del servicio al cliente, los protocolos también cumplen funciones relacionadas con seguridad, control operativo y protección de información, especialmente durante procesos de registro, entrega de llaves o validación de identidad.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-md-12
        .bg-fondo-11.tarjeta.px-5.py-4
          .row.align-items-center.justify-content-center
            .col-md-6.col-lg-4.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/img27.png", data-aos="zoom-in")
            .col-lg-8
              p(data-aos="fade-left").mb-4 Lo invitamos a acceder al siguiente pódcast, cuyo contenido le permitirá fortalecer el protocolo de atención en la recepción hotelera.
              
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="Protocolos de atención en recepción hotelera"
                tiempo
                :audio="require('../assets/curso/audio/1.mp3')"
              )

</template>

<script>
export default {
  name: 'Tema2',
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
