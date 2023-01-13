-- AlterTable
ALTER TABLE `waiting_line` MODIFY `initial_service_time` DATETIME(3) NULL,
    MODIFY `finished_service_time` DATETIME(3) NULL;
