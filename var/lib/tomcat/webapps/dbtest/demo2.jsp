<%@ page language="java" import="java.util.*,java.sql.*" session="true" %>
<%
    String url = "jdbc:mysql://localhost/students"; // Database URL
    String user = "root"; // Database username
    String password = "admin"; // Database password
    Connection conn = null;
    Statement stmt = null;
    ResultSet rs = null;
    try {
        Class.forName("com.mysql.cj.jdbc.Driver"); // Load the driver class
        conn = DriverManager.getConnection(url, user, password); // Establish connection
        stmt = conn.createStatement();
        rs = stmt.executeQuery("SELECT * FROM records"); // Execute query

        while (rs.next()) {
            // Process the result set
            out.println(rs.getString("roll") + "&nbsp&nbsp");
            out.println(rs.getString("name")+ "&nbsp&nbsp");
            out.println(rs.getString("class")+ "&nbsp&nbsp");
            out.println(rs.getString("marks") + "<br>");
        }
    } catch (Exception e) {
        out.println("Error: " + e.getMessage());
    } finally {
        // Close resources in reverse order
        if (rs != null) try { rs.close(); } catch (SQLException e) {}
        if (stmt != null) try { stmt.close(); } catch (SQLException e) {}
        if (conn != null) try { conn.close(); } catch (SQLException e) {}
    }
%>
