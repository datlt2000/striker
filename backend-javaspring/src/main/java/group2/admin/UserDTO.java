package group2.admin;

import lombok.Data;

@Data
public class UserDTO {
	private long id;
	private String email;
	private String firstName;
	private String lastName;
	private String sex;
}
