/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-package-2-pop-tarts",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708078",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "1-package-2-pop-tarts",
      "kind": "unit",
      "label": "1 package (2 Pop Tarts)"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "1-pop-tart",
      "kind": "unit",
      "label": "1 Pop Tart"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "1-tart",
      "kind": "unit",
      "label": "1 tart"
    }
  ],
  "name": "Breakfast tart, lowfat",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 76.8,
    "energy_kcal": 372.0,
    "fat_g": 5.99,
    "fibre_g": 1.5,
    "folate_ug": 100.0,
    "iron_mg": 3.42,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 66.0,
    "protein_g": 3.99,
    "salt_g": 0.9025,
    "sat_fat_g": 1.39,
    "sodium_mg": 361.0,
    "sugar_g": 4.87,
    "vitamin_a_ug": 285.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708078",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
