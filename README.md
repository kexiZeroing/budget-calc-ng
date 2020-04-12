# BudgetCalcNg

Learn Angular from the video: https://www.youtube.com/watch?v=sU4z4Ti-8OQ

### Keypoints
- Create project: `ng new budget-calc-ng --style=scss --routing=true`
- Sass have two syntaxes: a newer one is SCSS and an older one is the original Sass.
- **Bulma** is a free, open source CSS framework based on Flexbox. `npm i bulma`
- `ng generate component AaBbCc` to create a component `aa-bb-cc`, refer @Component selector to use this component; `ng generate component aa/bb` to create a nested component `bb` in the `aa` folder. 
- `shared/models` are models (structured data) used by all components. Only have one model `budget-item.model.ts` for this project.
- Use porperty binding to pass data **from parent to children**. Use `[xx]` in parent's template and `@Input` in children's ts file.
- Deliver event (with data) from **children to parent**. Use @Output to create `EventEmitter` and emit it (with data) in children component and this event can be received in it's selector tag in the parent's template.
- Use Angular Material (https://material.angular.io/): `ng add @angular/material` to create the modal dialog with a component, and update `app.module.ts` file to import the needed module. 
