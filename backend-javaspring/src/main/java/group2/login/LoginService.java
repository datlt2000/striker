package group2.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import group2.admin.AdminService;
import group2.data.entities.Account;
import group2.data.patterns.AccountSingleton;

@Service
public class LoginService {
	@Autowired
	private LoginStorage loginStorage;
	@Autowired
	private AdminService adminService;
	//	Login
	public boolean checkAccount(String email, String password) {
		if(this.getAccountByEmail(email) == null) return false;
		if(this.getAccountByEmail(email).getPassword().equals(password)) {
			adminService.login();
			return true;
		}
		return false;
	}
	public Account setAccountByEmail(String email) {
		Account account = this.getAccountByEmail(email);
		return AccountSingleton.setAccount(account);
	}
	
	public Account createAccount(Account account) { //	Create
		if(this.getAccountByEmail(account.getEmail()) != null) return null;
		account.setId(null);
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
	public Account setAccount(Account account) {
		return AccountSingleton.setAccount(account);
	}
}
