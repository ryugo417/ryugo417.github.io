## Interactive Image Generation with Natural-Language Feedback

### 1.What is this paper about?

この論文は、生成された画像を複数回編集する画像生成を可能にした論文である。
たとえば、以下の図のように、"Generate a human face"を入力し、画像を生成する。
さらに、"He has long hair"を入力すると、生成された男の人の髪の毛を長く編集することができる。


### 2.What’s better than previous paper?

既存の研究では、画像生成において、1-roundの生成に限っており、multi-roundの生成・編集を可能にしているものでさえ、
マニュアルに基づいた、feedbackをもとに画像を生成する他なかった。

このモデルでは、画像をmulti-roundで生成・編集までを可能にした。
過去のモデルと比較すると、実用的かつ、高品質な画像生成を可能にした。
さらに、一度の画像生成プロセスにおいても、既存研究よりも優れた性能を記録した。

### 3.What are important parts of technique and methods?

CLIP lossとcontrastive lossを用いて、contrastive learningを用いて、テキスト情報と画像情報の結びつけ、テキスト情報とfeature情報の結びつけを行った。
さらに、既存研究では、StyleGAN2の潜在空間にテキスト情報をmappingすることが多かったが、
このモデルでは、本論文内で提案した、以下のmoduleを使用することで、テキスト情報をstyle vectorに加えることで、モデルにテキスト情報を入力した。
![result](ryugo417.github.io/detail/img/TiGAN＿eq.jpg)
この二つのmoduleは、最初全て(1)を用いて、(2)に変換していきfine-tuningした。

さらに、Interactiveな画像操作では、2-round目以降与えられた文章と、その前の文章の差分を得てその差分の文章とそれに関連する画像部分が閾値より大きい場合、編集し、Interactiveな画像操作を可能にした。

### 4.How did they verify it?

UT Zappos50k, MSCOCO, Multi-modal CelebA-HQを用いて評価を行った。
評価内容としては、Text-to-Image generationとInteractive Image Generationである。
Text-to-Image generationでは、評価指標をIS,FIDを用いて、SOTAモデルとの比較を行った。TiGANは、SOTAより優れている、またはそれ同等の精度を示している。

Interactive Image Generationでは、ユーザシミュレーターを使用して、画像を生成した。
シミュレータは、データセットからランダムに抽出され、モデルにとって未知であるいくつかのターゲット属性をもち、テキスト情報を加えて、ターゲット属性に一致するまでその処理の回数を比較することで、Interactiveな画像生成の評価を行った。
その評価使用では、全てのmetricsで、過去のモデルより優れていることを占めている。
以下に定性的結果を示す。
![result](ryugo417.github.io/detail/img/TiGAN_result.jpg)

### 5.Is there a debate?

