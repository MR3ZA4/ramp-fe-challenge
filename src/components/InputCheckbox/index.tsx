import classNames from "classnames";
import { useRef } from "react";
import { InputCheckboxComponent } from "./types";

{/* BUG 2 */}
export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`);

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      {/* Modified: Using a span instead of a label for visual representation */}
      <span
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
        onClick={() => !disabled && onChange(!checked)} // Toggle checkbox when the span is clicked
      />
      {/* Hidden input checkbox that holds the actual state */}
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(!checked)}
      />
    </div>
  )
}