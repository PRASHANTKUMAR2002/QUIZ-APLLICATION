const intell=new Map();
const intc=new Map();
const apt=new Map();
const aptc=new Map();
const awr =new Map();
const awrc=new Map();
const eng=new Map();
const engc=new Map();
let engl,inte,apti,awre;
const questionintell=[{question :" Select the correct combination of mathematical signs to sequentially replace the * signs and balance the given equation. \n 268 * 4 * 8 * 5 * 14 = 41 ",options :["× ÷ + −","+ × − ÷","÷ × + −","÷ − × +"],answer:"D"},
  {question :"In a certain code language, ‘MADRAS’ is written as ‘112’ and ‘JAMMU’ is written as ‘82’.How will ‘PUNJAB’ be written in that language?",options :["112","109","104","115"],answer:"C"},
  {question :"Select the option that represents the letters that, when placed from left to right in the following blanks, will complete the letter-series. \n F I R _ D F _ _ E D F _ T _ D F I _ E _",options :[" E I S I E U E","E H S I E U D"," E G S J E U E","E I S I E U D"],answer:"D"},
  {question :"There are 4 friends A, B, C and D standing in a straight line, though not necessarily in the same order. A and B are ahead of at least 1 person. B stands between C and D. D does not stand last. Who stands first?",options :["D","C","B","A"],answer:"D"},
  {question :"In a code language, 'PLUMAGE' is written as ‘GICOWNR’ and 'CRUSH' is written as 'JUWTE'. How will 'TRIBAL' be written in that language? ",options :["NCBJTV","NCBKTV","NCDKTV"," NCDJTV"],answer:"C"},
  {question :"If ÷ means −, − means ×, × means +, + means ÷, what will come in place of the question mark (?)? \n 77 ÷ 7 × 17 – 49 + 7 = ?",options :["119","145","189","169"],answer:"D"},
  {question :"Select the set in which the numbers are related in the same way as are the numbers of the following set.\n (NOTE: Operations should be performed on the whole numbers, without breaking down the numbers into its constituent digits. E.g., 13 – Operations on 13 such as adding /subtracting /multiplying etc. to 13 can be performed. Breaking down 13 into 1 and 3 and then performing mathematical operations on 1 and 3 is NOT allowed).\n (16, 7, 81) \n (24, 16, 64)"
  ,options :["(13, 7, 36)","(48, 39, 18)","(37, 25, 100)","(21, 19, 8)"],answer:"A"},
  {question :"Select the option that is related to the fifth number in the same way as the second number is related to the first number and the fourth number is related to the third number.\n 68 : 19 :: 76 : 21 :: 164 : ?",options :["45","39","43","41"],answer:"C"},
  {question :"In a certain code language, ‘COMMUNITY’ is written as ‘YITUNMCOM’ and ‘AUTHORITY’ is written as ‘YITORHAUT’. How will ‘ISOLATION’ be written in that language?",options :["NIAOTLISO","NIOATILSO","NIOATLIOS","NIOATLISO"],answer:"D"},
  {question :"In a certain code language ‘BOTTLE’ is written as ‘148’, ‘SIPPER’ is written as ‘166’.How will ‘BUMPER’ be written in that language?",options :["160","170","150","180"],answer:"C"},
  {question :"Select the option that is related to the fifth letter-cluster in the same way as the second letter-cluster is related to the first letter-cluster and the fourth letter-cluster is related to the third letter-cluster.\n ACCUSED : UCCASDE :: FACTORY : TCAFOYR :: DYNAMIC : ?",options :["YNMICAD","DNYMACI","ANYDMCI","DANYMIC"],answer:"C"},
  {question :"A # B means ‘A is the sister of B’. \n A @ B means ‘A is the son of B’. \n A & B means ‘A is the father of B’. \n A % B means ‘A is the mother of B’. \n If W & Q # T & Y @ M % K, then how is Q related to K?",options :["Mother’s sister","Sister","Father’s sister","Father’s mother"],answer:"C"},
  {question :"0 Read the given statement(s) and conclusions carefully. Assuming that the information given in the statements is true, even if it appears to be at variance with commonly known facts, decide which of the given conclusions logically follow(s) from the statement(s). \n Statements: \ n Some pencils are rods. \n No rod is a door. \n All balls are rods. \n Conclusions: \n I. Some pencils being balls is a possibility. \n II. No ball is a door. \n III. All rods are balls. \n IV. No pencil is a door.",options :["Only Conclusions I, II and IV follow","Only Conclusions I and II follow","Only Conclusion I follows","Only Conclusions II and III follow"],answer:"B"},
  {question :" Select the word-pair that best represents a similar relationship to the one expressed in the given pair of words. \n (The words must be considered as meaningful English words and must not be related to each other based on the number of letters/number of consonants/vowels in the word) \n Rice : Carbohydrates",options :["Eggplant : Vegetable","Flesh : Chicken","Cottage cheese : Protein","Orange : Fruit"],answer:"C"},
  {question :"2 A series is given with one term missing. Select the correct alternative from the given ones that will complete the series. \n NTR, TCE, ZLR, FUE, ?",options :["LMR","LDR","RNQ","RMO"],answer:"B"},
  {question :"Which of the following letter-clusters will replace the question mark (?) in the given series? \n DBK, GDL, JFM, MHN, ?",options :["QKN","PKO","PJO","QJO"],answer:"C"},
  {question :" If A × B means that A is the brother of B, A – B means that A is the sister of B, A + B means that A is the father of B then which of the following expression shows that P is the father of R?",options :["P + Q × R","P × Q + R","P + Q ÷ R","P – Q × R"],answer:"A"},
  {question :"6 In the following question below are given some statements followed by some conclusions based on those statements. Taking the given statements to be true even if they seem to be at variance from commonly known facts. Read all the conclusions and then decide which of the given conclusion logically follows the given statements. \n Statements: \n I. No A is B. \n II. No C is B. \n Conclusion: \n I. Some C are not A. \n II. Some A are B.",options :["Neither conclusion follows","Only conclusion II follows","Only conclusion I follows","Both conclusions I and II follows"],answer:"A"},
  {question :" By Interchanging the given two numbers which of the following equation will be correct? 4 and 6",options :["4 ÷ 2 + 3 – 6 × 5 = –14","9 ÷ 3 + 6 × 5 – 4 = 18","4 × 3 + 6 – 2 ÷ 1 = 21","4 – 6 ÷ 2 + 3 × 5 = 20"],answer:"A"},
  {question :" Select the odd group of numbers. (NOTE: Operations should be performed on the whole numbers, without breaking down the numbers into its constituent digits. E.g.13 – Operations on 13 such as adding /subtracting /multiplying etc. to 13 can be performed. Breaking down 13 into 1 and 3 and then performing mathematical operations on 1 and 3 is not allowed) ",options :["(14 – 28 – 42)","(16 – 32 – 64 )","(18 –36 –72 )","(12 –24 – 48 )"],answer:"A"},
  {question :" Select the option that is related to the fourth term in the same way as the first term is related to the second term and the fifth term is related to the sixth term. \n 16 : 96 :: ? : 161 :: 18 : 120",options :["22","21","20","24"],answer:"B"},
  {question :"Select the correct combination of mathematical signs to sequentially replace the * signs and to balance the given equation. \n 50 * 10 * 20 * 5 * 105",options :["÷, ×, +, =","×, −, +, =","÷, ×, −, =","×, ÷, +, ="],answer:"A"},
  {question :"After arranging the given words according to dictionary order, which word will come at ‘Third’ position? \n 1. Overwork \n 2. Overwrought \n 3. Overwhelming \n 4. Overweight \n 5. Overweening",options :["Overwhelming","Overwrought","Overweight","Overweening"],answer:"A"},
  {question :"Which of the following interchange of numbers and mathematical signs would make the given equation correct? \n 28 + 7 × 10 ÷ 5 − 20 = 5",options :["10 and 20, × and + ","5 and 20, − and ÷","7 and 28, × and ÷","5 and 10, + and ÷"],answer:"D"},
  {question :"Three of the following letter-clusters are alike in some manner and hence form a group. Which letter-cluster does not belong to that group?",options :["PONM","EDCB","SRQP","BYXW"],answer:"D"}];

  const questionapt=[{question :"Find the number of diagonals of a regular polygon, sum of whose interior angles is 2700°.",options :["117","119","121","127"],answer:"B"},
    {question :"Find the exact value of cos 120°.",options :["0.5","-0.5","1","0"],answer:"B"},
    {question :"If △ABC is right angled at B, AB = 12 cm and ∠CAB = 60°, determine the length of BC.",options :["12","24","25","26"],answer:"A"},
    {question :"The number 1254216 is divisible by which of the following numbers?",options :["5","16","11","8"],answer:"D"},
    {question :"Successive discounts of 10% and 10% are equivalent to a single discount of",options :["19","18","20","21"],answer:"A"},
    {question :"The average marks obtained by Saloni in four papers is 51, and in the fifth paper she gets 56 marks. Find her new average in all five papers.",options :["49","50","52","51"],answer:"C"},
    {question :"The monthly income of Mr. Roy is Rs.18,000. He took a loan of Rs.30,000 on simple interest for 3 years at the rate of 5% per annum. The amount that he will be paying as simple interest in 3 years is what percent of his monthly salary?",options :["30%","35%","20%","25%"],answer:"D"},
    {question :"When m12– 1 is divided by m + 1, the remainder is:",options :["1","2","0","–1"],answer:"C"},
    {question :"Ramesh purchases a table and a chair for Rs.3,900. He sells the table at a profit of 8% and the chair at a profit of 16%. He earns a profit of Rs.540. What is the difference between the original price of the table and the chair?",options :["Rs.2,000","Rs.1,800","Rs.1,900","Rs.1,700"],answer:"B"},
    {question :"9 The number of units manufactured by a company A was 12500 units in 2019 and 10625 units in 2020. While in company B, the production fell from 34000 units in 2019 to 30600 units in 2020. If X and Y are the percentage decrease in the number of units manufactured by company A and B respectively from 2019 to 2020, then what will be the ratio of X and Y?",options :["5 : 3","3 : 4","3 : 2","8 : 5"],answer:"C"},
    {question :"The circumference of the two circles is 110 cm and 330 cm respectively. What is the difference between their radii?",options :["70 cm","15 cm","46 cm","35 cm"],answer:"D"},
    {question :"An article costs Rs.4,000 to a shopkeeper, who marks its price at Rs.8,400. The shopkeeper sells it to a customer at a discount of 25%. The customer gets a further discount of 15% on the discounted price if the customer redeems a coupon issued by the store previously. What is the profit percentage (to the nearest integer) earned by the shopkeeper in this transaction?",options :["34%","51%","42%","36%"],answer:"A"},
    {question :" If the numerical value of twice the curved surface area of a right circular cylinder is equal to the numerical value of its volume, then what is the numerical value of the radius of the base of the cylinder?",options :["2","3","5","4"],answer:"D"},
    {question :" The hour hand moves through 4 hours and has a length of 6 cm. Find the area (in cm2,rounded off to two decimal places) of the sector covered by the hour hand",options :["32.69","30.67","37.71","35.75"],answer:"C"},
    {question :"Salaries of Rida and Riya are in the ratio of 3 : 5, respectively. If the salary of each one is increased by Rs.5,000, then the new ratio becomes 5 : 7. What is Riya’s present salary?",options :["Rs.12,500","Rs.7,500","Rs.2,500","Rs.10,000"],answer:"A"},
    {question :" Ram, Shyam, Rohan, Reeta and Mukesh are five members of a family who are weighed consecutively and their average weight is calculated after each member is weighed. If the average weight increases by 2 kg each time, how much heavier is Mukesh than Ram?",options :["14 kg","18 kg","16 kg","12 kg"],answer:"C"},
    {question :" A is 20% more efficient than B. How much time will they working together take to complete a job which A alone could have done in 29 days?",options :["145/11","116/11","203/11","174/11"],answer:"D"},
    {question :" Determine the LCM of two numbers if their HCF is 9 and their ratio is 14 : 19.",options :["2394","3990","1596","3192"],answer:"A"},
    {question :"4 In ∆PQR, ∠Q = 90°, PQ=8 cm and ∠PRQ=45°. Find the length of QR",options :["6 cm","3 cm","5 cm","8 cm"],answer:"D"},
    {question :" In a 1000 m race, Arjun, Balaji and Charan are running. Arjun beats Balaji by 100 m, and Balaji beats Charan by 100 m. In the next 1000 m race (the speeds are the same as in the previous), Balaji gives Charan a head start of 100 m, and Arjun gives Balaji a head start of 100 m. Find the distance by which the winner is ahead of the person just behind him",options :["100 m","40 m","30 m","20 m"],answer:"D"},
    {question :"The HCF of two numbers is 21 and their LCM is 840. If one of the numbers is 49, then the other number is:",options :["650","540","810","360"],answer:"D"},
    {question :"The ratio of the cost price and selling price of an article is 10 : 11. The gain per cent is:",options :["10%","8%","5%","15%"],answer:"A"},
    {question :"A machine takes 10 h to cut 240 tools. How many tools will it cut in 25 h?",options :["600","480","550","360"],answer:"A"},
    {question :"The least number that should be added to 35460 so that the sum is exactly divisible by 3, 4, 5 and 7 is",options :["84","420","240","180"],answer:"C"},
    {question :"If ∆ABC~∆EDF such that AB = 6 cm, DF =16 cm and DE = 8 cm, then the length of BC is:",options :["12 cm","10 cm","14 cm","8 cm"],answer:"A"}];

    const questioneng=[{question :"The following sentence has been split into four segments. Identify the segment that contains a grammatical error. \n One of the students is always / late to the class; he has been warn / by the teacher many times; / but still, he keeps on being late.",options :["One of the students is always","but still, he keeps on being late","by the teacher many times;","late to the class; he has been warn"],answer:"D"},
    {question :"Select the word segment that substitutes (replaces) the bracketed word segment correctly and completes the sentence meaningfully. \n The percentage of employees who called in sick and the number of employees who left their jobs within 2 years (were reflective of the level of job satisfaction).",options :["are reflective of the level of job satisfaction","is reflective of the level of job satisfaction","has reflected the level of job satisfaction","were reflective on the level of job satisfaction"],answer:"A"},
    {question :"Sentences of a paragraph are given below in jumbled order. Arrange the sentences in the correct order to form a meaningful and coherent paragraph. \n A. Omnivores get energy and nutrients from plant and animal materials by digesting carbs, protein, fat and fibre and metabolising the nutrients and energy of the sources ingested. \n B. The many diverse animals categorised as omnivores may be divided into subcategories based on their dietary habits. \n C. An omnivore is an animal that can feed and thrive on both, plant and animal substances. \n D. They also have the capacity to integrate food sources like algae, fungus and bacteria into their diet.",options :["CABD2","ACDB","CADB","DCBA"],answer:"C"},
    {question :"Select the most appropriate synonym of the underlined word in the following sentence. \n Roads in villages during rainy seasons become muddy.",options :["fuzzy","filthy","blurred","unsoiled"],answer:"B"},
    {question :"Select the most appropriate synonym of the underlined word. The poet managed to paint a vivid picture of the landscape by the river through words.",options :["Metaphoric","Evocative","Contemporary","Blurred"],answer:"B"},
    {question :"Select the option that expresses the given sentence in active voice. \n I was fascinated by the novel.",options :["The novel was fascinated to me.","The novel fascinated me.","The novel fascinate me.","The novel fascinates me."],answer:"B"},
    {question :"Select the INCORRECTLY spelt word in the following sentence. \n There lies no guarantee that the hierchical structural framework between the elite and downtrodden sections of the society is right.",options :["hierchical","guarantee","structural","downtrodden"],answer:"A"},
    {question :"Select the sentences that contains no spelling errors.",options :["Diabeties is a chronic disease.","Diabetes is a chronic disease.","Daibetes is a chronic disease.","Diabites is a chronic disease."],answer:"B"},
    {question :"The following sentence has been split into four segments. Identify the segment that contains a grammatical error. \n The man who / was committed / the theft last night / was caught this evening.",options :["was caught this evening.","was committed","The man who","the theft last night"],answer:"B"},
    {question :"Select the most appropriate option that can substitute the underlined segment in the given sentence. \n Health club membership has grown by leaps and bounds after the pandemic.",options :["slowly and gradually","full of speed and excitement","hurriedly","very quickly"],answer:"D"},
    {question :"Select the most appropriate meaning of the given idiom. \n Steer clear of",options :["Show someone how to do a job or activity","Be very easy","Avoid someone or something because it is dangerous for you","Be mentally and physically exhausted"],answer:"C"},
    {question :"Find the number of diagonals of a regular polygon, sum of whose interior angles is 2700°.2 Select the most appropriate option that can substitute the underlined segment in the given sentence. If there is no need to substitute it, select ‘No substitution’. \n The students decided to surprise their teacher on her birthday",options :["their teacher at her birthday","there teacher on her birthday","her teacher on her birthday","No substitution"],answer:"D"},
    {question :" Select the option that expresses the given sentence in active voice.The driver was taken to the nearest dispensary by the beggars.",options :["The beggars take the driver to the nearest dispensary.","The beggars took the driver to dispensary.","The beggars took the driver to the nearest dispensary.","To the nearest dispensary, the beggars took the driver."],answer:"C"},
    {question :"Select the most appropriate option that can substitute the underlined segment in the given sentence.\n He was sitting besides his best friend during the event.",options :["was sitting about his","was sitting beside his","were sitting besides his","was sitting besides her"],answer:"B"},
    {question :"Select the most appropriate synonym of the underlined word in the given sentence. \n The efforts of the doctors came to a futile end with the death of the patient",options :["Fruitless","Enriching","Startling","Terrifying"],answer:"A"},
    {question :"Complete the following collocation. \n When I got the job, I knew what _______ money really is",options :["effort-earned","soft-earned","hard-earned","honest-earned"],answer:"C"},
    {question :"Rearrange the parts of the sentence in correct order. \n Russell Wilson, an NFL \n P. about Naomi Osaka saying that her \n Q. has been spectacular to watch \n R. humility and dedication to others \n S. player for the Seattle Seahawks, wrote",options :["SPRQ","PRQS","RPQS","QPRS"],answer:"A"},
    {question :"Select the most appropriate collocating word to fill in the blank. \n This statement of the political leader has created________confusion.",options :["utter","heavy","weighty","vast"],answer:"A"},
    {question :"Select the most appropriate synonym of the underlined word. \n Marcella seemed morose and downcast when she refused to have dinner.",options :["Jocund","Excited","Gloomy","Liberal"],answer:"C"},
    {question :"Select the correct direct form of the given sentence. \n Shravan said that the prisoner had slept throughout the journey",options :["Shravan said, \"The prisoner sleeps throughout the journey.\"","Shravan said, \"The prisoner had been sleeping throughout the journey.\"","Shravan says, \"The prisoner has slept throughout the journey.\"","Shravan said, \"The prisoner had slept throughout the journey.\""],answer:"D"},
    {question :"Comprehension:In the following passage, some words have been deleted. Read the passage carefully andselect the most appropriate option to fill in each blank. \n Comics have (1) ________ many superheroes. Bantul, the great was (2) ________ in the year 1965 in the backdrop of the Indo-Pak war. Indrajal comics was set up in 1964 and (3)  __________ Aabid Surti, who gave birth to a character called Bhadur in 1976 wearing kurta and jeans. Raj comics too (4) ________ into this sphere with their (5) ________ toons Nagraj, Tiranga and Shakti together called Brahman Rakshak (protectors of the universe).\n  Select the most appropriate option to fill in blank number 1.",options :["built","produced","fabricated","manufactured"],answer:"B"},
    {question :"Comprehension:In the following passage, some words have been deleted. Read the passage carefully and select the most appropriate option to fill in each blank. \n Comics have (1) ________ many superheroes. Bantul, the great was (2) ________ in the year 1965 in the backdrop of the Indo-Pak war. Indrajal comics was set up in 1964 and (3) __________ Aabid Surti, who gave birth to a character called Bhadur in 1976 wearing kurta and jeans. Raj comics too (4) ________ into this sphere with their (5) ________ toons Nagraj, Tiranga and Shakti together called Brahman Rakshak (protectors of the universe). \n Select the most appropriate option to fill in blank number 2.",options :["generated","inspired","promoted","created"],answer:"D"},
    {question :"Comprehension: In the following passage, some words have been deleted. Read the passage carefully and select the most appropriate option to fill in each blank. \n Comics have (1) ________ many superheroes. Bantul, the great was (2) ________ in the year 1965 in the backdrop of the Indo-Pak war. Indrajal comics was set up in 1964 and (3) __________ Aabid Surti, who gave birth to a character called Bhadur in 1976 wearing kurta and jeans. Raj comics too (4) ________ into this sphere with their (5) ________ toons Nagraj, Tiranga and Shakti together called Brahman Rakshak (protectors of the universe). \n Select the most appropriate option to fill in blank number 3.",options :["employed","ordered","contracted","authorised"],answer:"A"},
    {question :"Comprehension:In the following passage, some words have been deleted. Read the passage carefully and select the most appropriate option to fill in each blank. \n Comics have (1) ________ many superheroes. Bantul, the great was (2) ________ in the year 1965 in the backdrop of the Indo-Pak war. Indrajal comics was set up in 1964 and (3) __________ Aabid Surti, who gave birth to a character called Bhadur in 1976 wearing kurta and jeans. Raj comics too (4) ________ into this sphere with their (5) ________ toons Nagraj, Tiranga and Shakti together called Brahman Rakshak (protectors of the universe). \n Select the most appropriate option to fill in blank number 4.",options :["invaded","penetrated","entered","pierced"],answer:"C"},
    {question :"Comprehension:In the following passage, some words have been deleted. Read the passage carefully and select the most appropriate option to fill in each blank. \n Comics have (1) ________ many superheroes. Bantul, the great was (2) ________ in the year 1965 in the backdrop of the Indo-Pak war. Indrajal comics was set up in 1964 and (3) __________ Aabid Surti, who gave birth to a character called Bhadur in 1976 wearing kurta and jeans. Raj comics too (4) ________ into this sphere with their (5) ________ toons Nagraj, Tiranga and Shakti together called Brahman Rakshak (protectors of the universe). \n Select the most appropriate option to fill in blank number 5.",options :["noted","influential","famous","good"],answer:"C"},];

    const questionawr=[{question :"Which is a specialised excretory cell found in Platyhelminthes that acts like a kidney, removing waste material through filtration?",options :["Fat cell","Sponge cell","Flame cell","Stem cell"],answer:"C"},
    {question :"Which officer under Alauddin Khilji was required to maintain a register of merchants to ensure an adequate supply of goods?",options :["Muhtasib","Shahna-i-Mandi","Nazir","Rais Parwana"],answer:"B"},
    {question :"Name the hot, dry oppressing winds that blow in between Delhi and Patna.",options :["Mango shower","Blossom shower","Nor westers","Loo"],answer:"D"},
    {question :"Which artificial element has been provisionally named seaborgium by American researchers in honour of Nobel Laureate Glenn T Seaborg?",options :["Element 103","Element 106","Element 90","Element 97"],answer:"B"},
    {question :"How many types of writs can be issued under Article 32 and 226 of the Constitution of India?",options :["Six","Seven","Four","Five"],answer:"D"},
    {question :" In which year was Asha Bhosle's name entered into the Guinness Book of World Records for most studio recordings?",options :["2017","2020","2014","2011"],answer:"D"},
    {question :"The national census does NOT recognise ______ groups within India.",options :["Religious","Schedule cast","Ethnic","Tribal"],answer:"C"},
    {question :"Which article of Indian constitution is related with the Special provisions with respect to the State of Sikkim?",options :["Article 371C","Article 371","Article 371F","Article 371A"],answer:"C"},
    {question :"Which of the following statement is correct with respect to the Sangam literature? \n I. These texts were supposed to be composed and compiled in assemblies of poets. \n II. The Sangam literature compiled in assemblies of poets were held in the city of Madurai",options :["Neither I nor II","Both I and II","Only I","Only II"],answer:"B"},
    {question :"Which of the following have mountain range young fold mountains?",options :["Appalachians mountain range","Alps mountain range","Aravali mountain range","Ural mountain range"],answer:"B"},
    {question :"Identify a fomite from the following.",options :["Drinking water","Blood","Saliva","Glass"],answer:"D"},
    {question :" Kullu Dussehra is a colourful festival majorly celebrated in which state/union territory?",options :["Delhi","Telangana","Uttar Pradesh","Himachal Pradesh"],answer:"D"},
    {question :"Peat coal has ______ carbon and ______ moisture content?",options :["High, Low","Low , high","High, High","Low, Low"],answer:"B"},
    {question :"After the ______, Mahatma Gandhi called off the Non-Cooperation Movement.",options :["Jallianwala Bagh massacre","Chauri Chaura incidence","Bengal partition","Round Table conferences"],answer:"B"},
    {question :"The Kashi Yatra Scheme was introduced by the government of ________.",options :["Karnataka","Uttar Pradesh","Punjab","Kerala"],answer:"A"},
    {question :"The national highway network connecting Delhi, Mumbai, Chennai and Kolkata iscalled ______.",options :["Diamond quadrilateral","Diamond polygon","Golden polygon","Golden Quadrilateral"],answer:"D"},
    {question :" 'Thaipoosam’ festival is celebrated in which state of India?",options :["Bihar","Andhra Pradesh","Tamil Nadu","Goa"],answer:"C"},
    {question :"The Kuchipudi dance form originated in which of the following states of India?",options :["Uttar Pradesh","Kerala","Assam","Andhra Pradesh"],answer:"D"},
    {question :"The SI unit of speed is ______.",options :["m/s","km/s","km/hr","m/hr"],answer:"A"},
    {question :"On the occasion of teacher’s day 2022, the Indian Science Technology and Engineering facilities Map (I-STEM) launched an initiative to strengthen the efforts of scientifically inclined women. What is the name of this initiative?",options :["KUSUM","KALYAN","WEST","NAMASTE"],answer:"C"},
    {question :" The first English Factory in Bengal set up on the banks of river “Hugli” in ______.",options :["1671","1641","1661","1651"],answer:"D"},
    {question :"7 In which of the following cities did Prime Minister Narendra Modi participate in 2019 as part of the celebration of International Day of Yoga on June 21?",options :["Ranchi","Lucknow","New Delhi","Chandigarh"],answer:"A"},
    {question :"What should be the standard length of a tennis court according the laws of the International Tennis Federation (ITF), 2021?",options :["23.77 m","22.45 m","26.42 m","25.34 m"],answer:"A"},
    {question :"Article 20 of the Constitution of India deals with ______________.",options :["protection of life and personal liberty","protection in respect of conviction for offences","abolition of untouchability","right to education"],answer:"B"},
    {question :" Who is the father of the modern ecology?",options :["Robert Brown","Charles Darwin","E P Odum","Robert Hook"],answer:"C"}];

function aptitude(questionindex){
    var id=65;
    let questionno=parseInt(questionindex)-1;
    parent.frames["quizquestions"].document.getElementById("question").innerHTML=questionapt[questionno].question;
    parent.frames["quizquestions"].document.getElementById("options").innerHTML="";
    questionapt[questionno].options.forEach((option) => {
        const input=document.createElement("input");
        input.type="radio";
        input.name="answer";
        input.className="aptitudeop";
        input.id=String.fromCharCode(id);
        input.value=option;
        let label=document.createElement("label");
        label.textContent=option;
        let para=document.createElement("p");
        parent.frames["quizquestions"].document.getElementById("options").appendChild(input);
        parent.frames["quizquestions"].document.getElementById("options").appendChild(label);
        parent.frames["quizquestions"].document.getElementById("options").appendChild(para);
        id=id+1;
    });
}

function intelligence(questionindex){
  var id=65;
  let questionno=parseInt(parseInt(questionindex)-1);
  parent.frames["quizquestions"].document.getElementById("question").innerHTML=questionintell[questionno].question;
  parent.frames["quizquestions"].document.getElementById("options").innerHTML="";
  questionintell[questionno].options.forEach((option) => {
      const input=document.createElement("input");
      input.type="radio";
      input.name="answer";
      input.className="intelligenceop";
      input.id=String.fromCharCode(id);
      let label=document.createElement("label");
      input.value=option;
      label.textContent=option;
      let para=document.createElement("p");
      parent.frames["quizquestions"].document.getElementById("options").appendChild(input);
      parent.frames["quizquestions"].document.getElementById("options").appendChild(label);
      parent.frames["quizquestions"].document.getElementById("options").appendChild(para);
      id=id+1;
  });
}

function english(questionindex){
  var id=65;
  let questionno=parseInt(questionindex)-1;
  parent.frames["quizquestions"].document.getElementById("question").innerHTML=questioneng[questionno].question;
  parent.frames["quizquestions"].document.getElementById("options").innerHTML="";
  questioneng[questionno].options.forEach((option) => {
      const input=document.createElement("input");
      input.type="radio";
      input.name="answer";
      input.id=String.fromCharCode(id);
      let label=document.createElement("label");
      input.className="englishop";
      label.textContent=option;
      let para=document.createElement("p");
      parent.frames["quizquestions"].document.getElementById("options").appendChild(input);
      parent.frames["quizquestions"].document.getElementById("options").appendChild(label);
      parent.frames["quizquestions"].document.getElementById("options").appendChild(para);
      id=id+1;
  });
}

function awareness(questionindex){
  var id=65;
  let questionno=parseInt(questionindex)-1;
  parent.frames["quizquestions"].document.getElementById("question").innerHTML=questionawr[questionno].question;
  parent.frames["quizquestions"].document.getElementById("options").innerHTML="";
  questionawr[questionno].options.forEach((option) => {
      const input=document.createElement("input");
      input.type="radio";
      input.name="answer";
      input.id=String.fromCharCode(id);
      let label=document.createElement("label");
      input.className="awarenessop";
      label.textContent=option;
      let para=document.createElement("p");
      parent.frames["quizquestions"].document.getElementById("options").appendChild(input);
      parent.frames["quizquestions"].document.getElementById("options").appendChild(label);
      parent.frames["quizquestions"].document.getElementById("options").appendChild(para);
      id=id+1;
  });
}

function countforwardtimer(){
    const countpresentDate = new Date().getTime();
            var x = setInterval(function() {
              var now = new Date().getTime();
              var distance = now-countpresentDate;
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
              document.getElementById("timtak").innerHTML =  minutes+"min :" + seconds+ "sec";
            }, 1000);
}

function bigtimer(){
    var countDownDate = new Date();
 countDownDate.setHours(countDownDate.getHours()+2);
   var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo1").innerHTML =  "0"+hours + "h :"
  + minutes + "min : " + seconds + "sec";
  if(distance>720000 && distance<3600000)
  {
    document.getElementById("demo").style.color = "paleyellow";
    document.getElementById("demo1").style.color = "paleyellow";
  }
  if (distance < 600000 && distance>0) {
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo1").style.color = "red";
  }
  if(distance<0)
  {
    document.getElementById("demo").innerHTML="EXPIRED";
    alert("TIME COMPLETED");
    res();
  }
}, 1000);
}

function buttonclick(num){
  window.open("countforwardtimer.html","countforwardtimer");
  var bcl=parent.frames["showquestion"].document.getElementById(num).className;
  if(bcl=="intelligence")
        {
          intelligence(parseInt(num));
        }
  if(bcl=="awarness")
        {
          awareness(parseInt(num));
        }
  if(bcl=="aptitude")
        {
          aptitude(parseInt(num));
        }
  if(bcl=="english")
        {
          english(parseInt(num));
        }
        questionnumber(num);
        showcheck();
}

function questionnumber(number){
  parent.frames["showquestionnumber"].document.getElementById("qn").innerHTML=number;
}

function saveandnext()
  {
    var count=parent.frames["showquestionnumber"].document.getElementById("qn").textContent;
    var cl=parent.frames["showquestion"].document.getElementById(count).className;
    attempted();
    makemap();
    if(count ==25)
    {
      if(cl=="intelligence")
      {
        window.open("awarness.html","showquestion");
        awareness(1);
        questionnumber(1);
      }
      if(cl=="awarness")
      {
        window.open("aptitude.html","showquestion");
        aptitude(1);
        questionnumber(1);
      }
      if(cl=="aptitude")
      {
        window.open("english.html","showquestion");
        english(1);
        questionnumber(1);
      }
      if(cl=="english")
      {
        alert("QUESTIONS COMPLETED");
      }
    }
    else{
        if(cl=="intelligence")
        {
          intelligence(parseInt(parseInt(count)+1));
        }
        if(cl=="awarness")
        {
          awareness(parseInt(parseInt(count)+1));
        }
        if(cl=="aptitude")
        {
          aptitude(parseInt(parseInt(count)+1));
        }
        if(cl=="english")
        {
          english(parseInt(parseInt(count)+1));
        }
        window.open("countforwardtimer.html","countforwardtimer");
        questionnumber(parseInt(count)+1);
    }
    savesession();
    showcheck();
  }
function instruction()
{
  window.open("instructions.html","quizquestions");
}
function again()
{
  window.open("quizonload.html","quizquestions")
}
  function savesession()
  {
    const mapAsintell = JSON.stringify(Array.from(intell.entries()));
    window.sessionStorage.setItem("s1",mapAsintell);
    const mapAsintc = JSON.stringify(Array.from(intc.entries()));
    window.sessionStorage.setItem("c1",mapAsintc);
    const mapAsapt = JSON.stringify(Array.from(apt.entries()));
    window.sessionStorage.setItem("s2",mapAsapt);
    const mapAsaptc = JSON.stringify(Array.from(aptc.entries()));
    window.sessionStorage.setItem("c2",mapAsaptc);
    const mapAsawr = JSON.stringify(Array.from(awr.entries()));
    window.sessionStorage.setItem("s3",mapAsawr);
    const mapAsawrc = JSON.stringify(Array.from(awrc.entries()));
    window.sessionStorage.setItem("c3",mapAsawrc);
    const mapAseng = JSON.stringify(Array.from(eng.entries()));
    window.sessionStorage.setItem("s4",mapAseng);
    const mapAsengc = JSON.stringify(Array.from(engc.entries()));
    window.sessionStorage.setItem("c4",mapAsengc);
  }
  function attempted()
    {
      var f=0;
      var qn=parent.frames["showquestionnumber"].document.getElementById("qn").textContent;
      var marka=parent.frames["answercount"].document.getElementById("marka").textContent;
      var marko=parent.frames["answercount"].document.getElementById("marko").textContent;
      let output=parent.frames["answercount"].document.getElementById("ansg").textContent;
      let notans=parent.frames["answercount"].document.getElementById("ntan").textContent;
      let notvis=parent.frames["answercount"].document.getElementById("ntvs").textContent;
      var col=parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor;
      let radioButtons = parent.frames["quizquestions"].document.querySelectorAll('input[name="answer"]');
        for (let radio of radioButtons) 
        {
           if (radio.checked) 
           {
            f=1;
           }
        }
        if (f==1) 
           {
            if(col=="green")
            {
              parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="green";
            }
            else if(col=="blue")
            {
              parent.frames["answercount"].document.getElementById("ansg").innerHTML=(parseInt(output)+1);
              parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="green";
              parent.frames["answercount"].document.getElementById("ntan").innerHTML=(parseInt(notans)-1);
              parent.frames["answercount"].document.getElementById("marko").innerHTML=(parseInt(marko)-1);
            }
            else if(col=="skyblue")
            {
              parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="green";
              parent.frames["answercount"].document.getElementById("marka").innerHTML=(parseInt(marka)-1);
            }
            else if(col=="red")
            {
              parent.frames["answercount"].document.getElementById("ansg").innerHTML=(parseInt(output)+1);
              parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="green";
              parent.frames["answercount"].document.getElementById("ntan").innerHTML=(parseInt(notans)-1);
            }
            else{
            parent.frames["answercount"].document.getElementById("ansg").innerHTML=(parseInt(output)+1);
            parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="green";
            parent.frames["answercount"].document.getElementById("ntvs").innerHTML=(parseInt(notvis)-1);
            }
           }
           else
           {
            if(col=="green")
            {
              parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="red";
              parent.frames["answercount"].document.getElementById("ntan").innerHTML=(parseInt(notans)+1);
              parent.frames["answercount"].document.getElementById("ansg").innerHTML=(parseInt(output)-1);
            }
            else if(col=="blue")
            {
              parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="red";
              parent.frames["answercount"].document.getElementById("marko").innerHTML=(parseInt(marko)-1);
            }
            else if(col=="skyblue")
            {
              parent.frames["answercount"].document.getElementById("ntan").innerHTML=(parseInt(notans)+1);
              parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="red";
              parent.frames["answercount"].document.getElementById("ansg").innerHTML=(parseInt(output)-1);
              parent.frames["answercount"].document.getElementById("marka").innerHTML=(parseInt(marka)-1);
            }
            else if(col=="red")
            {
              parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="red";
            }
            else{
            parent.frames["answercount"].document.getElementById("ntan").innerHTML=(parseInt(notans)+1);
            parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="red";
            parent.frames["answercount"].document.getElementById("ntvs").innerHTML=(parseInt(notvis)-1);
           }
          }

    }
    function anscount()
    {
      var output=parent.frames["answercount"].document.getElementById("ansg");
      let notans=parent.frames["answercount"].document.getElementById("ntan");
      let notvis=parent.frames["answercount"].document.getElementById("ntvs");
      let marka=parent.frames["answercount"].document.getElementById("marka");
      let marko=parent.frames["answercount"].document.getElementById("marko");
      output.innerHTML=0;
      notans.innerHTML=0;
      notvis.innerHTML=100;
      marka.innerHTML=0;
      marko.innerHTML=0;
    }
    function markandnext()
    {
      var f=0;
      var qn=parent.frames["showquestionnumber"].document.getElementById("qn").textContent;
      var col=parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor;
    var marka=parent.frames["answercount"].document.getElementById("marka").textContent;
    var marko=parent.frames["answercount"].document.getElementById("marko").textContent;
    var count=parent.frames["showquestionnumber"].document.getElementById("qn").textContent;
    var cl=parent.frames["showquestion"].document.getElementById(count).className;
    let output=parent.frames["answercount"].document.getElementById("ansg").textContent;
      let notans=parent.frames["answercount"].document.getElementById("ntan").textContent;
      let notvis=parent.frames["answercount"].document.getElementById("ntvs").textContent;
    let radioButtons = parent.frames["quizquestions"].document.querySelectorAll('input[name="answer"]');
        for (let radio of radioButtons) 
        {
           if (radio.checked) 
           {
            f=1;
           }
        }
        if(f==1)
        {
          if(col=="green")
          {
            parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="skyblue";
            parent.frames["answercount"].document.getElementById("marka").innerHTML=(parseInt(marka)+1);
          }
          else if(col=="blue")
          {
            parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="skyblue";
            parent.frames["answercount"].document.getElementById("marka").innerHTML=(parseInt(marka)+1);
            parent.frames["answercount"].document.getElementById("ansg").innerHTML=(parseInt(output)+1);
            parent.frames["answercount"].document.getElementById("ntan").innerHTML=(parseInt(notans)-1);
            parent.frames["answercount"].document.getElementById("marko").innerHTML=(parseInt(marko)+1);
          }
          else if(col=="skyblue")
          {
            parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="skyblue";
          }
          else if(col=="red")
          {
            parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="skyblue";
            parent.frames["answercount"].document.getElementById("marka").innerHTML=(parseInt(marka)+1);
            parent.frames["answercount"].document.getElementById("ansg").innerHTML=(parseInt(output)+1);
            parent.frames["answercount"].document.getElementById("ntan").innerHTML=(parseInt(notans)-1);
          }
          else{
          parent.frames["answercount"].document.getElementById("marka").innerHTML=(parseInt(marka)+1);
          parent.frames["answercount"].document.getElementById("ansg").innerHTML=(parseInt(output)+1);
          parent.frames["answercount"].document.getElementById("ntvs").innerHTML=(parseInt(notvis)-1);
          parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="skyblue";
        }
      }
        else{
          if(col=="green")
          {
            parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="blue";
            parent.frames["answercount"].document.getElementById("ntan").innerHTML=(parseInt(notans)+1);
            parent.frames["answercount"].document.getElementById("ansg").innerHTML=(parseInt(output)-1);
            parent.frames["answercount"].document.getElementById("marko").innerHTML=(parseInt(marko)+1);
          }
          else if(col=="blue")
          {
            parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="blue";
          }
           else if(col=="skyblue")
           {
            parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="blue";
            parent.frames["answercount"].document.getElementById("ntan").innerHTML=(parseInt(notans)+1);
            parent.frames["answercount"].document.getElementById("ansg").innerHTML=(parseInt(output)-1);
            parent.frames["answercount"].document.getElementById("marko").innerHTML=(parseInt(marko)+1);
            parent.frames["answercount"].document.getElementById("marka").innerHTML=(parseInt(marka)-1);
           }
           else if(col=="red")
           {
            parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="blue";
            parent.frames["answercount"].document.getElementById("marko").innerHTML=(parseInt(marko)+1);
           }
           else{
          parent.frames["answercount"].document.getElementById("marko").innerHTML=(parseInt(marko)+1);
          parent.frames["answercount"].document.getElementById("ntan").innerHTML=(parseInt(notans)+1);
          parent.frames["answercount"].document.getElementById("ntvs").innerHTML=(parseInt(notvis)-1);
          parent.frames["showquestion"].document.getElementById(qn).style.backgroundColor="blue";
        }
      }
      makemap();
        if(count ==25)
        {
          if(cl=="intelligence")
          {
            window.open("awarness.html","showquestion");
            awareness(1);
            questionnumber(1);
          }
          if(cl=="awarness")
          {
            window.open("aptitude.html","showquestion");
            aptitude(1);
            questionnumber(1);
          }
          if(cl=="aptitude")
          {
            window.open("english.html","showquestion");
            english(1);
            questionnumber(1);
          }
          if(cl=="english")
          {
            alert("QUESTIONS COMPLETED");
          }
        }
        else{
            if(cl=="intelligence")
            {
              intelligence(parseInt(parseInt(count)+1));
            }
            if(cl=="awarness")
            {
              awareness(parseInt(parseInt(count)+1));
            }
            if(cl=="aptitude")
            {
              aptitude(parseInt(parseInt(count)+1));
            }
            if(cl=="english")
            {
              english(parseInt(parseInt(count)+1));
            }
            window.open("countforwardtimer.html","countforwardtimer");
            questionnumber(parseInt(count)+1);
        }
        savesession();
        showcheck();
    }
    function makemap()
    {
      var id;
      var f=0;
      let radioButtons = parent.frames["quizquestions"].document.querySelectorAll('input[name="answer"]');
        for (let radio of radioButtons) 
        {
           if (radio.checked) 
           {
            id=radio.id;
            f=1;
           }
        }
        var count=parent.frames["showquestionnumber"].document.getElementById("qn").textContent;
        var cl=parent.frames["showquestion"].document.getElementById(count).className;
        var col=parent.frames["showquestion"].document.getElementById(count).style.backgroundColor;
    if(f==1)
    {
    if(cl=="intelligence")
          {
            intell.set(count,id);
            intc.set(count,col);
           }
    if(cl=="awarness")
          {
            awr.set(count,id);
            awrc.set(count,col);
          }
          if(cl=="aptitude")
          {
            apt.set(count,id);
            aptc.set(count,col);
          }
          if(cl=="english")
          {
            eng.set(count,id);
            engc.set(count,col);
          }
        }
        else{
          if(cl=="intelligence")
          {
            intell.set(count,"o");
            intc.set(count,col);
          }
    if(cl=="awarness")
          {
            awr.set(count,"o");
            awrc.set(count,col);
          }
          if(cl=="aptitude")
          {
            apt.set(count,"o");
            aptc.set(count,col);
          }
          if(cl=="english")
          {
            eng.set(count,"o");
            engc.set(count,col);
          }
        }
      }
    function showcheck()
    {
      var ch;
      var number=parent.frames["showquestionnumber"].document.getElementById("qn").textContent;
      var cl=parent.frames["showquestion"].document.getElementById(number).className;
      if(cl=="intelligence")
      {
        const retrievedMapString = sessionStorage.getItem('s1');
         inte = new Map(JSON.parse(retrievedMapString));
         if(inte.has(number))
         {
          ch=inte.get(number);
          if(ch!="o")
          {
            parent.frames["quizquestions"].document.getElementById(ch).checked=true;
          }
         }
      }
      if(cl=="awarness")
      {
        const retrievedMapString = sessionStorage.getItem('s3');
         awre = new Map(JSON.parse(retrievedMapString));
        if(awre.has(number))
         {
          ch=awre.get(number);
          if(ch!="o")
          {
            parent.frames["quizquestions"].document.getElementById(ch).checked=true;
          }
         }
      }
      if(cl=="aptitude")
      {
        const retrievedMapString = sessionStorage.getItem('s2');
         apti = new Map(JSON.parse(retrievedMapString));
        if(apti.has(number))
         {
          ch=apti.get(number);
          if(ch!="o")
          {
            parent.frames["quizquestions"].document.getElementById(ch).checked=true;
          }
         }
      }
      if(cl=="english")
      {
        const retrievedMapString = sessionStorage.getItem('s4');
        engl = new Map(JSON.parse(retrievedMapString));
        if(engl.has(number))
         {
          ch=engl.get(number);
          if(ch!="o")
          {
            parent.frames["quizquestions"].document.getElementById(ch).checked=true;
          }
         }
      }
    }
    function submit()
    {
        window.open("final.html");
    }
    function uncheck()
    {
      let radioButtons = parent.frames["quizquestions"].document.querySelectorAll('input[name="answer"]');
        for (let radio of radioButtons) 
        {
           if (radio.checked) 
           {
            radio.checked=false;
           }
        }
    }
    function colr()
    {
      var cl=parent.frames["showquestion"].document.getElementById("1").className;
      if(cl=="intelligence")
      {
        const retrievedMapString = sessionStorage.getItem('c1');
        const inc = new Map(JSON.parse(retrievedMapString));
        const nc=parent.frames["showquestion"].document.querySelectorAll(".intelligence");
        for(let i of nc)
        {
          var val=i.id;
          if(inc.has(val))
          {
          i.style.backgroundColor=inc.get(val);
          }
        }
      }
      if(cl=="awarness")
      {
        const retrievedMapString = sessionStorage.getItem('c3');
        const awc = new Map(JSON.parse(retrievedMapString));
        const ac=parent.frames["quizquestions"].document.querySelectorAll('.awarness');
        for(let i of ac)
        {
          var val=i.id;
          if(awc.has(val))
          {
          i.style.backgroundColor=awc.get(val);
          }
        }
      }
      if(cl=="aptitude")
      {
        const retrievedMapString = sessionStorage.getItem('c2');
        const apc = new Map(JSON.parse(retrievedMapString));
        const pc=parent.frames["quizquestions"].document.querySelectorAll('.aptitude');
        for(let i of pc)
        {
          var val=i.id;
          if(apc.has(val))
          {
          i.style.backgroundColor=pc.get(val);
          }
        }
      }
      if(cl=="english")
      {
        const retrievedMapString = sessionStorage.getItem('c4');
        const enc = new Map(JSON.parse(retrievedMapString));
        const ec=parent.frames["quizquestions"].document.querySelectorAll('.english');
        for(let i of ec)
        {
          var val=i.id;
          if(enc.has(val))
          {
          i.style.backgroundColor=ec.get(val);
          }
        }
      }
      showcheck();
    }
    function score()
    {
      var Tscore=0,Tneg=0,Iscore=0,Ineg=0,AWscore=0,AWneg=0,APscore=0,APneg=0,Escore=0,Eneg=0;
      var IA=0,IC=0,GA=0,GC=0,AA=0,AC=0,EA=0,EC=0;
      const r1 = sessionStorage.getItem('s1');
      const  intell = new Map(JSON.parse(r1));
      const r2 = sessionStorage.getItem('s3');
      const  awr = new Map(JSON.parse(r2));
      const r3 = sessionStorage.getItem('s2');
      const   apt = new Map(JSON.parse(r3));
      const r4 = sessionStorage.getItem('s4');
      const  eng = new Map(JSON.parse(r4));
      const arr=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"];
      arr.forEach((i)=>
      {
        if(intell.has(i))
        {
          var id=intell.get(i);
          if(id!="o")
          {
            IA=IA+1;
            if(questionintell[i-1].answer==id)
            {
              IC=IC+1;
              Iscore=Iscore+2;
            }
            else{
              Ineg=Ineg+0.5;
            }
          }
        }
        if(awr.has(i))
        {
          var id=awr.get(i);
          if(id!="o")
          {
            GA=GA+1;
            if(questionawr[i-1].answer==id)
            {
              AWscore=AWscore+2;
            }
            else{
              GC=+GC+1;
              AWneg=AWneg+0.5;
            }
          }
        }
        if(apt.has(i))
        {
          var id=apt.get(i);
          if(id!="o")
          {
            AA=AA+1;
            if(questionapt[i-1].answer==id)
            {
              APscore=APscore+2;
            }
            else{
              AC=AC+1;
              APneg=APneg+0.5;
            }
          }
        }
        if(eng.has(i))
        {
          var id=eng.get(i);
          if(id!="o")
          {
            EA=EA+1;
            if(questioneng[i-1].answer==id)
            {
              Escore=Escore+2;
            }
            else{
              EC=EC+1;
              Eneg=Eneg+0.5;
            }
          }
        }
      });
      Tneg=Ineg+APneg+AWneg+Eneg;
      Tscore=Iscore+APscore+AWscore+Escore-Tneg;
      document.getElementById("I1").innerHTML=IA;
      document.getElementById("I2").innerHTML=IC;
      document.getElementById("I3").innerHTML=parseInt(IA-IC);
      document.getElementById("I4").innerHTML=Iscore;
      document.getElementById("I5").innerHTML=Ineg;
      document.getElementById("I6").innerHTML=parseFloat(Iscore-Ineg);
      document.getElementById("G1").innerHTML=GA;
      document.getElementById("G2").innerHTML=GC;
      document.getElementById("G3").innerHTML=parseInt(GA-GC);
      document.getElementById("G4").innerHTML=AWscore;
      document.getElementById("G5").innerHTML=AWneg;
      document.getElementById("G6").innerHTML=parseFloat(AWscore-AWneg);
      document.getElementById("A1").innerHTML=AA;
      document.getElementById("A2").innerHTML=AC;
      document.getElementById("A3").innerHTML=parseInt(AA-AC);
      document.getElementById("A4").innerHTML=APscore;
      document.getElementById("A5").innerHTML=APneg;
      document.getElementById("A6").innerHTML=parseFloat(APscore-APneg);
      document.getElementById("E1").innerHTML=EA;
      document.getElementById("E2").innerHTML=EC;
      document.getElementById("E3").innerHTML=parseInt(EA-EC);
      document.getElementById("E4").innerHTML=Escore;
      document.getElementById("E5").innerHTML=Eneg;
      document.getElementById("E6").innerHTML=parseFloat(Escore-Eneg);
      document.getElementById("T1").innerHTML=EA+IA+GA+AA;
      document.getElementById("T2").innerHTML=EC+IC+GC+GA;
      document.getElementById("T3").innerHTML=parseInt((EA+IA+GA+AA)-(EC+IC+GC+GA));
      document.getElementById("T4").innerHTML=Escore+Iscore+AWscore+APscore;
      document.getElementById("T5").innerHTML=Eneg+Ineg+AWneg+APneg;
      document.getElementById("T6").innerHTML=parseFloat((Escore+Iscore+AWscore+APscore)-(Eneg+Ineg+AWneg+APneg));
      document.getElementById("final").innerHTML=parseFloat((Escore+Iscore+AWscore+APscore)-(Eneg+Ineg+AWneg+APneg));
    }
