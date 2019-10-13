## Regression model for auto insurance claim probability predictions

This project describes our work to build a regression model for Porto Seguro’s insurance company in Kaggle competition to predict the auto insurance claim probability next year. We propose a model composing lightGBM and neural network. First, we transform the 57 input features to 221 input features by removing the calculation features which are neural and adding one-hot encoding on categorical features. Then we use the 221 input features to train LightGBM model and fine tune the model by sweeping different hyperparameters. The best LightGBM model can reach 0.29098 standard Gini coefficient. Next, we use unsupervised learning method-denoising autoencoder to generate up-sample features, from 221 to 4500 features, then feed new features into neural network and get a score of 0.28934. After linear ensemble of these two models, our score is 0.29388, which can beat the 3rd place result in the competition.


Project Contribution:

Xinqiao Zhang:
(1)	Feature engineering(30%)
(2)	Build and train lightGBM model, fine tune different parameters (23 different combinations) 
(3)	Build and train neural network model.(50%) 
(4)	Model ensemble  
(5)	Project report (35%).  

Shenchao Zhang: 
(1)	Data preprocessing 
(2)	Rank Gaussian normalization 
(3)	Denoising autoencoder 
(4)	Project report(10%) 

Xin Xue: 
(1)	Data analysis 
(2)	Data visualization 
(3)	Study of lightGBM model 
(4)	Build and train neural network model (50%) 
(5)	project report (55%)  


For more details see [Project Report](/pdf/mlreport.pdf).
