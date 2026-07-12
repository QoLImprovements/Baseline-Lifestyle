/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples, 8 products",
  "id": "cofid-current-11-720",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta, white, twists, fusilli, dried, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 32.9,
    "energy_kcal": 146.0,
    "fat_g": 0.4,
    "fibre_g": 2.6,
    "folate_ug": 5.0,
    "iron_mg": 0.71,
    "magnesium_mg": 22.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 77.0,
    "potassium_mg": 40.0,
    "protein_g": 4.8,
    "salt_g": 0.0125,
    "sat_fat_g": 0.06,
    "sodium_mg": 5.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-720",
  "state": "Boiled",
  "subcategory": "AD",
  "tags": [
    "ad",
    "boiled",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
