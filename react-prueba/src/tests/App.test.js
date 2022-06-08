import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


import { shallow } from 'enzyme';
import App from "../App"

describe.skip('Prueba con app test', () => { 
  
  test('Debe de mostrar el com App correctamente', () => { 
    
    const saludo = "Hola"
    const wrapper = shallow(<App saludo={saludo}/>)
    expect(wrapper).toMatchSnapshot()
   })

   test('Verificar si tiene el subtitulo enviado por props', () => { 
    const saludo = "Hola"
    const subtitulo = "prueba"
    const wrapper = shallow(<App saludo={saludo} otra={subtitulo}/>)

    const textParrafo = wrapper.find("p").text() //del wrapper encontrar(es como un query selector) la p y ver su texto
    expect(textParrafo).toBe(subtitulo) //espero que el texto encontrado del 1 parrafo sea el subitulo que cree arriba
    

    })
 })