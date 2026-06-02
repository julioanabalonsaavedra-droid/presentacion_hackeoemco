/* ========================= */
/* IMPORTS */
/* ========================= */

import "./App.css";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import html2pdf from "html2pdf.js";

/* ========================= */
/* APP */
/* ========================= */

function App() {

const [currentSlide,setCurrentSlide] = useState(0);

/* ========================= */
/* SLIDES */
/* ========================= */

const slides = [

"Inicio",
"Resumen",
"Actores",
"Impacto",
"Normativa",
"Delitos",
"Datos",
"Responsabilidades",
"Conclusiones",
"Final"

];

/* ========================= */
/* CONTROLES */
/* ========================= */

useEffect(()=>{

const handleKeyDown = (e)=>{

if(e.key === "ArrowRight"){

setCurrentSlide((prev)=>

prev < slides.length - 1
? prev + 1
: prev

);

}

if(e.key === "ArrowLeft"){

setCurrentSlide((prev)=>

prev > 0
? prev - 1
: prev

);

}

};

window.addEventListener(
"keydown",
handleKeyDown
);

return ()=>{

window.removeEventListener(
"keydown",
handleKeyDown
);

};

},[]);

/* ========================= */
/* DESCARGAR PRESENTACION PDF */
/* ========================= */

const downloadPresentationPDF = ()=>{

const element =
document.querySelector(".presentation");

const options = {

margin:0,

filename:
"Presentacion_EMCO.pdf",

image:{
type:"jpeg",
quality:1
},

html2canvas:{
scale:2,
useCORS:true
},

jsPDF:{
unit:"mm",
format:"a4",
orientation:"landscape"
},

pagebreak:{
mode:["avoid-all","css","legacy"]
}

};

html2pdf()
.set(options)
.from(element)
.save();

};

return (

<div className="app">

{/* ========================= */}
{/* SIDEBAR */}
{/* ========================= */}

<nav className="sidebar">

<h1>

EMCO

</h1>

<ul>

{slides.map((slide,index)=>(

<li key={index}>

<button

onClick={()=>setCurrentSlide(index)}

className={
currentSlide === index
? "activeNav"
: ""
}

>

{slide}

</button>

</li>

))}

</ul>

</nav>

{/* ========================= */}
{/* PRESENTATION */}
{/* ========================= */}

<main className="presentation">

<AnimatePresence mode="wait">

<motion.section

key={currentSlide}

className="slide activeSlide"

initial={{
opacity:0,
x:250,
scale:.92
}}

animate={{
opacity:1,
x:0,
scale:1
}}

exit={{
opacity:0,
x:-250,
scale:.92
}}

transition={{
duration:.8,
type:"spring"
}}

>

{/* HERO */}

{currentSlide === 0 && (

<div className="hero">

<h1>

Hackeo al Estado Mayor
Conjunto (EMCO)

</h1>

<h2>

Chile — 2022

</h2>

<p>

Análisis de ciberseguridad,
protección de datos y delitos
informáticos asociados al caso.

</p>

<div className="heroBadge">

400.000 correos filtrados

</div>

</div>

)}

{/* RESUMEN */}

{currentSlide === 1 && (

<div>

<h2>

Resumen Ejecutivo

</h2>

<div className="content">

<div className="card">

<h3>

¿Qué ocurrió?

</h3>

<p>

Ataque informático
contra el EMCO
atribuido al grupo
Guacamaya.

</p>

</div>

<div className="card">

<h3>

¿Qué hicieron?

</h3>

<p>

Acceso ilícito
y filtración masiva
de correos.

</p>

</div>

<div className="card">

<h3>

Consecuencia

</h3>

<p>

Impacto nacional
y exposición de
información crítica.

</p>

</div>

</div>

</div>

)}

{/* ACTORES */}

{currentSlide === 2 && (

<div>

<h2>

Actores involucrados

</h2>

<div className="grid">

<div className="actorCard">

<h3>

Guacamaya

</h3>

<p>

Grupo hacktivista responsable.

</p>

</div>

<div className="actorCard">

<h3>

EMCO

</h3>

<p>

Institución afectada.

</p>

</div>

<div className="actorCard">

<h3>

Funcionarios

</h3>

<p>

Datos comprometidos.

</p>

</div>

<div className="actorCard">

<h3>

Estado Chile

</h3>

<p>

Impacto institucional.

</p>

</div>

</div>

</div>

)}

{/* IMPACTO */}

{currentSlide === 3 && (

<div>

<h2>

Impacto del incidente

</h2>

<div className="impactGrid">

<div className="impactCard">

<h3>

Seguridad nacional

</h3>

<p>

Riesgo asociado
a información militar.

</p>

</div>

<div className="impactCard">

<h3>

Datos personales

</h3>

<p>

Exposición de
información sensible.

</p>

</div>

<div className="impactCard">

<h3>

Impacto operativo

</h3>

<p>

Revisión y contención
de sistemas.

</p>

</div>

<div className="impactCard">

<h3>

Impacto reputacional

</h3>

<p>

Cuestionamientos
sobre seguridad estatal.

</p>

</div>

</div>

</div>

)}

{/* NORMATIVA */}

{currentSlide === 4 && (

<div>

<h2>

Marco Normativo

</h2>

<div className="lawsGrid">

<div className="lawCard">

<h3>

Ley 21.459

</h3>

<p>

Delitos informáticos.

</p>

</div>

<div className="lawCard">

<h3>

Ley 19.628

</h3>

<p>

Protección de datos.

</p>

</div>

<div className="lawCard">

<h3>

Budapest

</h3>

<p>

Cooperación internacional.

</p>

</div>

<div className="lawCard">

<h3>

ISO 27001

</h3>

<p>

Seguridad información.

</p>

</div>

</div>

</div>

)}

{/* DELITOS */}

{currentSlide === 5 && (

<div>

<h2>

Delitos Informáticos

</h2>

<div className="tableBox">

<table>

<thead>

<tr>

<th>

Acción

</th>

<th>

Delito

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

Ingreso ilícito

</td>

<td>

Acceso ilícito

</td>

</tr>

<tr>

<td>

Correos filtrados

</td>

<td>

Interceptación ilícita

</td>

</tr>

<tr>

<td>

Extracción datos

</td>

<td>

Ataque integridad datos

</td>

</tr>

<tr>

<td>

Impacto sistemas

</td>

<td>

Ataque integridad sistemas

</td>

</tr>

</tbody>

</table>

</div>

</div>

)}

{/* DATOS */}

{currentSlide === 6 && (

<div>

<h2>

Datos Personales

</h2>

<div className="content">

<div className="card">

<h3>

Datos expuestos

</h3>

<ul>

<li>Correos electrónicos</li>

<li>Nombres completos</li>

<li>Cargos</li>

<li>Información laboral</li>

</ul>

</div>

<div className="card">

<h3>

Derechos ARCO

</h3>

<ul>

<li>Acceso</li>

<li>Rectificación</li>

<li>Cancelación</li>

<li>Oposición</li>

</ul>

</div>

</div>

</div>

)}

{/* RESPONSABILIDADES */}

{currentSlide === 7 && (

<div>

<h2>

Responsabilidades

</h2>

<div className="responsibilityGrid">

<div className="responsibilityCard">

<h3>

Guacamaya

</h3>

<p>

Responsabilidad penal.

</p>

</div>

<div className="responsibilityCard">

<h3>

EMCO

</h3>

<p>

Responsabilidad administrativa.

</p>

</div>

<div className="responsibilityCard">

<h3>

Administradores TI

</h3>

<p>

Responsabilidad civil.

</p>

</div>

</div>

</div>

)}

{/* CONCLUSIONES */}

{currentSlide === 8 && (

<div>

<h2>

Conclusiones

</h2>

<div className="conclusionBox">

<ul>

<li>

La prevención es fundamental.

</li>

<li>

La ciberseguridad es esencial.

</li>

<li>

La capacitación reduce riesgos.

</li>

<li>

Los datos deben protegerse.

</li>

<li>

Las amenazas digitales siguen creciendo.

</li>

</ul>

</div>

</div>

)}

{/* FINAL */}

{currentSlide === 9 && (

<div className="finalSlide">

<h1>

Gracias

</h1>

<p>

Caso EMCO — Chile 2022

</p>

<a

href="https://github.com/julioanabalonsaavedra-droid"

target="_blank"

rel="noopener noreferrer"

>

GitHub

</a>

<br/>

<br/>

{/* ========================= */}
{/* BOTON PDF FINAL */}
{/* ========================= */}

<button

className="downloadFullPdf"

onClick={downloadPresentationPDF}

>

Descargar presentación completa PDF

</button>

</div>

)}

</motion.section>

</AnimatePresence>

{/* ========================= */}
{/* CONTROLES */}
{/* ========================= */}

<div className="controls">

<button

onClick={()=>

setCurrentSlide((prev)=>

prev > 0
? prev - 1
: prev

)

}

>

←

</button>

<span>

{currentSlide + 1}
/
{slides.length}

</span>

<button

onClick={()=>

setCurrentSlide((prev)=>

prev < slides.length - 1
? prev + 1
: prev

)

}

>

→

</button>

</div>

</main>

</div>

);

}

export default App;

