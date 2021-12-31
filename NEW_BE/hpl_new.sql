-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2021 at 09:19 AM
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
-- Table structure for table `config_exam`
--

CREATE TABLE `config_exam` (
  `id` int(11) NOT NULL COMMENT 'config_id',
  `name` varchar(255) DEFAULT '' COMMENT 'name of config',
  `num_easy` int(11) DEFAULT NULL COMMENT 'number of easy question',
  `num_medium` int(11) DEFAULT NULL COMMENT 'number of medium question',
  `num_hard` int(11) DEFAULT 0 COMMENT 'number of hard question',
  `time_exam` int(11) DEFAULT 0 COMMENT 'minutes'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `config_exam`
--

INSERT INTO `config_exam` (`id`, `name`, `num_easy`, `num_medium`, `num_hard`, `time_exam`) VALUES
(1, 'exam1', 50, 30, 20, 0);

-- --------------------------------------------------------

--
-- Table structure for table `exam_result`
--

CREATE TABLE `exam_result` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `result` varchar(255) DEFAULT NULL,
  `starttime` varchar(255) DEFAULT NULL,
  `endtime` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `exam_result`
--

INSERT INTO `exam_result` (`id`, `email`, `result`, `starttime`, `endtime`) VALUES
(1, 'b', '90/100', '12412', '13123'),
(2, 'a', '12/42', '24.124.42', '24.124.42');

-- --------------------------------------------------------

--
-- Table structure for table `question_eng`
--

CREATE TABLE `question_eng` (
  `id` int(5) NOT NULL COMMENT 'question id',
  `question` varchar(255) DEFAULT NULL COMMENT 'question in plain text',
  `question_path` varchar(255) DEFAULT NULL COMMENT 'question with path for media(audio, picture, etc)',
  `ans_a` varchar(255) DEFAULT NULL COMMENT 'ans A in plain text',
  `ans_b` varchar(255) DEFAULT NULL COMMENT 'ans B in plain text',
  `ans_c` varchar(255) DEFAULT NULL COMMENT 'ans C in plain text',
  `ans_d` varchar(255) DEFAULT NULL COMMENT 'ans D in plain text',
  `correct_ans` varchar(3) DEFAULT NULL,
  `level` decimal(5,0) NOT NULL,
  `ans_path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question_eng`
--

INSERT INTO `question_eng` (`id`, `question`, `question_path`, `ans_a`, `ans_b`, `ans_c`, `ans_d`, `correct_ans`, `level`, `ans_path`) VALUES
(17, 'Mr.Sokolov… a positive review of his stay at the Olana Hotel', NULL, 'write', 'wrote', 'writing', 'was written', 'B', '1', NULL),
(18, 'The manager often leads new employees though the safety procedures…', NULL, 'her', 'herself', 'hers', 'she', 'B', '1', NULL),
(19, 'The corporate fitness center is equipped… fourteen stationary bicycles', NULL, 'at', 'on', 'with', 'about', 'C', '1', NULL),
(20, 'Professor Huong will go over the use of the laboratory… with the interns next week', NULL, 'instruments', 'instrumental', 'intrumentally', 'instrumented', 'A', '1', NULL),
(21, 'The goal of the committee was to evaluate the company\'s bylaw and offer … for improvement', NULL, 'renewals', 'registrations', 'recommendations', 'reimbursements', 'C', '1', NULL),
(22, 'The building\'s new ventilation system circulates heat much … than before', NULL, 'even', 'most even', 'evenly', 'more evenly', 'D', '1', NULL),
(23, 'Glowood Application promises customers their money back … they are not satisfied with their purchase', NULL, 'while', 'and', 'if', 'then', 'C', '1', NULL),
(24, 'Most banks now offer clients the option of receiving their statements electronically or … mail', NULL, 'from', 'of', 'in', 'by', 'D', '1', NULL),
(25, 'Contruction at Langhall Plaza is going so well that shops might open before the expected … date', NULL, 'completion', 'selection', 'decision', 'option', 'A', '1', NULL),
(26, 'Kohmek, Inc, is seeking a suitable site … the construction of its electronics factory.', NULL, 'for', 'so', 'to', 'more', 'A', '1', NULL),
(27, 'Studies show that the average audience forms its … of the speaker within the first few seconds of the presentation', NULL, 'impress', 'impressive', 'impressively', 'impression', 'D', '1', NULL),
(28, 'Cranford Culinary Academy offers 35 different classess for … chefs', NULL, 'aspires', 'aspirations', 'aspiring', 'to aspire', 'C', '1', NULL),
(29, 'Mamton Home Furnishings… customized furniture in Pennsylvania for more than a century', NULL, 'manufactures', 'is manufacturing', 'has manufactured', 'manufacture', 'C', '1', NULL),
(30, 'Please hold any phone calls for Ms.Tanaka … she will be in meetings all day', NULL, 'as', 'but', 'despite', 'similarly', 'A', '1', NULL),
(31, 'Dolores Gutierrez excels as an astate planning attorney who helps clients manage their assets…', NULL, 'effect', 'effectively', 'effects', 'effective', 'B', '1', NULL),
(32, 'Data from the finance department was used to … predict the company\'s future expenses', NULL, 'either', 'ever', 'yet', 'better', 'D', '1', NULL),
(33, 'Immediately after the descrease in production was announced, everyone began discussing how … would impact work schedules', NULL, 'us', 'it', 'theirs', 'yours', 'B', '1', NULL),
(34, 'Tomorrow morning, both escalators in the store will be turned off periodically in order to perform … maintenance', NULL, 'required', 'require', 'requiring', 'requires', 'A', '1', NULL),
(35, 'Those who wish to colunteer at the annual Sebastian Park flower-planting event this Saturday … to arrive early', NULL, 'asks', 'are asked', 'has been asking', 'to ask', 'B', '1', NULL),
(36, 'A recent … found that property values in the Agate Valley region had increased by 3 percent between January and June', NULL, 'assessment', 'assessed', 'assessable', 'to assess', 'A', '1', NULL),
(37, 'The Pangea Company will send…. An e-mail confirming receipt of the application', NULL, 'your', 'yourselves', 'yourself', 'you', 'D', '1', NULL),
(38, 'Tours run every day, but there may be … availability on weekends', NULL, 'limit', 'limits', 'limited', 'limitation', 'C', '1', NULL),
(39, 'Bentoc Shoe has a loyal customer base … it provides high-quality service', NULL, 'because', 'rather', 'not only', 'as well', 'A', '1', NULL),
(40, 'Buiding management … asks employees to avoid socializing in the lobby', NULL, 'respects', 'respected', 'respectful', 'respectfully', 'D', '1', NULL),
(41, 'The theater district is located … walking distance of the Yafeh Hotel', NULL, 'within', 'along', 'below', 'down', 'A', '1', NULL),
(42, 'As consumers buy more products online, retailers are finding ways… orders more quickly', NULL, 'have delivered', 'are delivering', 'to deliver', 'delivers', 'C', '1', NULL),
(43, 'Please … that environmental inspectors must renew their certification yearly', NULL, 'proceed', 'secure', 'note', 'keep', 'C', '1', NULL),
(44, 'Mr.Yi\'s calendar is … open for interviews from 3 p.m to 5 p.m on Tuesdays', NULL, 'usually', 'during', 'several', 'longer', 'A', '1', NULL),
(45, 'The lead role … the film Sunpocket was created especially for Ms. Abed', NULL, 'by', 'at', 'in', 'as', 'C', '1', NULL),
(46, 'Your current online banking session … so please log on to your account again', NULL, 'has expired', 'expiring', 'expiration', 'to expire', 'A', '1', NULL),
(47, 'Mr. Wu was responsible for the latest design … at Shu Faucet Company', NULL, 'innovative', 'innovatively', 'innovate', 'innovation', 'D', '1', NULL),
(48, 'Each year, the relationship between what people eat and the state of … health is more fully understood', NULL, 'they', 'their', 'theirs', 'them', 'B', '1', NULL),
(49, 'Poet Yoshino Nagao will read from her latest … collection at Argyle Library on Friday', NULL, 'publisher', 'publish', 'published', 'publishes', 'C', '1', NULL),
(50, 'Retailers have been reporting … strong sales of swimwear for this time of year', NULL, 'surprised', 'surprises', 'to surprise', 'surpringly', 'D', '1', NULL),
(51, 'As the city\'s largest …, Bailin Hospital provides more than 1,000 jobs at its west campus alone', NULL, 'employment', 'employable', 'employing', 'employer', 'D', '1', NULL),
(52, 'The venue is small, so not … who requests a ticket to the play will be able to attend', NULL, 'the other', 'one another', 'everone', 'someone', 'C', '1', NULL),
(53, 'Both the Atkinson Times and the MacMilan Record have sizable readerships, … each targets a different demographic', NULL, 'unless', 'although', 'once', 'whether', 'B', '1', NULL),
(54, 'Because of an ordering error, Vival Market received an … of 200 bags of rice', NULL, 'exceeding', 'exceedingly', 'excess', 'excessive', 'C', '1', NULL),
(55, 'Ms.Choi report that the new accounting software works well, … the computer\'s operating system has been updated', NULL, 'provied that', 'no sooner', 'so as to', 'in view of', 'A', '1', NULL),
(56, 'Reseachers must sign in at the visitor registration table upon … the Briston Literary Archive', NULL, 'entered', 'entering', 'entry', 'enter', 'B', '1', NULL),
(57, 'An interview with author Tito Flores about … new book will be broadcast tonight', NULL, 'himself', 'him', 'his', 'he', 'C', '1', NULL),
(58, 'Perend Trail\'s new hiking boots will be available in brown … black leather', NULL, 'nor', 'yet', 'and', 'so', 'C', '1', NULL),
(59, 'Mr.Ruotolo\'s … on the new tax changes is scheduled for 10 a.m', NULL, 'present', 'presented', 'presentable', 'presentation', 'D', '1', NULL),
(60, 'Boyd Street Market is Mapleton\'s largest retailer of foods … around the world', NULL, 'toward', 'from', 'above', 'plus', 'B', '1', NULL),
(61, 'Mr.Johansson … accepted the job offer he received from Saco Bike Works', NULL, 'quicken', 'quickly', 'quicker', 'quickness', 'B', '1', NULL),
(62, 'To expand its global reach, Amity Spas will … open its franchise opportunities to international prospects', NULL, 'soon', 'almost', 'recently', 'already', 'A', '1', NULL),
(63, 'The second-generation XR1280 unit is … to its predecessor, except for its reduced weight', NULL, 'equally', 'equal', 'equals', 'to equal', 'B', '1', NULL),
(64, 'Vice President Ramos will not make … decisions until more feedback has been gathered', NULL, 'whether', 'what', 'over', 'any', 'D', '1', NULL),
(65, 'Candidates for the open position must have good interpersonal skills and … working with clients', NULL, 'experience', 'experienced', 'experiencing', 'to experience', 'A', '1', NULL),
(66, 'Chong Kim was … recommended for the position of merchandise manager for Corbin Furniture Mart', NULL, 'thickly', 'currently', 'securely', 'highly', 'D', '1', NULL),
(67, 'Once the returned item is received, a refund will appear on your credit-card statement … five business days', NULL, 'within', 'during', 'since', 'when', 'A', '1', NULL),
(68, 'The printer on the second floor will be out of … until the technician arrives on Friday', NULL, 'purpose', 'variety', 'service', 'repair', 'C', '1', NULL),
(69, 'Sales of our computer software were good last quarter, but sales for our mobile applications have been even …', NULL, 'strong', 'stronger', 'strongly', 'strongest', 'B', '1', NULL),
(70, 'Upon request, the guests at Olane Hotel will be provided vouchers … free parking', NULL, 'on', 'to', 'with', 'for', 'D', '1', NULL),
(71, 'Please review the projected sales figures in the spreadsheets that … to the e-mail', NULL, 'is attaching', 'had attached', 'attachment', 'are attached', 'D', '1', NULL),
(72, 'Everyone at the annual Tirmaco exposition seemed … by the new products on display', NULL, 'excite', 'excitement', 'excited', 'excitedly', 'C', '1', NULL),
(73, 'Ms.Wong has has expressed … in leading the city\'s planned beautification project', NULL, 'interest', 'interests', 'interesting', 'interestingly', 'A', '1', NULL),
(74, 'Please save spreadsheets periodically when updating them to prevent data from …', NULL, 'is lost', 'lost', 'being lost', 'losing', 'C', '1', NULL),
(75, '… Gyoh Company\'s marketing push, new orders for cash registers decreased slightly in the third quarter', NULL, 'As', 'If', 'However', 'Despite', 'D', '1', NULL),
(76, 'All members of the sales team must attend next Thursday\'s meeting so that … can see the sales forecast presentation', NULL, 'One of the women is typing on a computer', 'someone', 'everyone', 'either one', 'C', '1', NULL),
(77, 'Up until last year, we marketed our services … though our online partner, Yoder Tech.', NULL, 'exclusive', 'exclusivity', 'exclusiveness', 'exclusively', 'D', '1', NULL),
(78, 'Please be partient as the IT department works … service to your business application', NULL, 'to restore', 'restoration', 'restored', 'had restored', 'A', '1', NULL),
(79, 'Markley Corporation\'s earnings have risen steadily despite significant fluctuations …', NULL, 'about', 'in', 'through', 'onto', 'B', '1', NULL),
(80, 'My whole family will be coming, so the maid has to cater ...twelve on Sunday.', NULL, 'to', 'for', 'of', 'under', 'B', '1', NULL),
(81, 'They have a large argument, yet in the end, they agree to love one ... despite their disagreements.', NULL, 'the other', 'other', 'another', 'each', 'C', '1', NULL),
(82, 'Sometimes she does not agree ... her husband about child rearing but they soon find the solutions', NULL, 'with', 'for', 'on', 'of', 'A', '1', NULL),
(83, 'It wasn\'t an awful experience. It was the worst thing ... has ever happened to me.', NULL, 'that', 'what', 'why', ' which', 'A', '1', NULL),
(84, 'No matter how busy I may be, I shall be there tonight come what ...', NULL, 'may', 'might', 'can', 'could', 'A', '1', NULL),
(85, 'Organizations may qualify for exemption from income tax if they … exclusively as charities.', NULL, 'operated', 'operate', 'had operated', 'are operated', 'B', '1', NULL),
(86, 'You like coffee, ....?', NULL, 'don\'t you', 'didn\'t you', 'won\'t you', 'haven\'t you', 'A', '1', NULL),
(87, 'This is ... second time I have ever eaten this food.', NULL, 'a', 'the', 'an', 'no article', 'B', '1', NULL),
(88, 'The whole world is waiting ...... a vaccine against Covid-19.', NULL, 'with', 'for', 'at', 'in', 'B', '1', NULL),
(89, 'In a formal interview, it is essential to maintain good eye … with the interviewers.', NULL, 'contact', 'touch', 'link', 'connection', 'A', '1', NULL),
(90, 'We expected her at nine but she finally … at midnight. ', NULL, 'turned up', 'came off', 'came to', 'turned out', 'A', '1', NULL),
(91, 'This cloud pattern is not … of a tropical hurricane. ', NULL, 'characterizing', 'characterized', 'characterization', 'characteristic', 'D', '1', NULL),
(92, 'No matter how busy I may be, I shall be there tonight come what ...', NULL, 'may', 'might', 'can', 'could', 'A', '1', NULL),
(169, 'The Physical Therapy Association is committed to keeping costs … for its certification programs', NULL, 'affordable', 'permitted', 'cutting', 'necessary', 'A', '2', NULL),
(170, 'To remain on schedule, editors must submit all … to the book to the authors by Friday', NULL, 'ideas', 'essays', 'revisions', 'suggestions', 'C', '2', NULL),
(171, 'At Pharmbeck\'s banquet, Mr.Jones … a trophy for his performance in this year\'s quanlity-improvement iniative', NULL, 'accepted', 'congratulated', 'nominated', 'hoped', 'A', '2', NULL),
(172, 'One of Grommer Consulting\'s goals is to enhance the relationship … salespeople and their customers', NULL, 'inside', 'within', 'around', 'between', 'D', '2', NULL),
(173, 'Any requests for time off should be addressed to ther … department supervisor', NULL, 'urgent', 'appropriate', 'subsequent', 'deliverable', 'B', '2', NULL),
(174, 'Company executives are currently reviewing the annual budget … submitted to them by the Financial Planning department', NULL, 'requirements', 'deliveries', 'developers', 'quanlities', 'A', '2', NULL),
(175, 'Last year, Tadaka Computer Solutions ranked third … in regional earnings', NULL, 'together', 'overall', 'consecutively', 'generally', 'B', '2', NULL),
(176, '… the popularity of the BPT39 wireless speaker, production will be increased fivefold starting next month', NULL, 'On behalf of', 'Whether', 'Moreover', 'As a result of', 'D', '2', NULL),
(177, '… events this year caused profits in the second and third quarters to differ significantly from original projections', NULL, 'Total', 'Marginal', 'Representative', 'Unforeseen', 'D', '2', NULL),
(178, 'The time for the pathway lighting project was extended to … input from the environmental commission', NULL, 'use up', 'belive in', 'make into', 'allow for', 'D', '2', NULL),
(179, 'The … of videos to electronic press releases can help companies showcase their products', NULL, 'content', 'addition', 'pictures', 'promotion', 'B', '2', NULL),
(180, 'When leaving the auditorium, please exit … the doors on the lower level', NULL, 'except', 'inside', 'without', 'through', 'D', '2', NULL),
(181, 'I have attached my resume detailing my … experience in the hotel industry', NULL, 'extensive', 'punctual', 'prospective', 'accepted', 'A', '2', NULL),
(182, 'In preparation for Mr.Kumar\'s retirement at the end of March, the Carolex Corporation will need to … a new facilities director', NULL, 'resume', 'compete', 'recruit', 'conduct', 'C', '2', NULL),
(183, 'Please read the list of … qualifications to ensure that you have the necessary education and experience for the position', NULL, 'slight', 'equal', 'obliged', 'essential', 'D', '2', NULL),
(184, 'RZT Technology will double the size of its Toronto laboratory to … the organization\'s rapid growth', NULL, 'assign', 'investigate', 'experience', 'accommodate', 'D', '2', NULL),
(185, 'The Williamsport Hotel is an ideal venue for the conference because of its … to the airport', NULL, 'achievement', 'proximity', 'competence', 'exception', 'B', '2', NULL),
(186, 'The long-awaited Weka 2XG digital camera will finally be … at a product exhibition on August 16', NULL, 'reduced', 'unveiled', 'consulted', 'resolved', 'B', '2', NULL),
(187, 'Amby Cable… $25 to all Internet subscribers after the weeklong service interruption', NULL, 'refunded', 'accepted', 'divided', 'deposited', 'A', '2', NULL),
(188, 'The board of directions will meet next Monday to examine the current hiring…', NULL, 'purpose', 'intent', 'assembly', 'policy', 'D', '2', NULL),
(189, 'Passegers should not leave their seats… a flight attendant gives them permission to do so', NULL, 'unless', 'reather', 'instead', 'otherwise', 'A', '2', NULL),
(190, 'The theater doors will close and the show will start at precisely 8 p.m, so guests are reminded to be …', NULL, 'rapid', 'sudden', 'punctual', 'instant', 'C', '2', NULL),
(191, 'All vacation requests must be made to your supervisor … the requested date.', NULL, 'prior to', 'except for', 'previously', 'because', 'A', '2', NULL),
(192, 'Mr. Cutler has been asked to … domestic sales of low-calorie beverages', NULL, 'oversee', 'possess', 'succeed', 'persist', 'A', '2', NULL),
(193, '…, items sold at the Scottville Craft Fair are unique and of very high quality', NULL, 'Fairly', 'Typically', 'Simply', 'Entirely', 'B', '2', NULL),
(194, 'Mr.Singh was … about sales of the fragrance after the first round of customer focus groups', NULL, 'extensive', 'distinct', 'optimistic', 'superior', 'C', '2', NULL),
(195, 'Every year Arrow Mill, Inc., processes a … amount of grain', NULL, 'durable', 'direc', 'resolute', 'substantial', 'D', '2', NULL),
(196, 'Although Mr.Yanamura\'s theory is … controversial, it does help explain the latest changes in the market', NULL, 'nearly', 'urgently', 'gracefully', 'certainly', 'D', '2', NULL),
(197, 'Mr.Yamamoto\'s farewell party was… in the cafeteria on Tuesday', NULL, 'meant', 'held', 'taken', 'built', 'B', '2', NULL),
(198, 'XAG Motors recommends checking yours vehicle\'s oil at … intervals', NULL, 'heavy', 'genuine', 'regular', 'immediate', 'C', '2', NULL),
(199, 'Rincon Data has just opened a new facility that is … larger than its previous one', NULL, 'expertly', 'significantly', 'prominently', 'historically', 'B', '2', NULL),
(200, '… from customers is valuable in determining where we need to improve', NULL, 'Inventory', 'Feedback', 'Possibility', 'Distribution', 'B', '2', NULL),
(201, 'An inspection of the Coltier Building identified several … defects', NULL, 'private', 'instructional', 'complimentary', 'structural', 'D', '2', NULL),
(202, 'Curitour Travel offers … thoughtout Asia that vary in length, cost, and group size', NULL, 'excursions', 'refreshments', 'improvements', 'institutions', 'A', '2', NULL),
(203, '… the accquisition of a competitor, Plautner Electric has become the biggest appliance retailer in the city', NULL, 'With', 'Wherever', 'Together', 'Above', 'A', '2', NULL),
(204, 'The shipment delay was … caused by miscommunication within our department', NULL, 'primarily', 'eventually', 'hastily', 'reluctantly', 'A', '2', NULL),
(205, 'Over the years, Garnet Advertising has … supported its employees\' volunteer work for charitable organizations', NULL, 'currently', 'upwardly', 'severely', 'actively', 'D', '2', NULL),
(206, 'Ms. Rakel\'s new Stockholm office tower is sure to be recognized as a highlight of … architecture', NULL, 'instant', 'associated', 'contemporary', 'simultaneous', 'C', '2', NULL),
(207, 'Zarmeni Mining has been evaluating the benefits of building a mine at the … site', NULL, 'proposed', 'structured', 'unlimited', 'educated', 'A', '2', NULL),
(208, 'If you have ordered more than two items, be aware they may arrive in separate …', NULL, 'payments', 'sequences', 'packages', 'receipts', 'C', '2', NULL),
(209, 'During tourist season, selling handmade crafts is a … source of income for local residents', NULL, 'contented', 'dependable', 'flavorful', 'patient', 'B', '2', NULL),
(210, 'This Saturday, Ritesense customers will have the opportunity to sample a … of Health Bar products', NULL, 'nutrition', 'selection', 'placement', 'management', 'B', '2', NULL),
(211, 'Mr.Choo was chosen to head the committee for consumer protection from a … pool of candidates', NULL, 'sizable', 'practiced', 'consecutive', 'missing', 'A', '2', NULL),
(212, 'The updated medical-records system will … that patients and doctors can easily access accurate information', NULL, 'ensure', 'allow', 'accept', 'provide', 'A', '2', NULL),
(213, 'President Grimaud would like to thank the marketing department for … the mislabeling issue to her attention', NULL, 'showing', 'telling', 'bringing', 'making', 'C', '2', NULL),
(214, 'The audience clapped as the cast came out on the stage to take their …', NULL, 'bow', 'performance', 'seat', 'picture', 'A', '2', NULL),
(215, 'If you have symptoms of COVID-19, seek medical ... immediately.', NULL, 'contemplation', 'focus', 'attention', 'consideration', 'C', '2', NULL),
(216, 'Since the juvenile crime rates continue to ascend, the public insists that law .... be improved.', NULL, 'application', 'enforcement', 'execution', 'obedience', 'B', '2', NULL),
(217, 'Jim ... his best suit to make a good impression on his future in-laws.', NULL, 'took on', 'took off', 'put on', 'put off', 'C', '2', NULL),
(218, 'People thought that maybe his novel might one day be turned into a ﬁlm and become a Hollywood …', NULL, 'best-seller', 'attraction', 'blockbuster', 'debut', 'C', '2', NULL),
(219, 'Everyone is hoping and praying that … peace will eventually come to the area.', NULL, 'durable', 'ongoing', ' irrevocable', 'lasting', 'D', '2', NULL),
(220, 'The … are against her winning a fourth consecutive gold medal.', NULL, 'chances', 'odds', 'prospects', 'bets', 'B', '2', NULL),
(221, 'James could no longer bear the ______surroundings of the decrepit old house.', NULL, 'overbearing', 'domineering', 'pressing', 'oppressive', 'D', '2', NULL),
(222, ' Mary lost one running shoe, but won the race despite this ....', NULL, 'feat', 'disaster', 'handicap', 'awkwardness', 'D', '2', NULL),
(223, 'Susan will graduate in June ... she submits her dissertation on time.', NULL, 'provided', 'supposing', 'unless', 'otherwise', 'A', '2', NULL),
(224, 'Our firm is so successful because it is at the cutting ... of computer technology.', NULL, 'limit', 'verge', 'fringe', 'edge', 'D', '2', NULL),
(225, 'The Springdate supermarket survey … will be released a week after they are evaluated', NULL, 'events', 'stores', 'results', 'coupons', 'C', '2', NULL),
(226, 'A wooden bridge crossing the wading pond … to the hotel\'s nine-hole golf course', NULL, 'prepares', 'leads', 'presents', 'takes', 'B', '2', NULL),
(227, 'All produce transported by Gocargo Trucking is refrigerated … upon pickup to prevent spoilage', NULL, 'lately', 'promptly', 'potentially', 'clearly', 'B', '2', NULL),
(228, 'CEO Yoshiro Kasai has expressed complete faith in Fairway Maritime\'s … to deliver the product on time', NULL, 'belief', 'measure', 'problem', 'ability', 'D', '2', NULL),
(229, 'What was the matter with him? He........ a toothache', NULL, 'to have', 'have', 'has', 'had', 'D', '3', NULL),
(230, 'What subject is he......... now? Vietnamese.', NULL, 'to learn', 'learn', 'learning', 'learned', 'C', '3', NULL),
(231, '... did she go yesterday morning? She went to the bookshop.', NULL, 'What', 'Where', 'When', 'Why', 'A', '3', NULL),
(232, 'Are you free.... the evening? Yes, I am.', NULL, 'in', 'on', 'at', 'to', 'A', '3', NULL),
(233, 'She is going to.... television tonight.', NULL, 'sing', 'play', 'stay', 'watch', 'D', '3', NULL),
(234, '..... is that ? It\'s my teacher.', NULL, 'What', 'Who', 'Where', 'How', 'B', '3', NULL),
(235, 'Does she like sandwiches ?...', NULL, 'Yes, she do', 'Yes, she is', 'Yes, she does', 'Yes, she like', 'C', '3', NULL),
(236, 'This is Mai.... mother is a doctor.', NULL, 'his', 'she', 'her', 'his', 'C', '3', NULL),
(237, 'She.... a banana.', NULL, 'wants', 'want', 'to want', 'wantes', 'A', '3', NULL),
(238, 'What is it ? It is....', NULL, 'eraser', 'eraser', 'erasers', 'a eraser', 'B', '3', NULL),
(239, 'He is.... Vietnam', NULL, 'from', 'on', 'in', 'at', 'A', '3', NULL),
(240, '.... is that ? It\'s my teacher.', NULL, 'What', 'Who', 'Where', 'How', 'B', '3', NULL),
(241, 'Does she like sandwiches ?....', NULL, 'Yes, she do', 'Yes, she is', 'Yes, she does', 'Yes, she like', 'C', '3', NULL),
(242, 'It is not hot .... the winter.', NULL, 'on', 'in', 'at', 'under', 'B', '3', NULL),
(243, 'We went to the cinema.....', NULL, 'today', 'yesterday', 'tomorrow', 'next Sunday', 'B', '3', NULL),
(244, 'Does he .... a sore-throat?', NULL, 'has', 'had', 'have', 'having', 'C', '3', NULL),
(276, NULL, './media/picture/0.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/0.m4a'),
(277, NULL, './media/picture/1.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/1.m4a'),
(278, NULL, './media/picture/2.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/2.m4a'),
(279, NULL, './media/picture/3.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/3.m4a'),
(280, NULL, './media/picture/4.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/4.m4a'),
(281, NULL, './media/picture/5.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/5.m4a'),
(282, NULL, './media/picture/6.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/6.m4a'),
(283, NULL, './media/picture/7.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/7.m4a'),
(284, NULL, './media/picture/8.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/8.m4a'),
(285, NULL, './media/picture/9.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/9.m4a'),
(286, NULL, './media/picture/10.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/10.m4a'),
(287, NULL, './media/picture/11.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/11.m4a'),
(288, NULL, './media/picture/12.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/12.m4a'),
(289, NULL, './media/picture/13.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/13.m4a'),
(290, NULL, './media/picture/14.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/14.m4a'),
(291, NULL, './media/picture/15.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/15.m4a'),
(292, NULL, './media/picture/16.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/16.m4a'),
(293, NULL, './media/picture/17.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/17.m4a'),
(294, NULL, './media/picture/18.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/18.m4a'),
(295, NULL, './media/picture/19.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/19.m4a'),
(296, NULL, './media/picture/20.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/20.m4a'),
(297, NULL, './media/picture/21.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/21.m4a'),
(298, NULL, './media/picture/22.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/22.m4a'),
(299, NULL, './media/picture/23.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/23.m4a'),
(300, NULL, './media/picture/24.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/24.m4a'),
(301, NULL, './media/picture/25.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/25.m4a'),
(302, NULL, './media/picture/26.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/26.m4a'),
(303, NULL, './media/picture/27.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/27.m4a'),
(304, NULL, './media/picture/28.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/28.m4a'),
(305, NULL, './media/picture/29.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/29.m4a'),
(306, NULL, './media/picture/30.png', NULL, NULL, NULL, NULL, NULL, '0', './media/audio/30.m4a');

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
  `id` int(11) NOT NULL,
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
(1, 'a', 'bac', '123', '12/11/1991', 'nu', '1'),
(2, 'f', 'an', '123', '01/01/1989', 'nam', '0'),
(3, 'test', 'anv', '123', '', '', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `config_exam`
--
ALTER TABLE `config_exam`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exam_result`
--
ALTER TABLE `exam_result`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `config_exam`
--
ALTER TABLE `config_exam`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'config_id', AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `exam_result`
--
ALTER TABLE `exam_result`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `question_eng`
--
ALTER TABLE `question_eng`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT COMMENT 'question id', AUTO_INCREMENT=307;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
