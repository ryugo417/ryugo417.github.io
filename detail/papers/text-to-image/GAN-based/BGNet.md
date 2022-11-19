## A Background-induced Generative Network with Multi-level Discriminator for Text-to-Image Generation

### 1.What is this paper about?

このモデルは、背景画像とテキストを受け取り画像を生成するモデルであり、
既存手法に対して、attntion mechanisms, background synthesis, multi-level discriminatorを導入することで、
より良い結果を示すことができた。



### 2.What’s better than previous paper?

既存のモデルでは、128*128の限られた解像度の画像しか生成されなかった。
しかし、このモデルでは、multi-GANを用いることで、256*256の画像生成を可能にした。
さらには、attentionを用いて画像を生成することで、よりtextに沿った高品質の画像を生成することを可能にした。

### 3.What are important parts of technique and methods?


![model](../../../../img/SEA-BGNet_model.png) 
Contrallable GANに対して、背景情報をモデルに組み込むため、multi-stageの各層の最後にsynthesis blackを追加している。
さらに、spatial attention and channel-wise attention modulesを用いることで、物体の輪郭やtextureなどの生成をより高度に変更できるようになった。



### 4.How did they verify it?

MC-GANとMC-Stackという２つのモデルと定性的結果のみを用いて比較しており、state-of-the-artな結果を示している。
さらに、ablation studyを用いることで、各アーキテクチャを比較できる。

![model](../../../../img/BGNet_result.png)

### 5.Is there a debate?

Multi-level discriminatorは、ただの複数のloss fnctionと何が違うのか？

なぜ定性的比較しか行っていないのか？

おそらく、各アーキテクチャにnovertyが足りていない気がする。