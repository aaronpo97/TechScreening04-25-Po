/**
 * @name
 * The Calculator App
 * @author
 * Aaron William Po
 *
 * @license GPLv3
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

import handleCloseErrorMessage from './events/handleCloseErrorMessage';
import handleFormSubmit from './events/handleFormSubmit';

document.querySelector('#calculator-form').addEventListener('submit', handleFormSubmit);
document.querySelector('#close-error-icon').addEventListener('click', handleCloseErrorMessage);
