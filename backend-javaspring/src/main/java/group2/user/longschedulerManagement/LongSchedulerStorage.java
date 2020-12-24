package group2.user.longschedulerManagement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import group2.data.entities.LongScheduler;
import group2.data.patterns.AccountSingleton;
import group2.data.repositories.LongSchedulerRepository;

@Repository
public class LongSchedulerStorage {
	@Autowired
	private LongSchedulerRepository longSchedulerRepos;
	public LongScheduler insertLongScheduler(LongScheduler longScheduler){
		if(longScheduler == null) return null;
		if(AccountSingleton.getAccount() == null) return null;
		longScheduler.setAccount(AccountSingleton.getAccount());
		this.longSchedulerRepos.save(longScheduler);
		return longScheduler;
	}
	public LongScheduler updateLongScheduler(LongScheduler longScheduler) {
		if (longScheduler == null) return null;
		if(AccountSingleton.getAccount() == null) return null;
		longScheduler.setAccount(AccountSingleton.getAccount());
		this.longSchedulerRepos.save(longScheduler);
		return longScheduler;
	}
	public List<LongScheduler> getLongSchedulers() {
		if(AccountSingleton.getAccount() == null) return null;
		return longSchedulerRepos.findByAccountID(AccountSingleton.getAccount().getId());
	}
	public void deleteLongSchedulerById(long id) {
		this.longSchedulerRepos.deleteById(id);
	}
}
