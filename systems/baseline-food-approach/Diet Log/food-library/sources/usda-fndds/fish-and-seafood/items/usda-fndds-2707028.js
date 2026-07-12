/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-sandwich-1-slice-bread",
  "description": "Seafood sandwiches",
  "id": "usda-fndds-2707028",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 302.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 302.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    }
  ],
  "name": "Fish sandwich, fried, on white bun, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 187.0,
    "carbs_g": 22.9,
    "energy_kcal": 252.0,
    "fat_g": 11.0,
    "fibre_g": 0.8,
    "folate_ug": 50.0,
    "iron_mg": 1.69,
    "magnesium_mg": 25.0,
    "omega3_g": 0.073,
    "phosphorus_mg": 240.0,
    "potassium_mg": 219.0,
    "protein_g": 15.3,
    "salt_g": 1.2175,
    "sat_fat_g": 4.35,
    "sodium_mg": 487.0,
    "sugar_g": 3.08,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 10.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707028",
  "state": "Fried",
  "subcategory": "Seafood sandwiches",
  "tags": [
    "fish-and-seafood",
    "fried",
    "seafood-sandwiches"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
