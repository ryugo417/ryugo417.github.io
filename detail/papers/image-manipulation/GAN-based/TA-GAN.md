## Text-Adaptive Generative Adversarial Networks: Manipulating Images with Natural Language

### 1.What is this paper about?

It proposes the text-adaptive generative adversarial network(TA-GAN) to generate semantically manipulated images while preserving text-irrelevant contents.

### 2.What’s better than previous paper?

In this model, by learning to separate visual attributes from images and text, and by making fine-grained discriminators, is able to manipulate images in finer detail.

### 3.What are important parts of technique and methods?

- Text-adaptive discriminator
By having the discriminator classify each attribute independently using a word-level local discriminator, it is possible to provide the generator with a specific training signal for generating a particular visual attribute.

It trains the text-adaptive discriminator as its core GAN framework instead of use as an auxiliary loss.


### 4.How did they verify it?

It valied on CUB dataset and Oxford-102 dataset to compare with two baseline models(AttenGAN and SISGAN).
It gets two ways to valuate.

- Quantitative results
Compare other methods using human evaluation.

It shows that it significantly outperforms baseline methods.
And, the other methods is similar, but AttenGAN is slightly more preferred over SISGAN.
In SISGAN's paper, it said the SISGAN is better than AttenGAN, but in this paper it add an image encoder and a econstruction loss to original AttenGAN.
From this, the effectiveness of reconstruction loss was shown.

- Qualitative results

From the result, we understand it effectively disentangles visual attributes invariant to pose, shape, and background.
On the other hand, it sometimes fail due to the trade-off between generating new contents and preserving original contents.

![fail_result](detail/img/TA-GAN_fail_result.png) 

