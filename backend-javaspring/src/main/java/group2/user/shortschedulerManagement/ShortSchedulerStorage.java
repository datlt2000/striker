package group2.user.shortschedulerManagement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import group2.data.entities.ShortScheduler;
import group2.data.patterns.AccountSingleton;
import group2.data.repositories.ShortSchedulerRepository;

@Repository
public class ShortSchedulerStorage {
	@Autowired
	private ShortSchedulerRepository shortSchedulerRepos;

	public ShortScheduler insertShortScheduler(ShortScheduler shortScheduler){
		if(shortScheduler == null) return null;
		if(AccountSingleton.getAccount() == null) return null;
		shortScheduler.setAccount(AccountSingleton.getAccount());
		this.shortSchedulerRepos.save(shortScheduler);
		return shortScheduler;
	}
	public List<ShortScheduler> getShortSchedulers() {
		if(AccountSingleton.getAccount() == null) return null;
		return shortSchedulerRepos.findByAccountID(AccountSingleton.getAccount().getId());
	}
	public ShortScheduler updateShortScheduler(ShortScheduler shortScheduler) {
		if(shortScheduler == null) return null;
		if(shortScheduler.getId() == null) return null;
		if(AccountSingleton.getAccount() == null) return null;
		if(shortScheduler.getRepeat() == null) return null;
		shortScheduler.setAccount(AccountSingleton.getAccount());
		
		this.shortSchedulerRepos.save(shortScheduler);
		return shortScheduler;
	}
	public void deleteShortSchedulerById(long id) {
		shortSchedulerRepos.deleteById(id);
	}
}
