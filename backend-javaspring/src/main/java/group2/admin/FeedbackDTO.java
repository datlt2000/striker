package group2.admin;

import lombok.Data;

@Data
public class FeedbackDTO {
	private Long id;
	private Long accountID;
	private String email;
	private String feedback;
}
