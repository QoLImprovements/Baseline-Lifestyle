/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "22 samples, autumn and winter, UK grown and imported, pre-packed and loose",
  "id": "cofid-current-13-510",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cabbage, green, raw",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 4.1,
    "energy_kcal": 27.0,
    "fat_g": 0.2,
    "fibre_g": 4.1,
    "folate_ug": 45.0,
    "iron_mg": 0.52,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 288.0,
    "protein_g": 2.4,
    "salt_g": 0.0175,
    "sat_fat_g": 0.04,
    "sodium_mg": 7.0,
    "sugar_g": 4.1,
    "vitamin_a_ug": 76.0,
    "vitamin_c_mg": 48.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 242.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-510",
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
