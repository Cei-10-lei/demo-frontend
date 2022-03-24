import './App.css';
import { Grid } from '@mui/material';
import GeneratorConsumption from './components/GeneratorConsumption';
import HomeConsumption from './components/HomeConsumption';

function App() {

  return (
    <div>
      <Grid container spacing={5} maxWidth={'100%'} style={{marginLeft: 'auto'}}>
        {/* <Grid item xs={12} md={6}>
          <GeneratorConsumption />
        </Grid> */}
        <Grid item xs={12}>
          <HomeConsumption />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
