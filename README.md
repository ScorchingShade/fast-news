# fast-news

An api to quickly get news via the inshorts website.

---
<br>

## Installation
Install using npm:
```sh
npm install fast-news-api
```

## Usage
Require library
```javascript
const inshorts= require('fast-news-api');
```
```javascript
var options = {
  lang: 'language',
  category: 'category',
  numOfResults: 5
}

inshorts.get(options, function(result){
  console.log(result);
});
```
Options is a mandatory parameter. Pass the 'options' object as a parameter to this function. Define keys lang, category and numOfResults.

Default limit of total results queried is 25. Any number above 25 also results in a total of 25 results.

Default language is 'en'.

## Categories for News API
 - national (India)
 - business
 - sports
 - world
 - politics
 - technology
 - startup
 - entertainment
 - miscellaneous
 - hatke (unusual)
 - science
 - automobile

 To get all categories, leave the category parameter empty


## Availabe Languages-
 - en (English)
 - hi (Hindi)

### Example Code Snippet
```javascript
var options = {
  lang: 'en',
  category: 'national'
  numOfResults: 6
}

inshorts.get(options ,function(result){
  console.log(result);
});
```

Response
```javascript
[
  {
    image: "url('https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/01_jan/29_sat/img_1643461868734_540.jpg?')",
    title: 'Mumbai sees marginal rise in daily COVID tally with 1,411 cases; 11 deaths reported',
    author: 'Shalini Ojha',
    content: "Mumbai on Saturday reported 1,411 fresh COVID-19 cases, 99 more than 1,312 new cases it had logged on Friday. Eleven patients died in the last 24 hours and 10 of them had co-morbidities, the BMC bulletin revealed. Over 3,500 patients recovered while 187 patients were hospitalised today. Mumbai's active COVID-19 caseload stands at 12,187, nearly half of Delhi's 24,800. ",
    postedAt: '06:59 pm 29 Jan',
    sourceURL: 'https://inshorts.com/en/read/national'
  },
  {
    image: "url('https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/01_jan/29_sat/img_1643468159624_459.jpg?')",
    title: "What's allowed & what's not in K'taka after COVID-19 curbs were eased?",
    author: 'Shalini Ojha',
    content: 'Amid dipping COVID-19 cases, the Karnataka government ended the night curfew and reopened schools for Classes 1-9 from January 31. Bars, restaurants, hotels and offices can operate at 100% occupancy while cinema halls, gyms and swimming pools can function at 50% capacity. A maximum of 300 people can attend weddings in open spaces. Protests, fairs and religious gatherings are banned. ',
    postedAt: '08:44 pm 29 Jan',
    sourceURL: 'https://inshorts.com/en/read/national'
  },
  {
    image: "url('https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/01_jan/29_sat/img_1643461262749_920.jpg?')",
    title: 'Educational institutions in Telangana to reopen from Feb 1: Govt',
    author: 'Shalini Ojha',
    content: 'The Telangana government on Saturday issued an order directing all educational institutions in the state to reopen from February 1 (Tuesday) while following COVID-19 norms. The order applies to all private and government-aided institutions. Earlier amid a spike in COVID-19 cases, the government had declared Sankranti holidays from January 8-16. The vacation was later extended till January 30. ',
    postedAt: '06:48 pm 29 Jan',
    sourceURL: 'https://inshorts.com/en/read/national'
  },
  {
    image: "url('https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/01_jan/29_sat/img_1643466037334_760.jpg?')",
    title: "Policeman shot dead by terrorists in J&K's Anantnag near his home",
    author: 'Shalini Ojha',
    content: 'A head constable, identified as Ali Muhammad, was shot dead by terrorists in Anantnag of South Kashmir on Saturday, J&K Police said. Reportedly, he was shot near his home around 5:35 pm and succumbed to injuries in a hospital. "Police have registered a case in this regard under relevant sections of law. (An) investigation is in progress," police added. ',
    postedAt: '08:14 pm 29 Jan',
    sourceURL: 'https://inshorts.com/en/read/national'
  },
  {
    image: "url('https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/01_jan/29_sat/img_1643472277834_704.jpg?')",
    title: 'EC bans exit polls for upcoming state polls from Feb 10-March 7',
    author: 'Shalini Ojha',
    content: 'The Election Commission said that no person will be allowed to conduct or publish results of exit polls from 7:00 am of February 10 till 6:30 pm on March 7. Any person who violates the rule shall be imprisoned for upto two years or may be fined or both, EC added. The results will be declared on March 10. ',
    postedAt: '10:36 pm 29 Jan',
    sourceURL: 'https://inshorts.com/en/read/national'
  },
  {
    image: "url('https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/01_jan/29_sat/img_1643475363911_525.jpg?')",
    title: "UP minister's aide shot dead in Mathura ahead of state polls",
    author: 'Shalini Ojha',
    content: 'Village pradhan Ramveer Singh, who was the proposer for UP minister Laxmi N Chaudhary, was shot dead by an unknown assailant in Mathura on Saturday. "The assailant fired at Ramveer Singh four times in the head from close range," a police official said, adding that he died on the spot. The assailant could have been waiting for Singh, he said.',
    postedAt: '10:39 pm 29 Jan',
    sourceURL: 'https://inshorts.com/en/read/national'
  }
]
```
## Author

<h1 align="center">Hi 👋, I'm Ankush</h1>
<h3 align="center">A geek , a coder, a boxer, an explorer</h3>


- 👯 I’m looking to collaborate on [React](https://github.com/facebook/react)


- 👨‍💻 All of my projects are available at [https://github.com/ScorchingShade](https://github.com/ScorchingShade)

- 📝 I regulary write articles on [https://thecodewolf.in/](https://thecodewolf.in/)

- 💬 Ask me about **React, Open source, frontend and Spatial Navigation**

- 📫 How to reach me - **ankushors789@gmail.com** and **info@thecodewolf.in**

- ⚡ Fun fact **I am a burger connoisseur, having eaten 125 different kinds of burgers!**


<p align="center">
<a href="https://linkedin.com/in/ankush-sharma-a9b24a37" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="ankush-sharma-a9b24a37" height="20" width="20" /></a>
<a href="https://fb.com/kushuas" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg" alt="kushuas" height="20" width="20" /></a>
<a href="https://instagram.com/the_sitting_traveller" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="the_sitting_traveller" height="20" width="20" /></a>
<a href="https://medium.com/@ankushsharma_70830" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/medium.svg" alt="@ankushsharma_70830" height="20" width="20" /></a>
</p>




## License

*Copyright (C) 2020 Ankush Sharma @ AINC, creating code*

*Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:*

*The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.*

*THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*

<br>