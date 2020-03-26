## Project: Leakage Power Minimization

In this project, I use Synopsys PrimeTime and PT-PX for timing and power analysis and I learn basic strategies for gate sizing and Vt-swapping optimizations. Also, I learn how to use a ECO flow (with Cadence Innovus Implementation System) to implement the sizing/Vt-swapping solution in real designs to ensure valid placement/routing solutions. 

### 1. Timing recovery 
<img src="images/p01t1.jpg?raw=true"/>
Speed up bottleneck cells that participate in many timingcritical paths. With timing recovery, we are able to down size or use
low leakage cells on critical paths to optimize power

### 2.	Overall flow
<img src="images/p01t2.jpg?raw=true"/>
Since this projoect is a trade-off between leakage power and timing slacks. The method we used to do leakage power minimization is applying sensitivity function. We first calculate all the sensitivity number based on ∆leakage_power / ∆slack with each cells and then sort them in decending order. We size each cell based on the sensitivity. 

### 3. RESULTS
In this project, I use three benchmarks to be optimized, which are usb_phy, aes_cipher_top and mpeg2_top. The statistics is shown below

| Benchmark     | Cell count | Clock period | Initial WNS | Initial leakage power |Post-ECO WNS|Post-ECO Leakage power | Reduction rate 
|:------------- |:-----------|:-------------|:------------| :---------------------|:-----------|:----------------------|:-----------|
| usb_phy       | 443        | 350 ps       | 52.162ps    | 5.988mW               |-0.595581ps |  1.023000015mW        | 82.92%     |
| aes_cipher_top| 14001      | 1050ps       | 82.375ps    | 613.198mW             |-0.376709ps |  161.412mW            | 73.68%     |
| mpeg2_top     | 13986      | 840ps        | 50.3479ps   | 238.096mW             |-0.272583ps |  66.91mW              | 71.90%     |


### 4 Conclusion:
The result shows a very good post-ECO result and this project gets 92/100 points. 
