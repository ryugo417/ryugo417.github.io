## Generating Natural-Language Video Descriptions Using Text-Mined Knowledge

### 1.What is this paper about?

Model that generates natural-language descriptions for videos
detail↓
It combines the output of state-of-the-art object and activity detectors with “real-world” knowledge to select the most probable subject-verb-object triplet for describing a video.

### 2.What’s better than previous paper?

It can annotate arbitrary videos without requiring the expensive collection and annotation of a similar training video corpus.

We make extensive use of text-mined knowledge to select the best SVO triple and generate coherent sentences. 
→”verb expansion”

### 3.What are important parts of technique and methods?

![model](./img/Generating Natural-Language Video Descriptions Using Text-Mined Knowledge.jpg) 

We improve these initial probability distributions over objects and activities by incorporating the likelihood of different activities occurring with particular subjects and objects using two different approaches.

-first approach 
Using the Stanford dependency parser, we parsed 4 different text corpora covering a wide variety of text: English Gigaword, British National Corpus (BNC), ukWac and WaCkypedia EN.

-second approach 
To estimating SVO probabilities, we used BerkeleyLM (Pauls and Klein 2011) to train an n-gram language model on the GoogleNgram corpus (Lin et al. 2012).

the top activity detections are expanded with their most similar verbs in order to generate a larger set of potential words for describing the action.


### 4.How did they verify it?

From the ∼ 50 human descriptions available for each video, we identified the SVO for each description and then determined the ground-truth SVO for each of the 185 test videos using majority vote.

To evaluate the accuracy of SVO identification, we used two metrics. 
first 
a binary metric that requires exactly matching the gold-standard subject, verb and object
→unduly harsh

Second
In order to account for similarities, we also measure the WUP similarity between the predicted and correct items.

we asked human judges using Amazon Mechanical Turk to evaluate the quality of the sentences generated by our approach compared to those generated by the baseline system.


### 5.Is there a debate?

Only to make sentence following template.

the person detector has higher recall and confidence than the other object detectors because of a few testing date. 