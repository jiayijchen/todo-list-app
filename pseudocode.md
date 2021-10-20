## Components

### Hierarchy
App (Page)
 +- List (Organism)
 |   +- ListItems (Molecule)
 |   +- ...
 |   +- MenuFilter (Organism)


### Summary
App
- Model
    - State
        - todo items list
        - filter selection

- View
    - Header (title)
    - InputBar
        - takes in input and adds item to todo list
    - List (class)
        - takes in item lists and filter selection
        - loops through item lists and creates {ListItems}
            - sets state based on values from list object
        - Menu Filter
            - has buttons that filter list of items
            - button click changes filter value
### List Items
Contains list of items

### 