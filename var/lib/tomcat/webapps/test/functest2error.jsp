<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Functions Declarations</title>
</head>
<body>
<center>
    <h3>Fahrenheit to Celsius Table</h3>
    <form action="functest2fix.jsp" method="post">
        <input type="text" name="t" placeholder="Enter temperature in Fahrenheit">
        <input type="submit" value="Convert">
    </form>

    <%
        // Function to convert Fahrenheit to Celsius
        String getConvert(double f) {
            double c = (f - 32) * 5 / 9;
            return "Celsius = " + c + " Fahrenheit = " + f;
        }
        // gets error cause function decleared in <% block

        // Get the temperature from the request
        String tempStr = request.getParameter("t");
        if (tempStr != null && !tempStr.isEmpty()) {
            try {
                double temp = Double.parseDouble(tempStr);
                out.print(getConvert(temp));
            } catch (NumberFormatException e) {
                out.print("Please enter a valid number.");
            }
        }
    %>
</center>
</body>
</html>
