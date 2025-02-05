<%@ page import="java.sql.*" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Login Result</title>
</head>
<body><center>
    <h2>Login</h2>
    <form action="loginpg.jsp" method="post">
        Username: <input type="text" name="username" required><br><br>
        Password: <input type="password" name="password" required><br><br>
        <input type="submit" value="Login">
    </form>
<%
    String username = request.getParameter("username");
    String password = request.getParameter("password");

    // Database connection parameters
    String url = "jdbc:mysql://localhost:3306/user_db"; // Change to your database name
    String dbUser = "root"; // Change to your database username
    String dbPassword = "admin"; // Change to your database password

    Connection conn = null;
    PreparedStatement pstmt = null;
    ResultSet rs = null;

    try {
        // Load the JDBC driver
        Class.forName("com.mysql.cj.jdbc.Driver");
        // Establish the connection
        conn = DriverManager.getConnection(url, dbUser, dbPassword);
        // Prepare the SQL statement
        String sql = "SELECT * FROM users WHERE username = ? AND password = ?";
        pstmt = conn.prepareStatement(sql);
        pstmt.setString(1, username);
        pstmt.setString(2, password);
        // Execute the query
        rs = pstmt.executeQuery();

        if (rs.next()) {
            out.println("<h3 style=\"color: green;\">Login successful! Welcome, " + username + ".</h3>");
        } else {
            out.println("<h3 style=\"color: red;\">Invalid username or password.</h3>");
        }
    } catch (SQLException e) {
        e.printStackTrace();
        out.println("<h3>Error: " + e.getMessage() + "</h3>");
    } catch (ClassNotFoundException e) {
        e.printStackTrace();
        out.println("<h3>JDBC Driver not found.</h3>");
    } finally {
        // Close resources
        if (rs != null) try { rs.close(); } catch (SQLException e) { e.printStackTrace(); }
        if (pstmt != null) try { pstmt.close(); } catch (SQLException e) { e.printStackTrace(); }
        if (conn != null) try { conn.close(); } catch (SQLException e) { e.printStackTrace(); }
    }
%></center>
</body>
</html>

