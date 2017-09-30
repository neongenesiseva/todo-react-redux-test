import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Container from './Container';

describe("test Container component",()=>{
    it('test',()=>{
        expect(toJson(shallow(<Container />))).toMatchSnapshot()
    })
})