import { LEVELS } from "./levels.enum";

export class Task {
    name = '';
    description = '';
    complete = false;
    level = LEVELS.NORMAL;

    constructor(name, description, complete, level) {
        this.name = name;
        this.description = description;
        this.complete = complete;
        this.level = level;
    }


}