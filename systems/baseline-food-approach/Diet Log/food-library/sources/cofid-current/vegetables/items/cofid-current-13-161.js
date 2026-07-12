/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Ends trimmed",
  "id": "cofid-current-13-161",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Aubergine, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 2.2,
    "energy_kcal": 15.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.3,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 210.0,
    "protein_g": 0.9,
    "salt_g": 0.005,
    "sat_fat_g": 0.1,
    "sodium_mg": 2.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 6.1
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-161",
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
