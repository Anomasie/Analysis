---
title: "Präsenzblatt 3"
date: 2023-05-05T00:00:42+01:00
draft: false
---

## Aufgabe 1

Es sei $(x_n)$ eine Folge mit $\limsup_{n\to\infty} = -\infty$.
Das heißt, laut Definition des Limes Superior, dass
$$
	-\infty = \limsup_{n\to\infty} x_n = \lim_{n\to\infty} \sup_{k > n} x_k.
$$
Die Definition des Grenzwertes liefert nun: Für jedes $C \in \R$ gibt es ein $N \in \N$, sodass für alle $n > N$ gilt, dass $\sup_{k > n} x_k < C$.

Wir wollen nun zeigen, dass $\lim_{n\to\infty} x_n = -\infty$.
Dazu sei nun $C \in \R$ beliebig. Es gibt, wie wir schon festgestellt haben, ein $N \in \N$, sodass für alle $n > N$ gilt, dass $\sup_{k > n} x_k < C$.
Jedes $x_k$ mit $k > n$ ist natürlich kleiner als das größte $x_k$ mit $k > n$ (oder genauso groß).
Das heißt, für alle $n > N$ gilt
$x_k \leq \sup_{k > n} x_k < C$.
Das ist genau das, was $\lim_{k \to \infty} x_k = -\infty$ bedeutet.

## Aufgabe 2

Es sei $X$ eine abzählbare Menge und $A \subseteq X$. Zu zeigen ist, dass $A$ abzählbar ist.

Da $X$ abzählbar ist, gibt es eine bijektive Abbilung $j: N \to X$, wobei $N = \N$ oder $N = ${$1, ..., n$} für ein $n \in \N$ gilt.
(Dass $X$ abzählbar ist, heißt nicht unbedingt, dass es abzählbar *unendlich* ist.
Der zweite Fall ist genau der Fall, dass $X$ endlich ist.)

Wir zeigen die Aussage, indem wir ein Lemma der Vorlesung verwenden.
Das Lemma besagt:

>Sei $A$ eine Menge und $H: \N \to A$ surjektiv. Dann ist entweder $A$ endlich oder abzählbar unendlich.

Wir müssen also dieses surjektive $H$ finden.

#### Fall 1: $A = \emptyset$

Dann ist $A$ endlich.

#### Fall 2: $A \neq \emptyset$

Dann können wir ein $a \in A$ wählen.
Wir definieren nun $H$ durch $H(n) := j(n)$, falls $j(n) \in A$ liegt, und $H(n) := a$, falls $j(n)$ nicht in $A$ liegt.
Das $a$ ist quasi unser "Ausweichwert", wenn wir ein $n$ nicht auf $j(n)$ abbilden können, weil wir damit $A$ verlassen würden; und wir wollen ja, dass $H$ nur auf $A$ abbildet, um das Lemma zu verwenden.

Das so konstruierte $H$ bildet von $\N$ auf $A$ ab.
Es erreicht alle Elemente aus $A$, weil es alle Elemente aus $X$ erreicht bis auf die, die nicht in $A$ liegen.
Damit ist $H$ surjektiv.
Aus dem Lemma folgt, dass $A$ abzählbar endlich oder unendlich sein muss.

## Aufgabe 3

**(a)** haben wir in der Übung noch geschafft, **(b)** funktioniert genauso:

### (b)

Zu zeigen ist $\overline{zw} = \bar z \bar w$.
Dafür sei $z = a + ib$ und $w = c + id$ für $a, b, c$ und $d$ aus $\R$.
Bemerken wir zuerst:
$$
	z \cdot w = (a + ib)(c + id) = ac - bd + i(ad + bc).
$$
Der Realteil davon ist $ac - bd$ und der Imaginärteil $ad + bc$.
Das komplex konjugierte von $z \dot w$ ist also
$$
	\overline{z w} = ac - bd - i(ad + bc) = = ac - bd - iad - ibc.
$$
Schauen wir uns einmal die andere Seite an:
$$
	\bar z \bar w = (a - ib) (c - id) = ac - bd - ibc - iad = \overline{z w}
$$
laut der obigen Rechnung.

### (c)

Zu finden sind alle vierten Wurzeln aus 1, das heißt, alle $z \in \mathbb C$ mit $z^4 = 1$.
Offenbar muss dieses $z$ auch
$$
	(z^2)^2 = 1
$$
erfüllen.
Es gibt zwei Zahlen, deren Quadrat 1 ergibt: $1$ und $-1$.
Das heißt, $z^2 = 1$ oder $z^2 = -1$.

#### Fall 1: $z^2 = 1$.

Es gibt zwei Zahlen, deren Quadrat 1 ergibt: $1$ und $-1$, genau wie oben.
$z$ kann also $1$ oder $-1$ sein.

#### Fall 2: $z^2 = -1$.

Der erste Kanditat für $z$ ist natürlich $i$, denn genau dafür haben wir ja die komplexen Zahlen eingeführt.
Tatsächlich ist auch $(-i)^2 = -1$, da $(-i)^2 = (-1)^2 i^2 = 1 \cdot i^2 = -1$.
Es ist also $z = \pm i$.

Insgesamt haben wir vier Ergebnisse erhalten: $z$ kann $1, -1, i$ oder $-i$ sein.

### (d)

Gesucht sind die komplexen Zahlen $z$ mit $z^4 = -1$.
Wie oben muss dieses $z$ auch
$$
	(z^2)^2 = -1
$$
erfüllen. $z^2$ muss also $i$ oder $-i$ sein (gleiche Begründung wie oben).

#### Fall 1: $z^2 = i$.

Hier müssen wir ein bisschen rechnen: Dafür sei $z = a + ib$.
$$
	z^2 = (a + ib)^2 = a^2 - b^2 + 2iab = (a^2 - b^2, 2ab)
$$
in der Koordinatendarstellung.
Damit das genau i ergibt, muss $a^2 - b^2 = 0$ sein und $2ab = 1$.
Weil $a$ und $b$ reelle Zahlen sind, können wir wie in $\R$ rechnen:
$$
	a^2 - b^2 = 0 \Leftrightarrow a^2 = b^2 \Leftrightarrow \pm a = b.
$$
Setzen wir das jetzt in die zweite Gleichung ein, erhalten wir:
$$
	2ab = \pm 2a^2 = 1 \Leftrightarrow a^2 = \pm \frac 1 2.
$$
Das hat in $\R$ die Lösungen $a = \pm \sqrt{\frac 1 2}$.

Also erhalten wir vier Möglichkeiten für z: $\sqrt{\frac 1 2} + i\sqrt{\frac 1 2}, \sqrt{\frac 1 2} - i \sqrt{\frac 1 2}, -\sqrt{\frac 1 2} + i\sqrt{\frac 1 2}, -\sqrt{\frac 1 2} - i\sqrt{\frac 1 2}$ (alle Kombinationen aus $(\pm \sqrt{\frac 1 2}, \pm \sqrt{\frac 1 2}$).