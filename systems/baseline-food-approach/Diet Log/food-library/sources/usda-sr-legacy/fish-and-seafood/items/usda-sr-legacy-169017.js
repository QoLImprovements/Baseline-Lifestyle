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
  "id": "usda-sr-legacy-169017",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "APPLEBEE'S, fish, hand battered",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 16.6,
    "energy_kcal": 844.0,
    "fat_g": 9.14,
    "fibre_g": 0.9,
    "folate_ug": 0.0,
    "iron_mg": 0.35,
    "magnesium_mg": 20.0,
    "omega3_g": 0.644,
    "phosphorus_mg": 234.0,
    "potassium_mg": 241.0,
    "protein_g": 13.2,
    "salt_g": 1.5175,
    "sat_fat_g": 1.61,
    "sodium_mg": 607.0,
    "sugar_g": 0.51,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169017",
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
