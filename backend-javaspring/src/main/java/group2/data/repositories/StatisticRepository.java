package group2.data.repositories;

import java.sql.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import group2.data.entities.Statistic;
@Repository
public interface StatisticRepository extends JpaRepository<Statistic, Long>{
	public Statistic findById(long id);
	public Statistic findByDate(Date date);
}
