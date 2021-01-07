package group2.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import group2.admin.AdminService;
import group2.data.entities.Account;

@Service
public class LoginService {
	@Autowired
	private LoginStorage loginStorage;
	@Autowired
	private AdminService adminService;
	//	Login
	public void loginAccount() {
		adminService.login();
	}
	
	public Account createAccount(Account account) { //	Create
		if(this.getAccountByEmail(account.getEmail()) != null) return null;
		account.setId(null);
		adminService.register();
		return loginStorage.createAccount(account);
	}
	public Account getAccountByEmail(String email) {//	Read
		if(!email.contains("@")) return null;
		if(email.contains("\'")) return null;
		return loginStorage.findAccountByEmail(email);
	}
	public Account getAccountById(long id) {		//	Read
		return loginStorage.findAccountById(id);
	}
}
