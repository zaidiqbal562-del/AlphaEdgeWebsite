-- Migration for admissions_applications.
-- Safe to run on both a new database and an existing database.

CREATE TABLE IF NOT EXISTS admissions_applications (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(254) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  city VARCHAR(100) NOT NULL,
  qualification VARCHAR(150) NOT NULL,
  programme VARCHAR(80) NOT NULL,
  resume_url VARCHAR(1000) NULL,
  resume_filename VARCHAR(255) NULL,
  resume_mime_type VARCHAR(100) NULL,
  resume_data MEDIUMBLOB NULL,
  consent_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX admissions_applications_created_at_idx (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DELIMITER $$

DROP PROCEDURE IF EXISTS migrate_admissions_columns$$
CREATE PROCEDURE migrate_admissions_columns()
BEGIN
  DECLARE column_count INT;

  SELECT COUNT(*) INTO column_count
  FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'admissions_applications'
    AND COLUMN_NAME = 'resume_url';
  IF column_count = 0 THEN
    ALTER TABLE admissions_applications ADD COLUMN resume_url VARCHAR(1000) NULL;
  END IF;

  SELECT COUNT(*) INTO column_count
  FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'admissions_applications'
    AND COLUMN_NAME = 'resume_filename';
  IF column_count = 0 THEN
    ALTER TABLE admissions_applications ADD COLUMN resume_filename VARCHAR(255) NULL;
  END IF;

  SELECT COUNT(*) INTO column_count
  FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'admissions_applications'
    AND COLUMN_NAME = 'resume_mime_type';
  IF column_count = 0 THEN
    ALTER TABLE admissions_applications ADD COLUMN resume_mime_type VARCHAR(100) NULL;
  END IF;

  SELECT COUNT(*) INTO column_count
  FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'admissions_applications'
    AND COLUMN_NAME = 'resume_data';
  IF column_count = 0 THEN
    ALTER TABLE admissions_applications ADD COLUMN resume_data MEDIUMBLOB NULL;
  END IF;

  SELECT COUNT(*) INTO column_count
  FROM information_schema.COLUMNS
  WHERE TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'admissions_applications'
    AND COLUMN_NAME = 'consent_at';
  IF column_count = 0 THEN
    ALTER TABLE admissions_applications
      ADD COLUMN consent_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;
  END IF;
END$$

DELIMITER ;

CALL migrate_admissions_columns();
DROP PROCEDURE migrate_admissions_columns;
