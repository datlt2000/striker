package group2.data.patterns;

import java.sql.Date;

import group2.data.entities.Account;
import group2.data.entities.Infor;
import lombok.Getter;

@Getter
public class AccountBuilder {
	private String email;
	private String password;
	private String firstName;
	private Date birthDay;
	private String lastName;
	private String sex;

	public AccountBuilder setEmail(String email) {
		this.email = email;
		return this;
	}
	public AccountBuilder setBirthDay(String birthDay) {
		this.birthDay = Date.valueOf(birthDay);
		return this;
	}
	public AccountBuilder setPassword(String password) {
		this.password = password;
		return this;
	}

	public AccountBuilder setFirstName(String firstName) {
		this.firstName = firstName;
		return this;
	}

	public AccountBuilder setLastName(String lastName) {
		this.lastName = lastName;
		return this;
	}

	public AccountBuilder setSex(String sex) {
		this.sex = sex;
		return this;
	}

	public Account buildAccount() {
		Infor infor = new Infor();
		infor.setFirstName(this.firstName);
		infor.setLastName(this.lastName);
		infor.setSex(this.sex);
		infor.setBirthday(this.birthDay);
		Account acc = new Account();
		acc.setEmail(this.email);
		acc.setPassword(this.password);
		acc.setAuthority("USER");
		acc.setInfomation(infor);
		return acc;
	}
}
