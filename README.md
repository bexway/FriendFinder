# FriendFinder
An app containing a personality quiz that will match friends to the most similar personalities. The hosted app can be found [here](https://powerful-plateau-85487.herokuapp.com/).

Every survey question must be filled out before submission. Upon submission, the answers will be compared to the answers of previous participants for the same question. The difference in answer for each question is aggregated, and the individual who has the minimal difference value from the submitted answers will be returned as the matched friend. The submitted information will then be accumulated with the rest of the submissions. (Due to the cycling of Heroku servers, such information is not guaranteed to be stored.)

If more than one individual shares the minimal difference, the program will select one of those at that difference value at random. This is to avoid favoring any particular person who may have the same responses as another.
