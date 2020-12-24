package group2.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import group2.data.entities.School;

@Repository
public interface SchoolRepository extends JpaRepository<School, Long>{
	public School findBySchool(String name);
	public School findById(long id);
	public School findByAddress(String address);
}
