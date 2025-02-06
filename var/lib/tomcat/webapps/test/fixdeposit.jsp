<%@ page language="java" contentType="text/html; charset=ISO-8859-1" %>
<html>
<head>
    <title>Fixed Deposit & Counting</title>
</head>
<body><center>
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
                if (n<0) throw new Exception();
                double principal = 1000.0; // Principal amount
                double rate = 5.0; // Interest rate

                // Combined Calculation
                out.println("<h3>Comparison of Fixed Deposit and Simple Interest:</h3>");
                out.println("<table border='1'><tr><th>Year</th><th>FD Amount</th><th>SI Amount</th></tr>");
                for (int i = 1; i <= n; i++) {
                    // Fixed Deposit Calculation
                    double fixedDepositAmount = principal * Math.pow(1 + rate / 100, i);
                    
                    // Simple Interest Calculation
                    double simpleInterest = (principal * rate * i) / 100;
                    double totalSIAmount = principal + simpleInterest;

                    // Output the results in a table row
                    out.println("<tr>");
                    out.println("<td>" + i + "</td>");
                    out.println("<td>Rs " + String.format("%.2f", fixedDepositAmount) + "</td>");
                    out.println("<td>Rs " + String.format("%.2f", totalSIAmount) + "</td>");
                    out.println("</tr>");
                }
                out.println("</table>");
            } catch (Exception e) {
                out.println("<p style='color:red;'>Invalid input. Please enter a valid number of years.</p>");
            }
        }
    %>
</center></body>
</html>
