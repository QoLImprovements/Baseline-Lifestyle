/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Tough stems and coarse leaves removed",
  "id": "cofid-current-13-174",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Broccoli, purple sprouting, raw",
  "nutritionPerBasis": {
    "calcium_mg": 200.0,
    "carbs_g": 2.6,
    "energy_kcal": 35.0,
    "fat_g": 1.1,
    "fibre_g": 0.0,
    "folate_ug": 195.0,
    "iron_mg": 1.9,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 380.0,
    "protein_g": 3.9,
    "salt_g": 0.025,
    "sat_fat_g": 0.2,
    "sodium_mg": 10.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 114.0,
    "vitamin_c_mg": 110.0,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-174",
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
