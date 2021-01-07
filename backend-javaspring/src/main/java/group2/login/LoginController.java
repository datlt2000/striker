package group2.login;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import group2.data.entities.Account;
import group2.data.entities.Infor;
import group2.data.patterns.AccountBuilder;
import group2.jwt.CustomUserDetail;
import group2.jwt.JwtTokenProvider;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/striker/account")

public class LoginController {
	@Autowired
	private LoginService loginService;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private JwtTokenProvider util;
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@PostMapping(value="/login")
	public ResponseEntity<?> login(@RequestBody(required = false) Map<String, String> json) throws Exception{
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(json.get("username"), json.get("password")));
			SecurityContextHolder.getContext().setAuthentication(authentication);
			String jwt = util.generateToken(authentication);
			CustomUserDetail user = (CustomUserDetail) authentication.getPrincipal();
			loginService.loginAccount();
			return ResponseEntity.ok(this.convertToDTO(jwt, user.getAcc()));
	}
	
	@PostMapping(value="/register")
	public ResponseEntity<?> register(@RequestBody RegisterDTO user) throws Exception {
		if(loginService.getAccountByEmail(user.getEmail()) != null) {
			return ResponseEntity.badRequest().body("message: email exist");
		}
		AccountBuilder builder = new AccountBuilder();
		Account account = builder.setEmail(user.getEmail())
								.setPassword(passwordEncoder.encode(user.getPassword()))
								.setBirthDay(user.getBirthDay())
								.setFirstName(user.getFirstName())
								.setLastName(user.getLastName())
								.setSex(user.getSex())
								.buildAccount();
		Account acc = loginService.createAccount(account);
		if(acc == null) return ResponseEntity.ok(false);
		return ResponseEntity.ok(true);
	}
	
	private LoginDTO convertToDTO(String jwt, Account acc) {
		Infor infor = acc.getInfomation();
		LoginDTO login = new LoginDTO();
		login.setEmail(acc.getEmail());
		login.setAccountId(acc.getId());
		login.setInforId(acc.getInfomation().getId());
		login.setBirthDay(infor.getBirthday());
		login.setSex(infor.getSex());
		login.setFirstName(infor.getFirstName());
		login.setLastName(infor.getLastName());
		login.setSchool(infor.getSchool().getSchool());
		login.setAddress(infor.getSchool().getAddress());
		login.setToken(jwt);
		return login;
	}
}