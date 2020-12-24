package group2.data.repositories;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import group2.data.entities.ShortScheduler;

@Repository
public interface ShortSchedulerRepository extends JpaRepository<ShortScheduler, Long>{
	public ShortScheduler findById(long id);
	public List<ShortScheduler> findByTitle(String title);
	public List<ShortScheduler> findByOffice(String office);
	public List<ShortScheduler> findByStartTime(Date startTime);
	public List<ShortScheduler> findByEndTime(Date endTime);
	@Query(value = "select * from short_scheduler where ACCOUNT_ID = ?1", nativeQuery = true)
	public List<ShortScheduler> findByAccountID(Long id);
	public void deleteById(long id);
}
