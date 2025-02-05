<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.List" %>
<html>
<head>
    <title>Sum and Average of Positive Numbers</title>
</head>
<body>
    <h2>Sum and Average of Positive Numbers</h2>
    <h4>Enter list of Numbers (in comma-separated form)</h4>
    <form action="sumavg.jsp" method="post">
        <input type="text" name="numbers" placeholder="e.g. 10,20,30">
        <button type="submit">Submit</button>
    </form>
    <%
        String inputString = request.getParameter("numbers");
        int sum = 0;
        int count = 0;

        if (inputString != null && !inputString.trim().isEmpty()) {
            String[] separateString = inputString.split(",");
            List<Integer> numbers = new ArrayList<>();
            for (String s : separateString) {
                numbers.add(Integer.parseInt(s.trim())); 
            }
			// calculating the sum....
            for (Integer number : numbers) {
                if (number > 0) { // Only ve+ numbers
                    sum += number;
                    count++;
                }
            }
        }
		// calc avg....
        double average = (count > 0) ? (double) sum / count : 0;
    %>
    <p>Numbers: 
    <%
        if (inputString != null && !inputString.trim().isEmpty()) {
            out.print(inputString); 
        }
    %>
    </p>
    <p><strong>Sum of Positive Numbers: <%= sum %></strong></p>
    <p><strong>Average of Positive Numbers: <%= average %></strong></p>
</body>
</html>
