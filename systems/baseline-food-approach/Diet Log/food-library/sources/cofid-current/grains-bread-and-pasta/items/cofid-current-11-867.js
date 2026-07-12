/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "6 samples, 5 products",
  "id": "cofid-current-11-867",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice, brown, basmati, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 28.7,
    "energy_kcal": 131.0,
    "fat_g": 1.1,
    "fibre_g": 1.2,
    "folate_ug": 5.0,
    "iron_mg": 1.12,
    "magnesium_mg": 44.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 114.0,
    "potassium_mg": 84.0,
    "protein_g": 3.3,
    "salt_g": 0.0,
    "sat_fat_g": 0.21,
    "sodium_mg": 0.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-867",
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
