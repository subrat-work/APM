import { TestBed, async, inject } from '@angular/core/testing';

import { ProductsGuardGuard } from './products-guard.guard';

describe('ProductsGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsGuardGuard]
    });
  });

  it('should ...', inject([ProductsGuardGuard], (guard: ProductsGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
