## Project1: MIPs Processor Design with System Verilog

In this project, I designed a MIPs processor with System-Verilog and it can do many operations like add sub even jump. And I use different system Verilog methods to implement it like ‘Always_comb’, ‘Logic’, ‘Always_ff’ and so on. 

### 1. Design architecture

img src=p1t1.jpgraw=true


### 2.	METHODS

Totally, I use 15 modules which are ALU, Alu_ctrl, Alu_final, Control, Controlinstructionmemeory, datamemory, instructonmemory, memory, mips,mipstest, RegisterFile,shifter,signextencd_16*32,signextend_26*32. The top module is MIPS and in ‘MIPS.sv’ file, I include all other files.
As for Instruction, it sits in file “InstructionMemory”, which are:


```javascript
			0: IMRD = 32'h20020005 ; //addi $2, $0, 5
			1: IMRD = 32'h2003000c ; //addi $3, $0, 12
			2: IMRD = 32'h2067fff7 ; //addi $7, $3, -9 = 3
			3: IMRD = 32'h00e22025 ; //or   $4, $7, $2 $4 = 111 = 7
			4: IMRD = 32'h00642824 ; //and  $5, $3, $4 = 4
			5: IMRD = 32'h00a42820 ; //add  $5, $5, $4 =11
			6: IMRD = 32'h08000002 ; //jump  to addr 2
			7: IMRD = 32'h00e23822 ; //sub  $7, $7, $2 = 12 - 5 = 7
			8: IMRD = 32'h00e2202a ; //slt $4, $7, $2 = 3 < 2 = 1
			9: IMRD = 32'h0064202a ; //slt  $4, $3, $4  = 0
			10: IMRD = 32'h00e2202a ; //slt $4, $7, $2 = 3 < 2 = 1
			11: IMRD = 32'h00853820 ; //add  $7, $4, $5 = 1 + 11 = 12
			12: IMRD = 32'h00e23822 ; //sub  $7, $7, $2 = 12 - 5 = 7
```
The first 5 instruction are some basic instruction like logic 'and', 'or'

The 6st instruction is jump, it will jump to the 2nd instruction and it will run for a loop.

### 3. RESULTS

img src=p1t2.jpgraw=true

As shown in the picture, it runs good and it because of the jump instruction it will run forever

### 3.1. For basic logic instruction:

img src=p1t3.jpgraw=true

The first few command it runs good, for example the first command:

```javascript
32'h20020005 ; //addi $2, $0, 5
```

The  bottom is instruction memory and the upper one shows the address and the value of  it.

### 3.2 For another instruction (jump):
img src=p1t4.jpgraw=true

As you can see in the picture, every time it do the jump instruction , it will get back to the address 2nd, and it will run forever. The instruction is 

```javascript
32'h08000002 ; //jump  to addr 2
```

### 3 Conclusion:
The results show a good result and it can do some work like basic logic calculation and some more complicated interaction like jump. And each module has its own file, it is very easy to locate them and debug.
My idea of using interface is not supported, however, because some ‘modports’ I used always make trouble and it costs me a lot of errors, I would like to combine all module in a single interface, and each module has its own ‘modports’. But when I want to use the modport pins in a module while instantiating another module in it, it gives me a lot errors, I have tried to find help online and it doesn’t work. Then, I decided to use another feature like logic [31:0] Word;. After looking some reference and slides, I found that I can use logic feature instead interface, actually interface will work, too. I will try to ues interface feature for further projects.

For more details like codes see [GitHub MIPS](https://github.com/zhangxinqiao-ch/MIPS_Projcet).
