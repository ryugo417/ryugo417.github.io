## StackGAN: Text to Photo-realistic Image Synthesis with Stacked Generative Adversarial Networks

### 1.What is this paper about?

It proposes Stacked Generative Adversarial Networks (StackGAN) to generate 256×256 photo-realistic images conditioned on text descriptions.

### 2.What’s better than previous paper?

It allow to decompose the difficult problem of generating high-resolution images into manageble subproblem and significantly improve the state of the art. Also it allow to stabilize the conditional GAN training and improves the diversity of the generated samples by using novel Conditioning Augmentation.

### 3.What are important parts of technique and methods?

It has two GAN stages and Conditioning Augmentation.

##### Overview GAN
![model](../../img/.jpg) 

###### Stage-1 GAN
it sketches the primitive shape and basic colors of the object conditioned on the given text description, and draws the background layout from a random noise vector, yielding a low-resolution image.

###### Stage-2 GAN
it correctsdefectsinthelow-resolution image from Stage-I and completes details of the object by reading the text description again, producing a high-resolution photo-realistic image.

###### Conditioning Augmentation
it encourages smoothness in the latent conditioning manifold to improve the diversity of the synthesized images and stabilize the training of the conditional-GAN.


### 4.How did they verify it?

To validiate model, it conduct extensive quantitative and qualitative evaluation by and compare to two state-of-the-art methods on text-to-image synthesis, GAN-INT-CLS and GAWWN on CUB, Oxford-102 and  COCO dataset. It use inception score as the metrics and human evaluation.

It achieves the best inception score and avhuman rank on all three datasets.

Furthermore, each function was reduced to show the effectiveness of the importance of the function.
