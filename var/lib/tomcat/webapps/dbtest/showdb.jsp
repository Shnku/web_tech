<%@ page language="java" import="java.util.*,java.sql.*" session="true" %>
<%
	Class.forName("com.mysql.jdbc.Driver");
	Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/students?user=root&password=admin");
	Statement stmt=conn.createStatement();
	ResultSet rs=null;
	rs=stmt.executeQuery("select * from records");
%>
<% while(rs.next()){ %>
		Roll: <%=rs.getString("roll")%>
		Name: <%=rs.getString("name")%>
		<br>
<%	} %>
