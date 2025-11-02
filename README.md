202512
<br>
MISW-4104
<br>
Evaluación Práctica Angular
<br>
<br>
<b>Instrucciones generales</b>
<br>
<ol>
  <li>Cree un proyecto nuevo en Angular</li>
  <li>Suba el proyecto a un repositorio en su cuenta personal</li>
</ol>
<p>MUY IMPORTANTE: Durante el desarrollo de la evaluación no olvide ir salvando los cambios periódicamente en el repositorio de GitHub.</p>
<strong>Enunciado de la evaluación</strong>
<br>
<br>
<b><p>Punto No. 1 (70%)</p></b>
<p>Se debe desarrollar una aplicación en Angular que permita mostrar vehículos de segunda mano en venta. En particular, la aplicación debe tener:</p>
<ol>
  <li>Un módulo para vehículos (10%)</li>
  <li>Una clase Vehiculo con todos los a tributos que le permitan manejar los datos de un vehículo (20%).</li>
  <li>Un servicio que utiliza http para obtener de esta URL un conjunto de datos de vehículos (20%).</li>
  <li>https://gist.githubusercontent.com/josejbocanegra/17bb8c76405e43655d551a90800c8a81/raw/d41b4acc3457e51e7533fad6d5e9925ee9676457/202212_MISW4104_Grupo1.json</li>
  <li>Un componente de listar vehículo que presentará en una tabla de Bootstrap losdatos del vehículo (marca, línea y modelo) (20%).</li>
</ol>
<p></p>La vista debe hacerse con el selector del componente y el resultado final debe verse lo más parecido a la Fig. 1.</p>
<b><p>Punto No. 2 (10%)</p></b>
<p>Modifique el componente de listar para incluir dos líneas que muestren el número de vehículos de cada marca proporcionados por el listado. Este número debe ser calculado dado que no se conoce a priori.</p>
<p>El resultado debe verse lo más parecido a la Fig. 2:</p>
<b><p>Punto No. 3 (20%)</p></b>
<p>Realice la prueba del componente. Para esto, en la prueba cree un listado de 3 vehículos y verifique que la tabla se crea correctamente con tres filas más el encabezado.</p>
<h3>Mockup</h3>
<p>En el siguiente enlace puede consultar el mockup que le servirá como referencia para diseñar la página:</p>
<ul>
  <li>https://www.figma.com/file/xJgTsbJQQbCejp3IwIA9RF/Monitoria-MISW---Mockups-parcial-1A?node-id=0%3A1</li>
</ul>
<h3>Instrucciones para la entrega de la evaluación</h3>
<ol>
  <li>Haga commit y push a su repositorio personal.</li>
  <li>Haga un release con la etiqueta 1.0.0 y el título ParcialMISW4104.</li>
  <li>Suba como respuesta a la actividad de Coursera el archivo .zip del release y la URL de su repositorio.</li>
  <li>Posterior a la entrega de la evaluación <b>NO</b> puede modificar el repositorio.<strong> Si se presenta alguna modificación después de la hora de entrega, por mí nima que sea, la evaluación será anulada.</strong></li>
</ol>

# Vehiculos

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.18.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
