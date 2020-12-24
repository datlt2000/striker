package group2.user.informationManagement;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import group2.data.entities.Account;
import group2.data.entities.Infor;
import group2.data.entities.School;
import group2.login.LoginDTO;

@RestController
@RequestMapping(value="/striker/api/infor")
public class InformationController {
	@Autowired
	private InformationService inforService;
	
	@PostMapping(value="/update-infor")
	@ResponseBody
	public String updateInformation(@RequestBody(required = true) InformationDTO inforDTO) {
		Infor infor = this.convertToInfor(inforDTO);
		Infor result = inforService.updateInformation(infor);
		if(result == null) return "false";
		return "true";
	}
	@PostMapping(value="/update-school")
	@ResponseBody
	public String updateSchool(@RequestBody(required = true) SchoolDTO dto) {
		School school = this.convertToSchool(dto);
		School result = inforService.updateSchool(school);
		if(result == null) return "false";
		return "true";
	}
	@PostMapping(value="/update-password")
	@ResponseBody
	public String updatePassword(@RequestBody(required = true) Map<String, String> input) {
		String password = input.get("password");
		Account result = inforService.updatePassword(password);
		if(result == null) return "false";
		return "true";
	}
	@PostMapping(value="get-infor")
	@ResponseBody
	public LoginDTO getInfor(@RequestBody(required = true) Map<String, Long> input) {
		Long id = input.get("id");
		Account acc = inforService.getAccount(id);
		LoginDTO dto = this.convertToInforDTO(acc);
		return dto;
	}
	@PostMapping(value="feedback")
	@ResponseBody
	public String sendFeedback(@RequestBody Map<String, String> input) {
		String feedback = input.get("feedback");
		inforService.saveFeedback(feedback);
		return "true";
	}
	private Infor convertToInfor(InformationDTO inforDTO) {
		Infor infor = new Infor();
		infor.setId(inforDTO.getInforId());
		infor.setFirstName(inforDTO.getFirstName());
		infor.setLastName(inforDTO.getLastName());
		infor.setSex(inforDTO.getSex());
		infor.setBirthday(inforDTO.getBirthDay());
		return infor;
	}
	private School convertToSchool(SchoolDTO dto) {
		School school = new School();
		school.setSchool(dto.getSchool());
		school.setAddress(dto.getAddress());
		return school;
	}
	private LoginDTO convertToInforDTO(Account acc) {
		Infor infor = acc.getInfomation();
		LoginDTO login = new LoginDTO();
		login.setEmail(acc.getEmail());
		login.setAccountId(acc.getId());
		login.setInforId(acc.getInfomation().getId());
		login.setBirthDay(infor.getBirthday());
		login.setSex(infor.getSex());
		login.setFirstName(infor.getFirstName());
		login.setLastName(infor.getLastName());
		login.setSchool(infor.getSchool().getSchool());
		login.setAddress(infor.getSchool().getAddress());
		return login;
	}
}
