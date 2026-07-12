/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 16-438 using edible conversion factor of 0.63",
  "id": "cofid-current-16-488",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sardines, flesh only, grilled, weighed with skin and bones",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 0.0,
    "energy_kcal": 108.0,
    "fat_g": 4.9,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.25,
    "magnesium_mg": 25.0,
    "omega3_g": 1.06,
    "phosphorus_mg": 207.0,
    "potassium_mg": 312.0,
    "protein_g": 16.0,
    "salt_g": 0.275,
    "sat_fat_g": 1.48,
    "sodium_mg": 110.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-488",
  "state": "Grilled",
  "subcategory": "JC",
  "tags": [
    "grilled",
    "jc",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
