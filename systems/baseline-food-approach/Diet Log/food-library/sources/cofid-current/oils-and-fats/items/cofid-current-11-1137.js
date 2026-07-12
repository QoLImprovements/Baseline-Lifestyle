/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Calculated on white sliced bread using analysed fat and water changes",
  "id": "cofid-current-11-1137",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, white, sliced, fried in rapeseed oil",
  "nutritionPerBasis": {
    "calcium_mg": 180.0,
    "carbs_g": 46.8,
    "energy_kcal": 498.0,
    "fat_g": 32.2,
    "fibre_g": 2.5,
    "folate_ug": 13.0,
    "iron_mg": 1.6,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 96.0,
    "potassium_mg": 139.0,
    "protein_g": 8.1,
    "salt_g": 1.015,
    "sat_fat_g": 2.3,
    "sodium_mg": 406.0,
    "sugar_g": 3.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 6.8,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1137",
  "state": "Fried",
  "subcategory": "AF",
  "tags": [
    "af",
    "fried",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
