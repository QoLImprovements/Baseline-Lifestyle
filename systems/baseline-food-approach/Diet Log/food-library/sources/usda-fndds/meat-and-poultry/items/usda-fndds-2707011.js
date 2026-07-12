/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-sandwich-1-slice-bread",
  "description": "Chicken fillet sandwiches",
  "id": "usda-fndds-2707011",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    },
    {
      "gramsPerUnit": 322.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 322.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    }
  ],
  "name": "Chicken fillet sandwich, fried, on wheat bun, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 190.0,
    "carbs_g": 23.6,
    "energy_kcal": 275.0,
    "fat_g": 13.8,
    "fibre_g": 2.7,
    "folate_ug": 41.0,
    "iron_mg": 1.55,
    "magnesium_mg": 38.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 234.0,
    "potassium_mg": 228.0,
    "protein_g": 14.0,
    "salt_g": 1.375,
    "sat_fat_g": 4.2,
    "sodium_mg": 550.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 1.55,
    "vitamin_k_ug": 14.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707011",
  "state": "Fried",
  "subcategory": "Chicken fillet sandwiches",
  "tags": [
    "chicken-fillet-sandwiches",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
