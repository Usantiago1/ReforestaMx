import React from 'react';
import * as eva from '@eva-design/eva';
import {default as theme} from './custom-theme.json';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { StyleSheet, Text, View } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import Navigation from './Navigation';


export default function App() {
  return (
    <>
   <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <Navigation/>
      </ApplicationProvider>
    </>
  );
}

