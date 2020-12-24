package group2.admin;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import group2.data.entities.Feedback;

@RestController
@RequestMapping(value="/striker/api/admin")
public class AdminController {
	@Autowired
	private AdminService adminService;
	
	@PostMapping(value="get-feedback")
	@ResponseBody
	public List<FeedbackDTO> getFeedback() {
		List<Feedback> list = adminService.getFeedback();
		List<FeedbackDTO> listDTO = new ArrayList<FeedbackDTO>();
		int n = 10;
		n = n>list.size() ? list.size() : n;
		for(int i = 0; i < n; ++i) {
			listDTO.add(this.convertFeedback(list.get(i)));
		}
		return listDTO;
	}
	@PostMapping(value="delete-user")
	@ResponseBody
	public String deleteUser(@RequestBody Map<String, Long> input) {
		Long id = input.get("id");
		adminService.deleteAccountById(id);
		return "true";
	}
	private FeedbackDTO convertFeedback(Feedback feed) {
		FeedbackDTO dto = new FeedbackDTO();
		dto.setId(feed.getId());
		dto.setEmail(feed.getEmail());
		dto.setAccountID(feed.getAccountID());
		dto.setFeedback(feed.getFeedback());
		return dto;
	}
}
