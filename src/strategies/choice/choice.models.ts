export class Choice {
  readonly label: string;
  readonly description?: string | string[];
  private _level: number = 0;
  private _isSelected: boolean = false;
  private _callbacks: any[] = [];
  private _nextChoices: Choice[];

  public get isLeaf() {
    return this._nextChoices.length === 0;
  }

  public get level() {
    return this._level;
  }

  public get image() {
    return this._imagename
      ? `/strathelper/stratimages/${this._imagename}.png`
      : undefined;
  }

  public get nextChoices() {
    return [...this._nextChoices];
  }

  public get checkboxes() {
    return [...this._checkboxes];
  }

  public get isSelected() {
    return this._isSelected;
  }
  private set isSelected(newValue: boolean) {
    this._isSelected = newValue;
    this._callbacks.forEach((c) => c(newValue));
  }

  private parent?: Choice;

  constructor(
    public readonly id: string,
    label: string,
    description: string,
    private _checkboxes: string[] = [],
    private _imagename: string = ''
  ) {
    this.label = label;
    this.description = description;
    this._nextChoices = [];
  }

  onStateChange(callback: (newState: boolean) => void): () => void {
    this._callbacks.push(callback);

    return () => {
      this._callbacks = this._callbacks.filter((c) => c != callback);
    };
  }

  getParent() {
    return this.parent;
  }

  setParent(choice: Choice) {
    this.parent = choice;
  }

  addNextChoice(choice: Choice) {
    this.adjustLevels(choice);

    choice.setParent(this);
    this._nextChoices.push(choice);
    return this;
  }

  select() {
    this.isSelected = true;
    this.parent?.escalateChangeUpwards(this.id);
    this._nextChoices.forEach((c) => c.escalateChangeDownwards());
  }

  private escalateChangeUpwards(id: string) {
    this._isSelected = true;

    if (this.parent) {
      this.parent?.escalateChangeUpwards(this.id);
    }

    this._nextChoices.forEach((c) => {
      if (c.id !== id) {
        c.escalateChangeDownwards();
      }
    });
  }

  private escalateChangeDownwards() {
    this.isSelected = false;

    this._nextChoices.forEach((c) => c.escalateChangeDownwards());
  }

  private adjustLevels(choice: Choice) {
    choice._level++;
    choice._nextChoices.forEach((c) => {
      this.adjustLevels(c);
    });
  }
}
