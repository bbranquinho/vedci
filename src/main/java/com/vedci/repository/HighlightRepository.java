package com.vedci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vedci.entity.HighlightEntity;

@Repository
public interface HighlightRepository extends JpaRepository<HighlightEntity, Long> {

}
