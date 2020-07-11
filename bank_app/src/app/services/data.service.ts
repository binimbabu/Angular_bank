import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = "http://localhost:9000/";
const options = {
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails = {
    hsnAc1001: { name: "User1", mpin: 1001, balance: 10000, history:[] },
    hsnAc1002: { name: "User2", mpin: 1002, balance: 20000, history:[] },
    hsnAc1003: { name: "User3", mpin: 1003, balance: 15000, history:[] },
    hsnAc1004: { name: "User4", mpin: 1004, balance: 35000, history:[] },
    hsnAc1005: { name: "User5", mpin: 1005, balance: 12000, history:[] }
  }
  loggedInUser = null;
  accno = null;
  
  constructor(private http:HttpClient) {
    const accountDetails = localStorage.getItem('accountDetails');
    const data = JSON.parse(accountDetails);
    
    if(data){
      this.accountDetails = data;
    }
    const loggedInUser = localStorage.getItem('loggedInUser');
    const loggedInUserData = JSON.parse(loggedInUser);
    if(loggedInUserData){
      this.loggedInUser = loggedInUserData;
    }
    this.accno = localStorage.getItem('accno');
  }

  showSuccess(){
    alert("Success from service")
  }

  getAccountDetails(){
    return this.http.get(`${baseUrl}profile`, options);
  }

  saveAccountDetails(accountDetails){
    return this.http.put(`${baseUrl}profile`, accountDetails, options);
  }

  saveHistory(id, newHistory){
    return this.http.put(`${baseUrl}edit-history/${id}`, newHistory, options);
  }

  getHistory(){
    return this.http.get(`${baseUrl}history`, options);
  }

  register(data){
    const postData={
      firstName: data.firstName,
      lastName: data.lastName,
      balance: 0,
      accno: data.accno,
      mpin: data.mpin,
    };
    return this.http.post(`${baseUrl}register`, postData);
  }
  login(accno, mpin){
    const postData = {
      accno,
      mpin
    };
    return this.http.post(`${baseUrl}login`, postData,options);
  }

  saveUserData(){
    localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
    localStorage.setItem('accountDetails', JSON.stringify(this.accountDetails));
  }

  logout(){
    return this.http.post(`${baseUrl}logout`,{},options);
  }

  deposit(amount, mpin){
    return this.http.post(`${baseUrl}deposit`,{
      amount, mpin
    },options);
  }

  withdraw(amount, mpin){
    return this.http.post(`${baseUrl}withdraw`,{
      amount, mpin
    },options);
  }

  getBalance(){
    return this.http.get(`${baseUrl}balance`,options);
  }
}