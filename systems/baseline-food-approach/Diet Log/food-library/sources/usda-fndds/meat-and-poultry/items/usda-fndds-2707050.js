/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-miniature-slider",
  "description": "Deli and cured meat sandwiches",
  "id": "usda-fndds-2707050",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-regular-or-6-submarine",
      "kind": "unit",
      "label": "1 regular or 6\" submarine"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Italian sandwich on white",
  "nutritionPerBasis": {
    "calcium_mg": 199.0,
    "carbs_g": 18.9,
    "energy_kcal": 309.0,
    "fat_g": 18.8,
    "fibre_g": 0.8,
    "folate_ug": 43.0,
    "iron_mg": 1.83,
    "magnesium_mg": 23.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 219.0,
    "potassium_mg": 242.0,
    "protein_g": 15.7,
    "salt_g": 2.525,
    "sat_fat_g": 7.51,
    "sodium_mg": 1010.0,
    "sugar_g": 2.34,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707050",
  "state": "Unspecified",
  "subcategory": "Deli and cured meat sandwiches",
  "tags": [
    "deli-and-cured-meat-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
