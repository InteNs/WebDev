package login;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
public class LoginServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;
	private static String correctEmail 	= "dude.bro@hetnet.nl";
	private static String correctPass	= "123456789";

	protected void doPost( HttpServletRequest req, HttpServletResponse resp)
			 throws ServletException, IOException {
		boolean succes = false;
		String email = req.getParameter("email");
		String password = req.getParameter("password");
		if(email.equals(correctEmail)&& password.equals(correctPass))succes = true;
		req.setAttribute("succes",succes);
		RequestDispatcher rd = null;
		rd = req.getRequestDispatcher("LoginServlet.do");
		rd.forward(req, resp);		
	}

}
