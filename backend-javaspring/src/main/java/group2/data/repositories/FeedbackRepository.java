package group2.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import group2.data.entities.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long>{
	public Feedback findById(long id);
	public Feedback findByEmail(String email);
	public Feedback findByAccountID(Long accountID);
}
