/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Burritos and tacos",
  "id": "usda-fndds-2708531",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-small-regular",
      "kind": "unit",
      "label": "1 small/regular"
    }
  ],
  "name": "Taco, meat, with beans, no cheese",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 20.0,
    "energy_kcal": 205.0,
    "fat_g": 9.68,
    "fibre_g": 3.4,
    "folate_ug": 12.0,
    "iron_mg": 1.5,
    "magnesium_mg": 41.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 191.0,
    "potassium_mg": 238.0,
    "protein_g": 10.1,
    "salt_g": 0.955,
    "sat_fat_g": 2.47,
    "sodium_mg": 382.0,
    "sugar_g": 0.48,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708531",
  "state": "Unspecified",
  "subcategory": "Burritos and tacos",
  "tags": [
    "burritos-and-tacos",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
