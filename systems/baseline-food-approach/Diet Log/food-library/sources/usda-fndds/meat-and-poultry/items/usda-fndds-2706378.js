/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706378",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Sloppy joe, no bun",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 5.48,
    "energy_kcal": 140.0,
    "fat_g": 7.63,
    "fibre_g": 0.7,
    "folate_ug": 10.0,
    "iron_mg": 1.66,
    "magnesium_mg": 17.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 101.0,
    "potassium_mg": 284.0,
    "protein_g": 12.1,
    "salt_g": 0.74,
    "sat_fat_g": 2.91,
    "sodium_mg": 296.0,
    "sugar_g": 3.81,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 8.1,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706378",
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
