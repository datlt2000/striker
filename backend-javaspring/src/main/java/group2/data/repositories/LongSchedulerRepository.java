package group2.data.repositories;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import group2.data.entities.LongScheduler;

@Repository
public interface LongSchedulerRepository extends JpaRepository<LongScheduler, Long>{
	public LongScheduler findById(long id);
	public List<LongScheduler> findByTitle(String title);
	public List<LongScheduler> findByOffice(String office);
	public List<LongScheduler> findByStartTime(Date startTime);
	public List<LongScheduler> findByEndTime(Date endTime);
	@Query(value = "select * from long_scheduler where ACCOUNT_ID = ?1", nativeQuery = true)
	public List<LongScheduler> findByAccountID(Long id);
	public void deleteById(long id);
}
