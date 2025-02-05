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
        <form action="largest_of_three.jsp" method-"post">
            <input type="text">
            <button onclick="">button</button>
        </form>

        <!-- finding the largest-->
        <% 
			import java.util.ArrayList;
			import java.util.Collections;
			import java.util.List;
			
            String inpuString = request.getParameter("numbers");
            String saperateString[] = inpuString.split(",");

            List<Double> numbers = new ArrayList<>();
            for (String s : saperateString) {
                numbers.add(Double.parseDouble(s));
            }
            out.println(Collections.max(numbers));
        %>
    </body>

</html>
