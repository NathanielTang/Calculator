HTML/CSS

make display text display from right side, and make the font look good



JS

equal button: set the result to be "a" DONE

find a way to make the buttons wire to "b" instead of "a" after pressing an operator or the equals, but not letting it switch back to "a" before the operation is complete. Actually, why not just set it permanently to "b" after operator is pressed? Then all results are put into "a" anyways DONE

>press numbers for a          a = "12"
>press operator once          a = "12", operator = "+", temp switches from "a" to "b"

>press numbers, will go to b  b = "6"
because temp = "b"


Need to add clear button that resets a, b, operator, and temp.




OH you also need a branch of logic that deals with displaying the stuff (set up the display in CSS)

How to Display:
grab text using query selector
display text as variable of a, b, or the result(which is also a)

fix the RTL for negative sign and for decimal