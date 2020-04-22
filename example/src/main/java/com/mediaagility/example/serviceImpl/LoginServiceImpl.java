package com.mediaagility.example.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mediaagility.example.dao.IUserDao;
import com.mediaagility.example.model.User;
import com.mediaagility.example.model.UserDetail;
import com.mediaagility.example.service.ILoginService;

@Service
public class LoginServiceImpl implements ILoginService{


	@Autowired
	private IUserDao uerDaoImpl;
	@Override
	public Boolean ValidateUser(User user) {
		//  put logger here 
		System.out.println("going to fetch user detail");
		User result= this.uerDaoImpl.getUserDetail(user.getName());
		if(user.getName().equals("admin") && user.getPassword().equals("admin")){
			System.out.println("valid User... ");
			return true;
		}
		System.out.println("invalid User... ");
		return false;
	}
	
	@Override
	public List<UserDetail> getUserList() {
		List<UserDetail> list = new ArrayList<UserDetail>();
		UserDetail u1= new UserDetail("Anuj","Kanpur","988921712");
		UserDetail u2= new UserDetail("Asun","Noida","11100010");
		UserDetail u3= new UserDetail("Vardaan","Delhi","42524511");
		UserDetail u4= new UserDetail("Sweta","Gurgaon","452454325");
		list.add(u4);
		list.add(u2);
		list.add(u3);
		list.add(u1);
		return list;
	}

}
