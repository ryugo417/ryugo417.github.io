## A Picture is Worth a Thousand Words: A Unified System for Diverse Captions and Rich Images Generation

### 1.What is this paper about?

このモデルは、画像から説明文、説明文から画像生成どちらのタスクにおいても高い精度を誇るモデルを提案している。
このモデルは、Transformerを使用して、text-画像の情報を結び付けている。
さらに、複数の文章間の関係を考慮することで、多様な結果を可能にした。



### 2.What’s better than previous paper?

既存研究では、画像とテキストは1対1の関係であった。
そのため、1) 一枚の画像と一個のテキストの関係はあいまいであった。(例えば、一個のcaptionから画像を生成するときに、「赤い鳥」と記述したときに、どんな赤い鳥を生成ス塚あいまいである。)
2) textと画像中のobjectのペア情報では、fine-grainedなalignmentを得ることができない。

それらを解決するために、multi-captionから画像を生成する

### 3.What are important parts of technique and methods?

いかに、unified multi-modal Transformerの概要を示す。
![model](../../../../img/SEA-T2F_model.png) 

このモデルは、Faster-RCNNを用いて、物体検出を行って得られた、grid featureとtext情報をconcatしてTransformerに入力することで、画像とテキストを結びつけることが可能になったモデルである。
詳細は、後日記載する。

### 4.How did they verify it?

MSCOCOを使用して画像を生成している。
Text-to-Imageタスクにおいては、FID。Image-to-captionタスクにおいては、n-gram for 多様性, CIDEr-D for accuracyをmetricsとして評価を行った。

Text-to-captionでは、FID scoreが51.5から42.1に向上した。
さらに、image-to-captionsでは、以下の表のように精度が向上した。

![model](../../../../img/ACM_2021_result.jpg)






### 5.Is there a debate?
text-to-imageのtaskにおいて、テキストと画像のaccuracyが十分に評価されていない。
そのため、そこの評価が必要になると考えられる。

逆に、たくさんの画像からその画像たちのcaptionを生成するmulti-img2textモデルを生成したいと思った。
