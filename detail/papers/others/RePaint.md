## RePaint: Inpainting using Denoising Diffusion Probabilistic Models

### 1.What is this paper about?

It proposes the inpainting approch based on DDPM.
It doesn't need to train with mask.
Andmore it is possible to generate the high quality image even if the region which hided by the mask is a lot.

### 2.What’s better than previous paper?

It has two advantage,
1. it allows to generalize to any mask during inference.
1. it is able to learn more semantic generation capability since it has powergul DDPM image synthesis prior.

### 3.What are important parts of technique and methods?

![model](detail/img/RePaint_model.jpg)
Consider the diffusion model, it define the unknown region and the known region as follow.
![equ](detail/img/RePaint_equ.jpg)

This adapt the unconditional DDPM, so it make the model possible to remove the diversity mask.
Andmore, it has the contribution for consistency because DDPM originaly used for image synthesize.

### 4.How did they verify it?

Trough the qualitative and quantitative on Celeb-HQ and Imagenet datasets, we evaluate the model to compare with following baseline model, The autoregressive methods are DSI and ICT, and the GAN methods are DeepFillv2, AOT, and LaMa. 

In quantitative evaluation, it use the LPIPS as a metrics and user study which conduct evaluation to get 5 people per one image.


### 5.Is there a debate?

It should be fast to synthesize the image.

It is diificult to conduct quantitatibe evaluation since it takes a lot of time to synthesize the image.

