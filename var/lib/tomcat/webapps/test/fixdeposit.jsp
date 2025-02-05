<%@ page language="java" contentType="text/html; charset=ISO-8859-1" %>
<html>
<head>
    <title>Fixed Deposit & Counting</title>
</head>
<body>
    <h2>Fixed Deposit Calculator</h2>
    <form method="post">
        <label>Years: <input type="number" name="years" required></label>
        <input type="submit" value="Submit">
    </form>
    <%
        // Check if the form has been submitted
        String yearsParam = request.getParameter("years");
        if (yearsParam != null) {
            try {
                int n = Integer.parseInt(yearsParam);
                double principal = 1000.0; // Principal amount
                double rate = 5.0; // Interest rate

                out.println("<h3>Fixed Deposit Amounts:</h3>");
                for (int i = 1; i <= n; i++) {
                    double amount = principal * Math.pow(1 + rate / 100, i);
                    out.println("Year " + i + ": Rs " + String.format("%.2f", amount) + "<br>");
                }
            } catch (NumberFormatException e) {
                out.println("<p style='color:red;'>Invalid input. Please enter a valid number of years.</p>");
            }
        }
    %>
</body>
</html>
