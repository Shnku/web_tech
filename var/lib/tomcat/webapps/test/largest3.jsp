<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import = "java.util.ArrayList" %>
<%@ page import= "java.util.Collections" %>
<%@ page import= "java.util.List" %>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <h4>Enter 3 Numbers (in comma-separated form)</h4>
    <form action="largest3.jsp" method="post">
        <input type="text" name="numbers" placeholder="e.g. 1,2,3">
        <button type="submit">Submit</button>
    </form>

    <!-- Finding the largest -->
    <% 
        String inputString = request.getParameter("numbers");
        if (inputString != null && !inputString.trim().isEmpty()) {
            String[] separateString = inputString.split(",");

            List<Double> numbers = new ArrayList<>();
            for (String s : separateString) {
                numbers.add(Double.parseDouble(s.trim())); 
            }
            out.println("Largest number: " + Collections.max(numbers));
        } else {
            out.println("Please enter numbers.");
        }
    %>
</body>
</html>
