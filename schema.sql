DROP DATABASE IF EXISTS carousel;
CREATE DATABASE carousel;
USE carousel;


CREATE TABLE imageCarousel
(
  id INT NOT NULL
  AUTO_INCREMENT,
  Houses VARCHAR
  (100),
  soldDate VARCHAR
  (20),
  price INT NOT NULL,
  location1 VARCHAR
  (20),
  city VARCHAR
  (20),
  states VARCHAR
  (20),
  zipCode INT NOT NULL,
  beds INT NOT NULL,
  baths INT NOT NULL,
  area INT NOT NULL,

  PRIMARY KEY
  (id)
  );


  INSERT INTO imageCarousel
    (Houses,soldDate, price, location1, city, states, zipCode, beds,baths, area )
  VALUES('https://carousel9841.s3-us-west-1.amazonaws.com/genMid.21914721_0.jpg', "Dec 13, 2018", 895000, "1460 ABC Street", "El Cerrito", "CA", 94637, 2, 2, 1542);

  INSERT INTO imageCarousel
    (Houses,soldDate, price, location1, city, states, zipCode, beds,baths, area )
  VALUES('https://carousel9841.s3-us-west-1.amazonaws.com/genMid.40886087_C.jpg', 'Jan 14, 2019', 999123, "432 Laughing Street", "El Cerrito", "CA", 94637, 3, 2, 1758 );

  INSERT INTO imageCarousel
    (Houses,soldDate, price, location1, city, states, zipCode, beds,baths, area )
  VALUES
    ('https://carousel9841.s3-us-west-1.amazonaws.com/genMid.40886119_B.jpg', 'March 12, 2018', 923211, "123 Hunting Street", "El Cerrito", "CA", 94637, 5, 3, 5100  );
  INSERT INTO imageCarousel
    (Houses,soldDate, price, location1, city, states, zipCode, beds,baths, area )
  VALUES
    ('https://carousel9841.s3-us-west-1.amazonaws.com/genMid.40886901_E.jpg', 'June 12, 2019', 432177, '555 Kerney Avenue', 'El Cerrito', 'CA', 94637, 4, 2, 1400);
  INSERT INTO imageCarousel
    (Houses,soldDate, price, location1, city, states, zipCode, beds,baths, area )
  VALUES('https://carousel9841.s3-us-west-1.amazonaws.com/genMid.40887142_O.jpg', 'July 12, 2019', 332177, '1235 Kerney Avenue', 'El Cerrito', 'CA', 94637, 5, 2, 2900);

  INSERT INTO imageCarousel
    (Houses,soldDate, price, location1, city, states, zipCode, beds,baths, area )
  VALUES('https://carousel9841.s3-us-west-1.amazonaws.com/genMid.ML81764903_6.jpg', 'Feb 12, 2019', 432177, '123 Lexington Avenue', 'El Cerrito', 'CA', 94637, 4, 2, 1800);







