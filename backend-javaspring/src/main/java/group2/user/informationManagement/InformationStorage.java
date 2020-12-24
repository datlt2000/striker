package group2.user.informationManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import group2.data.entities.Account;
import group2.data.entities.Feedback;
import group2.data.entities.Infor;
import group2.data.entities.School;
import group2.data.patterns.AccountSingleton;
import group2.data.repositories.AccountRepository;
import group2.data.repositories.FeedbackRepository;
import group2.data.repositories.InforRepository;
import group2.data.repositories.SchoolRepository;

@Repository
public class InformationStorage {
	@Autowired
	private InforRepository inforRepos;
	@Autowired
	private SchoolRepository schoolRepos;
	@Autowired
	private AccountRepository accountRepos;
	@Autowired
	private FeedbackRepository feedRepos;
	
	public Infor updateInfor(Infor infor) {
		infor.setId(AccountSingleton.getInformation().getId());
		infor.setSchool(AccountSingleton.getSchool());
		this.inforRepos.save(infor);
		return infor;
	}
	public School updateSchool(School school) {
		if(school == null) return null;
		school.setId(AccountSingleton.getSchool().getId());
		this.schoolRepos.save(school);
		return school;
	}
	public Account updateAccount(Account account) {
		if(account.getId() == null) account.setId(AccountSingleton.getAccount().getId());
		this.accountRepos.save(account);
		return account;
	}
	public Account getAccount(Long id) {
		if(AccountSingleton.getAccount() == null) return null;
		return accountRepos.getOne(id);
	}
	public boolean saveFeedback(String feed) {
		if(AccountSingleton.getAccount() == null) return false;
		Feedback feedback = new Feedback();
		feedback.setFeedback(feed);
		feedback.setAccountID(AccountSingleton.getAccount().getId());
		feedback.setEmail(AccountSingleton.getAccount().getEmail());
		feedRepos.save(feedback);
		return true;
	}
}
