package com.vedci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vedci.entity.LabStatusEntity;

@Repository
public interface LabStatusRepository extends JpaRepository<LabStatusEntity, Long> {

}
