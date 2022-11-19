## Show and Tell: A Neural Image Caption Generator

### 1.What is this paper about?

NIC(Neural Image Caption)
↓detail
An end-to-end neural network system that can automatically view an image and generate a reasonable description in plain English. 

### 2.What’s better than previous paper?

Most previous attempts have proposed to stitch together existing solutions of the above sub-problems, in order to go from an image to its description.In contrast, our work is a single joint model.



### 3.What are important parts of technique and methods?

![model](../../detail/img/A Neural Image Caption Generator.jpg) 


recent machine taranslating work is mainly that an “encoder” RNN reads the source sentence and transforms it into a rich fixed-length vector representation, which in turn in used as the initial hidden state of a “decoder” RNN that generates the target sentence.

We inspaired recent machin talranslating work. It is so nealy but its approach replace the encoder RNN by a deep convolution neural network (CNN).

### 4.How did they verify it?

we verify to generate description given image and explore the robustness of our propose in terms of qualitative results (the generated sentences are very reasonable) and quantitative evaluations, using either ranking metrics or BLEU, a metric used in machine translation to evaluate the quality of generated sentences.



### 5.Is there a debate?

### dateset
![dataset](../../detail/img/A Neural Image Caption Generator-dataset.jpg) 


