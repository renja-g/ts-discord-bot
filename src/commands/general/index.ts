import { category } from '../../utils';
import help from './help';
import memberCount from './memberCount';
import move from './move';

export default category('general', [
  help,
  memberCount,
  move
], {'emoji': '📖', 'description': 'General commands.'});
