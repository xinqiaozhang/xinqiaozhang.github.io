## Project: TrojAI project (Website: https://pages.nist.gov/trojai/)



In this project, I use python to detect over 1000 adversial training models. The Target is to give the probablity that a given model is backdoored or posioned.

### 1. Adversarial training models
<img src="images/trojai_t0.jpg?raw=true"/>
Using machine learning, an artificial intelligence (AI) is trained on data, learns relationships in that data, and then is deployed to the world to operate on new data. The problem is that an adversary that can disrupt the training pipeline can insert Trojan behaviors into the AI. TrojAI’s goal is to detect Trojans hidden in trained AI models. 

### 2.	Overall flow

Our flow has two stages: 1.Polygon trigger detection and 2. Instgram trigger detection. (detailed method is pending for paper submission)

### 3. Results
We hit the 2nd out of 16 teams for round 3 data.
<img src="images/trojai_round3.jpg?raw=true"/>

### 4 Conclusion:
The result shows a very good performance and hit the target porformance(cross entropy loss < 0.3465). It moved to next round once the target performance is reached.
