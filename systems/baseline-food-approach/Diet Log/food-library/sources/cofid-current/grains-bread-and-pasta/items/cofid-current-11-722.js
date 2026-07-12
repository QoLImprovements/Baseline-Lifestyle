/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products",
  "id": "cofid-current-11-722",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta, white, spaghetti, dried, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 31.5,
    "energy_kcal": 141.0,
    "fat_g": 0.6,
    "fibre_g": 1.7,
    "folate_ug": 8.0,
    "iron_mg": 0.63,
    "magnesium_mg": 21.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 66.0,
    "potassium_mg": 41.0,
    "protein_g": 4.4,
    "salt_g": 0.0075,
    "sat_fat_g": 0.09,
    "sodium_mg": 3.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.05
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-722",
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
