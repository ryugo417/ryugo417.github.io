## Large-scale Video Classification with Convolutional Neural Networks

### 1.What is this paper about?

1. The mulitple approaches for extending the connectivity of the a CNN in time domain to take advantage of local spatio-temporal information.

2. A multiresolution, foveated architecture to speed up the training and make it easy to classify large data like a video.

### 2.What’s better than previous paper?

1. 

2. 

### 3.What are important parts of technique and methods?

![model](./img/Large-scale Video Classification with Convolutional Neural Networks1.jpg) 


![model](./img/Large-scale Video Classification with Convolutional Neural Networks2.jpg) 

this model takes advantage of the camera bias that the object of interest often occupies the center region. So input frames are fed into two separate streams of processing over two spatial resolutions.

-A fovea stream

It receives the center 89 × 89 region at the original resolution and processes high-resolution center crop.

-A context stream

It receives the downsampled frames at half the original spatial resolution (89 × 89 pixels) and models low-resolution image.

### 4.How did they verify it?



### 5.Is there a debate?