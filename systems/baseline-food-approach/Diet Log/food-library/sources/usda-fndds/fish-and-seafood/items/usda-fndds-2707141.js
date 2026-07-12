/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2707141",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Lobster gumbo",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 4.63,
    "energy_kcal": 59.0,
    "fat_g": 1.78,
    "fibre_g": 0.9,
    "folate_ug": 22.0,
    "iron_mg": 0.67,
    "magnesium_mg": 22.0,
    "omega3_g": 0.154,
    "phosphorus_mg": 75.0,
    "potassium_mg": 229.0,
    "protein_g": 6.19,
    "salt_g": 0.72,
    "sat_fat_g": 0.787,
    "sodium_mg": 288.0,
    "sugar_g": 1.78,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 8.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707141",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fish-and-seafood",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
