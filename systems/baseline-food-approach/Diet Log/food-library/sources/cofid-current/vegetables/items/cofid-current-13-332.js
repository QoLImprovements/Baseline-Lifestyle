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
  "id": "cofid-current-13-332",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Radish leaves, raw",
  "nutritionPerBasis": {
    "calcium_mg": 200.0,
    "carbs_g": 3.5,
    "energy_kcal": 33.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 3.8,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 370.0,
    "protein_g": 3.5,
    "salt_g": 0.275,
    "sat_fat_g": 0.0,
    "sodium_mg": 110.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 612.0,
    "vitamin_c_mg": 63.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-332",
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
