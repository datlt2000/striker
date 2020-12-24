package group2.user.informationManagement;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InformationDTO {
	private Long accountId;
	private Long inforId;
	private String firstName;
	private String lastName;
	private String sex;
	private Date birthDay;
	
}
