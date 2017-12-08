package com.vedci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vedci.entity.UserStatusEntity;

@Repository
public interface UserStatusRepository extends JpaRepository<UserStatusEntity, Long> {

}
