export default {
  global: {
    Name: 'Principios normativos',
    Description:
      'El componente formativo Principios normativos fortalece la comprensión del aprendiz de las normas, procedimientos y responsabilidades aplicadas al registro y atención de huéspedes en los establecimientos de alojamiento. A través de este componente, se abordan aspectos relacionados con el <em>check-in</em>, la verificación documental, la protección de datos, la seguridad de la información y los protocolos de atención en recepción. Asimismo, se promueve la apropiación de principios éticos, legales y operativos que contribuyen al cumplimiento normativo y a la prestación eficiente del servicio hotelero.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normatividad hotelera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Importancia de la normatividad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Marco legal hotelero',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Responsabilidad y ética profesional',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Derechos y deberes',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Confidencialidad de la información',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Registro de huéspedes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Proceso de <em>check-in</em>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Verificación documental',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Registro de huéspedes nacionales y extranjeros',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Tarjeta de registro hotelero',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Protocolos de atención en recepción',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Seguridad y protección de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Seguridad de la información y protección de datos personales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Seguridad digital y riesgos operativos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Buenas prácticas de ciberseguridad',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Normativa y operación hotelera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Calidad del servicio y turismo responsable',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Prevención de riesgos y responsabilidad hotelera',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Transformación digital y actualización normativa',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/621602_CF06_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Atención al huésped',
      significado:
        'Conjunto de acciones orientadas a brindar servicio, orientación y solución de necesidades durante la estadía del cliente.',
    },
    {
      termino: 'Autenticación de usuarios',
      significado:
        'Procedimiento utilizado para verificar la identidad de las personas que acceden a sistemas tecnológicos del hotel.',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        'Conjunto de prácticas y herramientas orientadas a proteger sistemas, redes y datos frente a amenazas digitales.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'Principio que garantiza la protección y reserva de la información del huésped.',
    },
    {
      termino: 'Contrato de hospedaje',
      significado:
        'Acuerdo mediante el cual el establecimiento presta el servicio de alojamiento al huésped bajo determinadas condiciones.',
    },
    {
      termino: 'Control de acceso',
      significado:
        'Medida de seguridad que limita el ingreso a sistemas o información según permisos establecidos.',
    },
    {
      termino: 'Copias de seguridad',
      significado:
        'Respaldos de información utilizados para recuperar datos en caso de pérdida o fallas tecnológicas.',
    },
    {
      termino: 'Datos personales',
      significado:
        'Información que permite identificar a una persona, como nombre, documento, teléfono o correo electrónico.',
    },
    {
      termino: 'Documento de identidad',
      significado:
        'Soporte oficial utilizado para verificar la identidad del huésped durante el registro hotelero.',
    },
    {
      termino: 'ESCNNA',
      significado:
        'Sigla de Explotación Sexual Comercial de Niños, Niñas y Adolescentes asociada al turismo.',
    },
    {
      termino: '<em>Firewall</em>',
      significado:
        'Herramienta de seguridad digital que controla el acceso a redes y sistemas informáticos.',
    },
    {
      termino: '<em>Habeas Data</em>',
      significado:
        'Derecho que tienen las personas a conocer, actualizar y controlar el uso de su información personal.',
    },
    {
      termino: 'Huésped',
      significado:
        'Persona que utiliza temporalmente los servicios de alojamiento de un establecimiento hotelero.',
    },
    {
      termino: 'Ley General de Turismo',
      significado:
        'Conjunto de disposiciones legales que regulan la actividad turística en Colombia.',
    },
    {
      termino: 'PMS',
      significado:
        'Sigla de <em>Property Management System</em>; sistema utilizado para administrar operaciones hoteleras y registro de huéspedes.',
    },
    {
      termino: 'Prevención de riesgos',
      significado:
        'Acciones orientadas a evitar situaciones que afecten la seguridad, integridad o información dentro del hotel.',
    },
    {
      termino: 'Procedimiento operativo',
      significado:
        'Conjunto de pasos organizados para desarrollar actividades dentro de la operación hotelera.',
    },
    {
      termino: 'Protección de datos',
      significado:
        'Medidas orientadas a garantizar el manejo seguro y confidencial de la información personal.',
    },
    {
      termino: 'Recepción hotelera',
      significado:
        'Área encargada del registro, atención y orientación de huéspedes dentro del establecimiento.',
    },
    {
      termino: 'Registro hotelero',
      significado:
        'Procedimiento mediante el cual se formaliza el ingreso del huésped al establecimiento de alojamiento.',
    },
    {
      termino: 'Responsabilidad social hotelera',
      significado:
        'Compromiso del establecimiento con prácticas éticas, seguras y responsables frente a la sociedad y el turismo.',
    },
    {
      termino: 'Seguridad de la información',
      significado:
        'Protección de datos físicos y digitales frente a pérdida, alteración o acceso no autorizado.',
    },
    {
      termino: 'Seguridad digital',
      significado:
        'Conjunto de herramientas y prácticas orientadas a proteger sistemas tecnológicos y redes informáticas.',
    },
    {
      termino: 'Tarjeta de Registro Hotelero (TRH)',
      significado:
        'Documento físico o digital donde se registra la información del huésped y su estadía.',
    },
    {
      termino: 'Turismo responsable',
      significado:
        'Modelo turístico orientado al respeto por el entorno social, cultural, económico y ambiental.',
    },
    {
      termino: 'Verificación documental',
      significado:
        'Proceso de validación de documentos de identidad y soporte de información del huésped.',
    },
    {
      termino: 'Virus informático',
      significado:
        'Programa malicioso que puede afectar sistemas, redes o información almacenada en equipos tecnológicos.',
    },
  ],
  referencias: [
    {
      referencia: 'Bardi, J. A. (2011). Hotel front office management. Wiley.',
    },
    {
      referencia:
        'Congreso de Colombia. (1996). Ley 300 de 1996. Ley General de Turismo. Función Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8634',
    },
    {
      referencia:
        'Congreso de Colombia. (2001). Ley 679 de 2001. Estatuto para prevenir y contrarrestar la explotación, la pornografía y el turismo sexual con menores. Función Pública.',
    },
    {
      referencia:
        'Congreso de Colombia. (2005). Ley 985 de 2005. Medidas contra la trata de personas. Función Pública.',
    },
    {
      referencia:
        'Congreso de Colombia. (2009). Ley 1336 de 2009. Función Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36877',
    },
    {
      referencia:
        'Congreso de Colombia. (2012). Ley 1558 de 2012. Modificación de la Ley General de Turismo. Función Pública.',
    },
    {
      referencia:
        'Congreso de Colombia. (2012). Ley 1581 de 2012. Régimen general de protección de datos personales. Función Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Fondo Nacional de Turismo. (2003). Norma Técnica Sectorial Colombiana NTSH 003. Prestación de servicio de recepción y reservas conforme a manuales existentes.',
      link: 'https://fontur.com.co/sites/default/files/2020-11/NTSH003.pdf',
    },
    {
      referencia:
        'Kasavana, M. L., & Cahill, J. J. (2017). Managing computers in the hospitality industry. AHLEI.',
    },
    {
      referencia:
        'Kaspersky Labs. (2021). ¿Qué es la ciberseguridad? Kaspersky Latinoamérica.',
      link:
        'https://latam.kaspersky.com/resource-center/definitions/what-is-cyber-security',
    },
    {
      referencia:
        'Kotler, P., Bowen, J., & Makens, J. (2017). Marketing for hospitality and tourism (7th ed.). Pearson.',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2015). Decreto 1074 de 2015. Decreto Único Reglamentario del Sector Comercio, Industria y Turismo. SUIN-Juriscol.',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/30019935',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2016). Decreto 1964 de 2016. SUIN-Juriscol.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30030222',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2018). Decreto 2119 de 2018. SUIN-Juriscol.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30035940',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2022). Guía legal de los prestadores de servicios turísticos: alojamiento y hospedaje.',
      link:
        'https://www.mincit.gov.co/minturismo/analisis-sectorial-y-promocion/guias-legales-de-los-prestadores-de-servicios-turi/28-09-2022-guia-pst-alojamiento-sept2022.aspx',
    },
    {
      referencia:
        'Oracle Hospitality. (2023). Property Management Systems (PMS).',
      link: 'https://www.oracle.com/hospitality/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Amparo Virginia Moreno Cantero',
          cargo: 'Experto temático',
          centro: 'Centro de Servicios y Gestión Empresarial',
        },
        {
          nombre: 'Harbey Enrique Castelblanco',
          cargo: 'Experto temático',
          centro: 'Centro Colombo Alemán - Regional Atlántico',
        },
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
