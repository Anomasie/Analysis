---
title: "Serie 11"
date: 2023-06-30T12:00:00+01:00
draft: false
---

## Aufgabe 1

{{< details >}}
- Berechne die Ober- und die Untersumme für eine beliebige Zerlegung.
{{</ details >}}

{{< details >}}
- Sie werden sich mindestens um einen festen Faktor $> 0$ unterscheiden.
{{</ details >}}

{{< details >}}
- Dieser Unterschied lässt sich gut grafisch bestimmen.
{{</ details >}}

## Aufgabe 2

{{< details >}}
- Die Aussage lässt sich mit Aufgabe 3 zeigen.
{{</ details >}}

{{< details >}}
- Zum Beispiel über Induktion über $n$, die Anzahl der Stützstellen der Zerlegung $Z$. Für $n = 3$ (d.h. $Z = (a, c, b)$ für ein $c \in (a,b)$) ist die Lage genau wie in Aufgabe 3.
{{</ details >}}

{{< details >}}
- Konstante Funktionen könnt ihr sehr einfach integrieren. Auf $[z_{i-1}, z_i]$ ist die Treppenfunktion konstant.
{{</ details >}}

## Aufgabe 3

{{< details >}}
- Betrachte eine beliebige Zerlegung $Z$ und füge den Punkt $c$ hinzu. Das macht sie höchstens feiner, und wir betrachten sowieso $|Z| \to 0$.
{{</ details >}}

{{< details >}}
- Jetzt teilen sich die Ober- und Untersumme in einen Teil "vor $c$" und einen Teil "nach $c$". Beide konvergieren.
{{</ details >}}

## Aufgabe 4

{{< details >}}
- "von einheitlichem Vorzeichen" bedeutet, dass o. E. von $g \geq 0$ ausgegangen werden kann. (Sonst betrachte $-g$, ...)
{{</ details >}}

{{< details >}}
- Betrachte die Funktion $\xi \mapsto \int_a^b f(\xi) g(x) ~dx = f(\xi) \int_a^b g(x) ~dx$. Diese Funktion ist stetig in $\xi$. (Warum?)
{{</ details >}}

{{< details >}}
- Es gilt $\int_a^b \min_{\xi\in[a,b]} f(\xi) g(x) ~dx \leq \int_a^b f(x) g(x) ~d(x) \leq \int_a^b \max_{\xi\in[a,b]} f(\xi) g(x) ~dx$.
{{</ details >}}