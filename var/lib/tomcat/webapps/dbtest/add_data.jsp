<%@ page language="java" import="java.util.*,java.sql.*" session="true" %>
<html>
<head>
  <title>Insert Data</title>
</head>
<body>
  <h2>Insert User Data</h2>
  <form action="add_data.jsp" method="post">
	    Name: <input type="text" name="name"><br>
	    Class: <input type="text" name="clas"><br>
  <input type="submit" value="Submit">
  </form>

  <%
    String name = request.getParameter("name");
    String email = request.getParameter("clas");
    >
    if (name != null && email != null) {
      try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con = DriverManager.getConnection("jdbc:mysql://localhost/students?user=root&password=admin");
        String query = "INSERT INTO users (roll,name, class) VALUES (?, ?, ?)";
        PreparedStatement ps = con.prepareStatement(query);
        ps.setString(1, roll);
        ps.setString(2, name);
        ps.setString(3, clas);
        int result = ps.executeUpdate();

        if (result > 0) {
          out.println("Data inserted successfully!");
        } else {
          out.println("Data insertion failed.");
        }

        ps.close();
        con.close();
      } catch (Exception e) {
        e.printStackTrace();
        out.println("Error: " + e.getMessage());
      }
    }
  %>
</body>
</html>
