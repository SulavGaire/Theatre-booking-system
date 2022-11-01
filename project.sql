-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 02, 2022 at 07:54 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `uid` int(5) NOT NULL,
  `mid` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `rid` int(5) NOT NULL,
  `mtime` varchar(255) NOT NULL,
  `snum` int(5) NOT NULL,
  `bdate` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`uid`, `mid`, `name`, `rid`, `mtime`, `snum`, `bdate`) VALUES
(18986, 171546, 'AAA', 630, '9', 1, '2022-08-02'),
(14640, 171546, 'AAA', 653, '9', 3, '2022-08-02'),
(18986, 175521, 'BBB', 724, '9', 1, '2022-08-02'),
(16377, 171546, 'AAA', 810, '9', 2, '2022-08-02'),
(15184, 171546, 'AAA', 911, '9', 2, '2022-08-02');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `mid` int(10) NOT NULL,
  `mname` varchar(255) NOT NULL,
  `mgenre` varchar(255) NOT NULL,
  `mtime` varchar(255) NOT NULL,
  `mrate` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`mid`, `mname`, `mgenre`, `mtime`, `mrate`) VALUES
(131228, 'AAA', ' afadf', '12', '200'),
(160984, 'BBB', 'dami', '12', '200'),
(171546, 'AAA', ' afadf', '9', '175'),
(173651, 'BBB', 'dami', '3', '250'),
(175521, 'BBB', 'dami', '9', '175'),
(181207, 'AAA', ' afadf', '3', '250'),
(187940, 'CCC', 'gafd', '9', '175'),
(193602, 'CCC', 'gafd', '3', '250'),
(195565, 'CCC', 'gafd', '12', '200');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `pid` int(5) NOT NULL,
  `rid` int(5) NOT NULL,
  `uid` int(5) NOT NULL,
  `mid` int(10) NOT NULL,
  `amount` int(10) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`pid`, `rid`, `uid`, `mid`, `amount`, `date`) VALUES
(5235, 911, 15184, 171546, 350, '2022-08-02  '),
(6830, 810, 16377, 171546, 350, '2022-08-02  '),
(7806, 653, 14640, 171546, 525, '2022-08-02  '),
(8636, 724, 18986, 175521, 175, '2022-08-02  '),
(8915, 630, 18986, 171546, 175, '2022-08-02  ');

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

CREATE TABLE `reservation` (
  `rid` int(5) NOT NULL,
  `sid` varchar(10) NOT NULL,
  `uid` int(5) NOT NULL,
  `mid` int(10) NOT NULL,
  `mtime` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`rid`, `sid`, `uid`, `mid`, `mtime`, `date`) VALUES
(810, ' A1 ', 16377, 171546, '9 ', '2022-08-02 '),
(810, ' A2 ', 16377, 171546, '9 ', '2022-08-02 '),
(653, ' A3 ', 14640, 171546, '9 ', '2022-08-02 '),
(653, ' A4 ', 14640, 171546, '9 ', '2022-08-02 '),
(653, ' A5 ', 14640, 171546, '9 ', '2022-08-02 '),
(630, '  B1 ', 18986, 171546, '9 ', '2022-08-02 '),
(911, ' B2 ', 15184, 171546, '9 ', '2022-08-02 '),
(911, ' B3 ', 15184, 171546, '9 ', '2022-08-02 '),
(724, '  A1 ', 18986, 175521, '9 ', '2022-08-02 ');

-- --------------------------------------------------------

--
-- Table structure for table `seats`
--

CREATE TABLE `seats` (
  `sid` varchar(10) NOT NULL,
  `scolumn` varchar(10) NOT NULL,
  `srow` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `seats`
--

INSERT INTO `seats` (`sid`, `scolumn`, `srow`) VALUES
(' A1', '1', '1'),
(' A2', '2', '1'),
(' A3', '3', '1'),
(' A4', '4', '1'),
(' A5', '5', '1'),
(' B1', '1', '2'),
(' B2', '2', '2'),
(' B3', '3', '2'),
(' B4', '4', '2'),
(' B5', '5', '2');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `uid` int(5) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `name`, `email`, `password`) VALUES
(18, 'admin', 'admin@project.com', '$2b$08$ttok6m5cPwnZFz8KWwC68e6fajojkXnbkOaVZUMs8riI4GXN7nG8m'),
(10122, 'test', 'test@project.com', '$2b$08$U7oKZqQZBOLRgrWs9LeuquN3ir/pegDoGqNJfP40YPI41EkuQImXW'),
(14640, 'chill', 'chill@project.com', '$2b$08$qF2R1Sh67rKT00dkHJ9FjupUilaGddmeOC45B0uzdw00W6ywBdN8a'),
(15184, 'sohan', 'sohan@project.com', '$2b$08$IRgR9CIdEfN1Eia3MBgUB.6sG6.iUubluXjbfGgYnqhRu1kOuqS/G'),
(16377, 'suresh', 'suresh@project.com', '$2b$08$dhq3H.P7akLtNhfGAgosreRukzWxlrZe1H.B85P4cmUZazCgjeY1i'),
(18986, 'hello', 'hello@project.com', '$2b$08$7PXLbBQrOcwgTC1/q.9SjeZCiU3.Gp6swcxbb19js7DvTjU63Aq9O');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`rid`),
  ADD KEY `fky1` (`uid`),
  ADD KEY `fky3` (`mid`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`mid`,`mrate`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`pid`),
  ADD KEY `fk1` (`uid`),
  ADD KEY `fk2` (`mid`),
  ADD KEY `fk3` (`rid`);

--
-- Indexes for table `reservation`
--
ALTER TABLE `reservation`
  ADD KEY `uidfk` (`uid`),
  ADD KEY `fk9` (`mid`);

--
-- Indexes for table `seats`
--
ALTER TABLE `seats`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`,`email`(100));

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `fky1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fky3` FOREIGN KEY (`mid`) REFERENCES `movies` (`mid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `fk1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk2` FOREIGN KEY (`mid`) REFERENCES `movies` (`mid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `fk9` FOREIGN KEY (`mid`) REFERENCES `movies` (`mid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `uidfk` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
