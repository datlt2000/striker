package group2.admin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StatisticDTO {
	private long login = 0;
	private long register = 0;
	private long newLongScheduler = 0;
	private long newShortScheduler = 0;
}
