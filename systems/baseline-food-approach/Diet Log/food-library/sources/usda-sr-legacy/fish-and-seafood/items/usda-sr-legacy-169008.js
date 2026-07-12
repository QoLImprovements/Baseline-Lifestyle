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
  "id": "usda-sr-legacy-169008",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 206.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "APPLEBEE'S, Double Crunch Shrimp",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 26.0,
    "energy_kcal": 1350.0,
    "fat_g": 18.9,
    "fibre_g": 2.6,
    "folate_ug": 14.0,
    "iron_mg": 1.03,
    "magnesium_mg": 23.0,
    "omega3_g": 1.045,
    "phosphorus_mg": 271.0,
    "potassium_mg": 97.0,
    "protein_g": 12.3,
    "salt_g": 2.095,
    "sat_fat_g": 3.37,
    "sodium_mg": 838.0,
    "sugar_g": 1.07,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.97,
    "vitamin_k_ug": 29.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169008",
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
