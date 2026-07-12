/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "3-oz",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-175149",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Fish, sturgeon, mixed species, smoked",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 173.0,
    "fat_g": 4.4,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 0.93,
    "magnesium_mg": 47.0,
    "omega3_g": 0.206,
    "phosphorus_mg": 281.0,
    "potassium_mg": 379.0,
    "protein_g": 31.2,
    "salt_g": 1.8475,
    "sat_fat_g": 1.04,
    "sodium_mg": 739.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 280.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175149",
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
