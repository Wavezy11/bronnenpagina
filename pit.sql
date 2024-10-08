-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 16 sep 2024 om 14:58
-- Serverversie: 10.4.28-MariaDB
-- PHP-versie: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pit`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(75) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` int(1) NOT NULL,
  `failed_attempts` int(11) DEFAULT 0,
  `lockout_until` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`, `admin`, `failed_attempts`, `lockout_until`) VALUES
(5, 'kaas@gmail.com', 'farhan2005', '$2y$10$gpZYvZn6pnFzI5A4wu5GReTSIoBIOdQ4ciCFYi3Ll4JhX2JL.EaHy', 1, 0, NULL),
(6, 'youtube@gmail.com', 'wavez', '$2y$10$TLBzIPuts/fm4CE2fOtMguRvo.iOZGieW5DW7DRHVMIDps1pfJTGm', 0, 3, '2024-09-16 11:59:16'),
(9, 'wavez@gmail.com', 'hoii', '$2y$10$K.YhfQ1y1MybyLXsB6LM/OVBHSYkw7hAsFi2ZO0BMaBPLXesnFpyS', 1, 0, NULL),
(11, 'mohammed5049@protonmail.com', 'maccagoat', '$2y$10$fEZbOTX3CcflrUgKwoAe/.WyB9fMEX./txKzZp6ZxKOjwKNav8mwO', 1, 0, NULL),
(12, '90210@gmail.com', '90210', '$2y$10$zjTokKRilNX8VjphxvDqguBQobOy2zjX3RbNTw2339Fm9JLhTnriS', 0, 0, NULL),
(14, '90210@gmail.com', '902100', '$2y$10$kO9ZATr/CM2wnTDf8r/DBeZwDNCySTiFC/ryDpY4bETtJ5I0uftfu', 0, 0, NULL),
(15, 'hoi@gmail.com', 'tchouamenienjoyer90210', '$2y$10$/mqPm0lIwQJyOf6T6dRUNe.69oM.c4PklRQ/gZYldEtEqa6S10VI6', 0, 0, NULL),
(16, 'anidote@gmail.com', 'boom1234', '$2y$10$yJUFBfgt2UlNbr4Ob2rna.ccZdJpfOACb1gZUK3QIyboaELN0b/UG', 1, 0, NULL),
(17, 'kaasoo2@gmail.com', 'mfpampkfm', '$2y$10$M6RZGADVOj3G9beqb8T3ju3Ty41mHTQ5UnkzQN3zWVZctrw9W7Gam', 0, 0, NULL),
(21, 'olifant@gmail.com', 'toto', '$2y$10$5BO2bN0SS.XlzzpA3NbF6u2ZdQVdZjG.KENQx05q3PZslgz6j5M1K', 1, 0, NULL);

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
