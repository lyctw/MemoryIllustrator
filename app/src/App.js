import React from 'react';
import '@instructure/canvas-theme'
import './App.css';
import Chart from './components/chart'
import { TextArea } from '@instructure/ui-forms'
import { Grid } from '@instructure/ui-layout'
import { Heading } from '@instructure/ui-heading'

/*
https://instructure.design/


*/


function App() {
  return (
    <div className="App">

`    <Grid startAt="large">
      <Grid.Row>
        <Grid.Col></Grid.Col>
        <Grid.Col width={8}>
          <Heading>Memory Illustrator</Heading>
          Designed by YC
        </Grid.Col>
        <Grid.Col></Grid.Col>
      </Grid.Row>
    </Grid>
    
    <br/>

    <Grid startAt="large">
      <Grid.Row>
        <Grid.Col></Grid.Col>
        <Grid.Col width={8}>

          <img width="200px" src="https://i.imgur.com/jdBvyh1.png" /><br/>
          Keil dump tutorial
        
          </Grid.Col>
        <Grid.Col></Grid.Col>
      </Grid.Row>
    </Grid>
    
    <br/>

    <Grid startAt="large" visualDebug>
      <Grid.Row>
        <Grid.Col></Grid.Col>
        <Grid.Col width={8}>
          <TextArea
            label="Enter dump file"
          />
        </Grid.Col>
        <Grid.Col></Grid.Col>
      </Grid.Row>
    </Grid>
      
    <br/>
      
    <Grid startAt="large" visualDebug>
      <Grid.Row>
        <Grid.Col></Grid.Col>
        <Grid.Col width={8}>
         <Chart />
        </Grid.Col>
        <Grid.Col></Grid.Col>
      </Grid.Row>
    </Grid>

    <br/>

    <Grid startAt="large" visualDebug>
      <Grid.Row>
        <Grid.Col></Grid.Col>
        <Grid.Col width={8}>
          <Heading>IEEE754</Heading>
          bla bla bla...
        </Grid.Col>
        <Grid.Col></Grid.Col>
      </Grid.Row>
    </Grid>
      
    
      
    </div>
  );
}

 

export default App;
