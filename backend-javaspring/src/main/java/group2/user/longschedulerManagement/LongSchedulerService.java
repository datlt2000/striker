package group2.user.longschedulerManagement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import group2.data.entities.LongScheduler;

@Service
public class LongSchedulerService {
	@Autowired
	private LongSchedulerStorage longSchedulerStorage;
	
	public LongScheduler insertLongScheduler(LongScheduler longScheduler) { //	Create
		return this.longSchedulerStorage.insertLongScheduler(longScheduler);
	}
	public List<LongScheduler> getLongSchedulersUpcoming(){ 				//	Read
		List<LongScheduler> list =  longSchedulerStorage.getLongSchedulers();
		List<LongScheduler> scheduler = new ArrayList<LongScheduler>();
		java.util.Date now = new java.util.Date();
		for(LongScheduler s : list) {
			if(now.before(s.getEndTime())) {
				scheduler.add(s);
			}
		}
		return scheduler;
	}
	public List<LongScheduler> getLongSchedulersOver() {					//	Read
		List<LongScheduler> list =  longSchedulerStorage.getLongSchedulers();
		List<LongScheduler> scheduler = new ArrayList<LongScheduler>();
		java.util.Date now = new java.util.Date();
		int count = 0;
		for(LongScheduler s : list) {
			if(now.after(s.getEndTime())) {
				count++;
				scheduler.add(s);
				if(count > 10) break;
			}
		}
		return scheduler;
	}
	public LongScheduler updateLongScheduler(LongScheduler longScheduler) { //	Update
		return this.longSchedulerStorage.updateLongScheduler(longScheduler);
	}
	public boolean deleteLongSchedulerById(Long id) { //	Delete
		this.longSchedulerStorage.deleteLongSchedulerById(id);
		return true;
	}
}
