package group2.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import group2.data.entities.Account;
import group2.data.entities.Feedback;

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
}
