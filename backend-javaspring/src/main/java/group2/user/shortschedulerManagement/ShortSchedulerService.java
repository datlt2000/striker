package group2.user.shortschedulerManagement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import group2.data.entities.ShortScheduler;

@Service
public class ShortSchedulerService {
	@Autowired
	private ShortSchedulerStorage shortSchedulerRepos;
	
	public ShortScheduler insertShortScheduler(ShortScheduler shortScheduler) { //	Create
		return shortSchedulerRepos.insertShortScheduler(shortScheduler);
	}
	public List<ShortScheduler> getShortSchedulersUpcoming() {					//	Read
		List<ShortScheduler> list =  shortSchedulerRepos.getShortSchedulers();
		List<ShortScheduler> scheduler = new ArrayList<ShortScheduler>();
		java.util.Date now = new java.util.Date();
		for(ShortScheduler s : list) {
			if(now.before(s.getEndTime())) {
				scheduler.add(s);
			}
		}
		return scheduler;
	}
	public List<ShortScheduler> getShortSchedulersOver() {						//	Read
		List<ShortScheduler> list =  shortSchedulerRepos.getShortSchedulers();
		List<ShortScheduler> scheduler = new ArrayList<ShortScheduler>();
		java.util.Date now = new java.util.Date();
		for(ShortScheduler s : list) {
			if(now.after(s.getEndTime())) {
				scheduler.add(s);
			}
		}
		return scheduler;
	}
	public ShortScheduler updateShortScheduler(ShortScheduler shortScheduler) { //	Update
		return this.shortSchedulerRepos.updateShortScheduler(shortScheduler);
	}
	public boolean deleteShortSchedulerById(Long id) { //	Delete
		this.shortSchedulerRepos.deleteShortSchedulerById(id);
		return true;
	}
}
