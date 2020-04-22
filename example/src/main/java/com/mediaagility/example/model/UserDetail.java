package com.mediaagility.example.model;

public class UserDetail {

	private String name;
	private String address;
	private String phone;
	
	
	public UserDetail(String name, String address, String phone) {
		super();
		this.name = name;
		this.address = address;
		this.phone = phone;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	@Override
	public String toString() {
		return "UserDetail [name=" + name + ", address=" + address + ", phone=" + phone + "]";
	}
	
	
	
	
	



}
