---
title: "Präsenzblatt 9"
date: 2022-12-15T16:27:42+01:00
draft: false
---

## Aufgabe 1

### (a)

Es seien $A, B \subset K$ nach oben beschränkte Mengen, d.h. es gibt ein $a \in K$, das größer als alle Elemente von $A$ ist, und ein $b \in B$, das größer als alle Elemente von $B$ ist.

Für das Maximum von $a$ und $b$, $c := \max${$a,b$}, gelten $a \leq c$ und $b \leq c$. $c$ ist also größer als die obere Schranke $a$ von $A$ und größer als die obere Schranke $b$ von $B$. Wir müssen jetzt noch zeigen, dass $c$ größer als jedes Element von $A \cup B$ ist.

Für $x \in A \cup B$ gilt entweder $x \in A$ oder $x \in B$.

Falls $x \in A$ ist, gilt $x \leq a \leq c$.

Falls $x \in B$ ist, gilt $x \leq b \leq c$.

Insgesamt gilt also für alle $x \in A \cup B: x \leq c$, wir haben also eine obere Schranke von $A \cup B$ gefunden. Damit ist $A \cup B$ nach oben beschränkt.

### (b)

$A$ sei nach oben durch $a$ beschränkt, d.h. für jedes $x \in A$ gilt $x \leq a$. Nun sei $y$ ein Element von $A \cap B$. Dann liegt $y$ sowohl in $A$ als auch in $B$. Insbesondere liegt $y$ in $A$. Damit gilt $y \leq a$.

Das bedeutet, $a$ ist auch eine obere Schranke von $A \cap B$.

## Aufgabe 2

### Teil 1: M ist genau dann nach oben beschränkt, wenn -M nach unten beschränkt ist

$M$ ist genau dann nach oben beschränkt, wenn ein $s \in K$ existiert, s.d. für alle $m \in M$ gilt: $s \leq m$.
Es gilt (laut Proposition (Rechenregeln) (c), für angeordnete Körper):
$$
m \leq s \Leftrightarrow -m \geq -s
$$
Das heißt, ein solches $s$ existiert genau dann, wenn für alle $-m$ in $-M$ auch $-m \geq -s$ gilt, und das ist genau dann der Fall, wenn $-M$ nach unten beschränkt ist.

### Teil 2: $\sup M = -\inf -M$
#### Teil 2a: $\sup M \geq -\inf -M$

Mit Teil 1 haben wir gezeigt, dass für jede obere Schranke $s$ von $M$ $-s$ eine untere Schranke von $-M$ ist. Für die kleinste obere Schranke, $\sup M$, ist also $-\sup M$ eine untere Schranke von $-M$.
(Nur noch nicht unbedingt die größte.)
Das liefert uns
$$
-\sup M \leq \inf -M
$$
oder, etwas umgestellt:
$$
\sup M \geq -\inf -M.
$$

#### Teil 2b: $\sup M \leq -\inf -M$

Jetzt können wir feststellen, dass für jede untere Schranke $i$ von $-M$ die Zahl $-i$ eine obere Schranke von $M$ ist. Insbesondere gilt das für die größte untere Schranke, $\inf -M$. Wir erhalten
$$
-\inf -M \geq \sup M
$$

Insgesamt erhalten wir also
$$
-\inf -M \geq \sup M \geq -\inf -M
$$
und damit die gewünschte Gleichheit.

## Aufgabe 3

Unser Ziel wird es sein, $\sup B \leq \frac 1 {\inf A}$ und $\sup B \geq \frac{1}{\inf A}$ zu zeigen. Daraus folgt dann $\sup B = \frac 1 {\inf A}$.

### Teil 1: $\sup B \leq \frac 1 {\inf A}$, d.h. $\frac 1 {\inf A}$ ist eine obere Schranke von $B$

Wir wollen zeigen, dass alle Elemente von $B$ kleiner sind als $\frac 1 {\inf A}$. Dafür sei $b$ ein beliebiges Element aus $B$. Wegen der Definition von $B$ ist $b = \frac 1 a$ für ein $a \in A$.
Wir wissen, dass $\inf A$ eine untere Schranke von $A$ ist. Damit gilt

$$
\inf A \leq a
\Rightarrow
\frac 1 a \leq \frac 1 {\inf A}
$$

und damit das gewünschte $b = \frac 1 a \leq \frac 1 {\inf A}$.

### Teil 2: $\sup B \geq \frac{1}{\inf A}$

Eine kurze Beobachtung:
$$
\sup B \geq \frac{1}{\inf A}
\Leftrightarrow
\inf A \geq \frac 1 {\sup B}.
$$

Wir müssen also nur noch zeigen, dass $\frac 1 {\sup B}$ eine untere Schranke von A ist.
Dann ist die größte untere Schranke von A, $\inf A$, auch größer als $\frac 1 {\sup B}$.

Es sei $a$ ein beliebiges Element von $A$. Dann ist $\frac 1 a$ ein Element von $B$ und erfüllt
$$
b \leq \sup B,
$$
also haben wir
$$
\frac 1 a = b \leq \sup B,
$$
und wenn wir das umformen, erhalten wir
$$
\frac 1 {\sup B} \leq a
$$
Damit ist $\frac 1 {\sup B}$ eine untere Schranke von $A$ und wir erhalten die gewünschte Ungleichung.

### Aufgabe 4

$|x + y| = |x| + |y|$ gilt genau dann, wenn $x \geq 0$ und $y \geq 0$ oder $x \leq 0$ und $y \leq 0$.

Fall 1: $x$ und $y$ sind beide größer als 0
$$
\Rightarrow |x| = x, |y| = y, x+y \geq 0
$$
$$
\Rightarrow |x+y| = x+y = |x| + |y|
$$

Fall 2: $x$ und $y$ sind beide kleiner als 0
$$
\Rightarrow |x| = -x, |y| = -y, x+y = -(-x-y) \leq 0
$$
$$
\Rightarrow |x+y| = -x -y = |x| + |y|
$$

Fall 3: $x < 0, y \geq 0$

Fall 3a: $-x \leq y$
$$
\Rightarrow y - x > y + x \geq 0
$$
$$
\Rightarrow |x+y| = x+y < y-x = |y| + |x|
$$

Fall 3b: $-x > y$
$$
\Rightarrow -x+y > -x-y \geq 0
$$
$$
\Rightarrow |x+y| = -x-y < -x+y = |x| + |y|
$$

Fall 4: $x \geq 0, y < 0$

Das funktioniert analog zu Fall 3, vertausche dafür die Rollen von $x$ und $y$.