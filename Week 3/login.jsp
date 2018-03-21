<%@page import="java.sql.*" %>
<%
    String action=request.getParameter("action");
    
    if(action.equals("Login"))
{
    String User=request.getParameter("username");
    String Pwd=request.getParameter("password");
    
    try
    {
        Class.forName("com.mysql.jdbc.Driver");
        String url="jdbc:mysql://localhost:3306/admin?zeroDateTimeBehavior=convertToNull";
        Connection con = DriverManager.getConnection(url,"root","");
        
        Statement st=con.createStatement();
        
        ResultSet rs =st.executeQuery("select * from admins where Username='"+User+"' and Password='"+Pwd+"'");
        
        if(rs.next())
        {
            response.sendRedirect("index.jsp");
            
        }
        
        else
        {
            out.println("<script type=\"text/javascript\">");
            out.println("alert('Username and password invalid');");
            out.println("location='AdminLogin.html';");
            out.println("</script>");
         
        }
    }
    catch(Exception e)
            {
                out.println(e);
            }
}
    %>
