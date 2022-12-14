# GYFMobileApp

Aplicacion Mobile para GYF Inteligencia Digital.
## Pre-requisitos

Se debe tener en cuenta que el proyecto funciona usando `React Native CLI`. 
En caso de complementar esta informacion con fuentes externas, tener en cuenta que **no se utiliza** `Expo CLI`.
Si hubiera alguna duda de como levantar el proyecto en alguna plataforma especifica, se debe consultar la página [Setting up the development environment de react-native](https://reactnative.dev/docs/environment-setup).

Para ejecutar el proyecto se necesita:

### Node

Version 12 o superior

### Yarn

Se utilizara `yarn` para la instalación de las dependencias del proyecto en vez de utilizar directamente `npm`.

`npm install --global yarn`

*En linux agregar permisos de root (sudo) si fuera necesario*

### Java Development Kit

Requiere al menos la versión 8 of the Java SE Development Kit (JDK), que se puede descargar desde [AdoptOpenJDK](https://adoptopenjdk.net/).

### Ambiente de desarrollo de Android

1. Descargar Android Studio

    En **linux** descargar el `.tar.gz` de la [pagina oficial de android](https://developer.android.com/studio/index.html). Descomprimir el archivo y mover la carpeta `android-studio` a `~/android-studio`.

    Crear un archivo `~/android-studio/run.sh` con el texto
    ```sh
    nohup ~/android-studio/bin/studio.sh > ~/android-studio/studio.out &
    ```
    y cambiar los permisos de ejecucion del mismo haciendo `chmod 755 ~/android-studio/run.sh`

    Para ejecutar Android Studio, abrir el archivo `run.sh` o ejecutarlo desde consola.

2. Instalar Android Studio (primer inicio)

    Al abrir Android Studio por primera vez se instalaran:

    * Android SDK
    * Android SDK Platform
    * Android Virtual Device

    *Hay que asegurarse que las casillas de esos elementos esten seleccionadas*

3. Instalar Android SDK (pantalla de bienvenida)

    En la pantalla de bienvenida ir a las opciones (tres puntos verticales) y seleccionar `SDK Manager` o desde dentro del IDE `File -> Settings -> Appearance & Behavior -> System Settings -> Android SDK` [(link)](jetbrains://AndroidStudio/settings?name=Appearance+%26+Behavior--System+Settings--Android+SDK)

    En la pestaña `SDK Platforms` seleccionar `Show Package Details` y a continuacion en `Android API 11 (R)`:

    * `Android SDK Platform 30`
    * `Sources for Android 30`
    * `Intel x86 Atom_64 System Image`
    * `Google APIs Intel x86 Atom System Image`

    Al continuar se descargaran las dependencias (entre 1 y 2 gb).

    En la pestaña `SDK Tools` seleccionar `Show Package Details` y a continuacion en `Android SDK Build-Tools ...` validar que se encuentre activo `30.0.2`. En caso que no se encuentre instalado, instalarlo.

    Android Studio instala la ultima version de Android SDK pero react-native necesita el SDK de Android 11.
### Conectar un dispositivo

Se puede usar un dispositivo físico o emulado

#### Dispositivo físico

Seguir las instrucciones de https://reactnative.dev/docs/running-on-device

#### Dispositivo emulado

Abrir este proyecto en Android Studio.

Ir a `Device Manager` y Crear un dispositivo con version de android R API Level 30.

### Ejecución

Para levantar la aplicación en un dispositivo habiendo cumplido los pre-requisitos se deben hacer los siguientes pasos.

* Levantar el dispositivo (emulado o físico) donde se ejecutará.

* En el directorio del proyecto, ejecutar `yarn install` para descargar las dependencias

* En dos terminales distintas (mismo directorio), en una ejecutar `npx react-native start` y en la otra `npx react-native run-android`.
