#Juego Verdadero o falso

##Introducción

El objetivo de este proyecto era crear un sistema de aprendizaje gamificado que monitorizase el rendimiento y registrase los fallos para aprender de ellos. 

##Funcionamiento

El objetivo del juego consiste en responder al mayor número de preguntas posibles teniendo en cuenta la gestión del tiempo. El juego comienza con 30" a disposición del usuario, a los que se sumarán o descontarán segúndos en función de las respuestas dadas.

Las preguntas forman parte de un .json, de donde se obtienen de manera aleatoria las claves para mostrar en las tarjetas. Es un sistema totalmente de frontend, por lo que no debe utilizarse como examen o prueba oficial ya que es manipulable. Existe otra versión montada con PHP para hacerlo más seguro por medio de consultas sql a una base de datos (mysql).

