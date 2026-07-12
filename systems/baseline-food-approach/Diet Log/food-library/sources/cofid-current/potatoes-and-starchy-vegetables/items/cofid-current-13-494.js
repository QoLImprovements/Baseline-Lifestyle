/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "11 samples, including white and red varieties, pre-packed and loose",
  "id": "cofid-current-13-494",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potatoes, old, microwaved, flesh and skin",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 21.5,
    "energy_kcal": 92.0,
    "fat_g": 0.1,
    "fibre_g": 2.7,
    "folate_ug": 33.0,
    "iron_mg": 0.75,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 585.0,
    "protein_g": 2.6,
    "salt_g": 0.005,
    "sat_fat_g": 0.03,
    "sodium_mg": 2.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-494",
  "state": "Unspecified",
  "subcategory": "DAM",
  "tags": [
    "dam",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
