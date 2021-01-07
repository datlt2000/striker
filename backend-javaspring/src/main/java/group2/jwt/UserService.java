package group2.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import group2.data.entities.Account;
import group2.data.repositories.AccountRepository;

@Service
public class UserService implements UserDetailsService{
	@Autowired
	private AccountRepository accRep;
	
	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) {
		Account acc = accRep.findByEmail(username);
		if (acc == null) {
            throw new UsernameNotFoundException(username);
        }
        return new CustomUserDetail(acc);
	}
}
