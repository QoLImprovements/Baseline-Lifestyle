/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "piece",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-171961",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Fish, gefiltefish, commercial, sweet recipe",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 7.41,
    "energy_kcal": 351.0,
    "fat_g": 1.73,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 2.48,
    "magnesium_mg": 9.0,
    "omega3_g": 0.147,
    "phosphorus_mg": 73.0,
    "potassium_mg": 91.0,
    "protein_g": 9.07,
    "salt_g": 1.31,
    "sat_fat_g": 0.412,
    "sodium_mg": 524.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171961",
  "state": "Unspecified",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
