package group2.user.informationManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import group2.data.entities.Account;
import group2.data.entities.Infor;
import group2.data.entities.School;
import group2.data.patterns.AccountSingleton;

@Service
public class InformationService {
	@Autowired
	private InformationStorage inforStorage;
	
	public Account updatePassword(String password) { //	Update
		Account account = AccountSingleton.getAccount();
		account.setPassword(password);
		return inforStorage.updateAccount(account);
	}
	public Infor updateInformation(Infor infor) {
		return inforStorage.updateInfor(infor);
	}
	public School updateSchool(School school) {
		return inforStorage.updateSchool(school);
	}
	public Account getAccount(Long id) {
		return inforStorage.getAccount(id);
	}
	public boolean saveFeedback(String feed) {
		inforStorage.saveFeedback(feed);
		return true;
	}
}
