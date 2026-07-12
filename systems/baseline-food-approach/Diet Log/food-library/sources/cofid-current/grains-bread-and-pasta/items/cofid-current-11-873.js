/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "5 samples, 3 products",
  "id": "cofid-current-11-873",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice, wild, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 31.7,
    "energy_kcal": 145.0,
    "fat_g": 0.6,
    "fibre_g": 2.5,
    "folate_ug": 24.0,
    "iron_mg": 0.54,
    "magnesium_mg": 43.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 141.0,
    "potassium_mg": 102.0,
    "protein_g": 5.3,
    "salt_g": 0.01,
    "sat_fat_g": 0.12,
    "sodium_mg": 4.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-873",
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
