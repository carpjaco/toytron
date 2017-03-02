import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CodeComponent } from './code/code.component';
import { InstructionPipe } from './core/instruction.pipe';
import { MemoryComponent } from './memory/memory.component';
import { Memory } from './core/memory.model';
import { ProgramComponent } from './program/program.component';
import { System } from './core/system.model';
import { InstructionFactory } from './core/instruction.factory';
import { AddressPipe } from './core/address.pipe';
import { AddressFactory } from './core/address.factory';
import { LeftPadPipe } from './core/left-pad.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CodeComponent,
    InstructionPipe,
    AddressPipe,
    LeftPadPipe,
    MemoryComponent,
    ProgramComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    System,
    InstructionFactory,
    AddressFactory,
    LeftPadPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
