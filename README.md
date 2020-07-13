## Tableau Angular Integration

## Screenshot

![Tableau Angular Integration Demo](/screenshot/tableau-public-demo.png)

## Intro

This code combines ES + Javascript mixture to demo how to achieve results using both.

### Import Tableau JS API Lib in angular.json

```
"build": {
          ...
          "options": {
            ...
            "assets": [
              ...
            ],
            "styles": [
              ...
            ],
            "scripts": ["src/assets/libs/tableau.js"]
          },
```

### Create a window instance for tableau object

```
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var tableau: any;
// The only compatible way to access tableau object in angular 2+

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
```

### Follow the Tableau API examples for filters and variation of worksheets
```
https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_samples.htm
```

### Tutorial

[Tableau Angular Integration](https://www.fullstackblog.in/)

### Angular Version

```
Angular CLI: 10.0.2
Node: 12.18.1

Angular: 10.0.3
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
Ivy Workspace: Yes

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.1000.2
@angular-devkit/build-angular     0.1000.2
@angular-devkit/build-optimizer   0.1000.2
@angular-devkit/build-webpack     0.1000.2
@angular-devkit/core              10.0.2
@angular-devkit/schematics        10.0.2
@angular/cli                      10.0.2
@ngtools/webpack                  10.0.2
@schematics/angular               10.0.2
@schematics/update                0.1000.2
rxjs                              6.5.5
typescript                        3.9.6
webpack                           4.43.0
```
