---
title: "Präsenzblatt 1"
date: 2023-04-26T22:27:42+01:00
draft: false
---

## Aufgabe 3

Zu zeigen ist, dass die Folge $(1 + \frac a n)^n$ monoton wächst. Das lässt sich durch Umformungen ermitteln. Nach ein paar Schritten können wir zu diesem Ergebnis kommen:
$$
	x_{n+1} - x_n \geq 0
	\Leftrightarrow (\frac{1}{n+1})^{n+1} + \sum_{k=0}^\infty \binom n k (\frac a n)^k \cdot (\frac{n+1}{n+1-k} \cdot (\frac{n+1}{n})^k - 1) \geq 0
$$
Das ist der Fall, wenn $\frac{n+1}{n+1-k} \geq 1$ ist. Das lässt sich mit dem binomischen Satz umformen:
$$
	\frac{n+1}{n+1-k} \geq 1
	\Leftrightarrow \sum_{i=0}^{k+1} \binom k i n^i \geq n^k (n+1-k).
$$
Letzteres wissen wir, weil die letzten zwei Summanden der linken Summe genau $n^{k+1}$ und $k n^k$ sind, also weil wir die Gültigkeit von
$$
	\sum_{i=0}^{k+1} \binom k i n^i \geq n^{k+1} + k n^k = n^k (n + k) \geq n^k (n + 1 - k)
$$
kennen.

Der Weg ist nicht sonderlich schön. Mit Sicherheit gibt es elegantere Möglichkeiten, das zu zeigen.

## Aufgabe 4

Die Folge $(1 + \frac a n)^n$ ist beschränkt, weil für jedes $n \in \N$ gilt: $x_n \leq \sum_{k=0}^n \frac {a^k}{k!}$.

Beweis der Hilfsaussage:
$$
	x_n = \sum_{k=0}^n \frac{n!}{(n-k)!} \frac{a^k}{k!} \frac 1 {n^k} \leq \sum_{k=0}^n \frac{a^k}{k!}
$$
gilt, weil für alle $k$ gilt: $n! \leq n^k (n-k)!$ (das folgt aus der Definition von $n!$).

Jetzt wissen wir $x_n \leq \sum_{k=0}^n \frac {a^k}{k!}$. $a > 0$. In der Vorlesung wurde bewiesen, dass dann $\sum_{k=0}^\infty \frac {a^k}{k!} =: \exp(a) < \infty$ gilt. Jeder Summand $\frac {a^k}{k!}$ ist positiv, also gilt
$$
	x_n \leq \sum_{k=0}^n \frac {a^k}{k!} \leq \sum_{k=0}^\infty \frac {a^k}{k!},
$$
also ist $(x_n)_{n\in\N}$ beschränkt.