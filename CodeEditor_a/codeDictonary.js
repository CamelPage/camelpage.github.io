/*

-- Variable's

var v[0-127] [uint8_t/uint16_t/int/millis/char]
set v[0-127] [math/numeric] (var/numeric) (add/sub/mul/div/mod/) (var/numeric)

-- Math Exlpained

Math
    Var
        Operator
        sub -
        add +
        mul *
        div /
        int_div //
        mod % 
        root ^^
        power ^
        log
            Var

        Operator Without 2nd var
        fac !


-- Pin Instructions

Read [pin] [var]
aRead [pin] [var]

Write [pin] [var/value]
aWrite [pin] [var/value]

PinMode [INPUT/PULLUP/OUTPUT]

-- If Logic

If [var] [op] [var/value] [id]
skip
endIf [id]

-- Label's & Functions

Label [id]
Jump [id]

CreateFunction [id] [code] (args)
ExecuteFunction [id] (args)  

-- Advanced

#macro [from] [to]

*/

/*
# - means run at compile time

*/