package group2.data.patterns;

import group2.data.entities.Account;
import group2.data.entities.Infor;
import group2.data.entities.School;

public class AccountSingleton {

	private static Account account;

	public static Account getAccount() {
		return account;
	}

	public static Account setAccount(Account acc) {
		account = acc;
		return acc;
	}
	public static Infor getInformation() {
		if (account == null)
			return null;
		return account.getInfomation();
	}
	public static School getSchool() {
		if (account == null)
			return null;
		return account.getInfomation().getSchool();
	}
}