import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CodeComponent } from './code/code.component';
import { OperationPipe } from './core/operation.pipe';
import { MemoryComponent } from './memory/memory.component';
import { Memory } from './core/memory.model';
import { ProgramComponent } from './program/program.component';
import { System } from './core/system.model';

@NgModule({
  declarations: [
    AppComponent,
    CodeComponent,
    OperationPipe,
    MemoryComponent,
    ProgramComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [System],
  bootstrap: [AppComponent]
})
export class AppModule { }
