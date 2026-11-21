ALTER TABLE admissions_applications
  ADD COLUMN resume_filename VARCHAR(255) NULL,
  ADD COLUMN resume_mime_type VARCHAR(100) NULL,
  ADD COLUMN resume_data MEDIUMBLOB NULL;
