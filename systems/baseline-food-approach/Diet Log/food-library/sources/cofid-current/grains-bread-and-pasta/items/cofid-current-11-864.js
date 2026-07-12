/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products",
  "id": "cofid-current-11-864",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice, white, long grain, easy cook, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 34.7,
    "energy_kcal": 146.0,
    "fat_g": 0.4,
    "fibre_g": 0.7,
    "folate_ug": 6.0,
    "iron_mg": 0.06,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 18.0,
    "protein_g": 3.0,
    "salt_g": 0.015,
    "sat_fat_g": 0.08,
    "sodium_mg": 6.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-864",
  "state": "Boiled",
  "subcategory": "AC",
  "tags": [
    "ac",
    "boiled",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
