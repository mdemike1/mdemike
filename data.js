/*
  ============================================================
  CONTENIDO DE mdemike.com
  ============================================================
  Aquí editas TODO el contenido sin tocar el diseño (index.html).

  Reglas rápidas:
  - Cada elemento va entre { } y separado por una coma.
  - Los textos van entre comillas "así".
  - Para añadir un proyecto o una red: copia un bloque { ... },
    pégalo debajo y cambia los valores.
  - Para quitar uno: borra su bloque { ... } entero (con su coma).
  - El orden de la lista = el orden en la web.
  ============================================================
*/

window.SITE = {

  // Tu nombre tal y como aparece arriba y en el footer
  name: "Miquel Subias",

  // Dónde estás (sale debajo de tu nombre y en el footer)
  location: "Cervera, Catalonia",

  // ----------------------------------------------------------
  // PROYECTOS — los protagonistas de la página
  // ----------------------------------------------------------
  // name:        nombre del proyecto
  // description: una frase corta que explique qué es
  // url:         enlace (con https://)
  // color:       color de marca en hex. Se usa para el fondo
  //              tintado de la tarjeta y el cuadrado con la inicial.
  // ----------------------------------------------------------
  projects: [
    {
      name: "Yumlist",
      description: "The BeReal of restaurants — recommendations you can trust.",
      url: "https://www.yumlist.app/",
      color: "#e07a4c"
    },
    {
      name: "La Virage Club",
      description: "A new kind of event in the rally world.",
      url: "https://www.lavirageclub.com/",
      color: "#d81f26"
    }
  ],

  // ----------------------------------------------------------
  // REDES — aparecen debajo de los proyectos, más discretas
  // ----------------------------------------------------------
  // icon:  uno de estos → "youtube", "x", "instagram", "linkedin",
  //        "github", "tiktok", "email". (Si pones otro, sale sin icono.)
  // label: el texto que se ve (tu @usuario o el nombre de la red)
  // url:   enlace (para email usa "mailto:tu@email.com")
  // ----------------------------------------------------------
  socials: [
    { icon: "youtube",   label: "@mdemikee",   url: "https://www.youtube.com/@mdemikee" },
    { icon: "x",         label: "@mdemike___", url: "https://x.com/mdemike___" },
    { icon: "instagram", label: "@mdemike__",  url: "https://www.instagram.com/mdemike__/" },
    { icon: "linkedin",  label: "LinkedIn",    url: "https://www.linkedin.com/in/miquel-771450156/" }
  ]

};
