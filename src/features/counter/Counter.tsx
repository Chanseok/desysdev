import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";
import { StyledAsyncButton, StyledButton } from "../../components/StyledButton";
import { StyledRow, StyledValue } from "../../components/StyledLayout";
import { StyledInput } from "../../components/StyledInput";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <StyledRow>
        <StyledButton
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </StyledButton>
        
        <StyledValue>{count}</StyledValue>

        <StyledButton
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </StyledButton>
      </StyledRow>
      
      <StyledRow>
        <StyledInput          
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <StyledButton
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </StyledButton>
        <StyledAsyncButton
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </StyledAsyncButton>
        <StyledButton onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </StyledButton>
      </StyledRow>
    </div>
  );
}
