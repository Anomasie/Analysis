---
title: "Präsenzblatt 10, Notizen zu Aufgabe 3 und 4"
date: 2023-05-17T12:00:00+01:00
draft: false
---

## Aufgabe 3

### (a)

Zu zeigen ist $\lim_{x\to0+} \ln(x) = -\infty$.

Es sei $\epsilon > 0$ beliebig.
O.E. $\epsilon < \frac 1 2$.
Dann gibt es ein $n \in \N$, s.d. $\epsilon < \frac 1 {2^n})$.
Für $\epsilon = \frac 1 3$ wäre das $n$ zum Beispiel $1$, da $\frac 1 3 < \frac 1 {2^1} = \frac 1 2$.
Für $\epsilon \to 0$ haben wir $n \to \infty$.

Die Frage ist jetzt, was mit $\ln(x)$ passiert, wenn $x < \epsilon$.
Wir wissen bereits, dass der Logarithmus streng monoton wächst, weil $\exp$ streng monoton wächst und $\ln$ die Umkehrfunktion von $\exp$ ist.
Daraus folgt:

$$
	x < \epsilon < \frac 1 {2^n}
	\Rightarrow
	\ln(x) < \ln(\epsilon)
	< \ln(\frac 1 {2^n})
	= n \cdot \ln( \frac 1 2 ).
$$

Da $\frac 1 2 < 1$, ist $\ln(\frac 1 2) < 0$. Für $\epsilon \to 0+$ erhalten wir also $n \to \infty$ und damit $\ln(x) \to -\infty$.

### Sinn der Aufgabe

Zuerst überprüfen wir die Bedingungen für L'Hospital:
$$
	\lim_{x\to0+} \ln(x) = -\infty,
	\lim_{x\to0+} x^{\alpha} = 0.
$$
Wir haben also das Problem $"0 \cdot \infty"$,
d.h. wir wollen $\lim_{x\to0+} f(x) g(x)$ bestimmen mit $\lim_{x\to0+} f(x) = 0, \lim_{x\to0+} g(x) = -\infty$.
Um dazu die L'Hospital'schen Regeln zu verwenden, müssen wir das Ganze noch etwas umschreiben.
Für $f(x) \neq 0 \neq g(x)$ haben wir zwei Möglichkeiten:
$$
	\lim_{x\to0+} f(x) g(x) = \lim_{x\to0+} \frac 1 { \frac 1 {f(x)} } g(x)
$$
und
$$
	\lim_{x\to0+} f(x) g(x) = \lim_{x\to0+} f(x) \frac 1 { \frac 1 {g(x)} }.
$$
Im Folgenden werden wir beide prüfen und testen, ob es egal ist, welche der beiden wir wählen.

### (b)

Im zweiten Schritt lässt sich L'Hospital anwenden, danach ist es Umstellen:
$$
	\lim_{x\to0+} \frac {\ln(x)}{x^{-\alpha}}
	= \lim_{x\to0+} \frac {\frac 1 x}{(-\alpha) x^{-\alpha-1}}
	= \lim_{x\to0+} \frac 1 {-\alpha} \frac 1 {x^{-\alpha-1+1}}
	= - \left(\frac 1 \alpha\right) \lim_{x\to0+} x^\alpha
	= 0
$$

### (c)

Im zweiten Schritt lässt sich L'Hospital anwenden, danach ist es Umstellen:
$$
	\lim_{x\to0+} \frac {x^{\alpha}}{ \frac 1 {\ln(x)} }
	= \lim_{x\to0+} \frac {x^{\alpha}}{ \frac 1 {\ln(x)} }
	= \lim_{x\to0+} \frac {\alpha x^{\alpha-1}}{ - \frac 1 x \cdot \frac 1 {\ln(x)^2} }
	= \alpha \cdot \lim_{x\to0+} \frac {x^{\alpha-1+1}}{ -\frac 1 {\ln(x)^2} }
	= \alpha \cdot \lim_{x\to0+} \frac {x^{\alpha}}{ -\frac 1 {\ln(x)^2} }.
$$
Das lässt sich immer noch nicht berechnen.
Es ist also nicht immer egal, welche der beiden Möglichkeiten wir wählen:
Manchmal lässt sich der entstandene Grenzwert trotzdem nicht bestimmen.
Gegebenenfalls muss man, falls der reste nicht funktioniert, einfach noch den anderen testen.

Sollten sich beide berechnen lassen, werden sie übereinstimmen. Alles andere wäre ein großes Problem, denn dann wäre ja
$\lim_{x\to0+} f(x) g(x) \neq \lim_{x\to0+} f(x) g(x)$.

## Aufgabe 4

Das folgt aus der L'Hospital'schen Regel:
Sowohl $(x-p)$ als auch (weil $f$ stetig ist) $f(x) - f(p)$ konvergieren gegen $0$ für $x \to p$.
Damit können wir die Regel anwenden und erhalten:
$$
	\lim_{x\to p} \frac{f(p) - f(x)}{p-x}
	= \lim_{x\to p} \frac{f'(p)}{1}
	= f'(p).
$$

Natürlich existiert der Grenzwert auch für nicht-stetig-differenzierbare, aber differenzierbare Funktionen; schließlich ist die Definition von Differenzierbarkeit in $p$ genau die Existenz dieses Grenzwertes in $p$.