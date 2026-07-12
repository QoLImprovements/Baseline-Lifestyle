/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Beans, peas, legumes",
  "id": "usda-fndds-2707398",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
  "name": "Refried beans with meat",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 11.8,
    "energy_kcal": 99.0,
    "fat_g": 2.51,
    "fibre_g": 3.2,
    "folate_ug": 10.0,
    "iron_mg": 1.5,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 114.0,
    "potassium_mg": 319.0,
    "protein_g": 7.81,
    "salt_g": 1.015,
    "sat_fat_g": 0.838,
    "sodium_mg": 406.0,
    "sugar_g": 0.57,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 4.9,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707398",
  "state": "Fried",
  "subcategory": "Beans, peas, legumes",
  "tags": [
    "beans-peas-legumes",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
