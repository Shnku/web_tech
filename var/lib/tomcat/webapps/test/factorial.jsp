<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<html>
<head>
    <title>Factorial Calculate</title>
</head>
<body>
    <h4>Enter the Number to find Factorial</h4>
    <form action="factorial.jsp" method="post">
        <input type="text" name="numbers">
        <button type="submit">Submit</button>
    </form>

    <!-- Finding the factorial -->
    <%
        String inputString = request.getParameter("numbers");
        if (inputString != null && !inputString.trim().isEmpty()) {
            try {
                int no = Integer.parseInt(inputString);
                long factorial = 1;
                for(int i = 1; i <= no; i++){
					factorial *= i;
				}
                out.println("Factorial of " + no + " is: " + factorial);
            } catch (NumberFormatException e) {
                out.println("Please enter a valid integer.");
            }
        } else {
            out.println("Please enter a number.");
        }
    %>
</body>
</html>
