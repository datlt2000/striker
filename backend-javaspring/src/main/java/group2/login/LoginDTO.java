package group2.login;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Data Transfer Object that will send data to front end
 * @author super
 *
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginDTO {
	private Long accountId;
	private Long inforId;
	private String email;
	private String firstName;
	private String lastName;
	private String sex;
	private Date birthDay;
	private String school;
	private String address;
	private String token;
	private String type = "Bearer";
}
