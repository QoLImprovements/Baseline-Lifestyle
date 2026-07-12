/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-snack-size-container",
  "description": "Pudding",
  "id": "usda-fndds-2705685",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-snack-size-container",
      "kind": "unit",
      "label": "1 snack size container"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pudding, rice",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 18.4,
    "energy_kcal": 108.0,
    "fat_g": 2.15,
    "fibre_g": 0.3,
    "folate_ug": 4.0,
    "iron_mg": 0.11,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 125.0,
    "protein_g": 3.23,
    "salt_g": 0.2425,
    "sat_fat_g": 1.21,
    "sodium_mg": 97.0,
    "sugar_g": 11.6,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705685",
  "state": "Unspecified",
  "subcategory": "Pudding",
  "tags": [
    "pudding",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
