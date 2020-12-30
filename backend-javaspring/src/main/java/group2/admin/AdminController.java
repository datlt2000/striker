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

import group2.data.entities.Account;
import group2.data.entities.Feedback;
import group2.data.entities.Statistic;

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
	@PostMapping(value="get-statistic")
	@ResponseBody
	public StatisticDTO getStatistic() {
		StatisticDTO dto;
		Statistic s = this.adminService.getStatistic();
		if (s == null) return new StatisticDTO(0, 0, 0, 0);
		dto = this.convertStatisticDTO(s);
		return dto;
	}
	@PostMapping(value="search")
	@ResponseBody
	public UserDTO searchUser(@RequestBody Map<String, String> json) {
		String email = json.get("email");
		Account acc = adminService.findAccountByEmail(email);
		if (acc==null) return null;
		UserDTO dto = new UserDTO();
		dto.setId(acc.getId());
		dto.setEmail(acc.getEmail());
		dto.setFirstName(acc.getInfomation().getFirstName());
		dto.setLastName(acc.getInfomation().getLastName());
		dto.setSex(acc.getInfomation().getSex());
		return dto;
	}
	private FeedbackDTO convertFeedback(Feedback feed) {
		FeedbackDTO dto = new FeedbackDTO();
		dto.setId(feed.getId());
		dto.setEmail(feed.getEmail());
		dto.setAccountID(feed.getAccountID());
		dto.setFeedback(feed.getFeedback());
		return dto;
	}
	private StatisticDTO convertStatisticDTO(Statistic s) {
		StatisticDTO dto = new StatisticDTO();
		dto.setLogin(s.getLogin());
		dto.setRegister(s.getRegister());
		dto.setNewLongScheduler(s.getNewLongScheduler());
		dto.setNewShortScheduler(s.getNewShortScheduler());
		return dto;
	}
}
