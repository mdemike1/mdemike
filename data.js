/*
  ============================================================
  CONTENIDO DE mdemike.com
  ============================================================
  Aquí editas TODO el contenido sin tocar el diseño (index.html).

  Reglas rápidas:
  - Cada elemento va entre { } y separado por una coma.
  - Los textos van entre comillas "así".
  - Para añadir un proyecto o una red: copia un bloque { ... },
    pégalo debajo y cambia los valores. (Un proyecto nuevo,
    además, hay que mencionarlo en el párrafo con su {id}.)
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
  // PÁRRAFO NARRATIVO — va debajo del titular grande
  // ----------------------------------------------------------
  // Es texto normal, con dos "códigos" especiales:
  //   {yumlist}    → mete ahí el proyecto con ese id (ver lista
  //                  de PROYECTOS abajo): cuadradito de color con
  //                  la inicial + nombre en negrita y enlazado.
  //   *palabras*   → entre asteriscos = cursiva serif (acento).
  //                  Úsalo con moderación: 2-4 acentos como mucho.
  // ----------------------------------------------------------
  story: "{yumlist} so friends share restaurant recs they *actually* trust, " +
         "and {lavirage} where I throw *car races* for real. " +
         "Ex-SaaS sales turned builder, based in Cervera. " +
         "Sharing the *messy* road as I go.",

  // ----------------------------------------------------------
  // PROYECTOS — se usan dentro del párrafo de arriba
  // ----------------------------------------------------------
  // id:    nombre corto para usarlo en el párrafo como {id}
  //        (sin espacios ni acentos). Un proyecto que no
  //        aparezca en el párrafo no se muestra.
  // name:  nombre del proyecto (la inicial sale en el cuadradito)
  // url:   enlace (con https://)
  // color: color de marca en hex, para el cuadradito. La letra
  //        sale blanca u oscura sola, según qué se lea mejor.
  // ----------------------------------------------------------
  projects: [
    {
      id: "yumlist",
      name: "Yumlist",
      url: "https://www.yumlist.app/",
      color: "#e07a4c"
    },
    {
      id: "lavirage",
      name: "La Virage Club",
      url: "https://www.lavirageclub.com/",
      color: "#d81f26"
    }
  ],

  // ----------------------------------------------------------
  // REDES — aparecen debajo del párrafo, más discretas
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
