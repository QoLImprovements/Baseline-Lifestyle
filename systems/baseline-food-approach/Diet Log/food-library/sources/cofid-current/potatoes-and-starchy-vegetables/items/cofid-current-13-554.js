/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe. 100g boiled potatoes, 5g butter, 7g milk",
  "id": "cofid-current-13-554",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potatoes, old, mashed with reduced fat spread",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 15.9,
    "energy_kcal": 93.0,
    "fat_g": 2.8,
    "fibre_g": 1.4,
    "folate_ug": 17.0,
    "iron_mg": 0.31,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 337.0,
    "protein_g": 1.8,
    "salt_g": 0.075,
    "sat_fat_g": 0.68,
    "sodium_mg": 30.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 1.19,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-554",
  "state": "Mashed",
  "subcategory": "DAM",
  "tags": [
    "dam",
    "mashed",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
