CREATE TABLE `myApp`.`books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `isbn13` VARCHAR(45) NOT NULL,
  `publisher` VARCHAR(45) NOT NULL,
  `publisherDate` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NULL,
  `available` INT(10) NOT NULL,
  `price` INT(10) NOT NULL,
  `subject` INT(10) NOT NULL,
  `shipping` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`, `name`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC),
  UNIQUE INDEX `isbn13_UNIQUE` (`isbn13` ASC),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
COMMENT = 'Books table for API calls';
