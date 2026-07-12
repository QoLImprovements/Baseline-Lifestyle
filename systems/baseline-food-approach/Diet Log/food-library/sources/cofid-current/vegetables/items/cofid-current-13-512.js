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
  "id": "cofid-current-13-512",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cauliflower, raw",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 4.4,
    "energy_kcal": 30.0,
    "fat_g": 0.4,
    "fibre_g": 1.8,
    "folate_ug": 55.0,
    "iron_mg": 0.42,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 252.0,
    "protein_g": 2.5,
    "salt_g": 0.0175,
    "sat_fat_g": 0.09,
    "sodium_mg": 7.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 56.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 31.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-512",
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
