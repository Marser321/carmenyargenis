// ─────────────────────────────────────────────────────────────────────────
//  COPY DEL DECK — única fuente de verdad para todo el texto.
//  Destilado de la biblioteca de prompts de Magic Capital + del documento
//  oficial "Promesa Masterclass" (2026-06-23), que ES la promesa con la que
//  se da la masterclass en vivo. Este deck es la PRESENTACIÓN DE PRODUCCIÓN.
//    · Promesa Masterclass.docx           (estructura, perfiles, agenda, oferta 27/jun)
//    · 00-SISTEMA-marca-y-compliance.md    (voz, paleta, disclaimer §8)
//    · 00-FUENTE-frases-webinar.md         (tipos de subasta / HOA, objeciones)
//    · 07-autoridad-argenis.md             (autoridad dual, caso $7,500)
//
//  ⚠ COMPLIANCE — POLÍTICA DE CIFRAS (decisión cliente 2026-06-23):
//    Las cifras fuertes de la promesa se usan TAL CUAL las escribió el cliente
//    —"reducir el riesgo al 98%", "$30,000–$100,000 por propiedad", "fracción
//    (~2%) del valor real"— SIEMPRE acompañadas de un disclaimer al pie de la
//    slide (prop `footnote` de <Slide>) y etiquetadas como "ejemplo puntual,
//    no promedio, no auditado". Esto flexibiliza la antigua lista anti-hype.
//    SIGUEN PROHIBIDOS como copy (no negociables):
//      "garantizado" · "sin riesgo" · "dinero gratis" · "pre-aprobado" ·
//      "aprobación asegurada" · "hazte rico" · "título limpio garantizado" ·
//      "recuperarás tu inversión".
//    El crédito 0% SIEMPRE como APR promocional sujeto a elegibilidad + garantía personal.
//
//  ✍ LO QUE NUNCA DECIR → cómo decirlo (documento oficial):
//    "aprende conmigo" → "implementa conmigo" · "mi curso" → "el intensivo / la experiencia" ·
//    "voy a enseñarte" → "vamos a construir/ejecutar juntos" · urgencia falsa → escasez real ·
//    prometer resultados → prometer SISTEMA y CLARIDAD.
//
//  NOMENCLATURA OFICIAL: Método MAP-9 (no "MAP 9F"); las 9 fases usan el orden
//    operativo del doc nuevo (descubrir mercado → inscripción no, ahora:
//    reconocimiento, entorno, riesgos ambientales, criminalidad, comparables,
//    riesgos legales, inspección). Capital = "crédito empresarial / financiamiento
//    al 0%". Intensivo MAP-9 $297 (27 de junio). Mentoría 1:1 $3,997 / 3 módulos
//    (antes "Elite $5,000"). Comunidad Magic Capital $27/mes.
//    Mecanismo dual: Argenis (oportunidad) + Carmen (capital).
// ─────────────────────────────────────────────────────────────────────────

export const brand = {
  name: 'Magic Capital',
  founders: 'Argenis Aguilera & Carmen Espinosa',
  whatsapp: 'Hablar por WhatsApp',
} as const

export const DISCLAIMER_FULL =
  'Descargo de responsabilidad: La información educativa provista por Argenis y Carmen / Magic Capital tiene fines formativos y no constituye asesoría legal, fiscal, crediticia, bancaria o de inversión individual. Los procesos de tax deed, tax lien, upset sale, judicial sale, repository sale, redención, notificación, gravámenes sobrevivientes, transferencia, title y financiamiento varían por estado, condado, emisor y perfil del solicitante. Toda cifra, caso, monto de crédito, plazo promocional, porcentaje de reducción de riesgo o resultado mostrado corresponde a ejemplos puntuales o experiencias individuales, es ilustrativo del método y no garantiza resultados similares. Cualquier acceso a crédito, límite, tasa, plazo promocional o aprobación depende de criterios del emisor y del perfil del solicitante. Antes de comprar en subasta o usar crédito para invertir, consulte a un abogado local, title professional y/o asesor financiero cualificado. REQUIERE VERIFICAR POR ESTADO/CONDADO/EMISOR.'

export const copy = {
  // 00 ── Portada
  cover: {
    kicker: 'Masterclass en vivo · en español · cómo adquirir propiedades en subasta',
    title: 'Cómo adquirir propiedades en subasta, paso a paso.',
    subtitle:
      'Qué condados mirar, qué propiedades descartar y cómo financiar con criterio — antes de tu primera subasta.',
    presenters: `Con ${brand.founders} · ${brand.name}`,
    footnote: 'Educación, no asesoría. Tax deed en Florida y Pennsylvania.',
  },

  // 01 ── ¿Esto es para ti? (los 3 perfiles del documento)
  perfiles: {
    kicker: 'Para quién es esta clase',
    title: '¿Esto es para ti?',
    body:
      'Si te reconoces en alguno de estos tres perfiles, esta clase es para ti — y hoy te mostramos no solo cómo lo hicimos nosotros, sino cómo lo están haciendo ya las personas a las que hemos ayudado.',
    items: [
      {
        n: '01',
        t: 'Ya tienes capital para invertir',
        d: 'Pero te frena el temor de no saber cómo comprar sin perder tu dinero.',
      },
      {
        n: '02',
        t: 'Quieres invertir y aún no tienes capital',
        d: 'Pero tienes un buen crédito personal para empezar con dinero del banco.',
      },
      {
        n: '03',
        t: 'Tienes capital para comprar',
        d: 'Pero aún piensas cómo financiar la reparación de propiedades que se adquieren por una fracción de su valor real.',
      },
    ],
    note: '"Fracción de su valor real" describe el mecanismo de la subasta; el resultado varía por caso, estado y condado. Educación, no asesoría.',
  },

  // 02 ── Encuadre honesto
  encuadre: {
    kicker: 'Antes de empezar',
    title: 'Exigimos que desconfíes.',
    body:
      'Esta clase no te pide que creas. Te muestra un proceso público que puedes verificar tú mismo en los sitios .gov de cada condado.',
    si: [
      'Educación sobre un proceso público y verificable',
      'Te enseñamos primero qué NO comprar',
      'Hablamos de costos, riesgos y límites con claridad',
    ],
    no: [
      'No es promesa de ingresos ni de “título limpio”',
      'No decimos “sin riesgo” ni “garantizado”',
      'No te aprobamos crédito: depende del emisor y tu perfil',
    ],
    note: 'Toma notas. Esto es educación; no es asesoría legal, fiscal ni de inversión.',
  },

  // 03 ── Quiénes te van a enseñar
  quienes: {
    kicker: 'Quiénes te van a enseñar',
    title: 'Dos expertos, un sistema completo.',
    body:
      'Argenis trae la oportunidad: opera subastas tax deed reales en Florida y Pennsylvania con el Método MAP-9. Carmen trae el capital: estructura empresas y crédito empresarial al 0%. La mayoría del nicho enseña solo a encontrar la propiedad; aquí ves las dos caras.',
    signals: [
      'Argenis: subastas tax deed y el Método MAP-9 (la oportunidad)',
      'Carmen: estructura de empresa y crédito empresarial al 0% (el capital)',
      'Enseñamos en español, en vivo, respondiendo preguntas',
      'Decimos cuándo NO somos la solución',
    ],
    closing: 'Enseñamos lo mismo que aplicamos.',
    // Etiquetas del diagrama animado del mecanismo dual (DualMechanism).
    dual: {
      left: { eyebrow: 'Argenis Aguilera', title: 'La oportunidad', sub: 'Subastas tax deed · Método MAP-9' },
      right: { eyebrow: 'Carmen Espinosa', title: 'El capital', sub: 'Crédito empresarial al 0%' },
      center: 'Un sistema completo',
    },
  },

  // 04 ── El problema
  problema: {
    kicker: 'Por qué estamos aquí',
    title: 'El sistema te dejó fuera. Hay otra puerta.',
    lead:
      'Para muchos latinos en EE.UU., comprar propiedad por la vía tradicional se volvió matemáticamente inalcanzable.',
    stats: [
      { value: '+47%', label: 'subieron los precios de vivienda desde la pandemia' },
      { value: 'Tasas altas', label: 'cuota inicial fuera de alcance' },
      { value: 'Historial', label: 'requisitos que castigan a quien recién empieza' },
    ],
    closing: 'La puerta principal —la hipoteca tradicional— está casi cerrada para ti.',
  },

  // 05 ── La Gran Idea
  granIdea: {
    kicker: 'La idea que cambia el marco',
    title: 'Tu estancamiento no es falta de dinero. Es falta de dirección.',
    body:
      'La inasequibilidad depende de a qué mercado mires. La transferencia real de patrimonio no ocurre en el mercado minorista de hipotecas: ocurre en el mercado secundario de liquidaciones fiscales.',
    emphasis:
      'Activos subvalorados, proceso público — y se puede fondear con crédito empresarial al 0%, sin inmovilizar tu ahorro.',
  },

  // 06 ── El mapa de hoy → AGENDA (qué vas a aprender: 5 puntos del doc)
  mapa: {
    kicker: 'El mapa de hoy',
    title: 'Qué vas a aprender hoy.',
    items: [
      { n: '01', t: 'El concepto de invertir en subastas', d: 'La estrategia detrás de comprar propiedades en subasta.' },
      { n: '02', t: 'Tipos de subasta y cuáles evitar', d: 'No todas te convienen; te decimos cuáles esquivar.' },
      { n: '03', t: 'Cómo encontrar las listas', d: 'Dónde están los listados públicos que casi nadie sabe leer.' },
      { n: '04', t: 'Las 9 fases para minimizar el riesgo', d: 'El Método MAP-9 para reducir el riesgo al 98%.' },
      { n: '05', t: 'Crédito de negocio al 0% por 12 meses', d: 'Cómo trabajar las propiedades con dinero del banco.' },
    ],
    note: 'El "98%" es ilustrativo del efecto del método de filtrado; no es una garantía de resultado. Toda inversión conserva riesgo.',
  },

  // 07 ── ¿Qué es tax deed?
  queEs: {
    kicker: 'En simple',
    title: '¿Qué es una subasta tax deed?',
    steps: [
      'Un propietario deja de pagar sus impuestos prediales.',
      'El condado subasta la propiedad para recuperar esa deuda — en un portal público.',
      'Compras un activo subvalorado… si supiste filtrar lo tóxico antes de pujar.',
    ],
    note: 'Proceso público. Reglas de redención, gravámenes y fees varían por estado y condado: requieren verificación local.',
  },

  // 08 ── Tipos de subasta y cuáles evitar (fuente: swipe file webinar, tema D)
  tiposSubasta: {
    kicker: 'Tipos de subasta',
    title: 'No todas las subastas te convienen.',
    body:
      'Hay varias vías de venta. Algunas transfieren el inmueble por la deuda fiscal; otras te dejan expuesto a deudas que sobreviven a la compra. Aprende a distinguirlas antes de pujar.',
    prioriza: [
      'Tax deed: el condado transfiere el inmueble por la deuda fiscal',
      'Procesos donde la deuda abre la puja, no el valor de mercado',
      'Jurisdicciones con reglas de redención y gravámenes claras',
    ],
    evita: [
      'Subastas de HOA: la puja abre barata, pero la hipoteca del banco puede sobrevivir',
      'Cualquier venta donde no verificaste gravámenes ni title',
      'Pujar sin haber filtrado lo tóxico primero',
    ],
    note: 'Las categorías (upset, judicial, repository, redención) y sus reglas varían por estado y condado: verifica localmente.',
  },

  // 09 ── Cómo encontrar las listas (proceso público)
  cambio3: {
    kicker: 'Cómo encontrar las listas',
    title: 'Las “listas” están en portales públicos .gov.',
    body:
      'Calendarios de venta, números de caso, listados. No necesitas un contacto secreto ni una lista privada — necesitas saber dónde mirar y cómo leerlos.',
    bullets: [
      'Participación remota y asíncrona en la mayoría de jurisdicciones',
      'En español: el vocabulario legal es repetitivo y predecible',
      'No necesitas dominar el inglés para entender el proceso',
    ],
  },

  // 10 ── Demo: portal de condado
  demo: {
    kicker: 'Demostración',
    title: 'Así auditamos un portal de condado.',
    body: 'Abrimos el portal público, leemos el calendario y descartamos en tiempo real.',
    note: 'Mock ilustrativo. En la clase en vivo lo hacemos sobre el portal real del condado que proponga la audiencia.',
  },

  // 11 ── Las 9 fases · Método MAP-9 (orden operativo del doc nuevo)
  cambio1: {
    kicker: 'Las 9 fases — minimizar el riesgo',
    title: 'Método MAP-9: 9 fases para reducir el riesgo al 98%.',
    body:
      'De descubrir el mercado a inspeccionar la propiedad, son 9 fases que se ejecutan en orden. Las últimas filtran lo tóxico —comparables, riesgos legales e inspección— antes de comprometer un dólar.',
    // Las 9 fases en el orden operativo del documento oficial (las construye MAP9Phases 01→09).
    phases: [
      'Descubrir y definir el mercado',
      'Encontrar la subasta y el listado',
      'Reconocimiento de la propiedad',
      'Ver el entorno',
      'Riesgos ambientales',
      'Índice de criminalidad',
      'Análisis de comparables',
      'Riesgos legales y deudas',
      'Inspección de la propiedad',
    ],
    filters: [
      'Gravámenes ocultos',
      'Deudas de HOA',
      'Violaciones de código',
      'Lotes inviables',
      'Pasivos municipales',
      'Títulos no asegurables',
    ],
    closing: 'Te enseñamos a descartar con criterio, no a apostar por intuición.',
    note: 'El "98%" ilustra el efecto del filtrado del método; no es una garantía de resultado. Toda inversión conserva riesgo.',
  },

  // 12 ── El capital · crédito empresarial al 0% (Carmen)
  cambio2: {
    kicker: 'El capital — crédito al 0% (Carmen)',
    title: 'Para que el banco te diga que sí: empresa, crédito, relaciones.',
    body:
      'Esta es la pieza de Carmen: estructurar tu empresa, preparar tu crédito y construir relaciones con los bancos para acceder a crédito empresarial al 0% por 12 meses — y trabajar las propiedades con dinero del banco.',
    pillars: [
      { t: 'Empresa', d: 'Estructurar correctamente tu LLC: la base para que el banco te tome en serio.' },
      { t: 'Crédito', d: 'Optimizar tu perfil y conocer los factores que lo dañan o lo fortalecen.' },
      { t: 'Relaciones', d: 'Construir relación con los bancos y entender sus reglas internas.' },
    ],
    disclaimer:
      'Tarjetas de negocio con APR promocional introductorio por un periodo (p. ej. 12 meses); la elegibilidad, el límite y la aprobación dependen del emisor y de tu perfil, y suelen requerir garantía personal. No prometemos montos ni aprobación.',
  },

  // 13 ── Calculadora de capital
  capital: {
    kicker: 'Los números reales',
    title: 'Tu capital total de entrada. Te lo decimos antes.',
    items: [
      { label: 'Puja (bid)', hint: 'la adjudicación en subasta' },
      { label: 'Fees del condado', hint: 'cargos administrativos' },
      { label: 'Trabajo de título', hint: 'saneamiento legal (quiet title)' },
      { label: 'Contingencia', hint: 'lo que no viste venir' },
      { label: 'Costos de holding', hint: 'mientras estabilizas el activo' },
    ],
    totalLabel: 'Capital total de entrada recomendado',
    totalRange: '$5,000 – $15,000',
    totalLow: 5000,
    totalHigh: 15000,
    note: 'La masterclass es gratis. Esto es lo que cuesta OPERAR con criterio — y por qué preferimos decírtelo antes de que decidas a ciegas.',
  },

  // 14 ── Caso real $7,500 (+ rango de upside del operador, tal cual el doc)
  caso: {
    kicker: 'Un ejemplo puntual',
    title: 'Washington County, PA: un caso con sus números a la vista.',
    rows: [
      { label: 'Adjudicación de la propiedad', value: '≈ $7,500' },
      { label: 'Fees del condado', value: 'variable' },
      { label: 'Trabajo de título (quiet title)', value: '$1,500 – $5,000' },
      { label: 'Contingencia + holding', value: 'estimado' },
    ],
    totalLabel: 'Capital total de entrada estimado',
    totalValue: 'más alto que la sola puja',
    fraction: 'Activos que pueden adjudicarse por una fracción de su valor real.',
    upside: 'En una sola propiedad bien ejecutada se puede ganar entre $30,000 y $100,000.',
    inlineDisclaimer:
      'Ejemplo puntual de una operación. No es un resultado promedio ni replicable por todos. Caso real, no auditado externamente. Las reglas y costos varían por estado, condado y propiedad.',
    note: 'Cifras del operador a modo de ejemplo puntual, no promedio, no auditado. Educación, no promesa de ingresos.',
  },

  // 15 ── Esto sí / esto no
  sino: {
    kicker: 'Cómo reconocer a alguien serio',
    title: 'Esto sí. Esto no.',
    si: [
      'Te muestra el portal público del condado',
      'Te enseña a descartar antes de comprar',
      'Habla de riesgos y de lo que puede salir mal',
      'Muestra cifras conservadoras con sus límites',
      'Te dice cuándo consultar a un abogado o title professional',
    ],
    no: [
      'Promete ingresos o “título limpio garantizado”',
      'Dice “sin riesgo” o “dinero gratis”',
      'Te manda a pujar por intuición',
      'Vende un sueño de lujo',
      'Finge que el crédito está pre-aprobado',
    ],
  },

  // 16 ── El intensivo (27 de junio)
  intensivo: {
    kicker: 'Tu siguiente paso · 27 de junio',
    title: 'Fin de Semana Intensivo: de mirar listados a ejecutar.',
    body:
      'Dos días para implementar conmigo, en vivo por Zoom (y queda grabado). Viernes 8–10pm: el capital con Carmen. Sábado, todo el día: las 9 fases del MAP-9 con Argenis, compartiendo pantalla y ejecutando juntos.',
    includes: [
      'Viernes 8–10pm — empresa, crédito personal, relaciones con bancos y crédito de negocio al 0% (Carmen)',
      'Sábado todo el día — las 9 fases del Método MAP-9, ejecutadas en vivo (Argenis)',
      'Online por Zoom · todo queda grabado y se te comparte',
      'Guía del Método MAP-9 + las herramientas del intensivo',
    ],
    si: [
      'Ya entiendes el concepto y quieres ejecutar',
      'Tienes (o estás construyendo) tu capital y/o tu crédito',
      'Quieres proceso y acompañamiento, no solo motivación',
    ],
    no: [
      'Buscas dinero rápido o garantizado',
      'No estás dispuesto a verificar por condado',
      'Esperas crédito sin perfil ni criterio',
    ],
    price: '$297',
    note: 'Precio de acción para quien reserva hoy: $297. Cupo y bonos sujetos a la fecha del evento. Acceso al 0% sujeto a elegibilidad. Educación, no asesoría.',
  },

  // 17 ── Los bonos del intensivo (6, del doc)
  bonos: {
    kicker: 'Incluido en el intensivo',
    title: 'Los bonos que te llevas.',
    items: [
      { t: 'Mapa de estados tax deed / tax lien', d: 'Dónde se ejecuta cada modelo en EE.UU.' },
      { t: 'Cronograma de subastas — Pennsylvania', d: 'Las fechas de los próximos meses.' },
      { t: 'Guía para invertir en subasta inmobiliaria', d: 'El paso a paso en EE.UU.' },
      { t: 'Guía de salud del crédito', d: 'Qué factores dañan tu crédito personal.' },
      { t: 'Lista de +200 tarjetas de crédito de negocio al 0%', d: 'Para fondear con dinero del banco.' },
      { t: '3 meses de acceso a la comunidad', d: 'Q&A en vivo cada semana.' },
    ],
    note: 'Bonos incluidos con el intensivo del 27 de junio. El acceso al crédito al 0% depende del emisor y de tu perfil.',
  },

  // 18 ── El valor y el precio (value stack + ancla $1000 → $500 → $297)
  anclaje: {
    kicker: 'El valor real',
    title: 'Lo que vale — y lo que pagas hoy.',
    body:
      'Una herramienta para conseguir propiedades por una fracción de su valor, usando dinero del banco — y repetirlo una y otra vez. Cuando lo sabes hacer bien, el cielo es el límite.',
    ladder: [
      { label: 'Llevarte de la mano, paso a paso', value: '$1,000', struck: true },
      { label: 'Lo íbamos a dejar en', value: '$500', struck: true },
      { label: 'Solo para quien toma acción hoy', value: '$297', struck: false },
    ],
    rationale:
      'No lo dejamos gratis a propósito: tu tiempo y el nuestro valen, y los $297 son un filtro — ese día solo queremos personas dispuestas a buscar y comprar, no a conflictos.',
    note: 'Los $1,000 y $500 son valores de referencia para encuadrar la oferta; el precio vigente es $297. Educación, no asesoría; resultados no garantizados.',
  },

  // 19 ── CTA
  cta: {
    kicker: 'Reserva tu lugar',
    title: 'Reserva tu lugar en el intensivo del 27.',
    primary: 'Reservar mi lugar en el intensivo',
    secondary: brand.whatsapp,
    microcopy:
      'Cupo limitado por la capacidad real de la cohorte y la fecha del evento. Sin contador falso: reservas porque quieres ejecutar.',
  },

  // 20 ── Objeciones honestas (las del doc: estafa, inglés/computadora, dinero, 0%)
  objeciones: {
    kicker: 'Preguntas honestas',
    title: 'Las dudas que tú también tienes.',
    qa: [
      {
        q: '¿Esto es una estafa?',
        a: 'Tienes razón en dudar. Por eso todo se basa en portales públicos .gov que puedes verificar. Exigimos que desconfíes.',
      },
      {
        q: '¿Y si mi inglés es limitado o no sé usar bien la computadora?',
        a: 'La clase es 100% en español; el vocabulario legal es repetitivo. Te damos las variables clave y, en el intensivo, lo hacemos juntos en pantalla.',
      },
      {
        q: 'No tengo casi dinero para empezar',
        a: 'Argenis empezó sin dinero y sin inglés perfecto. Por eso existe la pieza de Carmen: el crédito de negocio al 0% para trabajar con dinero del banco, sujeto a tu perfil.',
      },
      {
        q: '¿El crédito 0% es real?',
        a: 'Es un APR promocional introductorio del emisor, sujeto a elegibilidad y normalmente con garantía personal. No es dinero gratis ni está pre-aprobado.',
      },
    ],
  },

  // 21 ── Disclaimer legal
  disclaimer: {
    kicker: 'Aviso legal',
    title: 'Lee esto con calma.',
    notAdvisors:
      'Magic Capital no opera como asesor de inversión registrado, abogado ni asesor fiscal.',
    full: DISCLAIMER_FULL,
  },

  // 22 ── Gracias
  gracias: {
    kicker: 'Gracias por tu atención',
    title: 'Empieza por entender, no por comprar.',
    body:
      'Reserva tu lugar en el intensivo del 27 o escríbenos por WhatsApp. Sin prisa: la decisión es tuya.',
    signoff: `${brand.founders} · ${brand.name}`,
  },

  // UI — navegación, onboarding y ayuda (para usuarios poco técnicos)
  ui: {
    nav: {
      prev: 'Anterior',
      next: 'Siguiente',
      index: 'Índice',
      fullscreen: 'Pantalla completa',
      help: 'Ayuda',
    },
    onboarding: {
      title: 'Bienvenido a la masterclass',
      lines: [
        'Avanza con los botones ‹ › de abajo o las flechas del teclado.',
        'Toca “Índice” para ver todas las secciones y saltar a cualquiera.',
        'En el celular, desliza con el dedo para cambiar de pantalla.',
      ],
      cta: 'Entendido, empezar',
    },
    help: {
      title: 'Cómo navegar la presentación',
      rows: [
        ['Avanzar', 'Botón “Siguiente”, flecha → o barra espaciadora'],
        ['Retroceder', 'Botón “Anterior” o flecha ←'],
        ['Ver todas las secciones', 'Botón “Índice” o tecla O'],
        ['Pantalla completa', 'Botón de pantalla o tecla F'],
        ['Ir al inicio o al final', 'Teclas Inicio / Fin'],
        ['En el celular', 'Desliza a la izquierda o a la derecha'],
      ],
      close: 'Cerrar',
    },
  },
} as const

export type Copy = typeof copy
