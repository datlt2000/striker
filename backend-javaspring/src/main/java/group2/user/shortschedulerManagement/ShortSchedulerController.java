package group2.user.shortschedulerManagement;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import group2.data.entities.ShortScheduler;

@RestController
@RequestMapping(value="/striker/api/short-scheduler")
public class ShortSchedulerController {
	
	@Autowired
	private ShortSchedulerService shortSchService;
	
	@ResponseBody
	@PostMapping(value="/insert")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public String insertShortScheduler(@RequestBody(required = true) ShortSchedulerDTO dto) {
		ShortScheduler shortScheduler = this.convertToShortScheduler(dto);
		ShortScheduler result = shortSchService.insertShortScheduler(shortScheduler);
		if(result == null) return "false";
		return "true";
	}
	@ResponseBody
	@PostMapping(value="/get-upcoming")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public List<ShortSchedulerDTO> getShortSchedulersUpcoming() {
		List<ShortSchedulerDTO> dto = new ArrayList<ShortSchedulerDTO>();
		List<ShortScheduler> schedulers = shortSchService.getShortSchedulersUpcoming();
		if(schedulers == null) return null;
		for(ShortScheduler scheduler : schedulers) {
			dto.add(this.convertToShortSchedulerDTO(scheduler, "green"));
		}
		return dto;
	}
	@ResponseBody
	@PostMapping(value="/get-over")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public List<ShortSchedulerDTO> getShortSchedulersOver() {
		List<ShortSchedulerDTO> dto = new ArrayList<ShortSchedulerDTO>();
		List<ShortScheduler> schedulers = shortSchService.getShortSchedulersOver();
		if(schedulers == null) return null;
		for(ShortScheduler scheduler : schedulers) {
			dto.add(this.convertToShortSchedulerDTO(scheduler, "red"));
		}
		return dto;
	}
	@ResponseBody
	@PostMapping(value="/update")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public String updateLongScheduler(@RequestBody(required = true) ShortSchedulerDTO dto) {
		ShortScheduler shortScheduler = this.convertToShortScheduler(dto);
		ShortScheduler oldScheduler = shortSchService.updateShortScheduler(shortScheduler);
		if(oldScheduler == null) return "false";
		return "true";
	}
	@ResponseBody
	@PostMapping(value="/delete")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public String deleteShortScheduler(@RequestBody(required = true) Map<String, Long> json) {
		Long id = json.get("id");
		if(shortSchService.deleteShortSchedulerById(id)) return "true";
		return "false";
	}
	private ShortScheduler convertToShortScheduler(ShortSchedulerDTO dto) {
		ShortScheduler scheduler = new ShortScheduler();
		scheduler.setTitle(dto.getTitle());
		scheduler.setDecription(dto.getDescription());
		scheduler.setId(dto.getId());
		scheduler.setOffice(dto.getOffice());
		scheduler.setType(dto.getType());
		scheduler.setPriority(dto.getPriority());
		try {
			scheduler.setStartTime(Timestamp.valueOf(dto.getStartTime().substring(0, 16) + ":00"));
			scheduler.setEndTime(Timestamp.valueOf(dto.getEndTime().substring(0, 16) + ":00"));
		}catch(Exception e) {
			System.out.println("cannot convert time");
			System.out.println(dto.getStartTime());
			System.out.println(dto.getEndTime());
			return null;
		}
		scheduler.setRepeat(dto.getRepeat());
		scheduler.setComplete(dto.getComplete());
		return scheduler;
	}
	private ShortSchedulerDTO convertToShortSchedulerDTO(ShortScheduler scheduler, String color) {
		ShortSchedulerDTO dto = new ShortSchedulerDTO();
		dto.setTitle(scheduler.getTitle());
		dto.setDescription(scheduler.getDecription());
		dto.setAccountId(scheduler.getAccount().getId());
		dto.setId(scheduler.getId());
		dto.setPriority(scheduler.getPriority());
		dto.setType(scheduler.getType());
		dto.setOffice(scheduler.getOffice());
		dto.setStartTime(scheduler.getStartTime().toString().substring(0, 16));
		dto.setLocation(scheduler.getLocation());
		dto.setEndTime(scheduler.getEndTime().toString().substring(0, 16));
		dto.setRepeat(scheduler.getRepeat());
		dto.setComplete(scheduler.getComplete());
		dto.setColor(color);
		return dto;
	}
}
