package register;
import java.io.IOException;
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
		String sirName = req.getParameter("sirname");
		String address = req.getParameter("address");
		String country = req.getParameter("country"); 
		// User user = new User(email,password,username,firstname,sirname,address,country);
		
	}
}