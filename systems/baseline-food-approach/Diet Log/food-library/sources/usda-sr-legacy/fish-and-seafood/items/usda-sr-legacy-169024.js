/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169024",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 201.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "DENNY'S, fish fillet, battered or breaded, fried",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 17.4,
    "energy_kcal": 234.0,
    "fat_g": 12.2,
    "fibre_g": 1.0,
    "folate_ug": 17.0,
    "iron_mg": 0.41,
    "magnesium_mg": 25.0,
    "omega3_g": 0.802,
    "phosphorus_mg": 181.0,
    "potassium_mg": 261.0,
    "protein_g": 13.8,
    "salt_g": 1.29,
    "sat_fat_g": 2.14,
    "sodium_mg": 516.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169024",
  "state": "Fried",
  "subcategory": "Restaurant Foods",
  "tags": [
    "fish-and-seafood",
    "fried",
    "restaurant-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
