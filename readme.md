# Quien Presenta
Selector aleatorio de personas dentro de grupos.

## Modo de uso

1. Al ingresar en la página, hacer click en el botón `Choose File` y subir un archivo de extensión `.json` con el siguiente formato:
```json
{
    "grupos": [
        {
            "id": 1,
            "integrantes": [
                "Cory Hickories",
                "Kris Prott"
            ]
        },
        {
            "id": 45,
            "integrantes": [
                "Quinn Cribbe",
                "Avis Oliver"
            ]
        }
    ]
}
```
El archivo `sample.json` de este repositorio es un ejemplo.

2. Hacer click en `Import`. Se mostrarán los grupos,
3. Hacer click en `Grupo`para sortear el grupo que deberá presentar,
4. Una vez seleccionado un grupo, hacer click en `Quién presenta` para sortear la persona que presenta

