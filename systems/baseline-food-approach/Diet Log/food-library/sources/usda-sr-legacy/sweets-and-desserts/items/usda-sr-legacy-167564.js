/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-6-pieces",
  "description": "Sweets",
  "id": "usda-sr-legacy-167564",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "serving-6-pieces",
      "kind": "unit",
      "label": "serving 6 pieces"
    }
  ],
  "name": "Candies, NESTLE, BIT-O'-HONEY Candy Chews",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 80.9,
    "energy_kcal": 388.0,
    "fat_g": 7.5,
    "fibre_g": 0.2,
    "folate_ug": 2.0,
    "iron_mg": 0.2,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 44.0,
    "protein_g": 2.0,
    "salt_g": 0.7375,
    "sat_fat_g": 5.5,
    "sodium_mg": 295.0,
    "sugar_g": 48.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167564",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
