/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Peeled thickly, seeds removed",
  "id": "cofid-current-13-326",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pumpkin, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 2.2,
    "energy_kcal": 13.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.4,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 130.0,
    "protein_g": 0.7,
    "salt_g": 0.0,
    "sat_fat_g": 0.1,
    "sodium_mg": 0.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 14.0,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-326",
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
