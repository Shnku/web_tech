<%@ page import="java.util.Date" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP Example</title>
</head>
<body>
    <h1>Welcome to my JSP Page!</h1>

    <%-- JSP Scriptlet: Java code embedded within <% ... %> --%>
    <%
        String name = "John Doe";
        Date now = new Date();
    %>

    <p>Hello, <%= name %></p> <%-- JSP Expression: Outputs the value of an expression --%>

    <p>The current date and time is: <%=now %></p>

    <%-- JSP Declaration: Declares variables or methods --%>
    <%!
        private String getGreeting() {
            return "Have a great day!";
        }
    %>

    <p><%= getGreeting() %></p>

    <%-- JSP Comments: Similar to HTML comments, but ignored by the JSP engine --%>
    <%-- This is a JSP comment. --%>

    <%-- Example using a Java loop --%>
    <ul>
        <%
            for (int i = 1; i <= 5; i++) {
        %>
            <li>Item <%= i %></li>
        <%
            }
        %>
    </ul>

    <%-- Example using a Java if statement --%>
    <%
      int num = 10;
      if (num > 5) {
    %>
        <p>Number is greater than 5.</p>
    <%
      } else {
    %>
        <p>Number is not greater than 5.</p>
    <%
      }
    %>

</body>
</html>
