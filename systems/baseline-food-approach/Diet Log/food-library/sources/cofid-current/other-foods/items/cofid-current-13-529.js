/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "12 samples, 8 brands, no added salt or sugar",
  "id": "cofid-current-13-529",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sweetcorn kernels, canned in water, drained",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 13.9,
    "energy_kcal": 78.0,
    "fat_g": 1.7,
    "fibre_g": 3.1,
    "folate_ug": 45.0,
    "iron_mg": 0.34,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 158.0,
    "protein_g": 2.6,
    "salt_g": 0.0025,
    "sat_fat_g": 0.27,
    "sodium_mg": 1.0,
    "sugar_g": 7.5,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 24.0,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-529",
  "state": "Canned",
  "subcategory": "DG",
  "tags": [
    "canned",
    "dg",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
