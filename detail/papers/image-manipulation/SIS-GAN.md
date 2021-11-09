## Semantic Image Synthesis via Adversarial Learning

### 1.What is this paper about?

It proposes an end-to-end neural architecture(SIS-GAN) that leverages adversarial learning to automatically learn implicit loss functions, to manipulate the image from text description while keeping the image realistic.

### 2.What’s better than previous paper?

Previous model aim to synthesize realistic images directly from natural language descriptions. 
It is first model to manipulate a source image semantically with text descriptions, while still maintain features that are irrelevant to what text descriptions.

### 3.What are important parts of technique and methods?



### 4.How did they verify it?

It is evaluated by cunducting two experiments on  Caltech-200 bird dataset and Oxford-102 flower dataset.
It is first model to manipulate the images from text description, so it is hard to compare, but to compare to baseline method it shows the effectiveness.

- Qualitative comparison

Compared with the baseline model, its result kept most of the original background, pose, shape and other information in the original images while keeping the image realistic.

- Quantitative comparison

It use human evaluation to compare the baseline model.(1(best) to 3(worst))

• Whetherthesynthesizedimagekeepstheoriginalpose of the bird / flower;
• Whether the synthesized image keeps the original background;
• Whether the synthesized image matches the text de- scription while being realistic.

Its result shows it outperfome baseline model and its model without VGG in all of metrics.