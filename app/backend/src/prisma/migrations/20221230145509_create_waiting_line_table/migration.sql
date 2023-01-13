-- CreateTable
CREATE TABLE `waiting_line` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `initial_service` DATETIME(3) NULL,
    `finish_service` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
