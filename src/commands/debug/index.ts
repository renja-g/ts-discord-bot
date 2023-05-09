import { category } from "../../utils";
import ping from "./ping";

export default category("debug", [
  ping
], {'emoji': '⚠️', 'description': 'Debug commands.'});