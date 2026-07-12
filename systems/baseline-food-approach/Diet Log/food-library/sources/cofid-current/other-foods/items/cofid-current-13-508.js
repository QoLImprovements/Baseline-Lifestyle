/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "16 samples, autumn and winter, UK grown and imported",
  "id": "cofid-current-13-508",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sweetcorn, kernels, boiled 'on the cob' in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 9.5,
    "energy_kcal": 67.0,
    "fat_g": 1.9,
    "fibre_g": 5.1,
    "folate_ug": 24.0,
    "iron_mg": 0.65,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 333.0,
    "protein_g": 3.6,
    "salt_g": 0.0,
    "sat_fat_g": 0.25,
    "sodium_mg": 0.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.37
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-508",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
