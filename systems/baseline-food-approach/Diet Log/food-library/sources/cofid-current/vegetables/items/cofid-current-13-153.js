/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-13-153",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Artichoke, globe, raw",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 2.7,
    "energy_kcal": 18.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 68.0,
    "iron_mg": 0.7,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 360.0,
    "protein_g": 2.8,
    "salt_g": 0.0675,
    "sat_fat_g": 0.1,
    "sodium_mg": 27.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-153",
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
