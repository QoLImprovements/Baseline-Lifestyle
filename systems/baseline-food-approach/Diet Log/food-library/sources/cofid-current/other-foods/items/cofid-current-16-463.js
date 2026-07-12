/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from baked 16-386 using edible conversion factor 0.89",
  "id": "cofid-current-16-463",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bass, sea, flesh only, baked, weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 0.0,
    "energy_kcal": 137.0,
    "fat_g": 6.1,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.24,
    "magnesium_mg": 31.0,
    "omega3_g": 1.1,
    "phosphorus_mg": 206.0,
    "potassium_mg": 347.0,
    "protein_g": 20.6,
    "salt_g": 0.1775,
    "sat_fat_g": 1.31,
    "sodium_mg": 71.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-463",
  "state": "Baked",
  "subcategory": "JA",
  "tags": [
    "baked",
    "ja",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
