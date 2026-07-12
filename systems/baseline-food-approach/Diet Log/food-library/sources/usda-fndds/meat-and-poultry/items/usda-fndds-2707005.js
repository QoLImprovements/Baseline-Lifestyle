/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Chicken fillet sandwiches",
  "id": "usda-fndds-2707005",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    }
  ],
  "name": "Chicken fillet sandwich, grilled, from fast food",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 19.4,
    "energy_kcal": 226.0,
    "fat_g": 6.18,
    "fibre_g": 0.7,
    "folate_ug": 41.0,
    "iron_mg": 1.59,
    "magnesium_mg": 25.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 173.0,
    "potassium_mg": 258.0,
    "protein_g": 21.5,
    "salt_g": 1.075,
    "sat_fat_g": 1.39,
    "sodium_mg": 430.0,
    "sugar_g": 2.82,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707005",
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
