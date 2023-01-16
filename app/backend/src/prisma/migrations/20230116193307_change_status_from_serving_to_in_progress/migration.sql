/*
  Warnings:

  - The values [SERVING] on the enum `waiting_line_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `waiting_line` MODIFY `status` ENUM('WAITING', 'IN_PROGRESS', 'FINISHED', 'ABSENT') NOT NULL DEFAULT 'WAITING';
