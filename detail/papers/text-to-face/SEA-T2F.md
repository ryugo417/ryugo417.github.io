## DiffusionCLIP: Text-Guided Diffusion Models for Robust Image Manipulation

### 1.What is this paper about?

It proposes the novel Text2Face model(SEA-T2F) with multi-captions and large-scale text-face dataset.
Speficicaly, it introduce the sentence feature injection module, attention module and attribute loss.


### 2.What’s better than previous paper?

Originally, one caption is not enough to match the users' preference for text2face task.
In this paper, it publish the high quality text-face dataset, so it can use multi-caption.
For this task, it propose novel model, then it can generate more high quality face images than exsiting mode with multi-captions.

### 3.What are important parts of technique and methods?

This is the overall of SEA-T2F.
![model](../../img/SEA-T2F_model.png) 

This model adapt the multi-GAN and doesn't concat the noise and sentence vector but only noise as input.

- SFIM
It aims to multi-sentense to inject in the model.
In upsampling archtecture, it injects sentence info between each layer as following Fig.

![model](../../img/SEA-T2F_SFIM.png)

- AMC
It aims to 

![model](../../img/SEA-T2F_SFIM.png)

### 4.How did they verify it?

It performs the quantitative comparision with SOTA text-guided image manipulation methods, TediGAN, StyleCLIP and StyleGAN-NADA.

![result](../../img/DiffusionCLIP_result.png)

### 5.Is there a debate?
