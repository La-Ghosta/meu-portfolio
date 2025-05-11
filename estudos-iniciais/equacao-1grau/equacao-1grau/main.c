#include <stdio.h>
#include <stdlib.h>

int main() {
    float a, b, x;

    printf("Resolucao de equacao do 1o grau (ax + b = 0)\n");

    printf("Digite o valor de a: ");
    scanf("%f", &a);

    // Evita divisão por zero
    if (a == 0) {
        printf("Coeficiente 'a' nao pode ser zero em uma equacao do 1o grau.\n");
        return 1;
    }

    printf("Digite o valor de b: ");
    scanf("%f", &b);

    x = -b / a;

    printf("A raiz da equacao e: x = %.2f\n", x);

    return 0;
}
