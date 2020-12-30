package group2.admin;

import java.sql.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import group2.data.entities.Account;
import group2.data.entities.Feedback;
import group2.data.entities.Statistic;
import group2.data.repositories.AccountRepository;
import group2.data.repositories.FeedbackRepository;
import group2.data.repositories.LongSchedulerRepository;
import group2.data.repositories.ShortSchedulerRepository;
import group2.data.repositories.StatisticRepository;

@Repository
public class AdminStorage {
	@Autowired
	private AccountRepository accountRepos;
	@Autowired
	private LongSchedulerRepository longRepos;
	@Autowired
	private ShortSchedulerRepository shortRepos;
	@Autowired
	private FeedbackRepository feedbackRepos;
	@Autowired
	private StatisticRepository statisticRepos;
	
	public List<Feedback> getFeedbacks() {
		return feedbackRepos.findAll();
	}
	public Account findAccountByEmail(String email) {
		return accountRepos.findByEmail(email);
	}
	@Transactional
	public void deleteAccountById(Long id) {
		longRepos.deleteByAccountId(id);
		shortRepos.deleteByAccountId(id);
		accountRepos.deleteById(id);
	}
	public Statistic getStatistic(Date date) {
		return statisticRepos.findByDate(date);
	}
	public void saveStatistic(Statistic s) {
		statisticRepos.save(s);
	}
}
