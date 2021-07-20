
// styles
import { Input, Label, Slider } from './ToggleSwitchStyles' 

export default function ToggleSwitch({ stateValue, setStateValue }) {
    return (
      <Label>
        <Input
          type="checkbox"
          onChange={() => setStateValue(stateValue => !stateValue) }
          value={stateValue}
        />
        <Slider />
      </Label>
    );
  }