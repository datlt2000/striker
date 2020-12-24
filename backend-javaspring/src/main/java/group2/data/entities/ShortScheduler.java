package group2.data.entities;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="short_scheduler")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShortScheduler {
	@Column(name="ID")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="TITLE")
	private String title;
	@Column(name="DECRIPTION")
	private String decription;
	@Column(name="LOCATION")
	private String location;
	@Column(name="OFFICE")
	private String office;
	@Column(name="START_TIME")
	private Timestamp startTime;
	@Column(name="END_TIME")
	private Timestamp endTime;
	@Column(name="PRIORITY")
	private String priority;
	@Column(name="TYPE")
	private String type;
	@Column(name="COMPLETE")
	private String Complete;
	@Column(name="REPEAT_ROLE")
	private String repeat;
	
	@ManyToOne
	@JoinColumn(name="ACCOUNT_ID", updatable = true)
	private Account account;
}
