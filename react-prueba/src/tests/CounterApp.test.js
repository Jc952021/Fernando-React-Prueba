import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Probar el test de CounterApp', () => { 
  let wrapper

beforeEach(()=>{
  wrapper = shallow(<CounterApp/>)
})

test('Ver si coincide con el snapshot', () => { 

  
  expect(wrapper).toMatchSnapshot()
 })

test('Ver si coincide el valor 100', () => { 

  const wrapper = shallow(<CounterApp value={100}/>)
  const numberWrapper = wrapper.find("h2").text().trim() 

  expect(numberWrapper).toBe("100")
 })

test('Debe incrementar con el boton +1', () => { 

  wrapper.find("button").at(0).simulate("click") //encuentra de todos los botones el 1 boton y simula un click
  const numberWrapper = wrapper.find("h2").text().trim() //aca estara el valor
  expect(numberWrapper).toBe("11") //al dar click como su value era 10 por defecto -al dar click deberia ser 11
 })

test('Debe reducir con el boton -1', () => { 

  wrapper.find("button").at(2).simulate("click") //encuentra de todos los botones el 3 boton y simula un click
  const numberWrapper = wrapper.find("h2").text().trim() //aca estara el valor
  expect(numberWrapper).toBe("9") //al dar click como su value era 10 por defecto -al dar click deberia ser 11
 })

test('Debe funcionar el reset', () => { 

  const wrapper = shallow(<CounterApp value={100}/>)
  //le sumamos dos extras para luego resetearlo
  wrapper.find("button").at(0).simulate("click")
  wrapper.find("button").at(0).simulate("click")

  wrapper.find("button").at(1).simulate("click") //encuentra de todos los botones el 2 boton y simula un click
  const numberWrapper = wrapper.find("h2").text().trim() //aca estara el valor
  expect(numberWrapper).toBe("100") //al dar click como su value era 10 por defecto -al oner una prop ahora debe ser 100 al resetearlo
 })



 })