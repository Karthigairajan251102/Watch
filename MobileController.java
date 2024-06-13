package com.Mobile.Controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.Mobile.Entity.MobileEntity;
import com.Mobile.Repository.MobileRepository;




@RestController
@RequestMapping("/product")

public class MobileController {
	
	@Autowired
	MobileRepository mobileRepo;
	
	@PostMapping("/insert")
	public ResponseEntity<?> card(@RequestBody MobileEntity watch)
	{
		MobileEntity w = mobileRepo.save(watch);
				return ResponseEntity.status(HttpStatus.OK)
						.body(w);
		
	}
	@GetMapping("/all")
	  public @ResponseBody Iterable<MobileEntity> getAllUsers() {
	    	    return mobileRepo.findAll();
	  }
	
}