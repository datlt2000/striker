package group2.jwt;

import java.util.Date;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtTokenProvider {
	private final String JWT_SECRET = "ilovefifa";
	// time to live
	private final long JWT_EXPIRATION = 604800000L;
	
	// create token from account
	public String generateToken(Authentication authentication) {
		CustomUserDetail userDetail = (CustomUserDetail) authentication.getPrincipal();
		Date now = new Date();
		Date expirationDate = new Date(now.getTime() + JWT_EXPIRATION);
		//create token from id
		return Jwts.builder()
					.setSubject(userDetail.getAcc().getEmail())
					.setIssuedAt(now)
					.setExpiration(expirationDate)
					.signWith(SignatureAlgorithm.HS512, JWT_SECRET)
					.compact();
	}
	
	// Get account from token
	public String getEmailFromJWT(String token) {
		Claims claims = Jwts.parser()
							.setSigningKey(JWT_SECRET)
							.parseClaimsJws(token)
							.getBody();
		return claims.getSubject();
	}
	
	public boolean validateToken(String authToken) {
		try {
			Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(authToken);
			return true;
		} catch (MalformedJwtException ex) {
			log.error("Invalid JWT token");
		} catch (ExpiredJwtException ex) {
			log.error("Expired JWT token");
		} catch (UnsupportedJwtException ex) {
			log.error("Unsupported JWT token");
		} catch (IllegalArgumentException ex) {
			log.error("JWT claims string is empty.");
		}
		return false;
	}
}
