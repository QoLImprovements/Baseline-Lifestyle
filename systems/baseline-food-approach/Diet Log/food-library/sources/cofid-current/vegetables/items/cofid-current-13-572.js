/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Ribs and stems removed",
  "id": "cofid-current-13-572",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Spinach, mature, raw",
  "nutritionPerBasis": {
    "calcium_mg": 170.0,
    "carbs_g": 1.6,
    "energy_kcal": 25.0,
    "fat_g": 0.8,
    "fibre_g": 0.0,
    "folate_ug": 114.0,
    "iron_mg": 2.1,
    "magnesium_mg": 54.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 500.0,
    "protein_g": 2.8,
    "salt_g": 0.35,
    "sat_fat_g": 0.1,
    "sodium_mg": 140.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 589.0,
    "vitamin_c_mg": 26.0,
    "vitamin_e_mg": 1.71,
    "vitamin_k_ug": 394.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-572",
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
