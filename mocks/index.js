/*
 * index.js
 *
 * Copyright (c) 2017 Artsiom Staratsitarau
 *
 * This file is a part of PersonalFinanceAssistant.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import accountsMocks from './api/endpoints/accounts';
import authorizationMocks from './api/endpoints/authorization';
import categoriesMocks from './api/endpoints/categories';
import transfersMocks from './api/endpoints/transfers';
import transactionsMocks from './api/endpoints/transactions';
import fixerMocks from './third-party/fixer';

export default {
  ...accountsMocks,
  ...authorizationMocks,
  ...categoriesMocks,
  ...transfersMocks,
  ...transactionsMocks,
  ...fixerMocks
};
