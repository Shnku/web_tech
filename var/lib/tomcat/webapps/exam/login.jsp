<%@ page import="java.sql.*" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <html lang="en">

    <head>
        <title>Login page</title>
    </head>

    <body>
        <h3>Enter your login details</h3>
        <form action="login.jsp" method="post">
            <input type="text" name="unme" id="uname"><br><br>
            <input type="text" name="pass" id="pass"><br><br>
            <button type="submit">submit</button><br>
        </form>
        <% 
        String dbuser = "root";
        String dbpaswd = "admin";
        String dbURL = "jdbc:mysql://localhost:3306/demo";
        // Connection conn = null;
        // Statement stat = null;
        ResultSet rset = null;
        String name = request.getParameter("unme");
        String passwd = request.getParameter("pass");
        
        Class.forName("com.mysql.cj.jdbc.Driver");    
        try (Connection conn = DriverManager.getConnection(dbURL, dbuser, dbpaswd)) {
            // Load the JDBC driver
            System.out.println("Connected successfully!");
            
            String sql = "SELECT * FROM users WHERE name=?" + " AND passwd=?";
            PreparedStatement output = conn.prepareStatement(sql);
            output.setString(1, name);
            output.setString(2, passwd);
            rset = output.executeQuery();

            while(rset.next()) {
                out.println(rset.getString("name")+" login successfully");
            }

        } catch (SQLException e) {
            out.println("no user exist\t");
            out.println(e.getMessage());
        }
        %>
    </body>

    </html>
