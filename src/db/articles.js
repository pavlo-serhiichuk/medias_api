const confidanceInterval =
  "What is a confidence interval? I wanted to know that recently and turned to one of my favorite books: Measuring the User Experience, by Tom Tullis and Bill Albert. And here’s what they say:\n" +
  "“Confidence intervals are extremely valuable for any usability professional. A confidence interval is a range that estimates the true population value for a statistic.”\n" +
  "Then they go on to explain how you calculate a confidence interval in Excel. Which is fine, but I have to admit that I wasn’t entirely sure that once I’d calculated it, I really knew what I’d done or what it meant. So I trawled through various statistics books to gain a better understanding of confidence intervals, and this column is the result.\n" +
  "\n" +
  "The Starting Point: The Need for a Measurement\n" +
  "Are you more comfortable working with qualitative data than quantitative data? If so, you’re like most UX people—including me. Once we’ve seen three or four test participants in a row fail for the same reason, we just want to get on with fixing the problem.\n" +
  "But sooner or later, we’ll have to tangle with some quantitative data. Let’s say, for example, that we have this goal for a new product: On average, we want users to be able to do a key task within 60 seconds. We’ve fixed all the show-stoppers and tested with eight participants—all of whom can do the task. Yay! But have we met the goal? Assuming we remembered to record the time it took each participant to complete the task, we might have data that looks like this:\n" +
  "To get the arithmetic average—which statisticians call the mean—you add up all the times and divide by the number of participants. Or use the AVERAGE formula in Excel. Either way, the average time for these participants was 54.0 seconds. Figure 1 shows the same data with the average as a straight line in red.\n" +
  "So, can we relax and plan the launch party?\n" +
  "Well, maybe. If our product has only eight users, then we’ve tested with all of them, and yes, we’re done. But what if we’re aiming at everyone? Or, let’s say we’re being more precise, and we’ve defined our target market as follows: English-speaking Internet users in the US, Canada, and UK. Would the data from eight test participants be enough to represent the experience of all users?\n" +
  "True Population Value Compared to Our Sample\n" +
  "Our challenge … is to work out whether we can consider the average we’ve calculated from our sample as representative of our target audience.\n" +
  "\n" +
  "Our challenge, therefore, is to work out whether we can consider the average we’ve calculated from our sample as representative of our target audience.Or to put that into Tullis and Albert’s terms: in this case, our average is the statistic, and we want to use that data to estimate the true population value—that is, the average we would get if we got everyone in our target audience to try the task for us.\n" +
  "One way to improve our estimate would be to run more usability tests. So let’s test with eight more participants, giving us the following data:\n" +
  "Oh, dear… For this sample, the arithmetic average comes out to 74.6 seconds, so we’ve blown our target. Perhaps we need to run more tests or do more work on the product design. Or is there a quicker way?\n" +
  "Arithmetic Averages Have a Bit of Magic: The Central Limit Theorem\n" +
  "Means have a bit of magic: a special mathematical property that may get us out of taking the obvious, but expensive course—running a lot more usability tests.\n" +
  "\n" +
  "Luckily for us, means have a bit of magic: a special mathematical property that may get us out of taking the obvious, but expensive course—running a lot more usability tests.\n" +
  "That bit of magic is the Central Limit Theorem, which says: If you take a bunch of samples, then calculate the mean of each sample, most of the sample means cluster close to the true population mean.\n" +
  "Let’s see how this might work for our time-on-task problem. Figure 2 shows data from ten samples: the two we’ve just been discussing, plus eight more. Nine of these samples met the 60-second target, one did not. The data varies about from 10 to 130 seconds, but the means are in a much narrower range.\n" +
  "The chance that any individual mean is way off from the true population mean is quite small. In fact, the Central Limit Theorem also says that means are normally distributed, as in the bell-curve normal distribution shown in Figure 3.\n" +
  "Normal distributions also have very convenient mathematical properties:\n" +
  "\t\tTwo things define them:\n" +
  "\t\twhere the peak is—that is, the mean, which is also the most likely value\n" +
  "\t\thow spread out the values are—which the standard deviation—also known as sigma—defines\n" +
  "\t\tThe probability of getting any particular value depends on only these two parameters—the mean and the standard deviation.\n" +
  "Figure 4 shows two normal distributions. The one on the left has a smaller mean and standard deviation than the one on the right.\n" +
  "\n" +
  "Using the Central Limit Theorem to Find a Confidence Interval\n" +
  "Any mean from a random sample is likely to be quite close to the true population mean, and a normal distribution models the chance that it might be different from the true population mean.\n" +
  "\n" +
  "If you’re still with me, let’s get back to our challenge: deciding whether our original mean of 54.0 seconds from the first eight participants was sufficiently convincing to show that we’d met our target of an average time on task of less than 60 seconds and would allow us to launch. We’d rather not run nine more rounds of usability tests; instead, we want to estimate the true population mean.\n" +
  "Fortunately, the Central Limit Theorem lets us do that. Any mean from a random sample is likely to be quite close to the true population mean, and a normal distribution models the chance that it might be different from the true population mean. Some values of the true population mean would make it very likely that I’d get this sample mean, while other values would make it very unlikely. The likely values represent the confidence interval, which is the range of values for the true population mean that could plausibly give me my observed value.\n" +
  "To do the calculation, the first thing to decide is what we’re prepared to accept as likely. In other words, how much risk are we willing to run of being wrong? If we’re aiming for a level of risk that is often stated as statistical significance at p < 0.05, the risk is a 5% chance of being wrong, or one in 20, but there is a 95% chance of being right.\n" +
  "The next thing we need is a standard deviation. The only one we have is the standard deviation of our sample, which is 29.40 seconds. (I used Excel’s STDEV.S command to work that out.)\n" +
  "Finally, we plug in the mean, which is 54.0 seconds, and the number of participants, which is 8.\n" +
  "You can work this out with formulas and a calculator, but let’s use Excel. The CONFIDENCE command does it, giving us a value that we can\n" +
  "\t\tsubtract from the sample mean to get the lowest true population mean that our observed mean could plausibly have come from\n" +
  "\t\tadd to the sample mean to get the highest true population mean that our observed value could plausibly have come from\n" +
  "The result: the 95% confidence interval for the mean is 29.4 to 78.6 seconds, in comparison to our target of 60 seconds.\n" +
  "This is unfortunate. If the true population mean were as high as 78.6 seconds, we could still have obtained our sample mean of 49.4 seconds with a 95% probability. Oh, dear. That would be 18.6 seconds greater than our task-time target, which is disappointing all around. But we wouldn’t be nearly as worried if the true population mean happened to fall at the low end of the range. That would mean we’ve met our target.\n" +
  "Confidence Intervals Aren’t Always Correct\n" +
  "Remember that 95%, which says that about one time in 20 you’re likely to get it wrong? You wouldn’t know whether this time is the one time in 20. If that makes you feel uncomfortable, you’ll need to increase your confidence level, which will also increase the range of the confidence interval, so you’ll have a greater chance of catching the true population value within it.\n" +
  "Here are the confidence intervals for this sample, for some typical levels of risk:\n" +
  "You can see that, as we reduce the risk, we increase the confidence level and end up with a wider confidence interval—and in this example, also have an increasing level of depression about that launch date.\n" +
  "Have you come across Six Sigma, the quality improvement program that Motorola originated, which is now popular in many manufacturing companies? They wanted to be very, very sure that they knew the risk of manufacturing poor-quality products and chose a confidence level of 99.99966%—that is, 3.4 chances in a million. I didn’t bother calculating the confidence interval for our sample to get a Six-Sigma level of risk, because it would constitute the whole range of our data.\n" +
  "Confidence Intervals Depend on Sample Size\n" +
  "With more data, you have more chance of the sample being a pretty good match to the whole population and, therefore, of its mean being similar to the true population value.\n" +
  "\n" +
  "What to do if you want to get a higher confidence level, but also need to be sure you’ve met your target for the mean? Increase the sample size.\n" +
  "The more data in your sample, the smaller your confidence interval. That’s because with more data, you have more chance of the sample being a pretty good match to the whole population and, therefore, of its mean being similar to the true population value.\n" +
  "In my example, I’ve got 80 participants overall. The mean for all of the participants is 47.1 seconds, and the 95% confidence interval is (39.8, 54.4). So if I’d tested with a lot more people, I would indeed have proven that we’re okay to launch, because the highest plausible value is less than my target of 60 seconds.\n" +
  "That’s part of the fun of confidence intervals: we want to calculate a confidence interval so we don’t have to do as much sampling, but to get a narrow confidence interval, we need to do more sampling.\n" +
  "The Central Limit Theorem Works Only on Random Samples\n" +
  "I recently read an article on sample sizes that asserted, “One thousand sessions provide a sufficiently narrow margin of error (plus or minus 2.5% at a 90% confidence level).”\n" +
  "This is true, but only if the sample is a random sample. For example, let’s say we wanted the average time it took to complete the New York Marathon across 45,000 runners. If we took a random sample of just 1000 runners, we would get a narrow confidence interval. But if we took the times of the first 1000 runners across the finish line, we’d get something very far indeed from the true population mean.\n" +
  "The Mean Is Convenient, But Not Always Helpful\n" +
  "In user experience, we often need to know the range—and you can’t calculate a confidence interval for that.\n" +
  "\n" +
  "So far, I’ve used the example of a target for a mean value: The average time on task must be less than a specified target. But would that be a good target to have?\n" +
  "Figure 5 shows a set of data that is quite typical for user experience: a peak at low values—for example, task times—then a long tail with a few values that are much higher. It’s the overall data set that our samples have so far come from. The mean is 50.3 seconds, which is lower than the target of 60 seconds.\n" +
  "Figure 5—A typical UX distribution\n" +
  "￼\n" +
  "But how useful is the mean? Suppose we advertised: On average, you’ll be able to do this task in less than 60 seconds. In fact, some of our participants’ task times are much longer than the target—8% of the data set has values over twice as long, and the largest value is over five times as long. Okay, so that’s only five minutes, and maybe no one would notice. But what if we were working in minutes instead of seconds? Many people would indeed notice if a task that they anticipated taking less than an hour actually took over two hours. So, in user experience, we often need to know the range—and you can’t calculate a confidence interval for that.\n" +
  "Also, look at the way most of the values pile up at the shorter end. Those users ought to be happy—the time it took them to complete the task is much shorter than the advertised time. But to ensure that a high volume of users can achieve those task times once the system gets rolled out, we’ll have to make sure that the system can cope with that high peak of very fast task times. So our colleagues who are managing system performance are likely to be far more interested in the most frequent value, which is the mode, than in the mean. But you can’t calculate a confidence interval for the mode either.\n" +
  "Of course, Excel can take any numbers you put in and shove them through the calculation—so if you mistakenly try to run a CONFIDENCE formula on a mode, you’ll get an output. But it won’t be meaningful, because there is no Central Limit Theorem or any equivalent for modes.\n" +
  "Summary: Confidence Intervals Can Save You Effort\n" +
  "You can compare the confidence interval you calculated with the target you were aiming for.\n" +
  "\n" +
  "The confidence interval for the mean helps you to estimate the true population mean and lets you avoid the additional effort that gathering a lot of extra data would require. You can compare the confidence interval you calculated with the target you were aiming for.\n";

const internationalAddress =
  "The basic structure of an address is so familiar, people don’t need the guidance labels provide.\n" +
  "\n" +
  "As enablers of online conversations between businesses and customers, Web forms are often responsible for gathering critical information—email addresses for continued communications, mailing addresses for product shipments, and billing information for payment processing to name just a few. So it shouldn’t come as much of a surprise that one of the most common questions I get asked about Web form design is: “How do I deal with international addresses?”\n" +
  "But before we get into the nuances of address variations, it’s worth pointing out that addresses have a commonly understood structure. Through years of experience with mailing and postal systems, people have a pretty concrete idea of what constitutes an address block. This common understanding is so definitive that eyetracking data suggests, once people begin filling in a set of input fields that make up an address, they often cease looking at their labels. The basic structure of an address is so familiar, people don’t need the guidance labels provide.\n" +
  "\n" +
  "This is an important point to consider when laying out the input fields that make up an address. Figure 1 shows how to lay out the fields commonly included in an address in the United States. The alternative, a divided address structure in which each field appears on a separate line as shown in Figure 2, doesn’t offer the benefit of being understood as a set of related input fields. So people are more likely to consider each input field in relative isolation instead of looking at the address as a whole.\n" +
  "Figure 1—Common address structure for the United States in a Web form\n" +
  "￼\n" +
  "Figure 2—Divided address structure for the United States\n" +
  "￼\n" +
  "Luckily there is a fair amount of commonality between the elements that make up an address across the world. In most countries, the destination, or recipient, in an address structure progresses from most to least specific—Russia and Iran are notable exceptions. So when shipping to an individual at a corporation, the individual’s name would come first, then the corporation second. Following the destination is street address, city line, and lastly, the country line, as illustrated in Figure 3. This line structure is a pretty reliable baseline for all international addresses.\n" +
  "\n" +
  "\tInternational Variations\n" +
  "Though names and street addresses can have many variations, a single input field for each of them that provides an adequate amount of room for longer answers is usually all that’s necessary.\n" +
  "\n" +
  "International variations in address fields start with the most specific destination—the person to whom an address belongs. Individuals across the world might have one name, two names, three names, or more. A Formulate Information Design article, “The Name Riddle,”￼ gives a great overview of the possible variations—from Sukarno, Indonesia’s first president, to Fahad bin Abdul Aziz bin Abdul Rahman Al-Sa'ud, the fifth king of Saudi Arabia.\n" +
  "Street addresses can also vary quite radically, even within a single country. The United States Postal Service’s Postal Addressing StandardsPDF￼ outline variations in the United States—from 1401 Main St to RR 9 Box 23A to 475 Lanfant PLz SW, Rm 10022.\n" +
  "Though names and street addresses can have many variations, a single input field for each of them that provides an adequate amount of room for longer answers is usually all that’s necessary. Street number comes before street name? No problem. Street number comes after street name? Also, no problem. When it comes to the city line of an address block, however, we’re not as lucky.\n" +
  "In addition to a city name and postal code, the city line can also include a state, region, province, or county. Depending on the country, each of these can have different names, abbreviations, and locations in the address block. There is also a slew of postal code format variations across countries, including the use of spaces, numeric or alphabetic characters, and various lengths. The order of these elements also varies quite drastically. Figure 4 shows a few of the possible variations in the city line of an address block.\n" +
  "Figure 4—A sampling of city line variations\n" +
  "￼\n" +
  "To account for these international variations, Web form designers have taken a number of approaches: specific formats, changing formats, and generic formats.\n" +
  "\n" +
  "Specific Formats\n" +
  "The specific format approach works best when you know or can confidently infer a customer’s country.\n" +
  "\n" +
  "The specific format approach works best when you know or can confidently infer a customer’s country. Using this approach, you custom tailor the address block structure for each specific country. Figure 5 shows examples of address blocks for France and Italy. Note the variations in line placement and labels.\n" +
  "Figure 5—French and Italian address blocks\n" +
  "￼\n" +
  "If you know a customer’s country with a high degree of certainty, the specific formats approach can provide a familiar address structure that supports quick comprehension and, thereby, fast form completion times. Frank da Cruz’s Compulsive Guide to Postal Addresses￼ is a fantastic online resource for learning about unique address structures across the World, so you can deliver country-specific address block layouts.\n" +
  "Changing Formats\n" +
  "A design that utilizes the changing format approach provides country-specific address blocks. However, the format is based on user selection.\n" +
  "\n" +
  "As with the specific format approach, a design that utilizes the changing format approach provides country-specific address blocks. However, the format is based on user selection instead of a known or inferred location. The registration form on eBay, shown in Figure 6, is an example of a form that utilizes a changing format. If someone changes the selected country from the default—which is based on the eBay site a user has accessed—the form displays the address block input fields the selected country requires in place of the address fields that are present by default.\n" +
  "Figure 6—eBay lets users’ selections change the address formats in its registration form\n" +
  "￼\n" +
  "In this case, when someone selects Canada instead of Australia in the Country or region drop-down list, State/Territory changes to Province and Postcode changes to Postal Code. It’s important to note that, if a user has filled in any information in form fields that are common to both address structures—such as First name or Street address—you should preserve that information when changing countries. Removing information people have already provided is highly likely to upset customers.\n" +
  "Generic Formats\n" +
  "The generic format lets you manage variations in name and street address by providing a single input field for each element of an address.\n" +
  "\n" +
  "The generic international address format offers an alternative to maintaining multiple address block variations to support country-specific solutions. The generic format lets you manage variations in name and street address by providing a single input field for each element of an address. To accommodate variations in the address block layout and city line, you can use a set of generic input fields. The Amazon.com form in Figure 7 does just that.\n" +
  "Figure 7—This address form from Amazon.com supports addresses from many countries through a generic format\n" +
  "￼\n" +
  "By distributing address elements across multiple lines, you can manage the ordering of postal codes, regions, and towns without implying any specific address structure.\n" +
  "\n" +
  "Instead of displaying different drop-down lists according to the selected country, a single input field with an all-inclusive label, State / Province / Region, lets users provide their state, province, or region. Likewise, the broad label ZIP/Postal Code—which could also have included Postcode—accounts for postal code variations in an input field that allows alphanumeric characters, spaces, and various lengths. By distributing address elements across multiple lines, you can manage the ordering of postal codes, regions, and towns without implying any specific address structure.\n" +
  "While this kind of generic format can provide a flexible set of input fields for international addresses, error checking may be harder, because several fields can have many valid formats. Also, by virtue of its flexibility, the generic format isn’t really optimized for any country or culture, so it’s likely to be functional, but not ideal.\n" +
  "I’ve covered considerations for several international address field design solutions, but there may be other options or issues out there. If you’ve got additional insights, I encourage you to speak up in the comments! ￼\n" +
  "For more information about form design, check out Luke’s book—Web Form Design: Filling in the Blanks￼—a Rosenfeld Media publication that covers Web form usability, visual design, and interaction design considerations.\n";

const howDoUsers =
  "Editor’s note: Since writing this column, Steven has done additional user research and has updated his design guidelines for mobile phones accordingly. Read his latest column on this topic: “Design for Fingers, Touch, and People, Part 1.”\n" +
  "As UX professionals, we all pay a lot of attention to users’ needs. When designing for mobile devices, we’re aware that there are some additional things that we must consider—such as how the context in which users employ their devices changes their interactions or usage patterns. [1] However, some time ago, I noticed a gap in our understanding: How do people actually carry and hold their mobile devices? These devices are not like computers that sit on people’s tables or desks. Instead, people can use mobile devices when they’re standing, walking, riding a bus, or doing just about anything. Users have to hold a device in a way that lets them view its screen, while providing input.\n" +
  "In the past year or so, there have been many discussions about how users hold their mobile devices—most notably Josh Clark’s. [2] But I suspect that some of what we’ve been reading may not be on track. First, we see a lot of assumptions—for example, that all people hold mobile devices with one hand because they’re the right size for that—well, at least the iPhone is. [3] Many of these discussions have assumed that people are all the same and do not adapt to different situations, which is not my experience in any area involving real people—much less with the unexpected ways in which people use mobile devices.\n" +
  "\n" +
  "For years, I’ve been referring to my own research and observations on mobile device use, which indicate that people grasp their mobile phones in many ways—not always one handed. But some of my data was getting very old, so included a lot of information about hardware input methods using keyboard- and keypad-driven devices that accommodate the limited reach of fingers or thumbs. These old mobile phones differ greatly from the touchscreen devices that many are now using.\n" +
  "Modern Mobile Phones Are Different\n" +
  "I’ve carried out a fresh study of the way people naturally hold and interact with their mobile devices.\n" +
  "\n" +
  "Everything changes with touchscreens. On today’s smartphones, almost the entire front surface is a screen. Users need to be able to see the whole screen, and may also need to touch any part of it to provide input. Since my old data was mostly from observations of users in the lab—using keyboard-centric devices in too many cases—I needed to do some new research on current devices. My data needed to be more unimpeachable, both in terms of its scale and the testing environment of my research.\n" +
  "So, I’ve carried out a fresh study of the way people naturally hold and interact with their mobile devices. For two months, ending on January 8, 2013, I—and a few other researchers—made 1,333 observations of people using mobile devices on the street, in airports, at bus stops, in cafes, on trains and busses—wherever we might see them. Of these people, 780 were touching the screen to scroll or to type, tap, or use other gestures to enter data. The rest were just listening to, looking at, or talking on their mobile devices.\n" +
  "What My Data Does Not Tell You\n" +
  "Before I get too far, I want to emphasize what the data from this study is not. I did not record what individuals were doing because that would have been too intrusive. Similarly, there is no demographic data about the users, and I did not try to identify their devices.\n" +
  "Most important, there is no count of the total number of people that we encountered. Please do not take the total number of our observations and surmise that n% of people are typing on their phone at any one moment. While we can assume that a huge percentage of all people have a mobile device, many of these devices were not visible and people weren’t interacting with them during our observations, so we could not capture this data.\n" +
  "Since we made our observations in public, we encountered very few tablets, so these are not part of the data set. The largest device that we captured in the data set was the Samsung Galaxy Note 2.\n" +
  "What We Do Know\n" +
  "A user was interacting with a mobile phone without inputting any data via key or screen.\n" +
  "\n" +
  "In over 40% of our observations, a user was interacting with a mobile phone without inputting any data via key or screen. Figure 1 provides a visual breakdown of the data from our observations.\n" +
  "\t\t\n" +
  "Voice calls occupied 22% of the users, while 18.9% were engaged in passive activities—most listening to audio and some watching a video. We considered interactions to be voice calls only if users were holding their phone to their ear, so we undoubtedly counted some calls as apparent passive use.\n" +
  "The users who we observed touching their phone’s screens or buttons held their phones in three basic ways:\n" +
  "\t\tone handed—49%\n" +
  "\t\tcradled—36%\n" +
  "\t\ttwo handed—15%\n" +
  "While most of the people that we observed touching their screen used one hand, very large numbers also used other methods. Even the least-used case, two-handed use, is large enough that you should consider it during design.\n" +
  "In the following sections, I’ll describe and show a diagram of each of these methods of holding a mobile phone, along with providing some more detailed data and general observations about why I believe people hold a mobile phone in a particular way.\n" +
  "In Figures 2–4, the diagrams that appear on the mobile phones’ screens are approximate reach charts, in which the colors indicate what areas a user can reach with the finger or thumb to interact with the screen. Green indicates the area a user can reach easily; yellow, an area that requires a stretch; and red, an area that requires users to shift the way in which they’re holding a device. Of course, these areas are only approximate and vary for different individuals, as well as according to the specific way in which a user is holding a phone and the phone’s size.\n" +
  "Users Switch How They Hold a Mobile Phone\n" +
  "The way in which users hold their phone is not a static state. Users change the way they’re holding their phone very often—sometimes every few seconds.\n" +
  "\n" +
  "Before I get to the details, I want to point out one more limitation of the data-gathering method that we used. The way in which users hold their phone is not a static state. Users change the way they’re holding their phone very often—sometimes every few seconds. Users’ changing the way they held their phone seemed to relate to their switching tasks. While I couldn’t always tell exactly what users were doing when they shifted the way they were holding their phone, I sometimes could look over their shoulder or see the types of gestures they were performing. Tapping, scrolling, and typing behaviors look very different from one another, so were easy to differentiate.\n" +
  "I have repeatedly observed cases such as individuals casually scrolling with one hand, then using their other hand to get additional reach, then switching to two-handed use to type, switching back to cradling the phone with two hands—just by not using their left hand to type anymore—tapping a few more keys, then going back to one-handed use and scrolling. Similar interactions are common.\n" +
  "One-Handed Use\n" +
  "The 49% of users who use just one hand typically hold their phone in a variety of positions.\n" +
  "\n" +
  "While I originally expected holding and using a mobile phone with one hand to be a simple case, the 49% of users who use just one hand typically hold their phone in a variety of positions. Two of these are illustrated in Figure 2, but other positions and ways of holding a mobile phone with one hand are possible. Left-handers do the opposite.\n" +
  "Figure 2—Two methods of holding a touchscreen phone with one hand\n" +
  "￼\n" +
  "Note—The thumb joint is higher in the image on the right. Some users seemed to position their hand by considering the reach they would need. For example, they would hold the phone so they could easily reach the top of the screen rather than the bottom.\n" +
  "One-handed use—with the\n" +
  "\t\tright thumb on the screen—67%\n" +
  "\t\tleft thumb on the screen—33%\n" +
  "I am not sure what to make of these handedness figures. The rate of left-handedness for one-handed use doesn’t seem to correlate with the rate of left-handedness in the general population—about 10%—especially in comparison to the very different left-handed rate for cradling—21%. Other needs such as using the dominant hand—or, more specifically, the right hand—for other tasks may drive handedness. [4]\n" +
  "One-handed use seems to be highly correlated with users’ simultaneously performing other tasks. Many of those using one hand to hold their phone were carrying out other tasks such as carrying bags, steadying themselves when in transit, climbing stairs, opening doors, holding babies, and so on.\n" +
  "\n" +
  "Cradling in Two Hands\n" +
  "Cradling is my term for using two hands to hold a mobile phone, but using only one hand to touch the screen or buttons.\n" +
  "\n" +
  "Cradling is my term for using two hands to hold a mobile phone, but using only one hand to touch the screen or buttons, as shown in Figure 3. The 36% of users who cradle their mobile phone use it in two different ways: with their thumb or finger. Cradling a phone in two hands gives more support than one-handed use and allows users to interact freely with their phone using either their thumb or finger.\n" +
  "Figure 3—The two methods of cradling a mobile phone\n" +
  "￼\n" +
  "Cradling—with a\n" +
  "\t\tthumb on the screen—72%\n" +
  "\t\tfinger on the screen—28%\n" +
  "With thumb usage, users merely added a hand to stabilize the phone for one-handed use. A smaller percentage of users employed a second type of cradling, in which they held the phone with one hand and used a finger to interact with the screen. This is similar to the way people use pens with their mobile devices. (We observed so few people using pens with their mobile devices—only about six—that I have not included them as a separate category in the data set.)\n" +
  "Cradling—in the\n" +
  "\t\tleft hand—79%\n" +
  "\t\tright hand—21%\n" +
  "Anecdotally, people often switched between one-handed use and cradling. I believe this was sometimes for situational security—such as while stepping off a curb or when being jostled by passersby—but sometimes to gain extra reach for on-screen controls outside the normal reach.\n" +
  "Two-Handed Use\n" +
  "We traditionally associate two-handed use with typing on the QWERTY thumbboards of devices like the classic Blackberry or on slide-out keyboards.\n" +
  "\n" +
  "We traditionally associate two-handed use with typing on the QWERTY thumbboards of devices like the classic Blackberry or on slide-out keyboards. Two-handed use is prevalent among 15% of mobile phone users. In two-handed use, as shown in Figure 4, users cradle their mobile phone in their fingers and use both thumbs to provide input—much as they would on a desktop keyboard.\n" +
  "Two-handed use—when holding a phone\n" +
  "\t\tvertically, in portrait mode—90%\n" +
  "\t\thorizontally, in landscape mode—10%\n" +
  "Figure 4—Two-handed use when holding a phone vertically or horizontally\n" +
  "￼\n" +
  "People often switched between two-handed use and cradling, with users typing with both thumbs, then simply no longer using one hand for input and reverting to using just one of the thumbs consistently for interacting with the screen.\n" +
  "However, not all thumb use was for typing. Some users seemed to be adept at tapping the screen with both thumbs or just one thumb. For example, a user might scroll with the right thumb, then tap a link with the left thumb moments later.\n" +
  "Also notable is the overwhelming use of devices in their vertical orientation, or portrait mode—despite theories about the ease of typing with a larger keyboard area. However, a large percentage of slide-out keyboards force landscape use. [5] All ways of holding a phone typically orient the device vertically, but for two-handed use, use of landscape mode was unexpectedly low. Though several of my clients have received numerous customer complaints in app store reviews for not supporting landscape mode.\n" +
  "What Do These Findings Mean?\n" +
  "Some designers may interpret charts of one-handed use to mean that they should place low-priority or dangerous functions in the hard to reach area in the upper-left corner of the screen. But I wouldn’t recommend that.\n" +
  "\n" +
  "I expect some to argue that one-handed use is the ideal—and that assuming one-handed use is a safe bet when designing for almost half of all users. But I see more complexity.\n" +
  "Some designers may interpret charts of one-handed use to mean that they should place low-priority or dangerous functions in the hard to reach area in the upper-left corner of the screen. [6] But I wouldn’t recommend that. What if a user sees buttons at the top, so switches to cradling his phone to more easily reach all functionality on the screen—or just prefers holding it that way all the time?\n" +
  "Even if we don’t understand why there are such large percentages for handedness, we cannot assume that people will hold their phone in their right or left hand. When targeting browsers or mobile-device operating systems, I am always uncomfortable ignoring anything with a market share over 5%. That’s a general baseline for me, though I adjust it for individual clients or products. But I would never, ever ignore 20 to 30% of my user base. While I am personally very right handed, now that I have these numbers, I am spending a lot more time paying attention to how interactions might work when using the left hand.\n" +
  "Another factor that I had not adequately considered until putting together these diagrams is how much of the screen a finger may obscure when holding a mobile phone in any of these ways. With the display occupying so much of the device’s surface, this may explain part of the reason for a user’s shifting of his or her grasp. As designers, we should always be aware of what content a person’s fingers might obscure anywhere across the whole screen. Just remembering that a tapping finger or thumb hides a button’s label is not enough.\n" +
  "Now, my inclination to test my user interface designs on devices is stronger than ever. Whether I’ve created a working prototype, screen images, or just a paper prototype that I’ve printed at scale, I put it on a mobile device or an object with similar dimensions and hold it in all of the ways that users would be likely to hold it to ensure that my fingers don’t obscure essential content and that buttons users would need to reach aren’t difficult to reach.\n" +
  "Next Steps\n" +
  "With clear correlations between tasks and ways of holding a phone, we could surmise likely ways of holding devices for particular types of interactions rather than making possibly false assumptions….\n" +
  "\n" +
  "I don’t consider this the ultimate study on how users hold mobile devices, and I would like to see someone do more work on it, even if I’m not the one to carry it out. It would be very helpful to get some solid figures on how much people switch the ways they’re holding their mobile phone—from one-handed use to cradling to two-handed use. Having accurate percentages for how many users prefer each way of holding a phone would be useful. Do all users hold their phones in all three of these ways at different times? This is not entirely clear. It would also be helpful to determine which ways of holding a mobile phone are appropriate for specific tasks. With clear correlations between tasks and ways of holding a phone, we could surmise likely ways of holding devices for particular types of interactions rather than making possibly false assumptions based on our own behavior and preferences.\n";

const strengthsAndWeaknesses =
  "Both qualitative and quantitative methods of user research play important roles in product development. Data from quantitative research—such as market size, demographics, and user preferences—provides important information for business decisions. Qualitative research provides valuable data for use in the design of a product—including data about user needs, behavior patterns, and use cases. Each of these approaches has strengths and weaknesses, and each can benefit from our combining them with one another. This month, we’ll take a look at these two approaches to user research and discuss how and when to apply them.\n" +
  "\n" +
  "Quantitative Studies\n" +
  "Statistical analysis lets us derive important facts from research data, including preference trends, differences between groups, and demographics.\n" +
  "\n" +
  "Quantitative studies provide data that can be expressed in numbers—thus, their name. Because the data is in a numeric form, we can apply statistical tests in making statements about the data. These include descriptive statistics like the mean, median, and standard deviation, but can also include inferential statistics like t-tests, ANOVAs, or multiple regression correlations (MRC). Statistical analysis lets us derive important facts from research data, including preference trends, differences between groups, and demographics.\n" +
  "Multivariate statistics like the MRC or stepwise correlation regression break the data down even further and determine what factors—such as variances in preferences—we can attribute to differences between specific groups such as age groups. Quantitative studies often employ automated means of collecting data such as surveys, but we can also use other static methods—for example, examining preferences through two-alternative, forced-choice studies or examining error rates and time on task using competitive benchmarks.\n" +
  "Quantitative studies’ great strength is providing data that is descriptive—for example, allowing us to capture a snapshot of a user population—but we encounter difficulties when it comes to their interpretation. For example, Gallup polls commonly provide data about approval rates for the President of the United States, as shown in Figure 1, but don’t provide the crucial information that we would need to interpret that data.\n" +
  "\n" +
  "￼\n" +
  "In the absence of the data that would be necessary to interpret these presidential job-approval numbers, it’s difficult to say why people approve or disapprove of the job that President Obama is doing. Some respondents may feel that President Obama is too liberal, while others may feel that he is too conservative in his actions, but without the necessary data, there is no way to tell.\n" +
  "Only someone with a firm grasp of how they should use and interpret quantitative statistics should conduct such a study.\n" +
  "\n" +
  "In a product-development environment, this data deficiency can lead to critical errors in the design of a product. For example, a survey might report that the majority of users like 3D displays, which may lead to a product team’s choosing to integrate a 3D display into their product. However, if most users like only autostereoscopic 3D displays—that is, 3D displays that don’t require their wearing glasses—or like 3D displays only for watching sports or action movies on a television, using a 3D display that requires glasses for data visualization on a mobile device might not be a sound design direction.\n" +
  "Additionally, only someone with a firm grasp of how they should use and interpret quantitative statistics should conduct such a study. For most tests, there is an overreliance on the p-value and sample size. The p-value￼ is a statistic that indicates the likelihood that research findings were the result of chance. If a p-value is less than .05, the findings are said to be statistically significant—meaning there is less than a 5% chance that the results were the result of chance.\n" +
  "It’s possible to manipulate a p-value by the sample size, but you need a sufficient sample size to have enough statistical power￼ to determine whether a finding is accurate. If your study is underpowered because of its having two small a sample size, you may fail to achieve statistical significance—even if the finding is accurate. On the other hand, if you achieve statistical significance with a small sample size, you don’t need to increase your sample size; the finding is true regardless. While the small sample size makes it more difficult to determine something, if you are able to determine something with a small sample size, it’s just as true as if you made the finding with a large sample size.\n" +
  "By increasing the sample size, you can increase a finding’s statistical power, but perhaps to a point where the finding becomes less meaningful. There’s a common joke that a researcher can make any finding statistically significant simply by increasing the sample size. The reality is not too far off. However, it is possible to increase sample sizes to a point where statistical significance is barely meaningful. In such a situation, it is important to look at the effect size￼—a statistic that tells you how strongly your variables effect the variance.\n" +
  "Basically, statistical significance tells you whether your findings are real, while effect size tells you how much they matter. For example, if you were investigating whether adding a feature would increase a product’s value, you could have a statistically significant finding, but the magnitude of the increase in value might very small—say a few cents. In contrast, a meaningful effect size might result in an increase in value of $10 per unit. Typically, if you are able to achieve statistical significance with a smaller sample size, the effect size is fairly substantial. It is important to take both statistical significance and effect size into account when interpreting your data.\n" +
  "\n" +
  "Qualitative Studies\n" +
  "Qualitative research studies can provide you with details about human behavior, emotion, and personality characteristics that quantitative studies cannot match.\n" +
  "\n" +
  "Data from qualitative studies describes the qualities or characteristics of something. You cannot easily reduce these descriptions to numbers—as you can the findings from quantitative research; though you can achieve this through an encoding process. Qualitative research studies can provide you with details about human behavior, emotion, and personality characteristics that quantitative studies cannot match. Qualitative data includes information about user behaviors, needs, desires, routines, use cases, and a variety of other information that is essential in designing a product that will actually fit into a user’s life.\n" +
  "While quantitative research requires the standardization of data collection to allow statistical comparison, qualitative research requires flexibility, allowing you to respond to user data as it emerges during a session. Thus, qualitative research usually takes the form of either some form of naturalistic observation such as ethnography or structured interviews. In this case, a researcher must observe and document behaviors, opinions, patterns, needs, pain points, and other types of information without yet fully understanding what data will be meaningful.\n" +
  "Following data collection, rather than performing a statistical analysis, researchers look for trends in the data. When it comes to identifying trends, researchers look for statements that are identical across different research participants. The rule of thumb is that hearing a statement from just one participant is an anecdote; from two, a coincidence; and hearing it from three makes it a trend. The trends that you identify can then guide product development, business decisions, and marketing strategies.\n" +
  "Because you cannot subject these trends to statistical analysis, you cannot validate trends by calculating a p-value or an effect size—as you could validate quantitative data—so you must employ them with care. Plus, you should continually verify such data through an ongoing qualitative research program.\n" +
  "With enough time and budget, you can engage in an activity called behavioral coding,￼ which involves assigning numeric identifiers to qualitative behavior, thus transforming them into quantitative data that you can then subject to statistical analysis. In addition to the analyses we described earlier, behavioral coding lets you perform a variety of additional analyses such as lag sequential analysis, a statistical test that identifies sequences of behavior—for example, those for Web site navigation or task workflows.?However, applying behavioral coding to your observations is extremely time consuming and expensive. Plus, typically, only very highly trained researchers are qualified to encode behavior. Thus, this approach tends to be cost prohibitive.\n" +
  "Additionally, because it is not possible to automate qualitative-data collection as effectively as you can automate quantitative-data collection, it is usually extremely time consuming and expensive to gather large amounts of data, as would be typical for quantitative research studies. Therefore, it is usual to perform qualitative research with only 6 to 12 participants, while for quantitative research, it’s common for there to be hundreds or even thousands of participants. As a result, qualitative research tends to have less statistical power than quantitative research when it comes to discovering and verifying trends.\n" +
  "Using Quantitative and Qualitative Research Together\n" +
  "While quantitative and qualitative research approaches each have their strengths and weaknesses, they can be extremely effective in combination with one another.\n" +
  "\n" +
  "While quantitative and qualitative research approaches each have their strengths and weaknesses, they can be extremely effective in combination with one another. You can use qualitative research to identify the factors that affect the areas under investigation, then use that information to devise quantitative research that assesses how these factors would affect user preferences. To continue our earlier example regarding display preferences: if qualitative research had identified display type—such as TV, computer monitor, or mobile phone display—the researchers could have used that information to construct quantitative research that would let them determine how these variables might affect user preferences. At the same time, you can build trends that you’ve identified through quantitative research into qualitative data-collection methods and, thus verify the trends.\n" +
  "While this might sound contrary to what we’ve described above, the approach is actually quite straightforward. An example of a qualitative trend might be that younger users prefer autostereoscopic displays only on mobile devices, while older users prefer traditional displays on all devices. You may have discovered this by asking an open-ended, qualitative question along these lines: “What do you think of 3D displays?” This question would have opened up a discussion about 3D displays that uncovered a difference between stereoscopic displays, autostereoscopic displays, and traditional displays. In a subsequent quantitative study, you could address these factors through a series of questions such as: “Rate your level of preference for a traditional 3D display—which requires your using 3D glasses—on a mobile device,” with options ranging from strongly prefer to strongly dislike. An automated system assigns a numeric value to whatever option a participant chooses, allowing a researcher to quickly gather and analyze large amounts of data.\n" +
  "Conclusion\n" +
  "When setting out to perform user research, … it is important to understand the different applications of these two approaches to research.\n" +
  "\n" +
  "When setting out to perform user research—whether performing the research yourself or assigning it to an employee or a consultant—it is important to understand the different applications of these two approaches to research. This understanding can help you to choose the appropriate research approach yourself, understand why a researcher has chosen a particular approach, or communicate with researchers or stakeholders about a research approach and your overarching research strategy. The examples we’ve provided here provide just a small sampling of the many ways in which can analyze and employ qualitative and quantitative data. In what other ways do you use and combine qualitative and quantitative research? \n";

const humanQualities =
  "This article was inspired by a discussion at last week’s Silicon Valley IxDA meeting, where Daniel Szuc and Josephine Wong spoke on the topic “Sleepwalking + Designing for a Healthy Future,”￼ which got me thinking about what qualities one must have to be an effective UX professional. So much of success derives from mindset rather than skillsets, and mindset takes a lifetime to develop—or, for those of us who believe in reincarnation, multiple lifetimes. Your mindset derives from your life experiences and the way you respond to them, as well as what you learn from those who influence you greatly—such as your parents, mentors, and spiritual teachers.\n" +
  "\n" +
  "In their book Put Your Mindset to Work: The One Asset You Really Need to Win and Keep the Job You Love, James Reed and Paul G. Stoltz say:\n" +
  "“Your mindset is about what you see, think, and believe. … It is the internal lens through which you see and navigate life. Mindset influences everything you see, as well as everything you do.”\n" +
  "Mindset is who you really are at your core. It’s your habitual way of thinking. While it’s not easy to change, the purpose of life is to evolve and become better a human being. So you should think about these human qualities from time to time and always endeavor to do better. Your mindset is what really differentiates you from your peers. If you work hard at developing what Jo Wong likes to call your human qualities, you’ll set yourself up for success in work and in life.\n" +
  "“Men acquire a particular quality by constantly acting in a particular way.”—Aristotle\n" +
  "Having the right mindset can be a competitive advantage when you’re seeking employment or advancement. According to Reed and Stoltz:\n" +
  "“Given the choice between someone with the desired mindset who lacks the complete skillset for the job and someone with the complete skillset who lacks the desired mindset, a total of 96 percent of the employers surveyed picked mindset over skillset as the key element in those that they seek and retain.”\n" +
  "These employers also believe that it’s much more likely that a person with the right mindset will be able to develop the required skillset than that a person with all the hard skills would develop the right mindset. Plus, the tactical skills that jobs require change over time, while the desired mindset is a constant. This is especially true of user experience jobs. The tactical skills that it takes to be a UX professional are forever evolving.\n" +
  "Essential Qualities of UX Professionals\n" +
  "There are several qualities that it is especially important for UX professionals to have. These qualities are at the core of what makes UX professionals successful: empathy, intuition, creativity, passion, and the desire to learn throughout their career.\n" +
  "1. Be Empathetic\n" +
  "empathy—“The ability to understand and share the feelings of another.”—Oxford Dictionaries\n" +
  "Empathy enables you to understand other people’s motivations, needs, and emotions more deeply, and you can use that understanding to create better products for them.\n" +
  "\n" +
  "First and foremost, UX professionals must be empathetic. As a UX professional, the primary focus of your work is on the wants and needs of the people who use the products that you create. Empathy enables you to understand other people’s motivations, needs, and emotions more deeply, and you can use that understanding to create better products for them. Having empathy lets you accurately perceive people’s needs—without your own lens introducing any distortions or occlusions. Whether you’re a UX researcher, strategist, or designer, empathy is an essential quality for you to develop. Being empathetic lets you look at things from different people’s perspectives and internalize what you see.\n" +
  "Having empathy—whether for colleagues, family, or friends—comes from focusing on someone else’s needs, struggles, and feelings. It requires that you open your heart to them and put their needs before your own. That you be fully with them in the moment. That you look deeply into their eyes and really see them for who they are. You need to be open to many different types of people from many different cultures. But you can’t connect with people when you’re feeling worried, defensive, angry, frightened, or ashamed.\n" +
  "“Empathy is about standing in someone else’s shoes, feeling with his or her heart, seeing with his or her eyes. Not only is empathy hard to outsource and automate, but it makes the world a better place.”—Daniel H. Pink\n" +
  "“If there is any one secret of success, it lies in the ability to get the other person’s point of view and see things from that person’s angle, as well as from your own.”—Henry Ford\n" +
  "2. Be Intuitive\n" +
  "intuition—“The ability to understand something immediately, without the need for conscious reasoning.”—Oxford Dictionaries\n" +
  "Having intuition is being open to the mysterious workings of your own mind—seeing what is or what might be clearly in your mind’s eye.\n" +
  "\n" +
  "Having intuition is being open to the mysterious workings of your own mind—seeing what is or what might be clearly in your mind’s eye. Sometimes, through intuition, holistic solutions to problems may arise fully formed—or very nearly so—from your subconscious mind. At other times, your intuition may give you just the seed of a great idea. Intuition lets you draw connections between diverse inputs without conscious thought. The effort lies in gathering the relevant data for your subconscious mind to work on.\n" +
  "Intuition often plays a strong role in decision making. You rely on intuition when you must make decisions and take action on them very quickly, the problem or the solution is ambiguous, or there's no precedent to follow.\n" +
  "“The intuitive mind is a sacred gift and the rational mind is a faithful servant. We have created a society that honors the servant and has forgotten the gift.”—Albert Einstein\n" +
  "“You have to trust in something—your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.”—Steve Jobs\n" +
  "“Sometimes making a decision is hard, not because it is unpopular, but because it comes from your gut and defies a technical rationale. Much has been written about the mystery of gut, but it’s really just pattern recognition, isn’t it? You’ve seen something so many times you just know what’s going on this time. The facts may be incomplete or the data limited, but the situation feels very, very familiar to you.”—Jack Welch\n" +
  "3. Be Creative\n" +
  "creativity—“The use of the imagination or original ideas, especially in the production of an artistic work.”—Oxford Dictionaries\n" +
  "Being creative is allowing your intuition to reveal possibilities to you and following them in the moment—in other words, it’s being in flow….\n" +
  "\n" +
  "Being creative is allowing your intuition to reveal possibilities to you and following them in the moment—in other words, it’s being in flow, which Mihaly Csikszentmihalyi defines in his book Flow: The Psychology of Optimal Experience,as follows:\n" +
  "“The best moments usually occur when a person’s body or mind is stretched to its limits in a voluntary effort to accomplish something difficult and worthwhile. Optimal experience is thus something we make happen. … [Flow is] a state in which people are so involved in an activity that nothing else seems to matter; the experience is so enjoyable that people will continue to do it even at great cost, for the sheer sake of doing it. … [Flow lets people] achieve a joyous, self-forgetful involvement through concentration, which in turn is made possible by a discipline of the body.”\n" +
  "What prompted Csikszentmihalyi to do research on the flow state? According to Wikipedia:￼\n" +
  "“Mihaly Csikszentmihalyi and his fellow researchers began researching flow after Csikszentmihalyi became fascinated by artists who would essentially get lost in their work. Artists, especially painters, got so immersed in their work that they would disregard their need for food, water, and even sleep. Thus, the origin of research on the theory of flow came about when Csikszentmihalyi tried to understand this phenomenon experienced by these artists.”\n" +
  "Being in flow is a sort of meditative bliss state, in which your mind is more fully concentrated than at just about any other time. Great ideas come to you when you lose yourself in your work. Some of the best creative experiences come from working in collaboration with others—especially when you can achieve a flow state together. Flow brings joyfulness to your work.\n" +
  "Flow is all about focus, which is the antithesis of the monkey-mind nature of most people’s experience of the Web—with the mind jumping quickly from one thing to another. Just as with meditation, you can get better at calming your mind and connecting with your creativity through practice, practice, practice.\n" +
  "The source of creativity is your imagination. When creating, you synthesize all of the ideas that you’ve taken in from myriad sources and, magically, all of those inputs fall into place, forming a cohesive whole. This is your intuition at work.\n" +
  "All creativity involves improvisation—whether you’re designing user experiences, acting on a stage, jamming with a band, doing some form of creative writing, or making up a new recipe.\n" +
  "“To raise new questions, new possibilities, to regard old problems from a new angle requires creative imagination.”—Albert Einstein\n" +
  "“Creativity is just connecting things. … Creative people … [are] able to connect experiences they’ve had and synthesize new things.”—Steve Jobs\n" +
  "“The organizations of the future will increasingly depend on the creativity of their members to survive. Great Groups offer a new model in which the leader is an equal among Titans. In a truly creative collaboration, work is pleasure, and the only rules and procedures are those that advance the common cause.”—Warren Bennis\n" +
  "“Creativity is contagious.”—Albert Einstein\n" +
  "4. Be Passionate\n" +
  "passion—“An intense desire or enthusiasm for something.”—Oxford Dictionaries\n" +
  "With passion, your work ceases to feel like work.\n" +
  "\n" +
  "Being an effective UX professional requires great drive, enthusiasm, and focus. To sustain the level of effort and concentration that the work demands, you must have a passion for your work. With passion, your work ceases to feel like work. Your passion keeps you focused on your goals, enables you to get things done and take risks when necessary, and makes it possible for you to realize your vision. Always strive to do great work! Don’t settle for less. Don’t compromise on quality.\n" +
  "Love your work and you’ll have the motivation to continually hone your skills and expand your areas of competency, as you must forever do in this field. When you work with passion, you can reach your full potential.\n" +
  "“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.”—Steve Jobs\n" +
  "“Pleasure in the job puts perfection in the work.”—Aristotle\n" +
  "“You have to be burning with an idea, or a problem, or a wrong that you want to right. If you’re not passionate enough from the start, you’ll never stick it out.”—Steve Jobs\n" +
  "5. Be a Life-long Learner\n" +
  "learning—“The acquisition of knowledge or skills through experience, study, or by being taught.”—Oxford Dictionaries\n" +
  "Having the motivation and the ability to learn and grow throughout your life is an essential quality in today’s fast-changing world.\n" +
  "\n" +
  "Being a life-long learner is a quality of successful people. Having the motivation and the ability to learn and grow throughout your life is an essential quality in today’s fast-changing world—especially for UX professionals. You can learn through reading and deep reflection—but most of all you’ll learn through life experience. You can learn by questioning things—and asking the right questions enables you to solve problems. Often, you’ll learn from your mistakes, so life-long learning requires that you have the courage to keep taking risks.\n" +
  "In a field that is as broad and fast-changing as user experience, it’s important that you keep learning throughout your career. Sustaining your commitment to continuous learning takes curiosity about the world in which you live and a desire to improve your mind. The more you learn, the more you can contribute in the workplace and the more likely you’ll advance in your career.\n" +
  "“Learning is a life-long process of keeping abreast of change. And the most pressing task is to teach people how to learn.”—Peter Drucker\n" +
  "“I have no special talents. I am only passionately curious.”—Albert Einstein\n" +
  "\n" +
  "Qualities of Effective Team Members\n" +
  "Qualities that make you more effective when working with other people or on teams include being a good listener, being persuasive, being responsible, and being a leader.\n" +
  "6. Be a Good Listener\n" +
  "listening—“[Taking] notice of and [acting] on what someone says; [responding] to advice or a request.”—Oxford Dictionaries\n" +
  "Listening well is the key to effective communication. Focusing on both what people say and how they say it ensures that you accurately receive the messages people communicate to you.\n" +
  "\n" +
  "Listening well is the key to effective communication. Focusing on both what people say and how they say it ensures that you accurately receive the messages people communicate to you. Paying attention to their use of language, tone of voice, body language, gestures, and emotional affect increases the probability that you will be able to correctly interpret their meaning and understand what you hear. Listen for people’s ideas, not just to their words. When you listen well, you’ll experience fewer misunderstandings and make fewer mistakes.\n" +
  "Effective listening is especially important when doing user research. Having empathy, being a good listener, and using your intuition will together make you a superior researcher. Everyone opens up when someone listens to them attentively and shows avid interest in what they’re saying. When you really connect with research participants, you’ll learn more from them and understand what they’re saying better. Once you’ve listened well, following up with good questions demonstrates both that you’ve really heard someone and your interest in what they’ve said.\n" +
  "All too often, people are so eager to speak themselves that they don’t really listen to what others are saying. When people end up talking all at once, you can’t hear what anyone is saying. So being a good listener will set you above your peers who don’t listen well.\n" +
  "When you’re collaborating with a product team, you never know who will contribute the best ideas. So you must draw out all of your teammates and pay careful attention to what everyone says, listening with a laser-like focus to be sure that you take in everyone’s inputs.\n" +
  "“If we were supposed to talk more than we listen, we would have two tongues and one ear.”—Mark Twain\n" +
  "7. Be Persuasive\n" +
  "persuasive—“Good at persuading someone to do or believe something through reasoning or the use of temptation.”—Oxford Dictionaries\n" +
  "As a UX professional, you must persuade others to embrace your ideas and follow your plans to get anything done.\n" +
  "\n" +
  "As a UX professional, you must persuade others to embrace your ideas and follow your plans to get anything done. You have to persuade stakeholders to adopt your strategies and fund your projects, sell your design ideas to your design team and product team, and get developers to faithfully execute your designs and, thus, bring all of your hard work to fruition.\n" +
  "Your confidence in yourself and your ideas will help you to persuade others, as will your ability to make your case logically and use storytelling to provide supporting evidence. But always remain open to the ideas of others, too, and support the best ideas whatever their source. It doesn’t really matter who has the best ideas. To achieve success, what matters most is incorporating all of the best ideas into the design and, ultimately, the product.\n" +
  "There’s really only one way to get people to do what you want them to do, and that’s to persuade them that it’s what they want to do it. It’s a lot easier to do this when your design direction has grown out of other’s ideas, as well as your own; everyone on the team was part of the creative process; and the entire team has a sense of ownership of what you’ve created together.\n" +
  "“If you wish to win a man over to your ideas, first make him your friend.”—Abraham Lincoln\n" +
  "“If you would persuade, you must appeal to interest rather than intellect.”—Benjamin Franklin\n" +
  "“To be persuasive, we must be believable; to be believable, we must be credible; to be credible, we must be truthful.”—Edward R. Morrow\n" +
  "“Qxuestions are often more effective than statements in moving others. … Since the research shows that, when the facts are on your side, questions are more effective than statements, don’t you think you should be pitching more with questions?”—Daniel H. Pink\n" +
  "8. Be Responsible and Kind\n" +
  "responsible—“Capable of being trusted.”—Oxford Dictionaries\n" +
  "kindness—“The quality of being friendly, generous, and considerate.”—Oxford Dictionaries\n" +
  "It’s essential that you do your best to meet your obligations to your colleagues. If you promise to do something, you should try very hard to fulfill that promise.\n" +
  "\n" +
  "It’s essential that you do your best to meet your obligations to your colleagues. If you promise to do something, you should try very hard to fulfill that promise. Yes, sometimes things change—so it’s no longer desirable to move forward with something—or circumstances may prevent your doing something exactly when you said you’d do it. But in either of these cases, it’s your responsibility to discuss the problem with your colleagues and, together, determine the best way forward. There’s nothing quite as disappointing as relying on someone to do something and having them go incommunicado or disappear on you.\n" +
  "Don’t overcommit yourself. If you have a hard time saying no to people, you’re likely to set yourself up for failure. To prevent your disappointing people, avoid over-promising and under-delivering. If anything, you should do the opposite—that is, under-promise and overdeliver—but never deliberately under-promise in an attempt to make yourself look like a hero. That would just be dishonest. Nor should you make yourself look like a slacker by committing to doing too little work.\n" +
  "It’s important to be respectful of the people with whom you work. Treat your colleagues as you would like them to treat you. Being kind to one another makes the workplace a happy place to be, smooths the team’s interactions, and helps everyone to be highly productive. When your teammates are struggling, show them compassion and help them to get through tough times.\n" +
  "Demonstrating generosity toward the people with whom you work will set you apart from peers who are overly competitive or focused on self-advantage. Always share ideas and information freely with your teammates to enable them to do the best job they can do.\n" +
  "“Acting responsibly is not a matter of strengthening our reason, but of deepening our feelings for the welfare of others.”—Jostein Gaarder\n" +
  "“A hundred times every day I remind myself that my inner and outer life depend on the labors of other men, living and dead, and that I must exert myself in order to give in the same measure as I have received and am still receiving.”—Albert Einstein\n" +
  "9. Be a Leader\n" +
  "leadership—“The action of leading a group of people or an organization.”—Oxford Dictionaries\n" +
  "If you have leadership qualities, you can function as a leader whenever a situation requires that you take the lead, set the team’s direction, or make decisions.\n" +
  "\n" +
  "You don’t have to have any particular title to be a leader. Teammates typically share the responsibility for leading a team, and whoever has the necessary information and know-how to handle a particular situation takes the lead in handling it. If you have leadership qualities, you can function as a leader whenever a situation arises that requires that you take the lead, set the team’s direction, or make decisions. Those who are actually working in leadership roles must always take responsibility for leadership in their area of purview.\n" +
  "Great leaders set forth a vision and live up to it. They communicate their vision and goals with clarity and inspire their teams to meet them. There is always alignment between what they say and what they do. The best leaders are forward-looking, competent, intelligent, and broad-minded. Effective leaders model good human qualities for the people who work for them, including honesty, fairness, straightforwardness, dependability, cooperativeness, determination, imagination, ambition, courage, caring, maturity, loyalty, self-control, and independence. They care for the people who work for them, delegate responsibility to them, and support them in what they do. They praise publicly and, when necessary, criticize or reprimand in private.\n" +
  "“It’s not the absence of leadership potential that inhibits the development of more leaders; it’s the persistence of the myth that leadership can’t be learned. This haunting myth is a far more powerful deterrent to leadership development than is the nature of the person or the basics of the leadership process.”—James Kouzes and Barry Posner\n" +
  '"Good leaders make people feel that they’re at the very heart of things, not at the periphery. Everyone feels that he or she makes a difference to the success of the organization. When that happens people feel centered and that gives their work meaning.”—Warren G. Bennis\n' +
  "“Leadership is lifting a person’s vision to high sights, the raising of a person’s performance to a higher standard, the building of a personality beyond its normal limitations.”—Peter F. Drucker\n" +
  "“The leaders who work most effectively … understand their job to be to make the team function. They accept responsibility and don’t sidestep it, but ‘we’ gets the credit…. This is what creates trust, what enables you to get the task done.”—Peter F. Drucker\n" +
  "“Leadership comes from integrity—that you do whatever you ask others to do.”—Scott Berkun\n" +
  "“Management is doing things right; leadership is doing the right things.”—Peter F. Drucker\n" +
  "Foundational Human Qualities\n" +
  "Qualities that form the foundation of all other human qualities include honesty, integrity, courage, self-awareness, and wholeheartedness. These qualities define who we are as human beings.\n" +
  "10. Be Honest and Have Integrity\n" +
  "honesty—“The quality of being honest,” or “free of deceit and untruthfulness; sincere.”—Oxford Dictionaries\n" +
  "integrity—“The quality of being honest and having strong moral principles; moral uprightness.”—Oxford Dictionaries\n" +
  "People with personal integrity always try to do the right thing. … It takes courage to do the right thing whatever the consequences.\n" +
  "\n" +
  "Being honest means telling the truth and being straightforward and open with people. A very wise man once said, “Tell the truth, but never a harsh truth.” People with personal integrity always try to do the right thing, regardless of whether anyone would ever know what they’ve done. They have a strong moral compass. It takes courage to do the right thing whatever the consequences. Integrity is a valuable quality in everyone, but it’s vital in leaders. Your honesty and integrity will engender trust in others.\n" +
  "“In looking for people to hire, you look for three qualities: integrity, intelligence, and energy. And if they don’t have the first, the other two will kill you.”—Warren Buffet\n" +
  "11. Be Courageous\n" +
  "courageous—“Not deterred by danger or pain; brave.”—Oxford Dictionaries\n" +
  "You must have the courage of your convictions.\n" +
  "\n" +
  "Having courage gives you the tenacity to work through issues and disagreements without compromising your principles. Don’t be afraid to speak out and make your opinions known—particularly if you’re the lone voice representing user experience. Master your fears and insecurities and take a stand. Live up to your values. Do the right thing. Often, you’ll derive courage from the need to stand up for others—whether users, colleagues, or the people who work for you.\n" +
  "You must have the courage of your convictions. For example, if you truly believe that you’ve made the right decision, don’t be dissuaded from following through on it—unless someone makes salient arguments against that course of action that truly persuade you that you should change your decision.\n" +
  "In their “Sleepwalking…” presentation, Dan Szuc and Jo Wong included this wonderful quotation on courage from Maya Angelou:\n" +
  "“Without courage, we cannot practice any other virtue with consistency.”\n" +
  "“The mediocre mind is incapable of understanding the man who refuses to bow blindly to conventional prejudices and chooses instead to express his opinions courageously and honestly.”—Albert Einstein\n" +
  "“Don’t let the noise of others’ opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition.”—Steve Jobs\n" +
  "12. Be Self-Aware\n" +
  "self-aware—“[Having] conscious knowledge of one’s own character, feelings, motives, and desires.”—Oxford Dictionaries\n" +
  "Self-awareness … requires mindfulness and deep reflection on your thoughts, your emotions, your motives in your interactions with others, and what is happening in your life.\n" +
  "\n" +
  "Self-awareness—knowing what your strengths and weaknesses are and acknowledging what you have yet to learn—requires mindfulness and deep reflection on your thoughts, your emotions, your motives in your interactions with others, and what is happening in your life. It is a valuable quality that everyone should cultivate, but it’s an especially valuable quality in leaders.\n" +
  "When you don’t know the answer to a question or the right solution for a problem, or you’ve made a mistake, don’t be afraid to admit it. Other people are usually aware of your ignorance, weakness, or mistake anyway, so trying to hide your deficiencies just shows a lack of integrity and inevitably results in the loss of their trust and respect. In contrast, admitting your weaknesses increases your credibility and engenders trust. Plus, by acknowledging that you need help, you’ll receive the help that you need and achieve a successful outcome.\n" +
  "As Chris Musselwhite, CEO and Head Product Designer of Discovery Learning Inc. wrote in his article “Self-Awareness and the Effective Leader,” for Inc.com:\n" +
  "“When you acknowledge what you have yet to learn, you’re modeling that, in your organization, it’s okay to admit you don’t have all the answers, to make mistakes, and most importantly, to ask for help. These are all characteristics of an organization that is constantly learning and springboards to innovation and agility—two hallmarks of high-performing organizations.”\n" +
  "13. Be Wholehearted\n" +
  "wholehearted—“Showing or characterized by complete sincerity and commitment.”—Oxford Dictionaries\n" +
  "Being wholehearted is the quality that allows you to embrace all of the other virtuous human qualities….\n" +
  "\n" +
  "Being wholehearted is the quality that allows you to embrace all of the other virtuous human qualities that I’ve described in this article.\n" +
  "In her book Daring Greatly, Brené Brown writes about having the courage to form deep connections with other people and live a more wholehearted life. She says:\n" +
  "“Wholehearted living is about engaging in our lives from a place of worthiness. … The main concern of Wholehearted men and women is living a life defined by courage, compassion, and connection. The Wholehearted identify vulnerability as the catalyst for courage, compassion, and connection. … Vulnerability is the core, the heart, the center, of meaningful human experiences.”\n";

const articles = [
  {
    id: 1,
    author: "Pabini Gabriel-Petit",
    title: "13 Human Qualities You Must Have to Succeed in Work and Life",
    liked: "10540",
    image: "https://www.aihr.com/wp-content/uploads/continousimprovement.png",
    description: humanQualities,
  },
  {
    id: 2,
    author: "Bryan McClain",
    title: "Strengths and Weaknesses of Quantitative and Qualitative Research",
    liked: "49540",
    image: "https://miro.medium.com/max/1400/1*CH9zWYSU4XZudQ4CQDWafA.jpeg",
    description: strengthsAndWeaknesses,
  },
  {
    id: 3,
    author: "Steven Hoober",
    title: "How Do Users Really Hold Mobile Devices?",
    liked: "6540",
    image:
      "https://www.callcentrehelper.com/images/stories/2020/01/i-can-motivation-dice-760.jpg",
    description: howDoUsers,
  },
  {
    id: 4,
    author: "Luke Wroblewski",
    title: "International Address Fields in Web Forms",
    liked: "5400",
    image:
      "https://www.easymetrics.com/wp-content/uploads/2021/01/Measuring-Growth-Orange-2.jpg",
    description: internationalAddress,
  },
  {
    id: 5,
    author: "Caroline Jarrett",
    title: "What Is a Confidence Interval and Why Would You Want One?",
    liked: "50",
    image:
      "https://res.cloudinary.com/grohealth/image/upload/f_auto,fl_lossy,q_auto/v1583921423/DCUK/Content/iStock-1003163388.jpg",
    description: confidanceInterval,
  },
];

module.exports = articles;
