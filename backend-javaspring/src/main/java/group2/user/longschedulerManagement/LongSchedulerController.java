package group2.user.longschedulerManagement;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import group2.data.entities.LongScheduler;

@RestController
@RequestMapping(value="/striker/api/long-scheduler")
public class LongSchedulerController {
	
	@Autowired
	private LongSchedulerService longSchService;
	
	@ResponseBody
	@PostMapping(value="/insert")
	public String insertLongScheduler(@RequestBody(required = true) LongSchedulerDTO dto) {
		LongScheduler longScheduler = this.convertToLongScheduler(dto);
		LongScheduler result = longSchService.insertLongScheduler(longScheduler);
		if(result == null) return "false";
		return "true";
	}
	@ResponseBody
	@PostMapping(value="/get-upcoming")
	public List<LongSchedulerDTO> getLongSchedulersUpcoming() {
		List<LongSchedulerDTO> dto = new ArrayList<LongSchedulerDTO>();
		List<LongScheduler> schedulers = longSchService.getLongSchedulersUpcoming();
		if(schedulers == null) return null;
		for(LongScheduler scheduler : schedulers) {
			dto.add(this.convertToLongSchedulerDTO(scheduler, "blue"));
		}
		return dto;
	}
	@ResponseBody
	@PostMapping(value="/get-over")
	public List<LongSchedulerDTO> getLongSchedulersOver() {
		List<LongSchedulerDTO> dto = new ArrayList<LongSchedulerDTO>();
		List<LongScheduler> schedulers = longSchService.getLongSchedulersOver();
		if(schedulers == null) return null;
		for(LongScheduler scheduler : schedulers) {
			dto.add(this.convertToLongSchedulerDTO(scheduler, "red"));
		}
		return dto;
	}
	@ResponseBody
	@PostMapping(value="/update")
	public String updateLongScheduler(@RequestBody(required = true) LongSchedulerDTO dto) {
		LongScheduler longScheduler = this.convertToLongScheduler(dto);
		LongScheduler oldScheduler = longSchService.updateLongScheduler(longScheduler);
		if(oldScheduler == null) return "false";
		return "true";
	}
	@ResponseBody
	@PostMapping(value="/delete")
	public String deleteLongScheduler(@RequestBody(required = true) Map<String, Long> json) {
		Long id = json.get("id");
		longSchService.deleteLongSchedulerById(id);
		return "true";
	}
	
	private LongScheduler convertToLongScheduler(LongSchedulerDTO dto) {
		LongScheduler scheduler = new LongScheduler();
		scheduler.setTitle(dto.getTitle());
		scheduler.setDecription(dto.getDescription());
		scheduler.setId(dto.getId());
		scheduler.setOffice(dto.getOffice());
		scheduler.setType(dto.getType());
		scheduler.setPriority(dto.getPriority());
		scheduler.setStartTime(Date.valueOf(dto.getStartTime()));
		scheduler.setEndTime(Date.valueOf(dto.getEndTime()));
		scheduler.setComplete(dto.getComplete());
		return scheduler;
	}
	private LongSchedulerDTO convertToLongSchedulerDTO(LongScheduler scheduler, String color) {
		LongSchedulerDTO dto = new LongSchedulerDTO();
		dto.setTitle(scheduler.getTitle());
		dto.setDescription(scheduler.getDecription());
		dto.setAccountId(scheduler.getAccount().getId());
		dto.setId(scheduler.getId());
		dto.setPriority(scheduler.getPriority());
		dto.setType(scheduler.getType());
		dto.setOffice(scheduler.getOffice());
		dto.setStartTime(scheduler.getStartTime().toString());
		dto.setEndTime(scheduler.getEndTime().toString());
		dto.setColor(color);
		dto.setComplete(scheduler.getComplete());
		return dto;
	}
}
