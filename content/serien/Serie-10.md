---
title: "Serie 10"
date: 2023-06-22T12:00:00+01:00
draft: false
---

## Aufgabe 1

### (a)

{{< details >}}
- An einer Stelle im Limes könnt ihr eine geschickte $0$ einfügen.
{{</ details >}}


{{< details >}}
- $+ f(p) - f(p)$
{{</ details >}}

### (b)

{{< details >}}
- Nicht-Stetigkeit impliziert Nicht-Differenzierbarkeit.
{{</ details >}}

## Aufgabe 2

{{< details >}}
- Eine Möglichkeit ist, einen Widerspruchsbeweis zu führen. Angemommen, es gibt ein $p \in (0,1)$ mit $|f(p)| = C + \epsilon$ für ein $\epsilon > 0$.
{{</ details >}}

{{< details >}}
- Ihr könnt o.E. annehmen, dass $f(p) > 0$.
{{</ details >}}

{{< details >}}
- Betrachtet $(0,p)$. Laut Mittelwertsatz gibt es ein $x$, s.d. $f'(x) = \frac {...}{...}$. Analog gibt es ein $y \in (p,1)$ mit $f'(y) = \frac{...}{...}$.
{{</ details >}}

{{< details >}}
- Jetzt könnt ihr $(x,y)$ betrachten. Laut Mittelwertsatz gibt es ein $z \in (x,y)$, s.d. $f''(z) = \frac{\frac{C+\epsilon}{1-p} + \frac{C+\epsilon}{p}}{y-x}$. 
{{</ details >}}

{{< details >}}
- Dann erhaltet ihr $f''(z) \leq -C-\epsilon$, das ist ein Widerspruch (wozu?).
{{</ details >}}

{{< details >}}
- $p, 1-p$ und $y-x$ kleines als $1$. (Warum?)
{{</ details >}}

## Aufgabe 3

{{< details >}}
- Induktion über $n$.
{{</ details >}}

- Bitte verwendet die Formel, um $h^{(2023)}$ zu berechnen.

## Aufgabe 4

{{< details >}}
- Im Skript habt ihr bereits eine ähnliche Aussage bewiesen. Geht jeden Schritt des Beweises genau durch und versucht, die Aussage zu benutzen, so weit es geht (d.h. um die Differenzierbarkeit zu zeigen), und wenn es nicht funktioniert, euch an den Schritten zu orientieren.
{{</ details >}}

{{< details >}}
- Dinge, die nicht direkt aus dem Skript folgen: Ist der Konvergenzradius aller $f^{(n)}$ gleich? Das Ergebnis für $f^{(n)}(p)$ müsst ihr selbst nachrechnen. Das geht gut per Induktion.
{{</ details >}}