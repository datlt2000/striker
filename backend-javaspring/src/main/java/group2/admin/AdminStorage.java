package group2.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import group2.data.entities.Account;
import group2.data.entities.Feedback;
import group2.data.repositories.AccountRepository;
import group2.data.repositories.FeedbackRepository;

@Repository
public class AdminStorage {
	@Autowired
	private AccountRepository accountRepos;
	@Autowired
	private FeedbackRepository feedbackRepos;
	
	public List<Feedback> getFeedbacks() {
		return feedbackRepos.findAll();
	}
	public Account findAccountByEmail(String email) {
		return accountRepos.findByEmail(email);
	}
	public void deleteAccountById(Long id) {
		accountRepos.deleteById(id);
	}
}
