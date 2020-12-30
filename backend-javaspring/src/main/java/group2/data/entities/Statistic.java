package group2.data.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="statistic")
public class Statistic {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="DATE")
	private Date date;
	@Column(name="REGISTER")
	private Long register;
	@Column(name="LOGIN")
	private Long login;
	@Column(name="NEW_LONG_SCHEDULER")
	private Long newLongScheduler;
	@Column(name="NEW_SHORT_SCHEDULER")
	private Long newShortScheduler;
}
