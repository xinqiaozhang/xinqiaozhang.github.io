## Project: Optimization and Acceleration of Deep Learning on Various Hardware Platforms. Project report <a href="pdf/ECE226_Report_Xinqiao.pdf">View the project report</a> 


In this project, I use python to optimuze deep neural network operations, libraries and implementation steps related to accelerating the performance of deep neural networks.

### 1. Purning
<img src="images/ECE226_exp_purning.JPG?raw=true"/>
Pruning is a technique in machine learning and search algorithms that reduces the size of decision trees by removing sections of the tree that provide little power to classify instances. Pruning reduces the complexity of the final classifier, and hence improves predictive accuracy by the reduction of overfitting [4]. Especially for
hardware implementation, pruning can take advantage of limited hardware IOT devices or other low-power devices. By applying pruning, it can both improve the speed and save power consumption, which is a really hot topic recently.


### 2. Tucker decomposition

<img src="images/ECE226_exp_decom.JPG?raw=true"/>
Tucker decomposition is a method that decomposes a tensor into a smaller core tensor and a set of matrices. Tucker decomposition is a higher order extension of the singular value decomposition (SVD) of matrix, in the perspective of computing the orthonormal spaces associated with the different modes of a tensor. It simultaneously analyzes mode-n matricizations of the original tensor, and merges them with the core tensor.

### 3. Conclusion:
Therefore, the main idea of this project is to learn some methods to optimize and accelerate the deep neural networks and make them compatible with the current various hardware platforms. I think the idea of optimization and acceleration is with the development of all kinds of IOT devices, some reliable and low-power hardware platform is needed to do this stuff. And this is a very hot topic and it is very promising in the future.
