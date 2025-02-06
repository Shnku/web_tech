import java.sql.*;

public class Main {

    public static void main(String[] args) {
        String dbuser = "root";
        String dbpaswd = "admin";
        String dbURL = "jdbc:mysql://localhost:3306/demo";
        // Connection conn = null;
        PreparedStatement stat = null;
        ResultSet rset = null;
        String name = request.getParameter("unme");
        String passwd = request.getParameter("pass");

        try (Connection conn = DriverManager.getConnection(dbURL, dbuser, dbpaswd)) {
            System.out.println("Connected successfully!");
            String query = "SELECT * FROM users WHERE name=?" + " AND passwd= ?";
            stat = conn.prepareStatement(query);

            stat.setString(1, name);
            stat.setString(2, passwd);
            rset = stat.executeQuery();
            while (rset.next()) {
                System.out.println(rset.getString("name") + " logined..");
            }

        } catch (SQLException e) {
            // TODO: handle exception
            System.out.println(e.getMessage());
        }
    }
}
