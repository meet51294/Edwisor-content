import { SlotManagementModule } from './slot-management.module';

describe('SlotManagementModule', () => {
  let slotManagementModule: SlotManagementModule;

  beforeEach(() => {
    slotManagementModule = new SlotManagementModule();
  });

  it('should create an instance', () => {
    expect(slotManagementModule).toBeTruthy();
  });
});
