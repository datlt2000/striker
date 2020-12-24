package group2.data.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import group2.data.entities.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long>{
	public Account findById(long id);
	public Account findByEmail(String email);
}
