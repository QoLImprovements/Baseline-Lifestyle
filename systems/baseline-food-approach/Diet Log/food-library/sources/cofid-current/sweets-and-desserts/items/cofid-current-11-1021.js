/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 assorted samples of the same brand",
  "id": "cofid-current-11-1021",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pudding, sponge, canned",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 45.4,
    "energy_kcal": 265.0,
    "fat_g": 9.1,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.2,
    "magnesium_mg": 13.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 170.0,
    "potassium_mg": 160.0,
    "protein_g": 3.1,
    "salt_g": 0.85,
    "sat_fat_g": 4.98,
    "sodium_mg": 340.0,
    "sugar_g": 25.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1021",
  "state": "Canned",
  "subcategory": "AS",
  "tags": [
    "as",
    "canned",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
