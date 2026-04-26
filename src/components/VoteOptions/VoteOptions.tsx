import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";

interface Props {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

const VoteOptions = ({ onVote, onReset, canReset }: Props) => {
  return (
    <div className={css.options}>
      <button onClick={() => onVote("good")}>Good</button>
      <button onClick={() => onVote("neutral")}>Neutral</button>
      <button onClick={() => onVote("bad")}>Bad</button>
      {canReset && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

export default VoteOptions;
