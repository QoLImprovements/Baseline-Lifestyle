/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-miniature-slider",
  "description": "Chicken fillet sandwiches",
  "id": "usda-fndds-2707012",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 70.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    }
  ],
  "name": "Chicken fillet sandwich, grilled, on white bun",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 19.7,
    "energy_kcal": 216.0,
    "fat_g": 4.84,
    "fibre_g": 0.7,
    "folate_ug": 41.0,
    "iron_mg": 1.62,
    "magnesium_mg": 26.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 176.0,
    "potassium_mg": 262.0,
    "protein_g": 21.8,
    "salt_g": 1.02,
    "sat_fat_g": 0.943,
    "sodium_mg": 408.0,
    "sugar_g": 2.86,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707012",
  "state": "Grilled",
  "subcategory": "Chicken fillet sandwiches",
  "tags": [
    "chicken-fillet-sandwiches",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
