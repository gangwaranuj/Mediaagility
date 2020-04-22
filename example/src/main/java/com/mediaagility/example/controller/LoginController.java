package com.mediaagility.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mediaagility.example.model.User;
import com.mediaagility.example.model.UserDetail;
import com.mediaagility.example.service.ILoginService;

@RestController
@RequestMapping(value = "/user")
@CrossOrigin(origins = "*")
public class LoginController {

	@Autowired
	private ILoginService loginServiceImpl;


	@RequestMapping(value = "/login", method = RequestMethod.POST, headers = "Accept=application/json")
	public Boolean login(@RequestBody User user){
		return this.loginServiceImpl.ValidateUser(user);
	}

	@RequestMapping(value = "/get-user-list", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<UserDetail> getUserList(){
		return this.loginServiceImpl.getUserList();
	}



}
