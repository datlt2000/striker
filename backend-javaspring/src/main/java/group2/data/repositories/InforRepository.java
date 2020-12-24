package group2.data.repositories;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import group2.data.entities.Infor;

@Repository
public interface InforRepository extends JpaRepository<Infor, Long>{
	public Infor findById(long id);
	public List<Infor> findBySex(String sex);
	public List<Infor> findByBirthday(Date birthday);
}
