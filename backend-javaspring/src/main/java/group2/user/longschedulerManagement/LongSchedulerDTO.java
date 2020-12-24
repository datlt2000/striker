package group2.user.longschedulerManagement;

import lombok.Data;

@Data
public class LongSchedulerDTO {
	private Long id;
	private Long accountId;
	private String title;
	private String type;
	private String description;
	private String priority;
	private String office;
	private String startTime;
	private String endTime;
	private String color;
	private String complete;
}
