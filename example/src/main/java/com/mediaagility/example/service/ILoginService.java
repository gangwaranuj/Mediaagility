package com.mediaagility.example.service;

import java.util.List;

import com.mediaagility.example.model.User;
import com.mediaagility.example.model.UserDetail;

public interface ILoginService {

	public Boolean ValidateUser(User users);
	public List<UserDetail> getUserList();
	
}
