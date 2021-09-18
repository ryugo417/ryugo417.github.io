## AttnGAN: Fine-Grained Text to Image Generation with Attentional Generative Adversarial Networks

### 1.What is this paper about?

It proposes an Attentional Generative Adversarial Network (AttnGAN) that allows attention-driven, multi-stage refinement for fine-grained text-to-image generation.

### 2.What’s better than previous paper?

Previous method commonly used approach is to encode the whole text description into a global sentence vector as the condition for GAN-based image generation. But, it prevented the generation of high quality images.

This proposal is to generate to draw different sub-regions of the image by focusing on words that are most relevant to the sub-region being drawn. So it can outperforms the previous state-of-the-art methods.

### 3.What are important parts of technique and methods?

It has two important component.

1. Attentional Generative Adversarial Network(AttnGAN)

2. Deep Attentional Multimodal Similarity Model(DAMSM) 

With an attention mechanism, the DAMSM is able to compute the similarity between the generated image and the sentence using both the global sentence level information and the fine-grained word level information. Thus, the DAMSM provides an ad- ditional fine-grained image-text matching loss for training the generator.

### 4.How did they verify it?

our method is evaluated on CUB and COCO datasets by using the inception score and R-precision as a metrics. Also it compare to state-of-the-art methods, it significantly outperforms previouse one.
