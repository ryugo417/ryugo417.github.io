## FBC-GAN: Diverse and Flexible Image Synthesis via Foreground-Background Composition

### 1.What is this paper about?

背景、segmentation map、前景画像を別々で生成することで、
同じ背景画像でも、異なる前景画像で画像を生成したり、逆に、同じ前景画像でも異なる背景画像を生成することで、生成画像の多様性を保証することができるモデル。


### 2.What’s better than previous paper?

過去のモデルでは、画像を生成する際に、前景と背景の相関性の高いものが勝手に生成されるという問題があった。しかし、全てを別のタスクで処理することで、生成された画像に多様性を持たせることに成功した。

### 3.What are important parts of technique and methods?



### 4.How did they verify it?

The paper consists of the consist of following datasets.

![model](../../../img/FBC-GAN_dataset.png) 

Metrics: 
- Inception Score (IS)
- Conditional IS (CIS) means the inception score of randomly generated images conditioned on the same background
- Learned Perceptual Image Patch Similarity (LPIPS) that evaluates the distance between image patches for evaluation of diversity
- Frechet Inception Distance (FID) is another metric to measure the image fidelity



### 5.Is there a debate?



### 6.My interest paper in this paper


