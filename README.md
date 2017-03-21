# Toytron

A simple computer emulator that can be programmed with a (very) simplified
assembly-like language.

## How to program
* Enter a memory address to modify (0-99) (this is the operand)
* Select an operation using available buttons
* Install 'code' to memory
* Step or run through the program, viewing changes to memory

## Operations
* **Read**
  * Take input from the user and put it in the address specified by the operand
* **Write**
  * Output the value from address specified by the operand
* **Load**
  * Load the value from address specified by the operand into the Accumulator
* **Store**
  * Store Accumulator value into address specified by the operand
* **Add**
  * Add value in address specified by the operand to the Accumulator
* **Subtract**
  * Subtract value in address specified by the operand from the Accumulator
* **Multiply**
  * Multiply value in address specified by the operand by the Accumulator
* **Divide**
  * Divide the Accumulator by the address specified by the operand
* **Branch**
  * Branch to the address specified by the operand unconditionally
* **BranchZero**
  * Branch to the address specified by the operand only when the Accumulator equals 0
* **BranchNeg**
  * Branch to the address specified by the operand only when the Accumulator is a negative number
* **Halt**
  * Halt the system