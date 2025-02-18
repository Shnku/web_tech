<html>
	<head>
		<title> functions declerations </title>
	</head>
<body>
	<center>
		<h3> farenhite to celcius table</h3>
		<form action="functest.jsp" method="post">
			<input type="text" name="t" placeholder="En in Fatenhite">
		</form>
		
		<%-- if "<%" used then throws error The method getConvert(int) is undefied for the type functest_jsp --%>
		<%-- must use declerations --%>
		
		<%!  
			// function decleration must be in <%! ...  block
			String getConvert(double f){
				double c=(f-32)*5/9;
				return ("Celcius = "+c+"<br>Farenhite = "+f);
			}
		%>
		<p> ......output is......</p>
		<% 
		    String tempStr = request.getParameter("t");
			if (tempStr != null && !tempStr.isEmpty()) {
	            try {
	                double temp = Double.parseDouble(tempStr);
	                // calling the function .. method founded..
	                out.print(getConvert(temp));
	            } catch (NumberFormatException e) {
	                out.print("Please enter a valid number.");
	            }
	        }
		%>
	</center>
</body>
</html>
