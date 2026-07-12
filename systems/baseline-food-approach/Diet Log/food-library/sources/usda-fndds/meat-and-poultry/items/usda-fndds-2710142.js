/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2710142",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 234.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-stuffed-cabbage-leaf-2-x-3-x-1",
      "kind": "unit",
      "label": "1 stuffed cabbage leaf (2\" x 3\" x 1\")"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Stuffed cabbage, with meat, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 8.41,
    "energy_kcal": 207.0,
    "fat_g": 15.1,
    "fibre_g": 2.3,
    "folate_ug": 25.0,
    "iron_mg": 1.19,
    "magnesium_mg": 25.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 115.0,
    "potassium_mg": 412.0,
    "protein_g": 9.56,
    "salt_g": 1.8075,
    "sat_fat_g": 3.74,
    "sodium_mg": 723.0,
    "sugar_g": 4.58,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 27.5,
    "vitamin_e_mg": 2.29,
    "vitamin_k_ug": 35.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710142",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
