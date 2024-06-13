package com.Mobile.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Mobile.Entity.MobileEntity;

public interface MobileRepository extends JpaRepository<MobileEntity,Integer> {

}