<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Normativa y operación hotelera: aplicando principios en recepción',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de conocimientos relacionados con normatividad hotelera, registro de huéspedes, protección de datos, seguridad de la información y responsabilidad operativa dentro de los establecimientos de alojamiento.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,

          texto: '¿Cuál es la finalidad principal del registro hotelero?',

          imagen: require('@/assets/actividad/imagen1.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Decorar documentos.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Formalizar el ingreso del huésped.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'Organizar inventarios.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'Promocionar servicios.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 2,

          texto:
            '¿Qué documento se utiliza comúnmente para registrar huéspedes extranjeros?',

          imagen: require('@/assets/actividad/imagen2.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Licencia de conducción.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Tarjeta bancaria.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto: 'Pasaporte vigente.',

              esCorrecta: true,
            },

            {
              id: 'd',

              texto: 'Carné institucional.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 3,

          texto:
            '¿Cuál es uno de los principios fundamentales de la protección de datos?',

          imagen: require('@/assets/actividad/imagen3.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Compartir información libremente.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Confidencialidad de la información.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'Publicar datos personales.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'Eliminar registros diariamente.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 4,

          texto:
            '¿Qué herramienta protege las redes informáticas frente a accesos no autorizados?',

          imagen: require('@/assets/actividad/imagen4.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'PMS.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Router.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto: 'Firewall.',

              esCorrecta: true,
            },

            {
              id: 'd',

              texto: 'Escáner.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 5,

          texto: '¿Cuál es una buena práctica de ciberseguridad?',

          imagen: require('@/assets/actividad/imagen1.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Compartir contraseñas.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Descargar archivos desconocidos.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto: 'Utilizar contraseñas seguras.',

              esCorrecta: true,
            },

            {
              id: 'd',

              texto: 'Mantener sesiones abiertas.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 6,

          texto:
            '¿Qué información mínima debe contener el registro hotelero según la normatividad?',

          imagen: require('@/assets/actividad/imagen2.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Redes sociales del huésped.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Nacionalidad y fechas de estadía.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'Historial médico.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'Información financiera completa.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 7,

          texto:
            '¿Qué área del hotel realiza principalmente el proceso de ingreso o <em>check-in</em>?',

          imagen: require('@/assets/actividad/imagen3.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Cocina.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Mantenimiento.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto: 'Recepción.',

              esCorrecta: true,
            },

            {
              id: 'd',

              texto: 'Compras.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 8,

          texto: '¿Cuál es el propósito de las copias de seguridad?',

          imagen: require('@/assets/actividad/imagen4.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Decorar archivos digitales.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Recuperar información en caso de pérdida.',

              esCorrecta: true,
            },

            {
              id: 'c',

              texto: 'Eliminar datos automáticamente.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'Compartir información públicamente.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 9,

          texto: '¿Qué significa la sigla ESCNNA?',

          imagen: require('@/assets/actividad/imagen1.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Estrategia de control hotelero.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Sistema estadístico nacional.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto:
                'Explotación sexual comercial de niños, niñas y adolescentes.',

              esCorrecta: true,
            },

            {
              id: 'd',

              texto: 'Escuela de seguridad turística.',

              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 10,

          texto: '¿Qué acción debe realizarse ante un correo sospechoso?',

          imagen: require('@/assets/actividad/imagen2.png'),

          barajarRespuestas: true,

          opciones: [
            {
              id: 'a',

              texto: 'Abrirlo inmediatamente.',

              esCorrecta: false,
            },

            {
              id: 'b',

              texto: 'Descargar archivos adjuntos.',

              esCorrecta: false,
            },

            {
              id: 'c',

              texto: 'Compartirlo con otros usuarios.',

              esCorrecta: false,
            },

            {
              id: 'd',

              texto: 'Verificar su autenticidad antes de abrirlo.',

              esCorrecta: true,
            },
          ],

          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',

          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Por qué es importante verificar la identidad del huésped durante el registro?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para ofrecer promociones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para cumplir la normatividad y garantizar la seguridad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para reducir el tiempo de limpieza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para asignar tarifas más altas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué responsabilidad tiene el establecimiento frente a los datos personales del huésped?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publicarlos cuando sea necesario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Protegerlos y tratarlos conforme a la normatividad vigente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Compartirlos con cualquier empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminarlos inmediatamente después del check-in.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es una consecuencia de no proteger adecuadamente la información de los huéspedes?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar la confianza del cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar la ocupación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exponer datos personales y generar sanciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir los costos operativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué acción fortalece la seguridad informática en un hotel?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizar la misma contraseña para todos los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Actualizar periódicamente los sistemas y antivirus.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Compartir las claves entre compañeros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desactivar el firewall.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el objetivo de la política de tratamiento de datos personales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Facilitar la divulgación de información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantizar el uso adecuado y la protección de los datos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar todos los registros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar el ingreso de huéspedes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué debe hacer un colaborador si identifica un posible incidente de seguridad de la información?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorarlo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Compartirlo con otros huéspedes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reportarlo de inmediato al responsable correspondiente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Publicarlo en redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Por qué es importante conservar correctamente los registros hoteleros?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo por motivos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque respaldan el cumplimiento de obligaciones legales y operativas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para aumentar las tarifas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para reducir el personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es una medida para prevenir el acceso no autorizado a los sistemas del hotel?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener sesiones abiertas permanentemente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Bloquear el equipo cuando no esté en uso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Compartir usuarios y contraseñas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desactivar los controles de acceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué debe hacer el personal cuando detecta una posible situación relacionada con ESCNNA?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar el hecho.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Resolverlo sin informar a nadie.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Activar los protocolos establecidos y reportar la situación a las autoridades competentes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Informarlo únicamente al huésped.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el propósito de cumplir la normatividad en los establecimientos de alojamiento?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar únicamente las ventas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el número de huéspedes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Garantizar una operación segura, legal y orientada a la protección de los usuarios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar los procesos administrativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
esooooo
