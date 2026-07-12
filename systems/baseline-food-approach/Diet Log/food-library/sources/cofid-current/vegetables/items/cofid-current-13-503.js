/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "As raw, boiled for 3-8 minutes, Calabrese",
  "id": "cofid-current-13-503",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Broccoli, green, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 2.8,
    "energy_kcal": 28.0,
    "fat_g": 0.5,
    "fibre_g": 2.8,
    "folate_ug": 34.0,
    "iron_mg": 0.6,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 212.0,
    "protein_g": 3.3,
    "salt_g": 0.015,
    "sat_fat_g": 0.12,
    "sodium_mg": 6.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 100.0,
    "vitamin_c_mg": 44.0,
    "vitamin_e_mg": 1.67,
    "vitamin_k_ug": 135.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-503",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
