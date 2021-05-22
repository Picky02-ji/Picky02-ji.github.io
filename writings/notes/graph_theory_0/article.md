# 图论基础选记

> 《计算机数学：算法基础》笔记

## 一、图的基本概念

### 图的定义：

图G（graph）是一个二元组，记作G=＜V,E＞，其中V ={v1,v2,...vn}为非空点集，E={e1,e2...em}为边集。

![graph](https://github.com/Picky02-ji/Picky02-ji.github.io/blob/main/writings/notes/graph_theory_0/images/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202021-05-22%20160147.png)

### 图的性质：

设G是任意图，v为G的任一结点，与结点v关联的边数称为v的度数（degree），记作deg（v）。

设D是任意有向图，v为G的任一结点，射入v的边数称为v的入度（in-degree），记作deg+（v），射出v的边数称为v的出度（out-degree），记作deg−（v）。

### 相关定理：

1. 设图G=＜V,E＞是（n,m）图，则所有结点度数的总和等于边数的二倍。

2. 在有向图中，各结点的出度之和等于入度之和。


### 例题：


1. 证明任何一群人中，有偶数个人认识其中奇数个人。


2. 试证明：在任意六个人的聚会上，要么有三个人曾相识，要么有三人不曾相识。

证明：

![img](https://github.com/Picky02-ji/Picky02-ji.github.io/blob/main/writings/notes/graph_theory_0/images/save_share_review_picture_1621617013(1).jpeg)

如图所示，六个人为图中六个顶点，他们之间认识的关系记为实线，不认识的关系记为虚线。以F点为例，他**至少**与三个人相识（或者不识），是故F与其他点的连线可如(a)所示。再考虑ABC三角形范围，如有哪怕一条实线，便会与AF、BF、CF中的两条连成实线三角形，即三人相识。如三条皆为虚线，那么这三条虚线呈三角形，即三人不相识。


3. 设有一个图有10个结点且所有结点的度都为6，求该图的边数。

解：有定理：度总和是边数两倍。该图每个节点的度都是六，有60个度，即有30个边。


4. 在一个羽毛球比赛中，n名选手中任意两名选手之间至多比赛一次，每个选手至少比赛一次。证明：一定能找到两名选手，他们的比赛次数相同。

## 二、图的矩阵表示

### 1. 邻接矩阵

#### 无向图的邻接矩阵

设无向图G=＜V,E＞，它有n个顶点V =＜v1,v2,...vn＞，如果aij表示vi和vj之间的边数，则n阶方阵称为无向图G的邻接矩阵。

![img](https://github.com/Picky02-ji/Picky02-ji.github.io/blob/main/writings/notes/graph_theory_0/images/save_share_review_picture_1621673458(1).jpeg)

![A(G1)](https://github.com/Picky02-ji/Picky02-ji.github.io/blob/main/writings/notes/graph_theory_0/images/save_share_review_picture_1621651101(1).jpeg)    

#### 有向图的邻接矩阵

设有向图G=＜V,E＞，它有n个顶点V =＜v1,v2,...vn＞，如果aij表示以vi为起点vj为终点的有向边的边数，则n阶方阵称为有向图G的邻接矩阵。

![img](https://github.com/Picky02-ji/Picky02-ji.github.io/blob/main/writings/notes/graph_theory_0/images/save_share_review_picture_1621673674(1).jpeg)   

![A(G)](https://github.com/Picky02-ji/Picky02-ji.github.io/blob/main/writings/notes/graph_theory_0/images/save_share_review_picture_1621672983(1).jpeg)

#####


### 2. 关联矩阵

#### 无向图的关联矩阵

设无向图G=＜V,E＞，它有n个顶点V =＜v1,v2,...vn＞,m条边E=＜e1,e2,...em＞，如果 bij表示点 vi与边 ej关联的次数，则 n×m 矩阵称为无向图 G 的关联矩阵。

![img](https://github.com/Picky02-ji/Picky02-ji.github.io/blob/main/writings/notes/graph_theory_0/images/save_share_review_picture_1621663942.jpeg)

![M(G)](https://github.com/Picky02-ji/Picky02-ji.github.io/blob/main/writings/notes/graph_theory_0/images/save_share_review_picture_1621674047(1).jpeg)

![M(G)](https://github.com/Picky02-ji/Picky02-ji.github.io/blob/main/writings/notes/graph_theory_0/images/save_share_review_picture_1621663947.jpeg)

#### 有向图的关联矩阵

设有向图D=＜V,E＞，它有 n 个顶点V =＜v1,v2,...vn＞,m 条有向边E=＜e1, e2,...em＞，如果 mij表示点 vi与边 ej关联的次数，则n× m矩阵M（D）=（mi）j n×m称为有向图 G的关联矩阵，其中：

![form](https://github.com/Picky02-ji/Picky02-ji.github.io/blob/main/writings/notes/graph_theory_0/images/save_share_review_picture_1621664343.jpeg)

![img](https://github.com/Picky02-ji/Picky02-ji.github.io/blob/main/writings/notes/graph_theory_0/images/save_share_review_picture_1621664345.jpeg)

![M(D)](https://github.com/Picky02-ji/Picky02-ji.github.io/blob/main/writings/notes/graph_theory_0/images/save_share_review_picture_1621664347.jpeg)

### 3. 可达性矩阵

#### 计算两个结点之间通道数目

设G是具有结点顺序为v1、v2、...、vn的图（可以是无向图、有向图、多重图、带圈图），其**邻接矩阵**为A（G），则矩阵Y =(A（G）)k中的元素yij表示结点vi到vj长度为k的通道数目。

![Y=A^2](https://github.com/Picky02-ji/Picky02-ji.github.io/blob/main/writings/notes/graph_theory_0/images/save_share_review_picture_1621664916.jpeg)

如上图的Y矩阵的某个相应位置Yij即为vi到vj的两步的通道数目。

由于这种方法极不方便，故下面引入可达性矩阵。
