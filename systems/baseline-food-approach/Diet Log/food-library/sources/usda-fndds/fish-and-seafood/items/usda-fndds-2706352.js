/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Shellfish",
  "id": "usda-fndds-2706352",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-oyster",
      "kind": "unit",
      "label": "1 oyster"
    }
  ],
  "name": "Oysters, baked or broiled",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 3.39,
    "energy_kcal": 104.0,
    "fat_g": 6.66,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 5.73,
    "magnesium_mg": 22.0,
    "omega3_g": 0.402,
    "phosphorus_mg": 121.0,
    "potassium_mg": 194.0,
    "protein_g": 7.11,
    "salt_g": 0.8025,
    "sat_fat_g": 1.78,
    "sodium_mg": 321.0,
    "sugar_g": 0.78,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.73,
    "vitamin_k_ug": 5.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706352",
  "state": "Baked",
  "subcategory": "Shellfish",
  "tags": [
    "baked",
    "fish-and-seafood",
    "shellfish"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
