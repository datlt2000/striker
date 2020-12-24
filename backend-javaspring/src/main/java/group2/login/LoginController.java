package group2.login;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import group2.data.entities.Account;
import group2.data.entities.Infor;
import group2.data.patterns.AccountBuilder;

@RestController
@RequestMapping("/striker/account")

public class LoginController {
	@Autowired
	private LoginService loginService;
	
	@PostMapping(value="/login")
	public LoginDTO login(@RequestBody(required = false) Map<String, String> json) throws Exception{
		try {
			String email = json.get("username");
			String password = json.get("password");
			if(loginService.checkAccount(email, password)) {
				Account acc = loginService.setAccountByEmail(email);
				return this.convertToDTO(acc);
			}
			return null;
		}catch(Exception e) {
			System.out.println("Json file have bad form");
			return null;
		}
	}
	
	@PostMapping(value="/register")
	public LoginDTO register(@RequestBody RegisterDTO user) {
		AccountBuilder builder = new AccountBuilder();
		Account account = builder.setEmail(user.getEmail())
								.setPassword(user.getPassword())
								.setBirthDay(user.getBirthDay())
								.setFirstName(user.getFirstName())
								.setLastName(user.getLastName())
								.setSex(user.getSex())
								.buildAccount();
		Account acc = loginService.createAccount(account);
		if(acc == null) return null;
		loginService.setAccount(acc);
		return this.convertToDTO(acc);
	}
	
	private LoginDTO convertToDTO(Account acc) {
		Infor infor = acc.getInfomation();
		LoginDTO login = new LoginDTO();
		login.setEmail(acc.getEmail());
		login.setAccountId(acc.getId());
		login.setInforId(acc.getInfomation().getId());
		login.setBirthDay(infor.getBirthday());
		login.setSex(infor.getSex());
		login.setFirstName(infor.getFirstName());
		login.setLastName(infor.getLastName());
		login.setSchool(infor.getSchool().getSchool());
		login.setAddress(infor.getSchool().getAddress());
		return login;
	}
}