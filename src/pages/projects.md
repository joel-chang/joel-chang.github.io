---
title: Projects
---

# Projects

## [guessmybf.org](https://www.guessmybf.org/) 

[GuessMyBF](https://www.guessmybf.org/) (short for Guess My Body Fat) is a web app which provides a body fat reading based on a single picture. The platform has garnered over 10000+ visitors over the span of 2 years.

The following tools were used:
- [React](https://react.dev/): frontend
- [Firebase](https://firebase.google.com/): backend
- [Roboflow](https://roboflow.com/): a dataset management tool
- [Google Colab](https://colab.research.google.com/): to train the model
- [GMBF Data Assistant](https://github.com/joel-chang/r_gmbf_data_assistant): a [PRAW](https://praw.readthedocs.io/en/stable/)-based CLI to periodically retrieve post data from the [r/guessmybf](https://www.reddit.com/r/guessmybf/) subreddit.
- [Notion](https://www.notion.so/): knowledge management

I also developed a prototype Android app for live inference, and while the results were good, I didn't see the benefits of inference over live video.

## [GMBF Data Assistant](https://github.com/joel-chang/r_gmbf_data_assistant)

A CLI for data management of [the r/guessmybf subreddit](https://www.reddit.com/r/guessmybf/).The tool consists of the following features:

1. Scrapes the r/guessmybf subreddit.
2. Logs the results.
3. A data manager - the subreddit is not very strictly regulated, there is no standard format for post submission. Thus there is a need to normalize post data, gather post and comments statistics and provide insights for each submission. 

More information on this tool can be found [here](https://github.com/joel-chang/r_gmbf_data_assistant).

## [NDHU Webs](https://github.com/melpeln/ndhuwebs) 
This tool alerts website users of security risks and automatically sends users an email warning.

## [Taiwan AIGO - AI Startups Competition](https://www.csie.ndhu.edu.tw/en/uncategorized-en/joel_2021_aigo_award_en/) - Software Engineer
A machinery performance monitoring system for folding machines found in paper binding factories.