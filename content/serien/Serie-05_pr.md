---
title: "Präsenzblatt 5, Notizen zu Aufgabe 3"
date: 2023-05-17T12:00:00+01:00
draft: false
---

Es folgen kurze Notizen zu den Aufgaben.
Fragen könnt ihr mir gern per Mail oder nächste Woche stellen.

## Aufgabe 3

### (a)

- Das Polynom im Zähler hat eine Nullstelle in $-1$ (einsetzen). Das heißt, ihr könnt es durch $(x-1)$ teilen und erhaltet ein neues Polynom. Eigentlich ist es also nur ein ganz normales Polynom, das an einer Stelle verändert wurde.

- Das ist stetig, wenn es an dieser Stelle "sowieso" den Wert $42$ annehmen würde.

{{< details >}}
- Das Polynom wurde an der Stelle $-1$ verändert, anschauen wollen wir uns aber nur die Stelle $1$. Da der Nenner dort nicht $0$ wird, ist es automatisch stetig als Produkt stetiger Funktionen (siehe Rechenregeln).
{{</ details >}}

#### Lösung:

{{< details >}}
- Es ist stetig in $1$, aber nicht in $-1$.
{{</ details >}}

### (b)

- Analog zu a

{{< details >}}
- Die einfache Lösung aus (a) funktioniert hier nicht, weil das Polynom im Nenner diesmal eine Nullstelle in $1$ hat.

{{</ details >}}

{{< details >}}
- Das Zähler-Polynom hat allerdings eine Nullstelle in $-1$, d.h. ihr könnt es teilen, erhaltet ein Polynom und wenn es in $1$ genau den gegebenen Wert hat, ist es stetig.
{{</ details >}}

#### Lösung:

{{< details >}}
- Nicht so wichtig. Ob ihr das Richtige herausbekommt, hängt größtenteils davon ab, ob ihr die Polynomdivision richtig ausgeführt habt. Wichtig ist eher, *dass* ihr etwas mit Polynomdivision versucht habt.
{{</ details >}}

### (c)

- Der dritte Fall ist egal, weil wir die Stetigkeit in $0$ testen und nicht die für $x > 1$ oder $x < -1$.

- Wichtig ist die Frage, ob $f_3(x)$ für $x \to 0$ gegen $f_3(0) = \frac 1 2$ konvergiert.

#### Lösung (korrigiert):

{{< details >}}
- Ja, das tut sie.
{{</ details >}}

### (d)

- Welche Werte nimmt die Funktion für $x \neq 0$ an?

- Wenn es euch hilft, könnt ihr die Fälle $x > 0$ und $x < 0$ unterscheiden, um den Betrag loszuwerden.

#### Lösung:

{{< details >}}
- Nein, weil $f(x)$ für $x \to 0$ gegen $0$ konvergiert und nicht gegen $1$. Ihr könnt zum Beispiel das $x$ ausklammern, dann konvergiert $\frac x {|x|}$ gegen $1$ bzw. $-1$ und $x \cdot ...$ in beiden Fällen gegen $0$.
{{</ details >}}