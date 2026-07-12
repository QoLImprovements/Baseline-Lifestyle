/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "order",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-168080",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 601.0,
      "key": "order",
      "kind": "unit",
      "label": "order"
    }
  ],
  "name": "Restaurant, Chinese, shrimp and vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 4.52,
    "energy_kcal": 327.0,
    "fat_g": 4.05,
    "fibre_g": 1.4,
    "folate_ug": 0.0,
    "iron_mg": 0.72,
    "magnesium_mg": 16.0,
    "omega3_g": 0.297,
    "phosphorus_mg": 74.0,
    "potassium_mg": 192.0,
    "protein_g": 5.9,
    "salt_g": 0.9375,
    "sat_fat_g": 0.633,
    "sodium_mg": 375.0,
    "sugar_g": 2.16,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 11.3,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 52.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168080",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "fish-and-seafood",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
