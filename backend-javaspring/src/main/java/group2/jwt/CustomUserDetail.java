package group2.jwt;

import group2.data.entities.Account;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Data
@AllArgsConstructor
public class CustomUserDetail implements UserDetails{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Account acc;
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return Collections.singleton(new SimpleGrantedAuthority(acc.getAuthority()));
	}
	@Override
	public String getPassword() {
		return acc.getPassword();
	}
	@Override
	public String getUsername() {
		return acc.getEmail();
	}
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}
