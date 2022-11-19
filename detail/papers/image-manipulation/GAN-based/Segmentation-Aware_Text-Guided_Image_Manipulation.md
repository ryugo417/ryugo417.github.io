## Segmentation-Aware Text-Guided Image Manipulation

### 1.What is this paper about?

It proposes a novel approach that improves text-guided image manipulation performance to consider the segmantion.

### 2.What’s better than previous paper?

Privious model concentrated on editing only text-related content and did not adequately maintain retention of background images not related to the text.
By taking into account the segmentation loss of the background image, it is possible to manipulate the image while maintaining the background.

### 3.What are important parts of technique and methods?

![model](ryugo417.github.io/detail/img/Segmentation-Aware_Text-Guided_Image_Manipulation_model.png) 


- Segmentation Network
The loss is calculated from the segmentation of the background image before and after image generation, and the loss is reduced so that the background image can be maintained.



### 4.How did they verify it?

- Quantitative Comparison

It is evaluated on the CUB bird dataset, comparing with three state-of-the-art approaches SISGAN, TAGAN and ManiGAN on image manipulation using natural language descriptions using inception score (IS) the Neural Image Assessment (NIMA) as evaluation metrics.

- Qualitative Comparison

![result](ryugo417.github.io/detail/img/Segmentation-Aware_Text-Guided_Image_Manipulation_result.png) 

It has produced results that are equal to or better than state-of-the-art methods.

### 5.Is there a debate?

It depends on the segmentation map, so it is not perfect to use text for image manipulation.

