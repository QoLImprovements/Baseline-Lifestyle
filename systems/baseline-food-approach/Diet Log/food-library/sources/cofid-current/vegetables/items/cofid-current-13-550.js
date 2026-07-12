/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Calculated from raw using a weight loss of 19.8%",
  "id": "cofid-current-13-550",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Spinach, baby, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 166.0,
    "carbs_g": 0.2,
    "energy_kcal": 20.0,
    "fat_g": 0.7,
    "fibre_g": 1.2,
    "folate_ug": 135.0,
    "iron_mg": 2.63,
    "magnesium_mg": 112.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 950.0,
    "protein_g": 3.2,
    "salt_g": 0.105,
    "sat_fat_g": 0.19,
    "sodium_mg": 42.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 362.0,
    "vitamin_c_mg": 22.0,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-550",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
