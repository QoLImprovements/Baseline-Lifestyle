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
  "id": "usda-fndds-2707010",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    }
  ],
  "name": "Chicken fillet sandwich, fried, on wheat bun",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 26.3,
    "energy_kcal": 263.0,
    "fat_g": 11.7,
    "fibre_g": 3.1,
    "folate_ug": 44.0,
    "iron_mg": 1.71,
    "magnesium_mg": 39.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 183.0,
    "potassium_mg": 240.0,
    "protein_g": 13.1,
    "salt_g": 1.205,
    "sat_fat_g": 2.41,
    "sodium_mg": 482.0,
    "sugar_g": 2.34,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 1.67,
    "vitamin_k_ug": 15.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707010",
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
