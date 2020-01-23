/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { inMemoryPersistence } from '../../../src/core/persistence/in_memory';
import { Persistence } from '../../../src/core/persistence';
import { expect } from 'chai';

describe('InMemoryPersistence', () => {
  it('should work', async () => {
    const persistence: Persistence = inMemoryPersistence;
    const key = 'my-super-special-key';
    const value = 'my-super-special-value';
    expect(await persistence.get(key)).to.be.null;
    await persistence.set(key, value);
    expect(await persistence.get(key)).to.be.eq(value);
    expect(await persistence.get('other-key')).to.be.null;
    await persistence.remove(key);
    expect(await persistence.get(key)).to.be.null;
  });
});