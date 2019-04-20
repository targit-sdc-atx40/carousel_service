-- DROP DATABASE IF EXISTS carousel;

-- CREATE DATABASE carousel;

-- USE carousel;

DROP TABLE IF EXISTS carouselproducts;

CREATE TABLE IF NOT EXISTS carouselproducts (
    _id SERIAL,
    title VARCHAR(100) NOT NULL,
    photo_url VARCHAR(45) NOT NULL,
    price float(2) NOT NULL
);


-- CREATE UNIQUE INDEX "productInfo_pkey" ON "productInfo"(id int4_ops);
-- CREATE UNIQUE INDEX "productInfo_sku_key" ON "productInfo"(sku int4_ops);

COPY carouselproducts FROM '/Users/nicholasmiron/myProjects/hratx/SDC/carousel_service/Database/lotsOfData.csv' WITH(FORMAT CSV, DELIMITER ',');

CREATE INDEX productid ON carouselproducts(_id);