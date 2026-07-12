/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Seeds from a species of goosefoot",
  "id": "cofid-current-14-843",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Quinoa, raw",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 55.7,
    "energy_kcal": 309.0,
    "fat_g": 5.0,
    "fibre_g": 7.0,
    "folate_ug": 0.0,
    "iron_mg": 7.8,
    "magnesium_mg": 210.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 780.0,
    "protein_g": 13.8,
    "salt_g": 0.1525,
    "sat_fat_g": 0.5,
    "sodium_mg": 61.0,
    "sugar_g": 6.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-843",
  "state": "Raw",
  "subcategory": "GA",
  "tags": [
    "ga",
    "grains-bread-and-pasta",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
