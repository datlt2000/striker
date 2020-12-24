package group2.user.shortschedulerManagement;

import lombok.Data;

@Data
public class ShortSchedulerDTO {
	private Long id;
	private Long accountId;
	private String title;
	private String type;
	private String description;
	private String priority;
	private String office;
	private String startTime;
	private String endTime;
	private String location;
	private String repeat;
	private String color;
	private String complete;
}
