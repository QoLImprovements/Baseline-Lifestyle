/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "22 samples, autumn and winter, UK grown and imported",
  "id": "cofid-current-13-523",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cucumber, raw, flesh and skin",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 1.2,
    "energy_kcal": 14.0,
    "fat_g": 0.6,
    "fibre_g": 0.7,
    "folate_ug": 14.0,
    "iron_mg": 0.3,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 156.0,
    "protein_g": 1.0,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 20.9
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-523",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
