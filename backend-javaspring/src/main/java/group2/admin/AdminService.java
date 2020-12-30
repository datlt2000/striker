package group2.admin;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import group2.data.entities.Account;
import group2.data.entities.Feedback;
import group2.data.entities.Statistic;

@Service
public class AdminService {
	@Autowired
	private AdminStorage storage;
	
	public List<Feedback> getFeedback() {
		return storage.getFeedbacks();
	}
	public void deleteAccountById(Long id) {
		storage.deleteAccountById(id);
	}
	public Account findAccountByEmail(String email) {
		return storage.findAccountByEmail(email);
	}
	public Statistic getStatistic() {
		Date now = new Date();
		java.sql.Date date = new java.sql.Date(now.getTime());
		Statistic s = storage.getStatistic(date);
		if(s == null) {
			s = new Statistic();
			s.setDate(date);
			s.setLogin((long)0);
			s.setRegister((long)0);
			s.setNewLongScheduler((long)0);
			s.setNewShortScheduler((long)0);
		}
		return s;
	}
	public void login() {
		Statistic s = this.getStatistic();
		s.setLogin(s.getLogin() + 1);
		storage.saveStatistic(s);
	}
	public void register() {
		Statistic s = this.getStatistic();
		s.setRegister(s.getRegister() + 1);
		storage.saveStatistic(s);
	}
	public void newLongScheduler() {
		Statistic s = this.getStatistic();
		s.setNewLongScheduler(s.getNewLongScheduler() + 1);
		storage.saveStatistic(s);
	}
	public void newShortScheduler() {
		Statistic s = this.getStatistic();
		s.setNewShortScheduler(s.getNewShortScheduler() + 1);
		storage.saveStatistic(s);
	}
}
