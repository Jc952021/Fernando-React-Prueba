import React from "react";
import {createRoot} from 'react-dom/client';
import MainApp from "./components/09-useContext/MainApp";
// import TodoApp from "./components/08-useReducer/TodoApp";
// import { Padre } from "./components/07-tarea-memo/Padre";
// import Example from "./components/useRef/Example";
// import MultiplesCustomHooks from "./components/examples/MultiplesCustomHooks";
// import CounterWithCustom from "./components/counterHook/CounterWithCustom";
// import CompoEfect from "./components/useEfect/CompoEfect";
// import FormWithCustom from "./components/useEfect/FormWithCustom";
//  import CounterApp from "./components/useState/CounterApp";

// import HookApp from "./HookApp";

import "./index.css";

createRoot(document.getElementById("root")).render(<MainApp />);

//seccion9
//vid4
//crear un counterapp y hacer un contador con un state de obj

//vid5
//hacer un customhook de un contador ,que sume,reste y resetee

//vid8
//crear un evento dentro de un useefect y usar el return de usefect para que no se use

//vid9
//hacer un formulario y este que use un customhook

//vid10
//hacer un customhook de un fecth
//entrar a esta api https://breakingbadapi.com/documentation y buscar por id

//vid11
//al hacer f2 a una palabra,si lo cambias,cambiar las palabras que tenia antes con la nueva
//en multiples ejecutar los custom hoks usefecth y el usecounter para cambiar la url

//vid13
//hacer un ejm de useref - actualmente ya no sale ese error- omitir la clase

//vid16
//ver como funciona el useEMmo

//secion10
//vid6
//crear una nueva app - todoApp
//crear un usereducer donde tendra una arr de obj
//un row,dos columans, la 1 que muestre el arr con um map
//la 2 un form con un input, boton agregar

//vid7
//hacer un submit para agregar con un disptach un nuevo item
//ir a su reducer y agregar el switch

//vid8
//usar el customhok useform para traer lo que escribamos en el input y
//setearlo en el dispatch,hacer una condicion y un reset para limpiar el input
//hacer un useefect para añadir al localstorage
//crear el 3 param de useReducer que sig le permite extraer la lógica para calcular el estado inicial fuera del reductor
//y lo que regresa sera el verdadero estado inicial
//hacemos aqui un parse para traer en arreglo que guarde en el local con setitem

//vid9
//crear una fucnion donde hace un dispatch para borrar un todo

//vid10
//hacer otro disptach que cuando hacemos click a un parrafo este se marque y 
//su done este en true y viceversa

//vid12
//reducir el todoApp a componentes

//seccion11
//vid4
//instalar npm i react-router-dom
//https://reactrouter.com/docs/en/v6/getting-started/installation
//crear dos screen

//vid5
//crea un arch router y ahi dentro ira todo del router

//vid6
//crear un nav y poner su navlink- el active no funciona - tenia que ponerle estilos en linea

//vid7
//crear el useContext en un archivo y envolverlo en tu componet principal
//y darle un valor

//vid8
//donde esta el context, proveerlo un state y usarlo en un componente

//seccion12
//vid4
//hacer test al hook useCounter,usar el act

//vid6
//test del useform

//vid7
//hacer un test del useFetch,hacer uso del waitfornext y agregar un catch al usefetch,hacer etst de un error
//tenia error en await ya que demoraba mas de 1 segundo

//vid8
//test del multiplescustomhooks,usar el mock 

//vid9
//test al exaple de useRef,hacer una simulacion de un click

//vid10
//comoe staremo usando mucho un arreglo,crear una carp fixtures,y ahi poner un arch con el arr
//test al todoReducer,esta es una funcion que retornara lo que le pasemos

//vid12
//test al todolisitem

//vid13
//testtodolist

//vid14
//test todoadd

//vid15
//testtodoapp

//vid16
//test loginScreenn

//vid17
//seguir con tel test  del login,pero esta ves enviando la funcion setuser

//seccion14
//vid5
//crear un router principal donde lleva a diferentes rutas

//vid7
//en el loginscreen crear un boton que al dar click me rediriga al home, con usenavigate

//vid8
//en modules crear un componente para usarlo en marvel y dc
//crear un archivo donde recibe un publisher y con eso mandar un listado de heroes para cada scren
//luego ejecutarlo en un comp heroesList

//vid9
//en el heroeslist mostrar por cada hero un card

//vid10
//usar el params para ver lo que enviamos al heroid con el link de un card hero

//vid11
//en el heroscreeen mostrar una lista con las especif del heroe, y volver

//vid12
//si quieres,usa el usememo para las funciones del selectors

//vid13
//uasr el animate css

//vid14
//crear una nuevo screen search

//vid15
//al escribir en el input , este debe redirigiar a la ruta que estoy actualmente
//pero agregarle una q=algoo con navigate se usa el npm quey-string

//vid16
//crear un nuevo selector,donde traiga los heroes segun el nombre que le pase
//se pone el includes para que lo busque si una palabra figure dentro de eso nombre
//habia un problema ya que al escribir,se usaria el useState,renderizando el compo, y por ende
//se ejecutaba la funcion.para eso usar el usememo


//seccion15
//vid4
//crear una carp auth y un types

//vid5
//en la carpeta types crear un obj donde tendra nombre para el type,
//crear un reducer para el auth y un context - en el authState crear el use reducer
//pero su 3 param sera una func que vera el localstor si no que ponga otro valor
//envolverlo al approuter

//vid6
//al dar click en login, este que haga un disptach enviando el usuario
//en el nav que me aparezca el user del logeado
//cuando actualizo deberia quedarse el name guardado,entonces usar el localstorage con usefect

//vid7
//al dar click en logout que me elimine el login y que rdeiriga al la pag login

//vid8
//crear una rutaPrivada

//vid9
//crear una ruta publica

//vid10
//usar el location para ver la ruta y gurdarlo en el localstorage
//al momento de logear, hacer un get al localstorgae para que me rediriga a esa ruta