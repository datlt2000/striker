package group2.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import group2.data.entities.Account;
import group2.data.entities.Infor;
import group2.data.entities.School;
import group2.data.repositories.AccountRepository;
import group2.data.repositories.InforRepository;
import group2.data.repositories.SchoolRepository;

@Repository
public class LoginStorage {
	@Autowired
	private AccountRepository accountRepos;
	@Autowired
	private InforRepository inforRepos;
	@Autowired 
	private SchoolRepository schoolRepos;
	
	public Account createAccount(Account account) {
		if(this.insertInformation(account.getInfomation()) == null) return null;
		this.accountRepos.save(account);
		return account;
	}
	public Infor insertInformation(Infor infor) {
		if(infor == null) return null;
		School s = new School();
		s.setSchool("Unknown");
		s.setAddress("Unknown");
		s.setId(null);
		infor.setSchool(s);
		schoolRepos.save(s);
		this.inforRepos.save(infor);
		return infor;
	}
	public Account findAccountById(long id) {
		if(id < 0) return null;
		return accountRepos.findById(id);
	}
	public Account findAccountByEmail(String email) {
		if(email.isEmpty()) return null;
		if(!email.contains("@")) return null;
		if(email.contains("\'")) return null;
		return accountRepos.findByEmail(email);
	}
}
