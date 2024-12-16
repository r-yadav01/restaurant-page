export default buildMenupage;

function buildMenupage() {
  const content = document.querySelector('#content');
  content.innerHTML = `
  <table>
    <colgroup>
      <col style='width:50vw;'/>
      <col style='width:30vw;'/>
    </colgroup>
    <tr>
    <th>Items</th>
    <th>Price</th>
    </tr>
      <tr>
      <td>Kala jamun</td>
      <td>₹20</td>
    </tr>
    <tr>
      <td>Rasgulla</td>
      <td>₹30</td>
    </tr>
    <tr>
      <td>Punjabi samosa</td>
      <td>₹20</td>
    </tr>
    <tr>
      <td>Aloo tikki chatt</td>
      <td>₹50</td>
    </tr>
    <tr>
      <td>Veg Kolhapuri</td>
      <td>₹50</td>
    </tr>
    <tr>
      <td>Medu vada sambhar</td>
      <td>₹50</td>
    </tr>
    <tr>
      <td>Chana masala</td>
      <td>₹70</td>
    </tr>
    <tr>
      <td>Punjabi dum aloo</td>
      <td>₹70</td>
    </tr>
    <tr>
      <td>Aloo palak</td>
      <td>₹70</td>
    </tr>
    <tr>
      <td>Gobi manchurian</td>
      <td>₹70</td>
    </tr>
    <tr>
      <td>Kadhai paneer</td>
      <td>₹90</td>
    </tr>
    
    <tr>
      <td>Paneer bhurji</td>
      <td>₹90</td>
    </tr>
  </table>`
}