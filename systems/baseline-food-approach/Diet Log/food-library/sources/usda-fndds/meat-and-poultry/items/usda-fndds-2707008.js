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
  "id": "usda-fndds-2707008",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    }
  ],
  "name": "Chicken fillet sandwich, fried, on white bun",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 28.1,
    "energy_kcal": 269.0,
    "fat_g": 11.7,
    "fibre_g": 1.7,
    "folate_ug": 53.0,
    "iron_mg": 1.82,
    "magnesium_mg": 26.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 158.0,
    "potassium_mg": 214.0,
    "protein_g": 12.4,
    "salt_g": 1.2575,
    "sat_fat_g": 2.46,
    "sodium_mg": 503.0,
    "sugar_g": 3.14,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 1.64,
    "vitamin_k_ug": 15.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707008",
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
