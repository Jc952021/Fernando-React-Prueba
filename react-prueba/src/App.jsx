import React from 'react'
import { useState } from 'react'


import PropTypes from 'prop-types';

function App({saludo,otra}) {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>{saludo}</h1>
        <p>{otra}</p>
      </header>
    </div>
  )
}

App.propTypes ={
  saludo : PropTypes.string.isRequired
  }
  
App.defaultProps={
otra:"segunda prop"
}

export default App

//seccion4 inicie con npm init vite@latest aquinombreproyect
//crear una carp base y crear varios archivos js exportandolo

//vid 12
//habla sobre las proptypes
//cuando le paso una param a un componente,quiero que este param tenga el tipo que yo quiero
//para eso se importa el proptypes
//https://es.reactjs.org/docs/typechecking-with-proptypes.html
//de la funcion se accede al proptypes minuscula donde sera un objeto y ahi decir que cada prop sea un
//tipo que queremos,tambien e puede poner si es requerido
//en vite no podia traer el proptypes-sera porque no tenia esa dependencia
//npm i prop-types 
//ahi ya funciona

//vid13
//habla sobre las default props,le puedes poner a la prop algo = "aca el valor por defecto"
//o hacer el modo como el proptypes

//vid14
//puedes usar el comando rafcp , este trae la funcion y el propertypes

//vid16
//cuando haces un usestate, en el setAlgo
//se le puede enviar setAlgo((stateAnterior)=>stateAnterior + 1)

//seccion5
//vid6
//crear un arch. test,ejecutarlo con npm run test
//describe es como un grupo y probar dentro los test
//en mi caso tuve que descargar jest y crear su script

//vid7
//descargar la dependecia @testing-library/jest-dom-es para que te ayude con el expect y tobe-este tampoco funciona
//crear otra carp en etst base y que tenga el mismo nombre que el 1 arch de base
//tenia problema ahi ya que no permitia el import-jest creo que solo trabaja con require
//para saltarse un test , se le pone .skip
//crear otro test en ese describe pero el getsaludo debe tener un nombre por defecto

//vid8
//probar ahora con el 2 arch de base
//psar los objetos y comparar si son iguales
//para comparar obj se pone el toequal(es igual)-este compara las props y valores de cada obj
//ya que si ahces tobe de un obj con otro sera false,ya que un oobj es cerrado en otra memoria

//vid9
//probar con el arch 7 des-en el test,destructurar ambos valores,y cada valor ver si es un string o un number
//con typeof - psd- borrar los console.log del los archivo que importas-no se porque lo ejecuta

//vid10
//crear una capr data donde estara un arreglo

//vid11
//crear un arch de promesas,al hacer el test,en su 2 param recibe un done
//este done termina el proceso asincrono

//vid12
//es lo mismo que el anterior solo que si es un async,este se pone delante del 2 param de test

//vid14
//https://enzymejs.github.io/enzyme/ - pero como tenia react 17 habia error
//tenia que descargar esto https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17
//descargar enzyme para desarrolo-enzyme testea componentes react - cypress testtea de princio hasta el final de tu aplicacion-es decir lo que 
//haria el usuario
//crear un setupTests.js - este se usa cuando hagas un test de cualquier archivo
//crear una arch test en la carp test,para probar el comp app
//shalow de enzyme es como un render
//el module funciono porque cree un babel.config y descargue el babel-preset-react-hice otra de jest pero lo borre
//descargue otro enzyme y este codigo lo pegue arriba de la prueba
//usar el matchsnapshot-esto toma una captura del componente y lo crea en una carpeta snapshot
//peropara que se vea se descarga otro paq  https://www.npmjs.com/package/enzyme-to-json
//npm i enzyme-to-json -D - copiar lo que dice ahi
//probar otra vez y dara error y esta bien ya que no coincide con la toma anterior que era un obj
//se actualiza con npm run test -- -u
//en el test seria espero que el renderizado se igual a la captura(es decir lo que esta en el snapshot)

//vid15
//crear otro test donde verificar si tiene el sutitulo que le envio

//vid16
//es iual al 15 solo que con el counterapp-cuando se trae el text,este lo trae con sus espacios
//para eso se pone un trim

//vid17
//ahora hacer una simulacion de si estuvieras haciendo click
//como el wraper se repite se puede poner arriba de todos los test
//habia un problema que los test continuaban uno despues de otro
//para ejecutar algo antes de cada test se crea un beforeeach

//vid18
//hacer lo mismo que arriba,pero ahora con el reset,notar que cuando haces reset
//este te devuelve el valor que has puesto en el prop

//hacer esto para que funcione tu react con import yla ayuda de jest - creo
//https://gist.github.com/Galldamez/e9af622449aa56c63c60cef7a4d59144