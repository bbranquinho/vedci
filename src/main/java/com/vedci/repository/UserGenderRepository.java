package com.vedci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vedci.entity.UserGenderEntity;

@Repository
public interface UserGenderRepository extends JpaRepository<UserGenderEntity, Long> {

}
