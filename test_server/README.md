Para instalar el servidor:

1.- Instalar `virtualenv`

```
pip install virtualenv
```

2.- Clona el repositorio y ve a la carpeta del server. (Donde está ese README)

3.- Crea un entorno virtual
```
virtualenv venv
```
4.- Activa el entorno, en windows:
```
./venv/Scripts/activate
```

Es básicamente ejecutar un script. Debería salirte "(venv)" en la consola.

5.- Instalar dependencias
```
pip install -r requirements.txt
```

6.- Ejectura el server con:
```
py app.py
```


Se ejecuta solo. Debes cambiar la IP (línea 20 de `app.py`) a la tuya en tu red local (mirar en IPconfig)