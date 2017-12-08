package com.vedci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vedci.entity.UserPermissionEntity;

@Repository
public interface UserPermissionRepository extends JpaRepository<UserPermissionEntity, Long> {

}
