---
title: "Serie 6, Pfingstzettel"
date: 2023-06-01T12:00:00+01:00
draft: false
---

## Aufgabe 1 (8 Punkte)

### (a)

{{< details >}}
- Ähnlich zum Beweis der Überabzählbarkeit der reellen Zahlen.
{{</ details >}}

{{< details >}}
- "Cantors zweites Diagonalargument"
{{</ details >}}

### (b)

{{< details >}}
- Injektivität und Surjektivität einzeln überprüfen
{{</ details >}}

### (c)

{{< details >}}
- Letztes Semester haben wir auf Blatt 3, Aufgabe 2, gezeigt, dass es keine surjektive Abbildung $X \to \mathcal P (X)$ geben kann.
{{</ details >}}

## Aufgabe 3 (4 Punkte)

{{< details >}}
- Durch einfaches Umstellen lässt sich eine Formel für $\varphi$ erhalten.
{{</ details >}}

### $\Rightarrow$

{{< details >}}
- Ein Kandidat für $\varphi$ ist durch die Formel gegeben.
{{</ details >}}

{{< details >}}
- Jetzt muss nur noch gezeigt werden, dass $\varphi (q) \to 0$ für $q \to p$ gilt.
{{</ details >}}

{{< details >}}
- Grenzwertdefinition
{{</ details >}}

## Aufgabe 4

- Möglichkeit für einen direkten Beweis:

{{< details >}}
- Betrachte $x \neq y$. Wir wollen zeigen, dass $f(x)$ und $f(y)$ beliebig nah aneinander liegen.
{{</ details >}}

{{< details >}}
- Es gibt jedes $n$ Zahlen $x_0, ..., x_n$, s.d. $x_0 = x, x_n = y, |x_i - x_{i-1}| \leq |x-y| \cdot \frac 1 n$ für alle $i$ gilt. (Hier muss noch begründet werden, warum diese Zahlen existieren, aber es reicht, wenn ihr begründet, wie ihr sie bestimmen könnt.)
{{</ details >}}

{{< details >}}
- Stelle eine Teleskopsumme mit den $x_i$ auf, um $x-y$ zu erhalten.
{{</ details >}}

{{< details >}}
- Jetzt lässt sich $|f(x) - f(y)|$ nach oben abschätzen durch einen Term, der für $n \to \infty$ gegen $0$ konvergiert.
{{</ details >}}

{{< details >}}
- Benutze die Dreiecksungleichung $$ \left| \sum_{i=1}^N a_i - b_i \right| \leq \sum_{i=1}^N |a_i - b_i| $$ für geeignete $a_i, b_i$.
{{</ details >}}

{{< details >}}
- Für den Rest reichen Hölder-Stetigkeit und die Voraussetzung, $|x_i - x_{i-1}| \leq |x-y| \cdot \frac 1 n$.
{{</ details >}}