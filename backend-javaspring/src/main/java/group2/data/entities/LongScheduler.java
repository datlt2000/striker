package group2.data.entities;

import java.sql.Date;

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
@Table(name="long_scheduler")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LongScheduler {
	@Column(name="ID")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="TITLE")
	private String title;
	@Column(name="DECRIPTION")
	private String decription;
	@Column(name="OFFICE")
	private String office;
	@Column(name="START_TIME")
	private Date startTime;
	@Column(name="END_TIME")
	private Date endTime;
	@Column(name="PRIORITY")
	private String priority;
	@Column(name="TYPE")
	private String type;
	@Column(name="COMPLETE")
	private String complete;
	
	@ManyToOne
	@JoinColumn(name="ACCOUNT_ID", nullable = false, updatable = true)
	private Account account;
}
