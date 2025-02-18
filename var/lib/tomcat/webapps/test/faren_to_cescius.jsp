<table>
  <tr>
    <th> farenhite </th>
    <th> celcius </th>
  </tr>
  <%
    for(int f=32; f<=212; f+=20){
      double c=(f-32)*5/9;
  %>
  <tr>
    <td> <%= f %> </td>
    <td> <%= c %> </td>
  </tr>
  <% 
    }
  %>
</table>
