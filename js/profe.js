function verDescripcion(curso) {
    const descripcion = obtenerDescripcion(curso);
    document.getElementById('nombre-curso').innerText = curso.toUpperCase();
    document.getElementById('texto-descripcion').innerText = descripcion;
    document.getElementById('descripcion-curso').style.display = 'block';
}

function obtenerDescripcion(curso) {
    // Aquí podrías obtener la descripción del curso desde tu base de datos o archivo JSON
    if (curso === 'matematicas') {
        return `Contenido del curso:
        - Números y operaciones: Suma, resta, multiplicación, división y más.
        - Álgebra básica: Ecuaciones lineales, factorización y simplificación.
        - Geometría: Figuras geométricas, áreas, perímetros y volúmenes.
        - Estadísticas: Gráficos, promedios, desviaciones y análisis de datos.

        Beneficios:
        - Aprendizaje interactivo con ejercicios prácticos.
        - Explicaciones claras y fáciles de entender.
        - Soporte personalizado para resolver tus dudas.
        - Certificado de finalización al completar el curso.`;
    } else if (curso === 'historia') {
        return `Contenido del curso:
        - Edades Antigua, Media y Moderna: Civilizaciones antiguas, Edad Media europea, Renacimiento y Revolución Industrial.
        - Historia Mundial: Guerras mundiales, globalización, y cambios sociales y políticos del siglo XX.
        - Historia Local: Historia de tu región, tradiciones culturales y acontecimientos importantes.
        - Historia del Arte: Movimientos artísticos, arquitectura histórica y su impacto en la sociedad.

        Beneficios:
        - Profesores expertos que hacen la historia accesible y emocionante.
        - Recursos multimedia, videos y documentos históricos.
        - Debate y análisis de eventos clave para comprender su relevancia.
        - Certificado al completar el curso y demostrar comprensión del material.`;
    } else if (curso === 'ciencias') {
        return `Contenido del curso:
        - Ciencias Naturales: Biología, ecología, y el ciclo de la vida en la Tierra.
        - Ciencias Físicas: Fuerzas, energía, electricidad, y el funcionamiento del universo.
        - Ciencias Químicas: Átomos, moléculas, reacciones químicas, y su aplicación en la vida cotidiana.
        - Ciencias de la Tierra: Geología, meteorología, climatología, y la importancia de conservar nuestro planeta.

        Beneficios:
        - Lecciones claras y dinámicas con ejemplos prácticos.
        - Experimentos y actividades que te permitirán explorar la ciencia de manera interactiva.
        - Análisis de casos reales y su impacto en el mundo actual.
        - Certificado al completar el curso y demostrar dominio de los conceptos científicos.`;
    } else {
        return 'Descripción no encontrada.';
    }
}
