-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 03, 2024 at 05:56 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prazna`
--

-- --------------------------------------------------------

--
-- Table structure for table `cjelina`
--

CREATE TABLE `cjelina` (
  `cjelina_id` int(10) UNSIGNED NOT NULL,
  `podrucje_id` int(10) UNSIGNED NOT NULL,
  `ime` varchar(50) NOT NULL,
  `opis` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cjelina`
--

INSERT INTO `cjelina` (`cjelina_id`, `podrucje_id`, `ime`, `opis`) VALUES
(1, 1, 'Mediteranien', 'Descriptions člfdg,lgf fdg dg');

-- --------------------------------------------------------

--
-- Table structure for table `cjelina_jedinica`
--

CREATE TABLE `cjelina_jedinica` (
  `cjelina_id` int(10) UNSIGNED NOT NULL,
  `jedinica_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `jedinica`
--

CREATE TABLE `jedinica` (
  `jedinica_id` int(10) UNSIGNED NOT NULL,
  `ime` varchar(50) NOT NULL,
  `opis` text NOT NULL,
  `slika_1` varchar(50) DEFAULT NULL,
  `slika_2` varchar(50) DEFAULT NULL,
  `promidzba_na_razini_homepage` varchar(1) NOT NULL,
  `promidzba_na_razini_podrucja` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jedinica`
--

INSERT INTO `jedinica` (`jedinica_id`, `ime`, `opis`, `slika_1`, `slika_2`, `promidzba_na_razini_homepage`, `promidzba_na_razini_podrucja`) VALUES
(1, 'apple', 'Description lkds  dldsć lsd', NULL, NULL, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `podrucje`
--

CREATE TABLE `podrucje` (
  `podrucje_id` int(11) NOT NULL,
  `ime` varchar(50) NOT NULL DEFAULT '',
  `opis` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `podrucje`
--

INSERT INTO `podrucje` (`podrucje_id`, `ime`, `opis`) VALUES
(1, 'Fruit', 'Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description '),
(2, 'Vegetables', 'vegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetablesvegetables');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cjelina`
--
ALTER TABLE `cjelina`
  ADD PRIMARY KEY (`cjelina_id`);

--
-- Indexes for table `cjelina_jedinica`
--
ALTER TABLE `cjelina_jedinica`
  ADD PRIMARY KEY (`cjelina_id`,`jedinica_id`);

--
-- Indexes for table `jedinica`
--
ALTER TABLE `jedinica`
  ADD PRIMARY KEY (`jedinica_id`);

--
-- Indexes for table `podrucje`
--
ALTER TABLE `podrucje`
  ADD PRIMARY KEY (`podrucje_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cjelina`
--
ALTER TABLE `cjelina`
  MODIFY `cjelina_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `jedinica`
--
ALTER TABLE `jedinica`
  MODIFY `jedinica_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `podrucje`
--
ALTER TABLE `podrucje`
  MODIFY `podrucje_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
