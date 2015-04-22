package register;
import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
public class RegisterServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			 throws ServletException, IOException {
		String email = req.getParameter("emailreg");
		String password = req.getParameter("passwordreg");
		String userName = req.getParameter("username");
		String firstName = req.getParameter("name");
		String sirName = req.getParameter("surname");
		String address = req.getParameter("address");
		String country = req.getParameter("country"); 
		// User user = new User(email,password,username,firstname,sirname,address,country);
		RequestDispatcher rd = null;
		if(		email!=null
				&& password  != null
				&& userName  != null
				&& firstName != null
				&& sirName   != null
				&& address   != null
				&& country   != null){
			req.setAttribute("succes","<div class=\"alert alert-success\" role=\"alert\" style=\"margin-top:20px;\">Login succesvol.</div>");
		}
		else{
			req.setAttribute("succes","<div class=\"alert alert-danger\" role=\"alert\" style=\"margin-top:20px;\">Verkeerd emailadres en/of wachtwoord.</div>");
		}
		rd = req.getRequestDispatcher("index.jsp");
		rd.forward(req, resp);
		
	}
}