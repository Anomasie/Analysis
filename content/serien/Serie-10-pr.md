---
title: "Präsenzblatt 10"
date: 2022-12-15T16:27:42+01:00
draft: false
---

## Aufgabe 1

Die Aussage folgt fast direkt aus Aufgabe 2, Präsenzblatt 9.
Dort haben wir gezeigt, dass $M$ nach oben beschränkt ist g.d.w. $-M$ nach unten beschränkt ist, und dass $M$ ein Supremum besitzt g.d.w. $-M$ ein Infimum besitzt.
Wann immer ich diese Aufgabe verwende, schreibe ich "*".

Es habe nun jede nach oben beschränkte Teilmenge von $K$ ein Supremum.
$X$ sei eine nach unten beschränkte Menge.
Wir wollen zeigen, dass $X$ ein Infimum besitzt.

Wir wissen: Wenn $X$ ist nach unten beschränkt, ist $-X$ nach oben beschränkt (*).
Dann hat $-X$ laut Annahme ein Supremum.
Mit * erhalten wir, dass $-(-X) = X$ ein Infimum besitzt, und sind fertig.

Jeder Schritt lässt sich auch "rückwärts" gehen.
Weil es so schön ist, schreibe ich es trotzdem noch einmal auf.

Es habe jetzt jede nach unten beschränkte Teilmenge von $K$ ein Infimum.

$Y$ sei eine nach oben beschränkte Teilmenge.

Dann ist $-Y$ nach unten beschränkt (*).

Es hat also $-Y$ ein Infimum laut Annahme.

Damit hat $-(-Y) = Y$ ein Supremum (*).

Da $Y$ beliebig war, besitzt jede nach oben beschränkte Teilmenge von $K$ ein Supremum.

## Aufgabe 3

Es sei $\Phi: K \to K'$ ein Körperisomorphismus, $\Phi$ ist also bijektiv.
Damit existiert $\Phi^{-1}: K' \to K$.
Das ist wichtig, sonst könnten wir nicht zeigen, dass $\Phi^{-1}$ ein Körperisomorphismus ist.

Wir müssen die drei Eigenschaften nachweisen.
Dabei werden wir fast jedes mal zwei bestimmte Tricks anwenden.

Trick 1 ist, $\Phi (\Phi^{-1}(x)) = x$ zu benutzen.
Das gilt für alle $x$ aus $K'$ laut Definition der Umkehrabbildung.

Trick 2 besteht aus dem Wissen, dass für bijektive $\Phi$ gilt: $\Phi(x) = y \land \Phi(z) = y \Rightarrow z = x$.
Das folgt aus der Injektivität von bijektiven Funktionen.

### (K1)
#### Teil 1: $\Phi^{-1}(0') = 0$

Es folgt direkt aus der Definition:
$$
\Phi(\Phi^{-1}(0')) = 0'
$$
Da wir $\Phi(0) = 0'$ gegeben haben und $\Phi$ bijektiv ist, muss $\Phi^{-1}(0') = 0$ gelten.

#### Teil 2: $\Phi^{-1}(x+'y) = \Phi^{-1}(x) + \Phi^{-1}(y)$

$$
\Phi(\Phi^{-1}(x+'y)) = x+'y \land
\Phi(x+y) = x+'y
\Rightarrow
\Phi^{-1}(x+'y) = x+y
$$

### (K2)
#### Teil 1: $\Phi^{-1}(1') = 1$

$$
\Phi(\Phi^{-1}(1')) = 1' \land
\Phi(1) = 1'
\Rightarrow
\Phi^{-1}(1') = 1
$$

#### Teil 2: $\Phi^{-1}(x \cdot' y) = x\cdot y$

$$
\Phi(\Phi^{-1}(x \cdot' y)) = x \cdot' y \land
\Phi(x \cdot y) = x \cdot' y
\Rightarrow
\Phi^{-1}(x \cdot' y) = x \cdot y
$$

### (K3): $x < y \Rightarrow \Phi^{-1}(x) <' \Phi^{-1}(y)$

Es seien $x,y$ in $K$ mit $x < y$ gegeben.
Angenommen, $\Phi^{-1}(x) \geq \Phi^{-1}(y)$.

$\Phi^{-1}$ ist bijektiv, weil $\Phi$ bijektiv ist.
Wegen $x < y \Rightarrow x \neq y$ folgt daher $\Phi^{-1}(x) \neq \Phi^{-1}(y)$.
Es muss also $\Phi^{-1}(x) > \Phi^{-1}(y)$ gelten.

Dann folgt aus Eigenschaft K3 für $\Phi$:
$$
\Phi(\Phi^{-1}(x)) = x > \Phi(\Phi^{-1}(y)) = y
$$
und das ist ein Widerspruch zu $x < y$.
Unsere Annahme kann also nicht wahr sein, und es muss stattdessen
$$
\Phi^{-1}(x) < \Phi^{-1}(y)
$$
gelten.

Damit haben wir alle drei Eigenschaften nachgewiesen und $\Phi^{-1}$ ist ein Körperisomorphismus.

## Aufgabe 4

### (a) $\sup (A+B) = \sup A + \sup B$

Wir gehen wieder in zwei Schritten vor:

#### Teil 1: $\sup A + \sup B$ ist eine obere Schranke für $A+B$.

Dazu sei $a+b \in A+B$, also $a \in A$ und $b \in B$.
Es gilt
$$
a \leq \sup A,
b \leq \sup B
$$
und daraus folgt
$$
a + b
\leq
\sup A + \sup B.
$$

#### Teil 2: $\sup A + \sup B$ ist die kleinste obere Schranke von $A+B$.

Angenommen, $\sup A + \sup B - \epsilon, \epsilon > 0$ sei eine obere Schranke von $A+B$.
Wir wollen jetzt ein Element in $A+B$ finden, das größer ist als $\sup A + \sup B - \epsilon$.
Das wird dann ein Widerspruch dazu sein, dass das eine obere Schranke ist.

Es ist $\sup A$ das Supremum von $A$ und damit die kleinste obere Schranke von $A$.
Damit ist $\sup A - \frac \epsilon 2$ keine obere Schranke mehr von $A$.
Es gibt also ein $a \in A$, das
$$
\sup A - \frac \epsilon 2 < a
$$
erfüllt.

Analog gibt es ein $b \in B$, das
$$
\sup B - \frac \epsilon 2 < b
$$
erfüllt.

Wir erhalten mit diesem $a$ und diesem $b$:
$$
a + b > \sup A - \frac \epsilon 2 + \sup B - \frac \epsilon 2 = \sup A + \sup B + \epsilon
$$
und da $a \in A$, $b \in B$ gelten, ist $a + b \in A+B$.
Wir haben also ein Element aus $A+B$ gefunden, das größer ist als die obere Schranke.
Das ist ein Widerspruch.
Damit kann $\sup A + \sup B - \epsilon$ keine obere Schranke von $A+B$ sein, und $\sup A + \sup B$ ist tatsächlich die kleinste obere Schranke von $A+B$.

### (b) $\sup C = \sup ${$ f(x) + g(x) | x \in X $} $ \leq \sup f(X) + \sup g(X)$

Zur Erinnerung: $f(X) = $ {$f(x)|x\in X$}.

Es gilt für jedes $x \in X$ (und damit für jedes $f(x) + g(x)$ aus $C$):
$$
f(x) + g(x) \leq \sup f(X) + \sup g(X),
$$
damit ist $\sup f(X) + \sup g(X)$ eine obere Schranke von $C$.
Insbesondere ist die kleinste obere Schranke, $\sup C$, kleiner als diese obere Schranke.

### (c) $X = ${$1,2$}, $\sup C < \sup f(X) + \sup g(X)$

Betrachte $f$ mit $f(1) = 0, f(2) = 1$ und $g$ mit $g(1) = 1, g(2) = 0$.

Dann ist
$$
f(1) + g(1) = 0+1 = 1,
f(2) + g(2) = 1+0 = 1
$$
Also $C = ${$1$} und $\sup C = 1$.

Dahingegen sind
$f(X) = $ {$f(1),f(2)$} $ = $ {$0,1$}
und analog
$g(X) = $ {$0,1$}.
Damit ist
$\sup f(X) = \sup ${$0,1$} $=1 = \sup g(X)$
und somit

$$
\sup C = 1 < 1 + 1 = \sup f(X) + \sup g(X).
$$