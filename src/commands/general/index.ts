import { category } from '../../utils';
import help from './help';
import membercount from './membercount';

export default category('general', [
  help,
  membercount
], {'emoji': '📖', 'description': 'General commands.'});
