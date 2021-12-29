-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 29, 2021 at 09:34 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hpl_new`
--

-- --------------------------------------------------------

--
-- Table structure for table `question_eng`
--

CREATE TABLE `question_eng` (
  `id` int(5) NOT NULL COMMENT 'question id',
  `question` varchar(255) DEFAULT NULL COMMENT 'question in plain text',
  `question_path` varchar(255) DEFAULT NULL COMMENT 'question with path for media(audio, picture, etc)',
  `ans_a` varchar(255) DEFAULT NULL COMMENT 'ans A in plain text',
  `ans_a_path` varchar(255) DEFAULT NULL COMMENT 'ans A with path for media',
  `ans_b` varchar(255) DEFAULT NULL COMMENT 'ans B in plain text',
  `ans_b_path` varchar(255) DEFAULT NULL COMMENT 'ans B with path for media',
  `ans_c` varchar(255) DEFAULT NULL COMMENT 'ans C in plain text',
  `ans_c_path` varchar(255) DEFAULT NULL COMMENT 'ans C with path for media',
  `ans_d` varchar(255) DEFAULT NULL COMMENT 'ans D in plain text',
  `ans_d_path` varchar(255) DEFAULT NULL COMMENT 'ans D with path for media',
  `correct_ans` varchar(3) DEFAULT NULL,
  `level` decimal(5,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question_eng`
--

INSERT INTO `question_eng` (`id`, `question`, `question_path`, `ans_a`, `ans_a_path`, `ans_b`, `ans_b_path`, `ans_c`, `ans_c_path`, `ans_d`, `ans_d_path`, `correct_ans`, `level`) VALUES
(1, '', '/media/picture/pic1.png', NULL, '/media/audio/1a.m4a', NULL, '/media/audio/1b.m4a', NULL, '/media/audio/1c.m4a', NULL, '/media/audio/1d.m4a', 'B', '1'),
(2, NULL, '/media/picture/pic2.png', NULL, '/media/audio/2a.m4a', NULL, '/media/audio/2b.m4a', NULL, '/media/audio/2c.m4a', NULL, '/media/audio/2d.m4a', 'D', '2'),
(3, '', '/media/picture/pic3.png', NULL, '/media/audio/3a.m4a', NULL, '/media/audio/3b.m4a', NULL, '/media/audio/3c.m4a', NULL, '/media/audio/3d.m4a', 'A', '3'),
(4, NULL, '/media/picture/pic4.png', NULL, '/media/audio/4a.m4a', NULL, '/media/audio/4b.m4a', NULL, '/media/audio/4c.m4a', NULL, '/media/audio/4d.m4a', 'A', '2'),
(5, NULL, '/media/picture/pic5.png', NULL, '/media/audio/5a.m4a', NULL, '/media/audio/5b.m4a', NULL, '/media/audio/5c.m4a', NULL, '/media/audio/5d.m4a', 'B', '3'),
(6, NULL, '/media/picture/pic6.png', NULL, '/media/audio/6a.m4a', NULL, '/media/audio/6b.m4a', NULL, '/media/audio/6c.m4a', NULL, '/media/audio/6d.m4a', 'A', '2'),
(7, NULL, '/media/picture/pic7.png', NULL, '/media/audio/7a.m4a', NULL, '/media/audio/7b.m4a', NULL, '/media/audio/7c.m4a', NULL, '/media/audio/7d.m4a', 'B', '2'),
(8, NULL, '/media/picture/pic8.png', NULL, '/media/audio/8a.m4a', NULL, '/media/audio/8b.m4a', NULL, '/media/audio/8c.m4a', NULL, '/media/audio/8d.m4a', 'C', '1'),
(9, NULL, '/media/picture/pic9.png', NULL, '/media/audio/9a.m4a', NULL, '/media/audio/9b.m4a', NULL, '/media/audio/9c.m4a', NULL, '/media/audio/9d.m4a', 'D', '3'),
(10, NULL, '/media/picture/pic10.png', NULL, '/media/audio/10a.m4a', NULL, '/media/audio/10b.m4a', NULL, '/media/audio/10c.m4a', NULL, '/media/audio/10d.m4a', 'D', '2'),
(11, NULL, '/media/picture/pic11.png', NULL, '/media/audio/11a.m4a', NULL, '/media/audio/11b.m4a', NULL, '/media/audio/11c.m4a', NULL, '/media/audio/11d.m4a', 'C', '1'),
(12, NULL, '/media/picture/pic12.png', NULL, '/media/audio/12a.m4a', NULL, '/media/audio/12b.m4a', NULL, '/media/audio/12c.m4a', NULL, '/media/audio/12d.m4a', 'A', '1'),
(13, NULL, '/media/picture/pic13.png', NULL, '/media/audio/13a.m4a', NULL, '/media/audio/13b.m4a', NULL, '/media/audio/13c.m4a', NULL, '/media/audio/13d.m4a', 'A', '1'),
(14, NULL, '/media/picture/pic14.png', NULL, '/media/audio/14a.m4a', NULL, '/media/audio/14b.m4a', NULL, '/media/audio/14c.m4a', NULL, '/media/audio/14d.m4a', 'A', '2'),
(15, NULL, '/media/picture/pic15.png', NULL, '/media/audio/15a.m4a', NULL, '/media/audio/15b.m4a', NULL, '/media/audio/15c.m4a', NULL, '/media/audio/15d.m4a', 'B', '1'),
(16, NULL, '/media/picture/pic16.png', NULL, '/media/audio/16a.m4a', NULL, '/media/audio/16b.m4a', NULL, '/media/audio/16c.m4a', NULL, '/media/audio/16d.m4a', 'D', '1'),
(17, 'Mr.Sokolov… a positive review of his stay at the Olana Hotel', NULL, 'write', NULL, 'wrote', NULL, 'writing', NULL, 'was written', NULL, 'B', '1'),
(18, 'The manager often leads new employees though the safety procedures…', NULL, 'her', NULL, 'herself', NULL, 'hers', NULL, 'she', NULL, 'B', '1'),
(19, 'The corporate fitness center is equipped… fourteen stationary bicycles', NULL, 'at', NULL, 'on', NULL, 'with', NULL, 'about', NULL, 'C', '1'),
(20, 'Professor Huong will go over the use of the laboratory… with the interns next week', NULL, 'instruments', NULL, 'instrumental', NULL, 'intrumentally', NULL, 'instrumented', NULL, 'A', '1'),
(21, 'The goal of the committee was to evaluate the company\'s bylaw and offer … for improvement', NULL, 'renewals', NULL, 'registrations', NULL, 'recommendations', NULL, 'reimbursements', NULL, 'C', '1'),
(22, 'The building\'s new ventilation system circulates heat much … than before', NULL, 'even', NULL, 'most even', NULL, 'evenly', NULL, 'more evenly', NULL, 'D', '1'),
(23, 'Glowood Application promises customers their money back … they are not satisfied with their purchase', NULL, 'while', NULL, 'and', NULL, 'if', NULL, 'then', NULL, 'C', '1'),
(24, 'Most banks now offer clients the option of receiving their statements electronically or … mail', NULL, 'from', NULL, 'of', NULL, 'in', NULL, 'by', NULL, 'D', '1'),
(25, 'Contruction at Langhall Plaza is going so well that shops might open before the expected … date', NULL, 'completion', NULL, 'selection', NULL, 'decision', NULL, 'option', NULL, 'A', '1'),
(26, 'Kohmek, Inc, is seeking a suitable site … the construction of its electronics factory.', NULL, 'for', NULL, 'so', NULL, 'to', NULL, 'more', NULL, 'A', '1'),
(27, 'Studies show that the average audience forms its … of the speaker within the first few seconds of the presentation', NULL, 'impress', NULL, 'impressive', NULL, 'impressively', NULL, 'impression', NULL, 'D', '1'),
(28, 'Cranford Culinary Academy offers 35 different classess for … chefs', NULL, 'aspires', NULL, 'aspirations', NULL, 'aspiring', NULL, 'to aspire', NULL, 'C', '1'),
(29, 'Mamton Home Furnishings… customized furniture in Pennsylvania for more than a century', NULL, 'manufactures', NULL, 'is manufacturing', NULL, 'has manufactured', NULL, 'manufacture', NULL, 'C', '1'),
(30, 'Please hold any phone calls for Ms.Tanaka … she will be in meetings all day', NULL, 'as', NULL, 'but', NULL, 'despite', NULL, 'similarly', NULL, 'A', '1'),
(31, 'Dolores Gutierrez excels as an astate planning attorney who helps clients manage their assets…', NULL, 'effect', NULL, 'effectively', NULL, 'effects', NULL, 'effective', NULL, 'B', '1'),
(32, 'Data from the finance department was used to … predict the company\'s future expenses', NULL, 'either', NULL, 'ever', NULL, 'yet', NULL, 'better', NULL, 'D', '1'),
(33, 'Immediately after the descrease in production was announced, everyone began discussing how … would impact work schedules', NULL, 'us', NULL, 'it', NULL, 'theirs', NULL, 'yours', NULL, 'B', '1'),
(34, 'Tomorrow morning, both escalators in the store will be turned off periodically in order to perform … maintenance', NULL, 'required', NULL, 'require', NULL, 'requiring', NULL, 'requires', NULL, 'A', '1'),
(35, 'Those who wish to colunteer at the annual Sebastian Park flower-planting event this Saturday … to arrive early', NULL, 'asks', NULL, 'are asked', NULL, 'has been asking', NULL, 'to ask', NULL, 'B', '1'),
(36, 'A recent … found that property values in the Agate Valley region had increased by 3 percent between January and June', NULL, 'assessment', NULL, 'assessed', NULL, 'assessable', NULL, 'to assess', NULL, 'A', '1'),
(37, 'The Pangea Company will send…. An e-mail confirming receipt of the application', NULL, 'your', NULL, 'yourselves', NULL, 'yourself', NULL, 'you', NULL, 'D', '1'),
(38, 'Tours run every day, but there may be … availability on weekends', NULL, 'limit', NULL, 'limits', NULL, 'limited', NULL, 'limitation', NULL, 'C', '1'),
(39, 'Bentoc Shoe has a loyal customer base … it provides high-quality service', NULL, 'because', NULL, 'rather', NULL, 'not only', NULL, 'as well', NULL, 'A', '1'),
(40, 'Buiding management … asks employees to avoid socializing in the lobby', NULL, 'respects', NULL, 'respected', NULL, 'respectful', NULL, 'respectfully', NULL, 'D', '1'),
(41, 'The theater district is located … walking distance of the Yafeh Hotel', NULL, 'within', NULL, 'along', NULL, 'below', NULL, 'down', NULL, 'A', '1'),
(42, 'As consumers buy more products online, retailers are finding ways… orders more quickly', NULL, 'have delivered', NULL, 'are delivering', NULL, 'to deliver', NULL, 'delivers', NULL, 'C', '1'),
(43, 'Please … that environmental inspectors must renew their certification yearly', NULL, 'proceed', NULL, 'secure', NULL, 'note', NULL, 'keep', NULL, 'C', '1'),
(44, 'Mr.Yi\'s calendar is … open for interviews from 3 p.m to 5 p.m on Tuesdays', NULL, 'usually', NULL, 'during', NULL, 'several', NULL, 'longer', NULL, 'A', '1'),
(45, 'The lead role … the film Sunpocket was created especially for Ms. Abed', NULL, 'by', NULL, 'at', NULL, 'in', NULL, 'as', NULL, 'C', '1'),
(46, 'Your current online banking session … so please log on to your account again', NULL, 'has expired', NULL, 'expiring', NULL, 'expiration', NULL, 'to expire', NULL, 'A', '1'),
(47, 'Mr. Wu was responsible for the latest design … at Shu Faucet Company', NULL, 'innovative', NULL, 'innovatively', NULL, 'innovate', NULL, 'innovation', NULL, 'D', '1'),
(48, 'Each year, the relationship between what people eat and the state of … health is more fully understood', NULL, 'they', NULL, 'their', NULL, 'theirs', NULL, 'them', NULL, 'B', '1'),
(49, 'Poet Yoshino Nagao will read from her latest … collection at Argyle Library on Friday', NULL, 'publisher', NULL, 'publish', NULL, 'published', NULL, 'publishes', NULL, 'C', '1'),
(50, 'Retailers have been reporting … strong sales of swimwear for this time of year', NULL, 'surprised', NULL, 'surprises', NULL, 'to surprise', NULL, 'surpringly', NULL, 'D', '1'),
(51, 'As the city\'s largest …, Bailin Hospital provides more than 1,000 jobs at its west campus alone', NULL, 'employment', NULL, 'employable', NULL, 'employing', NULL, 'employer', NULL, 'D', '1'),
(52, 'The venue is small, so not … who requests a ticket to the play will be able to attend', NULL, 'the other', NULL, 'one another', NULL, 'everone', NULL, 'someone', NULL, 'C', '1'),
(53, 'Both the Atkinson Times and the MacMilan Record have sizable readerships, … each targets a different demographic', NULL, 'unless', NULL, 'although', NULL, 'once', NULL, 'whether', NULL, 'B', '1'),
(54, 'Because of an ordering error, Vival Market received an … of 200 bags of rice', NULL, 'exceeding', NULL, 'exceedingly', NULL, 'excess', NULL, 'excessive', NULL, 'C', '1'),
(55, 'Ms.Choi report that the new accounting software works well, … the computer\'s operating system has been updated', NULL, 'provied that', NULL, 'no sooner', NULL, 'so as to', NULL, 'in view of', NULL, 'A', '1'),
(56, 'Reseachers must sign in at the visitor registration table upon … the Briston Literary Archive', NULL, 'entered', NULL, 'entering', NULL, 'entry', NULL, 'enter', NULL, 'B', '1'),
(57, 'An interview with author Tito Flores about … new book will be broadcast tonight', NULL, 'himself', NULL, 'him', NULL, 'his', NULL, 'he', NULL, 'C', '1'),
(58, 'Perend Trail\'s new hiking boots will be available in brown … black leather', NULL, 'nor', NULL, 'yet', NULL, 'and', NULL, 'so', NULL, 'C', '1'),
(59, 'Mr.Ruotolo\'s … on the new tax changes is scheduled for 10 a.m', NULL, 'present', NULL, 'presented', NULL, 'presentable', NULL, 'presentation', NULL, 'D', '1'),
(60, 'Boyd Street Market is Mapleton\'s largest retailer of foods … around the world', NULL, 'toward', NULL, 'from', NULL, 'above', NULL, 'plus', NULL, 'B', '1'),
(61, 'Mr.Johansson … accepted the job offer he received from Saco Bike Works', NULL, 'quicken', NULL, 'quickly', NULL, 'quicker', NULL, 'quickness', NULL, 'B', '1'),
(62, 'To expand its global reach, Amity Spas will … open its franchise opportunities to international prospects', NULL, 'soon', NULL, 'almost', NULL, 'recently', NULL, 'already', NULL, 'A', '1'),
(63, 'The second-generation XR1280 unit is … to its predecessor, except for its reduced weight', NULL, 'equally', NULL, 'equal', NULL, 'equals', NULL, 'to equal', NULL, 'B', '1'),
(64, 'Vice President Ramos will not make … decisions until more feedback has been gathered', NULL, 'whether', NULL, 'what', NULL, 'over', NULL, 'any', NULL, 'D', '1'),
(65, 'Candidates for the open position must have good interpersonal skills and … working with clients', NULL, 'experience', NULL, 'experienced', NULL, 'experiencing', NULL, 'to experience', NULL, 'A', '1'),
(66, 'Chong Kim was … recommended for the position of merchandise manager for Corbin Furniture Mart', NULL, 'thickly', NULL, 'currently', NULL, 'securely', NULL, 'highly', NULL, 'D', '1'),
(67, 'Once the returned item is received, a refund will appear on your credit-card statement … five business days', NULL, 'within', NULL, 'during', NULL, 'since', NULL, 'when', NULL, 'A', '1'),
(68, 'The printer on the second floor will be out of … until the technician arrives on Friday', NULL, 'purpose', NULL, 'variety', NULL, 'service', NULL, 'repair', NULL, 'C', '1'),
(69, 'Sales of our computer software were good last quarter, but sales for our mobile applications have been even …', NULL, 'strong', NULL, 'stronger', NULL, 'strongly', NULL, 'strongest', NULL, 'B', '1'),
(70, 'Upon request, the guests at Olane Hotel will be provided vouchers … free parking', NULL, 'on', NULL, 'to', NULL, 'with', NULL, 'for', NULL, 'D', '1'),
(71, 'Please review the projected sales figures in the spreadsheets that … to the e-mail', NULL, 'is attaching', NULL, 'had attached', NULL, 'attachment', NULL, 'are attached', NULL, 'D', '1'),
(72, 'Everyone at the annual Tirmaco exposition seemed … by the new products on display', NULL, 'excite', NULL, 'excitement', NULL, 'excited', NULL, 'excitedly', NULL, 'C', '1'),
(73, 'Ms.Wong has has expressed … in leading the city\'s planned beautification project', NULL, 'interest', NULL, 'interests', NULL, 'interesting', NULL, 'interestingly', NULL, 'A', '1'),
(74, 'Please save spreadsheets periodically when updating them to prevent data from …', NULL, 'is lost', NULL, 'lost', NULL, 'being lost', NULL, 'losing', NULL, 'C', '1'),
(75, '… Gyoh Company\'s marketing push, new orders for cash registers decreased slightly in the third quarter', NULL, 'As', NULL, 'If', NULL, 'However', NULL, 'Despite', NULL, 'D', '1'),
(76, 'All members of the sales team must attend next Thursday\'s meeting so that … can see the sales forecast presentation', NULL, 'One of the women is typing on a computer', NULL, 'someone', NULL, 'everyone', NULL, 'either one', NULL, 'C', '1'),
(77, 'Up until last year, we marketed our services … though our online partner, Yoder Tech.', NULL, 'exclusive', NULL, 'exclusivity', NULL, 'exclusiveness', NULL, 'exclusively', NULL, 'D', '1'),
(78, 'Please be partient as the IT department works … service to your business application', NULL, 'to restore', NULL, 'restoration', NULL, 'restored', NULL, 'had restored', NULL, 'A', '1'),
(79, 'Markley Corporation\'s earnings have risen steadily despite significant fluctuations …', NULL, 'about', NULL, 'in', NULL, 'through', NULL, 'onto', NULL, 'B', '1'),
(80, 'My whole family will be coming, so the maid has to cater ...twelve on Sunday.', NULL, 'to', NULL, 'for', NULL, 'of', NULL, 'under', NULL, 'B', '1'),
(81, 'They have a large argument, yet in the end, they agree to love one ... despite their disagreements.', NULL, 'the other', NULL, 'other', NULL, 'another', NULL, 'each', NULL, 'C', '1'),
(82, 'Sometimes she does not agree ... her husband about child rearing but they soon find the solutions', NULL, 'with', NULL, 'for', NULL, 'on', NULL, 'of', NULL, 'A', '1'),
(83, 'It wasn\'t an awful experience. It was the worst thing ... has ever happened to me.', NULL, 'that', NULL, 'what', NULL, 'why', NULL, ' which', NULL, 'A', '1'),
(84, 'No matter how busy I may be, I shall be there tonight come what ...', NULL, 'may', NULL, 'might', NULL, 'can', NULL, 'could', NULL, 'A', '1'),
(85, 'Organizations may qualify for exemption from income tax if they … exclusively as charities.', NULL, 'operated', NULL, 'operate', NULL, 'had operated', NULL, 'are operated', NULL, 'B', '1'),
(86, 'You like coffee, ....?', NULL, 'don\'t you', NULL, 'didn\'t you', NULL, 'won\'t you', NULL, 'haven\'t you', NULL, 'A', '1'),
(87, 'This is ... second time I have ever eaten this food.', NULL, 'a', NULL, 'the', NULL, 'an', NULL, 'no article', NULL, 'B', '1'),
(88, 'The whole world is waiting ...... a vaccine against Covid-19.', NULL, 'with', NULL, 'for', NULL, 'at', NULL, 'in', NULL, 'B', '1'),
(89, 'In a formal interview, it is essential to maintain good eye … with the interviewers.', NULL, 'contact', NULL, 'touch', NULL, 'link', NULL, 'connection', NULL, 'A', '1'),
(90, 'We expected her at nine but she finally … at midnight. ', NULL, 'turned up', NULL, 'came off', NULL, 'came to', NULL, 'turned out', NULL, 'A', '1'),
(91, 'This cloud pattern is not … of a tropical hurricane. ', NULL, 'characterizing', NULL, 'characterized', NULL, 'characterization', NULL, 'characteristic', NULL, 'D', '1'),
(92, 'No matter how busy I may be, I shall be there tonight come what ...', NULL, 'may', NULL, 'might', NULL, 'can', NULL, 'could', NULL, 'A', '1'),
(169, 'The Physical Therapy Association is committed to keeping costs … for its certification programs', NULL, 'affordable', NULL, 'permitted', NULL, 'cutting', NULL, 'necessary', NULL, 'A', '2'),
(170, 'To remain on schedule, editors must submit all … to the book to the authors by Friday', NULL, 'ideas', NULL, 'essays', NULL, 'revisions', NULL, 'suggestions', NULL, 'C', '2'),
(171, 'At Pharmbeck\'s banquet, Mr.Jones … a trophy for his performance in this year\'s quanlity-improvement iniative', NULL, 'accepted', NULL, 'congratulated', NULL, 'nominated', NULL, 'hoped', NULL, 'A', '2'),
(172, 'One of Grommer Consulting\'s goals is to enhance the relationship … salespeople and their customers', NULL, 'inside', NULL, 'within', NULL, 'around', NULL, 'between', NULL, 'D', '2'),
(173, 'Any requests for time off should be addressed to ther … department supervisor', NULL, 'urgent', NULL, 'appropriate', NULL, 'subsequent', NULL, 'deliverable', NULL, 'B', '2'),
(174, 'Company executives are currently reviewing the annual budget … submitted to them by the Financial Planning department', NULL, 'requirements', NULL, 'deliveries', NULL, 'developers', NULL, 'quanlities', NULL, 'A', '2'),
(175, 'Last year, Tadaka Computer Solutions ranked third … in regional earnings', NULL, 'together', NULL, 'overall', NULL, 'consecutively', NULL, 'generally', NULL, 'B', '2'),
(176, '… the popularity of the BPT39 wireless speaker, production will be increased fivefold starting next month', NULL, 'On behalf of', NULL, 'Whether', NULL, 'Moreover', NULL, 'As a result of', NULL, 'D', '2'),
(177, '… events this year caused profits in the second and third quarters to differ significantly from original projections', NULL, 'Total', NULL, 'Marginal', NULL, 'Representative', NULL, 'Unforeseen', NULL, 'D', '2'),
(178, 'The time for the pathway lighting project was extended to … input from the environmental commission', NULL, 'use up', NULL, 'belive in', NULL, 'make into', NULL, 'allow for', NULL, 'D', '2'),
(179, 'The … of videos to electronic press releases can help companies showcase their products', NULL, 'content', NULL, 'addition', NULL, 'pictures', NULL, 'promotion', NULL, 'B', '2'),
(180, 'When leaving the auditorium, please exit … the doors on the lower level', NULL, 'except', NULL, 'inside', NULL, 'without', NULL, 'through', NULL, 'D', '2'),
(181, 'I have attached my resume detailing my … experience in the hotel industry', NULL, 'extensive', NULL, 'punctual', NULL, 'prospective', NULL, 'accepted', NULL, 'A', '2'),
(182, 'In preparation for Mr.Kumar\'s retirement at the end of March, the Carolex Corporation will need to … a new facilities director', NULL, 'resume', NULL, 'compete', NULL, 'recruit', NULL, 'conduct', NULL, 'C', '2'),
(183, 'Please read the list of … qualifications to ensure that you have the necessary education and experience for the position', NULL, 'slight', NULL, 'equal', NULL, 'obliged', NULL, 'essential', NULL, 'D', '2'),
(184, 'RZT Technology will double the size of its Toronto laboratory to … the organization\'s rapid growth', NULL, 'assign', NULL, 'investigate', NULL, 'experience', NULL, 'accommodate', NULL, 'D', '2'),
(185, 'The Williamsport Hotel is an ideal venue for the conference because of its … to the airport', NULL, 'achievement', NULL, 'proximity', NULL, 'competence', NULL, 'exception', NULL, 'B', '2'),
(186, 'The long-awaited Weka 2XG digital camera will finally be … at a product exhibition on August 16', NULL, 'reduced', NULL, 'unveiled', NULL, 'consulted', NULL, 'resolved', NULL, 'B', '2'),
(187, 'Amby Cable… $25 to all Internet subscribers after the weeklong service interruption', NULL, 'refunded', NULL, 'accepted', NULL, 'divided', NULL, 'deposited', NULL, 'A', '2'),
(188, 'The board of directions will meet next Monday to examine the current hiring…', NULL, 'purpose', NULL, 'intent', NULL, 'assembly', NULL, 'policy', NULL, 'D', '2'),
(189, 'Passegers should not leave their seats… a flight attendant gives them permission to do so', NULL, 'unless', NULL, 'reather', NULL, 'instead', NULL, 'otherwise', NULL, 'A', '2'),
(190, 'The theater doors will close and the show will start at precisely 8 p.m, so guests are reminded to be …', NULL, 'rapid', NULL, 'sudden', NULL, 'punctual', NULL, 'instant', NULL, 'C', '2'),
(191, 'All vacation requests must be made to your supervisor … the requested date.', NULL, 'prior to', NULL, 'except for', NULL, 'previously', NULL, 'because', NULL, 'A', '2'),
(192, 'Mr. Cutler has been asked to … domestic sales of low-calorie beverages', NULL, 'oversee', NULL, 'possess', NULL, 'succeed', NULL, 'persist', NULL, 'A', '2'),
(193, '…, items sold at the Scottville Craft Fair are unique and of very high quality', NULL, 'Fairly', NULL, 'Typically', NULL, 'Simply', NULL, 'Entirely', NULL, 'B', '2'),
(194, 'Mr.Singh was … about sales of the fragrance after the first round of customer focus groups', NULL, 'extensive', NULL, 'distinct', NULL, 'optimistic', NULL, 'superior', NULL, 'C', '2'),
(195, 'Every year Arrow Mill, Inc., processes a … amount of grain', NULL, 'durable', NULL, 'direc', NULL, 'resolute', NULL, 'substantial', NULL, 'D', '2'),
(196, 'Although Mr.Yanamura\'s theory is … controversial, it does help explain the latest changes in the market', NULL, 'nearly', NULL, 'urgently', NULL, 'gracefully', NULL, 'certainly', NULL, 'D', '2'),
(197, 'Mr.Yamamoto\'s farewell party was… in the cafeteria on Tuesday', NULL, 'meant', NULL, 'held', NULL, 'taken', NULL, 'built', NULL, 'B', '2'),
(198, 'XAG Motors recommends checking yours vehicle\'s oil at … intervals', NULL, 'heavy', NULL, 'genuine', NULL, 'regular', NULL, 'immediate', NULL, 'C', '2'),
(199, 'Rincon Data has just opened a new facility that is … larger than its previous one', NULL, 'expertly', NULL, 'significantly', NULL, 'prominently', NULL, 'historically', NULL, 'B', '2'),
(200, '… from customers is valuable in determining where we need to improve', NULL, 'Inventory', NULL, 'Feedback', NULL, 'Possibility', NULL, 'Distribution', NULL, 'B', '2'),
(201, 'An inspection of the Coltier Building identified several … defects', NULL, 'private', NULL, 'instructional', NULL, 'complimentary', NULL, 'structural', NULL, 'D', '2'),
(202, 'Curitour Travel offers … thoughtout Asia that vary in length, cost, and group size', NULL, 'excursions', NULL, 'refreshments', NULL, 'improvements', NULL, 'institutions', NULL, 'A', '2'),
(203, '… the accquisition of a competitor, Plautner Electric has become the biggest appliance retailer in the city', NULL, 'With', NULL, 'Wherever', NULL, 'Together', NULL, 'Above', NULL, 'A', '2'),
(204, 'The shipment delay was … caused by miscommunication within our department', NULL, 'primarily', NULL, 'eventually', NULL, 'hastily', NULL, 'reluctantly', NULL, 'A', '2'),
(205, 'Over the years, Garnet Advertising has … supported its employees\' volunteer work for charitable organizations', NULL, 'currently', NULL, 'upwardly', NULL, 'severely', NULL, 'actively', NULL, 'D', '2'),
(206, 'Ms. Rakel\'s new Stockholm office tower is sure to be recognized as a highlight of … architecture', NULL, 'instant', NULL, 'associated', NULL, 'contemporary', NULL, 'simultaneous', NULL, 'C', '2'),
(207, 'Zarmeni Mining has been evaluating the benefits of building a mine at the … site', NULL, 'proposed', NULL, 'structured', NULL, 'unlimited', NULL, 'educated', NULL, 'A', '2'),
(208, 'If you have ordered more than two items, be aware they may arrive in separate …', NULL, 'payments', NULL, 'sequences', NULL, 'packages', NULL, 'receipts', NULL, 'C', '2'),
(209, 'During tourist season, selling handmade crafts is a … source of income for local residents', NULL, 'contented', NULL, 'dependable', NULL, 'flavorful', NULL, 'patient', NULL, 'B', '2'),
(210, 'This Saturday, Ritesense customers will have the opportunity to sample a … of Health Bar products', NULL, 'nutrition', NULL, 'selection', NULL, 'placement', NULL, 'management', NULL, 'B', '2'),
(211, 'Mr.Choo was chosen to head the committee for consumer protection from a … pool of candidates', NULL, 'sizable', NULL, 'practiced', NULL, 'consecutive', NULL, 'missing', NULL, 'A', '2'),
(212, 'The updated medical-records system will … that patients and doctors can easily access accurate information', NULL, 'ensure', NULL, 'allow', NULL, 'accept', NULL, 'provide', NULL, 'A', '2'),
(213, 'President Grimaud would like to thank the marketing department for … the mislabeling issue to her attention', NULL, 'showing', NULL, 'telling', NULL, 'bringing', NULL, 'making', NULL, 'C', '2'),
(214, 'The audience clapped as the cast came out on the stage to take their …', NULL, 'bow', NULL, 'performance', NULL, 'seat', NULL, 'picture', NULL, 'A', '2'),
(215, 'If you have symptoms of COVID-19, seek medical ... immediately.', NULL, 'contemplation', NULL, 'focus', NULL, 'attention', NULL, 'consideration', NULL, 'C', '2'),
(216, 'Since the juvenile crime rates continue to ascend, the public insists that law .... be improved.', NULL, 'application', NULL, 'enforcement', NULL, 'execution', NULL, 'obedience', NULL, 'B', '2'),
(217, 'Jim ... his best suit to make a good impression on his future in-laws.', NULL, 'took on', NULL, 'took off', NULL, 'put on', NULL, 'put off', NULL, 'C', '2'),
(218, 'People thought that maybe his novel might one day be turned into a ﬁlm and become a Hollywood …', NULL, 'best-seller', NULL, 'attraction', NULL, 'blockbuster', NULL, 'debut', NULL, 'C', '2'),
(219, 'Everyone is hoping and praying that … peace will eventually come to the area.', NULL, 'durable', NULL, 'ongoing', NULL, ' irrevocable', NULL, 'lasting', NULL, 'D', '2'),
(220, 'The … are against her winning a fourth consecutive gold medal.', NULL, 'chances', NULL, 'odds', NULL, 'prospects', NULL, 'bets', NULL, 'B', '2'),
(221, 'James could no longer bear the ______surroundings of the decrepit old house.', NULL, 'overbearing', NULL, 'domineering', NULL, 'pressing', NULL, 'oppressive', NULL, 'D', '2'),
(222, ' Mary lost one running shoe, but won the race despite this ....', NULL, 'feat', NULL, 'disaster', NULL, 'handicap', NULL, 'awkwardness', NULL, 'D', '2'),
(223, 'Susan will graduate in June ... she submits her dissertation on time.', NULL, 'provided', NULL, 'supposing', NULL, 'unless', NULL, 'otherwise', NULL, 'A', '2'),
(224, 'Our firm is so successful because it is at the cutting ... of computer technology.', NULL, 'limit', NULL, 'verge', NULL, 'fringe', NULL, 'edge', NULL, 'D', '2'),
(225, 'The Springdate supermarket survey … will be released a week after they are evaluated', NULL, 'events', NULL, 'stores', NULL, 'results', NULL, 'coupons', NULL, 'C', '2'),
(226, 'A wooden bridge crossing the wading pond … to the hotel\'s nine-hole golf course', NULL, 'prepares', NULL, 'leads', NULL, 'presents', NULL, 'takes', NULL, 'B', '2'),
(227, 'All produce transported by Gocargo Trucking is refrigerated … upon pickup to prevent spoilage', NULL, 'lately', NULL, 'promptly', NULL, 'potentially', NULL, 'clearly', NULL, 'B', '2'),
(228, 'CEO Yoshiro Kasai has expressed complete faith in Fairway Maritime\'s … to deliver the product on time', NULL, 'belief', NULL, 'measure', NULL, 'problem', NULL, 'ability', NULL, 'D', '2'),
(229, 'What was the matter with him? He........ a toothache', NULL, 'to have', NULL, 'have', NULL, 'has', NULL, 'had', NULL, 'D', '3'),
(230, 'What subject is he......... now? Vietnamese.', NULL, 'to learn', NULL, 'learn', NULL, 'learning', NULL, 'learned', NULL, 'C', '3'),
(231, '... did she go yesterday morning? She went to the bookshop.', NULL, 'What', NULL, 'Where', NULL, 'When', NULL, 'Why', NULL, 'A', '3'),
(232, 'Are you free.... the evening? Yes, I am.', NULL, 'in', NULL, 'on', NULL, 'at', NULL, 'to', NULL, 'A', '3'),
(233, 'She is going to.... television tonight.', NULL, 'sing', NULL, 'play', NULL, 'stay', NULL, 'watch', NULL, 'D', '3'),
(234, '..... is that ? It\'s my teacher.', NULL, 'What', NULL, 'Who', NULL, 'Where', NULL, 'How', NULL, 'B', '3'),
(235, 'Does she like sandwiches ?...', NULL, 'Yes, she do', NULL, 'Yes, she is', NULL, 'Yes, she does', NULL, 'Yes, she like', NULL, 'C', '3'),
(236, 'This is Mai.... mother is a doctor.', NULL, 'his', NULL, 'she', NULL, 'her', NULL, 'his', NULL, 'C', '3'),
(237, 'She.... a banana.', NULL, 'wants', NULL, 'want', NULL, 'to want', NULL, 'wantes', NULL, 'A', '3'),
(238, 'What is it ? It is....', NULL, 'eraser', NULL, 'eraser', NULL, 'erasers', NULL, 'a eraser', NULL, 'B', '3'),
(239, 'He is.... Vietnam', NULL, 'from', NULL, 'on', NULL, 'in', NULL, 'at', NULL, 'A', '3'),
(240, '.... is that ? It\'s my teacher.', NULL, 'What', NULL, 'Who', NULL, 'Where', NULL, 'How', NULL, 'B', '3'),
(241, 'Does she like sandwiches ?....', NULL, 'Yes, she do', NULL, 'Yes, she is', NULL, 'Yes, she does', NULL, 'Yes, she like', NULL, 'C', '3'),
(242, 'It is not hot .... the winter.', NULL, 'on', NULL, 'in', NULL, 'at', NULL, 'under', NULL, 'B', '3'),
(243, 'We went to the cinema.....', NULL, 'today', NULL, 'yesterday', NULL, 'tomorrow', NULL, 'next Sunday', NULL, 'B', '3'),
(244, 'Does he .... a sore-throat?', NULL, 'has', NULL, 'had', NULL, 'have', NULL, 'having', NULL, 'C', '3');

-- --------------------------------------------------------

--
-- Table structure for table `structure_english`
--

CREATE TABLE `structure_english` (
  `id` decimal(5,0) NOT NULL,
  `name_struct` varchar(255) DEFAULT NULL,
  `structure_eng` varchar(255) DEFAULT NULL,
  `mean_exam` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `structure_english`
--

INSERT INTO `structure_english` (`id`, `name_struct`, `structure_eng`, `mean_exam`) VALUES
('1', 'Thì hiện tại đơn', 'S + V(s/es) + O', 'He walks everyday\r\n(Anh ấy đi bộ mỗi ngày)'),
('2', 'Thì hiện tại đơn với be', 'S + am/is/are + O', 'He is a doctor\r\n(Anh ấy là một bác sĩ)'),
('3', 'Thì quá khứ với V', 'S + V2/ed + O', 'I did my homework last week.'),
('4', 'Thì quá khứ với Be', 'S + was/were + O', 'Yesterday, I was tired.'),
('5', 'Thì hiện tại tiếp diễn', 'S + am/is/are + V-ing + …', 'I am drinking milk tea.'),
('6', 'Thì hiện toại hoàn thành', 'S + have/has + V3/ed + O', 'I have been a student at KMA University for 4 years.'),
('7', 'Cấu trúc với Prefer', 'Prefer + doing + something to + doing + something', 'Thích cái gì hơn cái gì\r\nI prefer sweet potato to potato'),
('8', 'Cấu trúc với Suggest', 'Suggest+ somebody (should) + do something', 'Gợi ý ai làm gì đó'),
('9', 'Cấu trúc với Try', 'Try + to do + something', 'Cố làm gì'),
('10', 'Cấu trúc với Need', 'Need to do something', 'Cần làm gì'),
('11', 'Cấu trúc với Busy', 'Be + busy + doing something', 'Bận rộn làm gì'),
('12', 'Cấu trúc với Make sure', 'Make sure that', 'Bảo đảm rằng'),
('13', 'Cấu trúc với Spend', 'Spend + time/money + on something', 'Dành thời gian/tiền vào việc gì'),
('14', 'Cấu trúc với Tired', 'Be/get + tired + of something', 'Mệt mỏi với điều gì đó');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` decimal(5,0) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `roles` decimal(5,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `username`, `password`, `dob`, `sex`, `roles`) VALUES
('1', 'bac@gmail.com', 'bac', '123', '12/11/1991', 'nu', '1'),
('2', 'an@gmail.com', 'an', '123', '01/01/1989', 'nam', '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `question_eng`
--
ALTER TABLE `question_eng`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `structure_english`
--
ALTER TABLE `structure_english`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `question_eng`
--
ALTER TABLE `question_eng`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT COMMENT 'question id', AUTO_INCREMENT=245;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
