/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Calculated from raw spinach",
  "id": "cofid-current-17-417",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Spinach, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1480.0,
    "carbs_g": 13.8,
    "energy_kcal": 211.0,
    "fat_g": 6.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 18.2,
    "magnesium_mg": 470.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 390.0,
    "potassium_mg": 4350.0,
    "protein_g": 24.3,
    "salt_g": 3.05,
    "sat_fat_g": 0.9,
    "sodium_mg": 1220.0,
    "sugar_g": 12.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 14.86,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-417",
  "state": "Dried",
  "subcategory": "DI",
  "tags": [
    "di",
    "dried",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
