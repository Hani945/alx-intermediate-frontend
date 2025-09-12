/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// 1. Create row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// 2. Insert row and get ID
const newRowID: RowID = CRUD.insertRow(row);

// 3. Update row with age
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// 4. Delete row
CRUD.deleteRow(newRowID);
