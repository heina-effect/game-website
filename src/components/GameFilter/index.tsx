import React, { ChangeEvent, ReactElement } from "react";
import {PLATFORMS} from "./constans"

interface Props {
  onChange : (e:ChangeEvent<HTMLFormElement>) => void;
}

const GameFilter = ({ onChange } : Props) : ReactElement => (
    <form>
      <label htmlFor="platform-select">
        Platform;
        <select name="platform" id="platform-select">
        {PLATFORMS.map(platform => (
          <option key={platform.value} value={platform.value}>
            {platform.display}
          </option>
        ))}
        </select>
      </label>
    </form>
  );
export default GameFilter;