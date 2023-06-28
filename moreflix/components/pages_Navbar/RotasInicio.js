import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Inicio from './Inicio';
import EuNunca from '../Series/EuNunca';
import HomemAranha from '../Filmes/HomemAranha';
import PequenaSereia from '../Filmes/PequenaSereia';
import Xokitty from '../Series/Xokitty';



const Stack = createStackNavigator();

export default function RotasInicio(){

  return(
    <Stack.Navigator>

    <Stack.Screen name="Início" component={Inicio}/>
    <Stack.Screen name="EuNunca" component={EuNunca}/>
    <Stack.Screen name="HomemAranha" component={HomemAranha}/>
    <Stack.Screen name="PequenaSereia" component={PequenaSereia}/>
    <Stack.Screen name="Xokitty" component={Xokitty}/>
    </Stack.Navigator>
  );
}