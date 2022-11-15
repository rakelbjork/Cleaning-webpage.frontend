import React from 'react';
import Table from 'react-bootstrap/Table';

const Tjanster = () => {
    return(
        <div className="App">
            <h1>Våra städtjänster</h1>
    
   
  <Table striped="columns">
      <thead>
        <tr>
          <th>Diamantstädning</th>
          <th>Toppstädning</th>
          <th>Basic-städning</th>
          <th>Fönstertvätt</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Vår mest omfattande städning!
Vad som ingår:</td>
          <td>Vad som ingår:</td>
          <td>Vad som ingår:</td>
          <td>Vad som ingår:</td>
        </tr>
        <tr>
          <td><b>Alla rum</b></td>
          <td><b>Alla rum</b></td>
          <td><b>Alla rum</b></td>
          <td><b>Valfritt antal</b></td>
        </tr>
        <tr>
          <td>Dammsugning av golv och golvlister</td>
          <td>Dammsugning av golv och golvlister</td>
          <td>Dammsugning av golv och golvlister</td>
          <td>30 kr / fönster</td>
        </tr>
        <tr>
          <td>Dammsugning av möbler</td>
          <td>Dammsugning av möbler</td>
          <td>-</td>
          <td></td>          
        </tr>
        <tr>
          <td><b>Kök</b></td>
          <td><b>Kök</b></td>
          <td><b>Kök</b></td>
          <td></td>          
        </tr>
        <tr>
          <td>Avtorkning av vitvaror ut- och invändigt</td>
          <td>Avtorkning av diskbänk</td>
          <td>Avtorkning av diskbänk</td>
          <td></td>          
        </tr>
        <tr>
          <td>Avtorkning av diskbänk</td>
          <td>Avtorkning av köksluckor</td>
          <td>Avtorkning av köksluckor</td>
          <td></td>          
        </tr>
        <tr>
          <td>Avtorkning av köksluckor</td>
          <td>-</td>
          <td>-</td>
          <td></td>          
        </tr>
        <tr>
          <td>Rengörning av ugn och ugnsplåtar</td>
          <td>-</td>
          <td>-</td>
          <td></td>          
        </tr>
        <tr>
          <td><b>Badrum</b></td>
          <td><b>Badrum</b></td>
          <td><b>Badrum</b></td>
          <td></td>          
        </tr>
        <tr>
          <td>Rengöring av toalett</td>
          <td>Rengöring av toalett</td>
          <td>Rengöring av toalett</td>
          <td></td>          
        </tr>
        <tr>
          <td>Rengöring av badkar och dusch</td>
          <td>Rengöring av badkar och dusch</td>
          <td>-</td>
          <td></td>          
        </tr>
      </tbody>
    </Table>
  
  
  
        </div>
    )
}

export default Tjanster;