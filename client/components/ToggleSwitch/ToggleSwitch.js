
// styles
import { Input, Label, Slider } from './ToggleSwitchStyles' 

export default function ToggleSwitch({ stateValue, setStateValue, callback }) {
    return (
      <Label>
        <Input
          type="checkbox"
          onChange={() => setStateValue(stateValue => !stateValue) }
          onClick={callback}
          value={stateValue}
        />
        <Slider />
      </Label>
    );
  }