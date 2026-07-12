/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cereal bars",
  "id": "usda-fndds-2708112",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-fi-bar-1-oz",
      "kind": "unit",
      "label": "1 Fi-bar (1 oz)"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-ultra-slim-fast-bar-1-oz",
      "kind": "unit",
      "label": "1 Ultra Slim Fast bar (1 oz)"
    }
  ],
  "name": "Cereal or granola bar, high fiber, coated with non-chocolate yogurt coating",
  "nutritionPerBasis": {
    "calcium_mg": 250.0,
    "carbs_g": 69.8,
    "energy_kcal": 389.0,
    "fat_g": 10.0,
    "fibre_g": 22.5,
    "folate_ug": 35.0,
    "iron_mg": 0.9,
    "magnesium_mg": 190.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 419.0,
    "potassium_mg": 447.0,
    "protein_g": 5.0,
    "salt_g": 0.5925,
    "sat_fat_g": 3.4,
    "sodium_mg": 237.0,
    "sugar_g": 25.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 1.47,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708112",
  "state": "Unspecified",
  "subcategory": "Cereal bars",
  "tags": [
    "cereal-bars",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
