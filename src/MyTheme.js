import { useContext } from "react";
import { ColorContext } from "./Home";

function MyTheme() {
    const myColor = useContext(ColorContext);

    const themeIdeas = {
        backgroundColor: myColor ? "violet" :  "yellow"
      
    }

    return (<div style={themeIdeas}>
         <table>
     <tr>
    <th className="table">Country</th>
    <th className="table">Submit word</th>
    </tr>
      <tr>
        <td>Australia</td>
        <td>au</td>
      </tr>
      <tr>
        <td>USA</td>
        <td>us</td>
      </tr>
      <tr>
        <td>Russia</td>
        <td>ru</td>
      </tr>
      <tr>
        <td>Greece</td>
        <td>gr</td>
      </tr>
      <tr>
        <td>Israel</td>
        <td>il</td>
      </tr>
      <tr>
        <td>Italy</td>
        <td>it</td>
      </tr>
      <tr>
        <td>France</td>
        <td>fr</td>
      </tr>
      <tr>
        <td>United Arab Emirates</td>
        <td>ae</td>
      </tr>
      <tr>
        <td>Portugal</td>
        <td>pt</td>
      </tr>
      <tr>
        <td>United Kingdom</td>
        <td>gb</td>
      </tr>
      <tr>
        <td>Ukraine</td>
        <td>ua</td>
      </tr>
     </table>  
         
     </div>)


}

export default MyTheme;