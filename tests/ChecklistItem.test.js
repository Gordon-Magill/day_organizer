// Tests for the ChecklistItem class
const ChecklistItem = require("../lib/ChecklistItem");

describe("ChecklistItem", () => {
  describe("Initialize", () => {
    it("Should initialize with default parameters with no {options} input", () => {
      const checklistItem = new ChecklistItem();

      expect(checklistItem).toBeInstanceOf(ChecklistItem);
    });

    it("Should initialize with a full set of options", () => {
      // Full set of options
      const parentItem = new ChecklistItem();
      const childItem = new ChecklistItem();

      const checklistItem = new ChecklistItem({
        state: true,
        title: "Test title",
        description: "Test description",
        parent: parentItem,
        children: [childItem],
      });

      expect(checklistItem.getState()).toBe(true);
      expect(checklistItem.getTitle()).toEqual("Test title");
      expect(checklistItem.getDescription()).toBe("Test description");
      expect(checklistItem.getParent()).toEqual(parentItem);
      expect(checklistItem.getChildren()).toEqual([childItem]);

      // Partial set of options
    });

    it("Should initialize with a partial set of options", () => {
      const parent = new ChecklistItem();
      const child = new ChecklistItem();

      const partialChecklistItemState = new ChecklistItem({
        state: true,
      });

      const partialChecklistItemTitle = new ChecklistItem({
        title: "Test title",
      });

      const partialChecklistItemDesc = new ChecklistItem({
        description: "Test description",
      });

      const partialChecklistItemParent = new ChecklistItem({
        parent,
      });

      const partialChecklistItemChildren = new ChecklistItem({
        children: [child],
      });

      expect(partialChecklistItemState.getState()).toEqual(true);

      expect(partialChecklistItemTitle.getTitle()).toEqual("Test title");

      expect(partialChecklistItemDesc.getDescription()).toEqual(
        "Test description"
      );

      expect(partialChecklistItemParent.getParent()).toEqual(parent);

      expect(partialChecklistItemChildren.getChildren()).toEqual([child]);
    });
  });

  describe("Getters and setters", () => {
    it("Should use getters to get attributes", () => {
      const item = new ChecklistItem();
      expect(item.getTitle()).toEqual(null);
      expect(item.getDescription()).toEqual(null);
      expect(item.getState()).toEqual(false);
      expect(item.getParent()).toEqual(null);
      expect(item.getChildren()).toEqual([]);
      expect(typeof item.getID()).toBe("string")
      expect(typeof item.getLastModifiedDate()).toBe("string")
    });

    it("Should use setters to set attributes", () => {
      const item = new ChecklistItem();
      const child = new ChecklistItem();
      const child2 = new ChecklistItem();
      const parent = new ChecklistItem();

      item.setTitle("Test title");
      item.setDescription("Test description");
      item.setChildren([child]);
      item.addChild(child2);
      item.setState(true);
      item.setParent(parent)

      expect(item.getTitle()).toEqual("Test title");
      expect(item.getDescription()).toEqual("Test description");
      expect(item.getState()).toEqual(true);
      expect(item.getParent()).toEqual(parent);
      expect(item.getChildren()).toEqual([child, child2]);
    });
  });
});
