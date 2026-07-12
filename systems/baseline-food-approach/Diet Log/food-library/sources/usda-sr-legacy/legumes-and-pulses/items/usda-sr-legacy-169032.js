/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169032",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "ON THE BORDER, refried beans",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 17.5,
    "energy_kcal": 144.0,
    "fat_g": 5.0,
    "fibre_g": 8.2,
    "folate_ug": 36.0,
    "iron_mg": 1.67,
    "magnesium_mg": 47.0,
    "omega3_g": 0.227,
    "phosphorus_mg": 137.0,
    "potassium_mg": 423.0,
    "protein_g": 7.3,
    "salt_g": 0.945,
    "sat_fat_g": 1.82,
    "sodium_mg": 378.0,
    "sugar_g": 0.84,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169032",
  "state": "Fried",
  "subcategory": "Restaurant Foods",
  "tags": [
    "fried",
    "legumes-and-pulses",
    "restaurant-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
