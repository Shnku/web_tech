<%@ page import="java.util.Date" %>  <%-- Import the Date class --%>

<!DOCTYPE html>
<html>
<head>
    <title>Hello JSP</title>
</head>
<body>
    <center>
    <h1>Hello, World!</h1>  <%-- Static HTML content --%>

    <%-- JSP Scriptlet: Java code block --%>
    <%
        String name = "User"; // Default name
        if (request.getParameter("name") != null) { // Check if name parameter is provided
            name = request.getParameter("name"); // Get name from request parameter
        }
    %>

    <p>Welcome, <%= name %>!</p> <%-- JSP Expression: Output the name --%>

    <%-- JSP Expression: Output the current date and time --%>
    <p>The current time is: <%= new Date() %></p>

    <%-- JSP Declaration: Declares a method --%>
    <%!
        private String getGreeting() {
            return "Have a wonderful day!";
        }
    %>

    <p><%= getGreeting() %></p> <%-- Call the method and output the result --%>

    <form action="hello.jsp" method="get">  <%-- Form to provide name --%>
        Enter your name: <input type="text" name="name">
        <input type="submit" value="Greet Me">
    </form>
    </center>
</body>
</html>
