/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-submarine",
  "description": "Chicken fillet sandwiches",
  "id": "usda-fndds-2707009",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 322.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 322.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken fillet sandwich, fried, on white bun; with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 184.0,
    "carbs_g": 25.2,
    "energy_kcal": 280.0,
    "fat_g": 13.8,
    "fibre_g": 1.5,
    "folate_ug": 48.0,
    "iron_mg": 1.64,
    "magnesium_mg": 26.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 212.0,
    "potassium_mg": 206.0,
    "protein_g": 13.5,
    "salt_g": 1.42,
    "sat_fat_g": 4.24,
    "sodium_mg": 568.0,
    "sugar_g": 3.09,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 1.52,
    "vitamin_k_ug": 14.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707009",
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
