package group2.data.patterns;

import org.springframework.security.core.context.SecurityContextHolder;

import group2.data.entities.Account;
import group2.data.entities.Infor;
import group2.data.entities.School;
import group2.jwt.CustomUserDetail;

public class AccountSingleton {

	public static Account getAccount() {
		CustomUserDetail userDetail = (CustomUserDetail)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		Account account = userDetail.getAcc();
		return account;
	}
	public static Infor getInformation() {
		Account account = getAccount();
		if (account == null)
			return null;
		return account.getInfomation();
	}
	public static School getSchool() {
		Account account = getAccount();
		if (account == null)
			return null;
		return account.getInfomation().getSchool();
	}
}