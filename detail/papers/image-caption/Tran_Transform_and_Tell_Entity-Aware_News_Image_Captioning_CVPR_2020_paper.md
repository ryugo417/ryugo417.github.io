## Transform and Tell: Entity-Aware News Image Captioning

### 1.What is this paper about?

An end-to-end model which generates captions for images embedded in news articles.

Introduction the NYTimes800k dataset

### 2.What’s better than previous paper?

Previous works mainly focus on generic images because they didn't have adequate knowledge such as names and places and couldn't enrich linguistic expression.

It address the knowledge gap by computing multi-head attention on the words in the article, along with faces and objects that are extracted from the image and the linguistic gap with transformer language model which use flexible byte-pair-encoding that can generate unseen words.


### 3.What are important parts of technique and methods?

![model](../../detail/img/Tran_Transform_and_Tell_Entity-Aware_News_Image_Captioning_CVPR_2020_paper1.png) 


It has four type encoder to attention over four different modalities to address the knowledge gap.
1. Image Encoder
2. Face Encoder
3. Object Encoder
4. Article Encoder

To encode the article text we use RoBERTa which improvements over the BERT model, which is a pretrained language representation model providing contextual embeddings for text.
It is the bidirectionality and the attention mechanism in the transformer allow a word to have different vector representations depending on the surrounding context.
That's way,it is available to make word of named entities to address the linguistic expressiveness.



### 4.How did they verify it?

> GoodNews and NYTimes800k.
> Evaluation Metrics: BLEU-4, CIDEr score, the precision and recall on named entities, people’s names, and rare proper names.
> Compare to two previous state-of-the-art models: Biten (Avg + CtxIns) and Biten (TBB + AttIns), and ablation studie.

On GoodNews, the full model yields a CIDEr score of 53.8, whereas the pre- vious state of the art achieved a CIDEr score of only 13.1. The slight improvement in CIDEr (from 13.1 to 13.9) shows that BPE offers a competitive end-to-end alternative to the template filling method.In ablation studies, it shows any archtechture which describre overperform previouse one.

### 5.Is there a debate?


### 6.Supplement

Good News vs NYTimes800k
![database](../../detail/img/Tran_Transform_and_Tell_Entity-Aware_News_Image_Captioning_CVPR_2020_paper2.png) 
