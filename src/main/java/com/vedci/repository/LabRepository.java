package com.vedci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vedci.entity.LabEntity;

@Repository
public interface LabRepository extends JpaRepository<LabEntity, Long> {

}
