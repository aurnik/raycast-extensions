import { AnswerView } from "./api/ui/AnswerView";

export default function Command(): JSX.Element {
  const c = "confident";
  const p =
    "Act as a writer. Make the following text more confident while keeping the core idea.\n\nOutput only with the modified text.\n";
  return <AnswerView command={c} prompt={p} />;
}
