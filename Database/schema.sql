-- DROP DATABASE IF EXISTS carousel;

-- CREATE DATABASE carousel;

-- USE carousel;

DROP TABLE IF EXISTS productInfo;

CREATE TABLE IF NOT EXISTS productInfo (
    id SERIAL,
    title VARCHAR(100) NOT NULL,
    photo_url VARCHAR(200) NOT NULL,
    price MONEY NOT NULL
);


-- CREATE UNIQUE INDEX "productInfo_pkey" ON "productInfo"(id int4_ops);
-- CREATE UNIQUE INDEX "productInfo_sku_key" ON "productInfo"(sku int4_ops);

-- INSERT INTO productInfo (title, photo_url, price) VALUES ('This worked', 'hello.world.dom', 87.88);