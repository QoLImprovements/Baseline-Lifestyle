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
  "id": "usda-sr-legacy-168074",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "CRACKER BARREL, country fried shrimp platter",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 21.4,
    "energy_kcal": 1200.0,
    "fat_g": 16.8,
    "fibre_g": 0.3,
    "folate_ug": 0.0,
    "iron_mg": 1.53,
    "magnesium_mg": 19.0,
    "omega3_g": 1.028,
    "phosphorus_mg": 210.0,
    "potassium_mg": 86.0,
    "protein_g": 12.6,
    "salt_g": 2.625,
    "sat_fat_g": 3.06,
    "sodium_mg": 1050.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.88,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168074",
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
