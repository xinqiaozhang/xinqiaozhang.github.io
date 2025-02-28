---
layout: default
title: Projects
---

# Research Projects

Below are some of my key research projects in machine learning, AI security, and hardware acceleration.

<div class="project-container">
  <div class="project-card">
    <div class="project-header">
      <img src="images/facesign.jpg?raw=true" alt="RAG Security Project">
      <h2>Secure Retrieval-Augmented Generation on LLMs</h2>
      <span class="project-date">May 2024 - Present</span>
    </div>
    <div class="project-content">
      <p>This project addresses the security vulnerabilities in Retrieval-Augmented Generation (RAG) systems for Large Language Models (LLMs).</p>
      
      <h3>Challenges</h3>
      <ul>
        <li>RAG systems are vulnerable to poisoning attacks and jailbreaking attempts</li>
        <li>Traditional defense mechanisms often compromise model performance</li>
        <li>Need for robust security without sacrificing utility</li>
      </ul>
      
      <h3>Approach</h3>
      <ul>
        <li>Implemented a novel objective function combining adversarial loss, BERTScore, and harmful loss</li>
        <li>Developed a robust RAG system for LLMs to counter universal attacks</li>
        <li>Created adaptive defense mechanisms that respond to attack patterns</li>
      </ul>
      
      <h3>Results</h3>
      <ul>
        <li>Successfully prevented over 90% of state-of-the-art poisoning attacks</li>
        <li>Blocked jailbreaking attacks on RAG-based LLMs</li>
        <li>Maintained high performance on legitimate queries</li>
      </ul>
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <img src="images/trojai_t0.jpg?raw=true" alt="TrojAI Project">
      <h2>TrojAI: Detecting Trojans in AI Models</h2>
      <span class="project-date">2021 - 2023</span>
    </div>
    <div class="project-content">
      <p>Participated in the NIST TrojAI competition to detect backdoored or poisoned models among over 1000 adversarial training models.</p>
      
      <h3>Challenges</h3>
      <ul>
        <li>Detecting subtle backdoors inserted during the training process</li>
        <li>Distinguishing between benign and malicious model behaviors</li>
        <li>Handling diverse model architectures and attack vectors</li>
      </ul>
      
      <h3>Approach</h3>
      <ul>
        <li>Developed a two-stage detection flow: Polygon trigger detection and Instagram trigger detection</li>
        <li>Implemented advanced feature extraction techniques to identify suspicious patterns</li>
        <li>Created ensemble methods to improve detection accuracy</li>
      </ul>
      
      <h3>Results</h3>
      <ul>
        <li>Achieved 2nd place out of 16 teams in Round 3 of the NIST TrojAI competition</li>
        <li>Exceeded target performance with cross-entropy loss < 0.3465</li>
        <li>Successfully identified various types of backdoor triggers</li>
      </ul>
      
      <a href="sample_page_trojai" class="project-link">Learn more</a>
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <img src="images/CVPR2021_0.jpg?raw=true" alt="BNN Project">
      <h2>Quantization of Deep Neural Networks</h2>
      <span class="project-date">Feb 2021 - May 2021</span>
    </div>
    <div class="project-content">
      <p>Explored the application of Binary Neural Networks (BNNs) in oblivious inference to enable privacy-preserving machine learning.</p>
      
      <h3>Challenges</h3>
      <ul>
        <li>Traditional privacy-preserving inference methods are computationally expensive</li>
        <li>Need for efficient cryptographic protocols for neural networks</li>
        <li>Balancing privacy, performance, and accuracy</li>
      </ul>
      
      <h3>Approach</h3>
      <ul>
        <li>Enabled oblivious inference in Binary Neural Networks</li>
        <li>Explored the application of BNN in oblivious inference</li>
        <li>Devised lightweight cryptographic protocols tailored to BNNs</li>
      </ul>
      
      <h3>Results</h3>
      <ul>
        <li>Achieved 2x faster inference compared to standard approaches</li>
        <li>Up to 11x faster inference for binary networks</li>
        <li>Maintained acceptable accuracy while providing privacy guarantees</li>
      </ul>
      
      <a href="https://openaccess.thecvf.com/content/CVPR2021W/BiVision/papers/Samragh_On_the_Application_of_Binary_Neural_Networks_in_Oblivious_Inference_CVPRW_2021_paper.pdf" class="project-link">View Paper</a>
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <img src="images/ECE226_purning.jpg?raw=true" alt="DNN Optimization Project">
      <h2>Optimization and Acceleration of Deep Learning</h2>
      <span class="project-date">2021</span>
    </div>
    <div class="project-content">
      <p>Explored methods to optimize and accelerate deep neural networks for deployment on various hardware platforms, particularly resource-constrained devices.</p>
      
      <h3>Techniques Explored</h3>
      <ul>
        <li><strong>Pruning:</strong> Reduced model size by removing sections with little classification power</li>
        <li><strong>Tucker Decomposition:</strong> Decomposed tensors into smaller core tensors and matrices</li>
        <li><strong>Quantization:</strong> Reduced precision of weights and activations</li>
      </ul>
      
      <h3>Results</h3>
      <ul>
        <li>Significant reduction in model size while maintaining accuracy</li>
        <li>Improved inference speed on resource-constrained devices</li>
        <li>Reduced power consumption for IoT and edge deployments</li>
      </ul>
      
      <a href="sample_page_ECE226" class="project-link">Learn more</a>
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <img src="images/p01t1.jpg?raw=true" alt="Leakage Power Project">
      <h2>Leakage Power Minimization</h2>
      <span class="project-date">2020</span>
    </div>
    <div class="project-content">
      <p>Used Synopsys PrimeTime and PT-PX for timing and power analysis to implement strategies for gate sizing and Vt-swapping optimizations.</p>
      
      <h3>Approach</h3>
      <ul>
        <li>Applied sensitivity function to balance leakage power and timing slacks</li>
        <li>Calculated sensitivity metrics based on ∆leakage_power / ∆slack</li>
        <li>Sized cells based on sensitivity ranking</li>
        <li>Used ECO flow with Cadence Innovus Implementation System</li>
      </ul>
      
      <h3>Results</h3>
      <table>
        <tr>
          <th>Benchmark</th>
          <th>Reduction Rate</th>
        </tr>
        <tr>
          <td>usb_phy</td>
          <td>82.92%</td>
        </tr>
        <tr>
          <td>aes_cipher_top</td>
          <td>73.68%</td>
        </tr>
        <tr>
          <td>mpeg2_top</td>
          <td>71.90%</td>
        </tr>
      </table>
      
      <a href="sample_page01" class="project-link">Learn more</a>
    </div>
  </div>
</div>

<style>
  .project-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin: 30px 0;
  }
  
  .project-card {
    border: 1px solid #e1e4e8;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: #fff;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
  
  .project-header {
    position: relative;
  }
  
  .project-header img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  
  .project-header h2 {
    margin: 0;
    padding: 15px 20px 5px;
    font-size: 22px;
    color: #24292e;
  }
  
  .project-date {
    display: block;
    padding: 0 20px 15px;
    font-size: 14px;
    color: #586069;
  }
  
  .project-content {
    padding: 0 20px 20px;
  }
  
  .project-content p {
    margin-bottom: 20px;
    line-height: 1.5;
  }
  
  .project-content h3 {
    margin: 20px 0 10px;
    font-size: 18px;
    color: #24292e;
  }
  
  .project-content ul {
    margin-bottom: 20px;
    padding-left: 20px;
  }
  
  .project-content li {
    margin-bottom: 5px;
    line-height: 1.5;
  }
  
  .project-link {
    display: inline-block;
    margin-top: 15px;
    padding: 8px 16px;
    background-color: #0366d6;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
    transition: background-color 0.2s ease;
  }
  
  .project-link:hover {
    background-color: #0256b9;
    text-decoration: none;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  th, td {
    padding: 8px 12px;
    text-align: left;
    border-bottom: 1px solid #e1e4e8;
  }
  
  th {
    background-color: #f6f8fa;
    font-weight: 600;
  }
  
  @media (min-width: 768px) {
    .project-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 767px) {
    .project-header img {
      height: 200px;
    }
  }
</style> 