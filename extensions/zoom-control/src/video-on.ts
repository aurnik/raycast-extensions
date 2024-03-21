import { showHUD } from "@raycast/api";
import { zoomExecuteMenu } from "./zoom-meeting";

export default async function main() {
  const res = await zoomExecuteMenu("Start Video");
  if (res != null) {
    showHUD(`Zoom meeting video ${res ? "started" : "already has video"} 🎥`);
  }
}
