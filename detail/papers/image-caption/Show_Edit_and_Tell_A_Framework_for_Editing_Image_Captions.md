## Show, Edit and Tell: A Framework for Editing Image Captions

### 1.What is this paper about?

The model for editing image captions based on iterative adaptive refinement of an
existing caption.


### 2.What’s better than previous paper?

Previous works focus on the model to generate image description.

Our work focus on fixing details of existing captions, rather than generating new captions from scratch.

### 3.What are important parts of technique and methods?

![model](../../../img/A Framework for Editing Image Captions1.jpg) 

The above image is  A state-of-art image captioning framework.
For example, it outputs "“A sandwich on a table with a table".
The network produces a sensible sentence structure for this particular image (“A on a with a ”) but fails to properly fill in the nouns, repeating the main object in the image (“table”).
It applied to this caption, can recognize this error (the noun repetition) and modify the caption to read “A sandwich on a table with a glass of wine” or perhaps simply “A sandwich on a table”.

![model](../../../img/A Framework for Editing Image Captions2.jpg) 

This model consist of two submodules
- EditNet
A language module with an adaptive copy mechanism (Copy-LSTM) and a Selective Copy Memory Attention
mechanism (SCMA)

- DCNet
An LSTM-based denoising auto-encoder that learns to denoise previous captions. 


### 4.How did they verify it?

We validate our proposed method on the popular MS COCO dataset.
We show the performance of our model compared with the current state-other-art method.
we adopt 4 different metrics: BLEU (1- to 4-grams), ROUGE-L, CIDEr-D, SPICE.

