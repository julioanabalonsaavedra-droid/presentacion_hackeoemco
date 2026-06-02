import "./App.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {

const [currentSlide,setCurrentSlide] = useState(0);

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

/* CONTROLES TECLADO */

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

return (

<div className="app">

{/* SIDEBAR */}

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

{/* PRESENTATION */}

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

<motion.h1

initial={{
opacity:0,
y:80
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

>

Hackeo al Estado Mayor
Conjunto (EMCO)

</motion.h1>

<motion.h2

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:.3,
duration:1
}}

>

Chile — 2022

</motion.h2>

<motion.p

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:.6,
duration:1
}}

>

Análisis de ciberseguridad,
protección de datos y delitos
informáticos asociados al
ciberataque EMCO.

</motion.p>

<motion.div

className="heroBadge"

animate={{
scale:[1,1.05,1]
}}

transition={{
duration:2,
repeat:Infinity
}}

>

400.000 correos filtrados

</motion.div>

</div>

)}

{/* RESUMEN */}

{currentSlide === 1 && (

<div>

<h2>

Resumen Ejecutivo

</h2>

<div className="content">

<motion.div

className="card"

whileHover={{
scale:1.05,
y:-10
}}

>

<h3>

¿Qué ocurrió?

</h3>

<p>

Ataque informático
contra el EMCO
atribuido al grupo
Guacamaya.

</p>

</motion.div>

<motion.div

className="card"

whileHover={{
scale:1.05,
y:-10
}}

>

<h3>

¿Qué hicieron?

</h3>

<p>

Acceso ilícito
y filtración de
miles de correos.

</p>

</motion.div>

<motion.div

className="card"

whileHover={{
scale:1.05,
y:-10
}}

>

<h3>

Consecuencia

</h3>

<p>

Impacto nacional
y exposición
de información
sensible.

</p>

</motion.div>

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

{[
{
title:"Guacamaya",
text:"Grupo hacktivista responsable."
},

{
title:"EMCO",
text:"Institución afectada."
},

{
title:"Funcionarios",
text:"Datos comprometidos."
},

{
title:"Estado Chile",
text:"Impacto institucional."
}

].map((actor,index)=>(

<motion.div

key={index}

className="actorCard"

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:index*.2
}}

whileHover={{
scale:1.08
}}

>

<h3>

{actor.title}

</h3>

<p>

{actor.text}

</p>

</motion.div>

))}

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

{[
"Seguridad nacional",
"Datos personales",
"Impacto operativo",
"Impacto reputacional"
].map((impact,index)=>(

<motion.div

key={index}

className="impactCard"

whileHover={{
scale:1.07,
rotate:1
}}

initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
delay:index*.15
}}

>

<h3>

{impact}

</h3>

<p>

Consecuencias
críticas derivadas
del ataque.

</p>

</motion.div>

))}

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

{[
"Ley 21.459",
"Ley 19.628",
"Convenio Budapest",
"ISO 27001"
].map((law,index)=>(

<motion.div

key={index}

className="lawCard"

whileHover={{
scale:1.08,
y:-10
}}

initial={{
opacity:0,
x:-60
}}

animate={{
opacity:1,
x:0
}}

transition={{
delay:index*.15
}}

>

<h3>

{law}

</h3>

<p>

Marco regulatorio
aplicable al caso.

</p>

</motion.div>

))}

</div>

</div>

)}

{/* DELITOS */}

{currentSlide === 5 && (

<div>

<h2>

Delitos Informáticos

</h2>

<motion.div

className="tableBox"

initial={{
opacity:0,
scale:.9
}}

animate={{
opacity:1,
scale:1
}}

>

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

</motion.div>

</div>

)}

{/* DATOS */}

{currentSlide === 6 && (

<div>

<h2>

Datos Personales

</h2>

<div className="content">

<motion.div

className="card"

whileHover={{
scale:1.06
}}

>

<h3>

Datos expuestos

</h3>

<ul>

<li>Correos</li>

<li>Nombres</li>

<li>Cargos</li>

<li>Información laboral</li>

</ul>

</motion.div>

<motion.div

className="card"

whileHover={{
scale:1.06
}}

>

<h3>

Derechos ARCO

</h3>

<ul>

<li>Acceso</li>

<li>Rectificación</li>

<li>Cancelación</li>

<li>Oposición</li>

</ul>

</motion.div>

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

{[
{
title:"Guacamaya",
text:"Responsabilidad penal."
},

{
title:"EMCO",
text:"Responsabilidad administrativa."
},

{
title:"Administradores TI",
text:"Responsabilidad civil."
}

].map((item,index)=>(

<motion.div

key={index}

className="responsibilityCard"

whileHover={{
scale:1.08,
y:-10
}}

initial={{
opacity:0,
x:80
}}

animate={{
opacity:1,
x:0
}}

transition={{
delay:index*.2
}}

>

<h3>

{item.title}

</h3>

<p>

{item.text}

</p>

</motion.div>

))}

</div>

</div>

)}

{/* CONCLUSIONES */}

{currentSlide === 8 && (

<div>

<h2>

Conclusiones

</h2>

<motion.div

className="conclusionBox"

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

>

<ul>

<li>

La prevención es fundamental.

</li>

<li>

La ciberseguridad
es esencial.

</li>

<li>

La capacitación
reduce riesgos.

</li>

<li>

Los datos personales
deben protegerse.

</li>

<li>

Las amenazas digitales
siguen creciendo.

</li>

</ul>

</motion.div>

</div>

)}

{/* FINAL */}

{currentSlide === 9 && (

<div className="finalSlide">

<motion.h1

animate={{
opacity:[1,.7,1]
}}

transition={{
duration:2,
repeat:Infinity
}}

>

Gracias

</motion.h1>

<p>

Caso EMCO — Chile 2022

</p>

<motion.a

href="https://github.com/julioanabalonsaavedra-droid"

target="_blank"

rel="noopener noreferrer"

whileHover={{
scale:1.1
}}

whileTap={{
scale:.95
}}

>

GitHub

</motion.a>

</div>

)}

</motion.section>

</AnimatePresence>

{/* CONTROLES */}

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
