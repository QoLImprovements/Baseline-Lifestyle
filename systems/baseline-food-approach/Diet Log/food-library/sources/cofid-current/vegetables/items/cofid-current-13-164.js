/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Top and root trimmed, peeled",
  "id": "cofid-current-13-164",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beetroot, raw",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 7.6,
    "energy_kcal": 36.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 150.0,
    "iron_mg": 1.0,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 51.0,
    "potassium_mg": 380.0,
    "protein_g": 1.7,
    "salt_g": 0.165,
    "sat_fat_g": 0.0,
    "sodium_mg": 66.0,
    "sugar_g": 7.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-164",
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
