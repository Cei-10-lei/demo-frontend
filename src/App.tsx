import './App.css';
import { Grid } from '@mui/material';
import GeneratorConsumption from './components/GeneratorConsumption';
import HomeConsumption from './components/HomeConsumption';

function App() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <GeneratorConsumption />
      </Grid>
      <Grid item xs={12} md={6}>
        <HomeConsumption />
      </Grid>
    </Grid>
  );
}

export default App;
