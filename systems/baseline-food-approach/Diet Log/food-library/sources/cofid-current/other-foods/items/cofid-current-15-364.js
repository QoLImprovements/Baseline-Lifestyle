/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples from different outlets",
  "id": "cofid-current-15-364",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vegetables, stir-fried, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 2.1,
    "energy_kcal": 52.0,
    "fat_g": 4.1,
    "fibre_g": 2.1,
    "folate_ug": 3.0,
    "iron_mg": 0.96,
    "magnesium_mg": 9.0,
    "omega3_g": 0.23,
    "phosphorus_mg": 32.0,
    "potassium_mg": 119.0,
    "protein_g": 1.8,
    "salt_g": 0.9975,
    "sat_fat_g": 0.77,
    "sodium_mg": 399.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 96.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.26,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-364",
  "state": "Fried",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fried",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
