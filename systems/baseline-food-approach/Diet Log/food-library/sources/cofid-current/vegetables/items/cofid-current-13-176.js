/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Based on boiled in salted water",
  "id": "cofid-current-13-176",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Broccoli, purple sprouting, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 1.3,
    "energy_kcal": 19.0,
    "fat_g": 0.6,
    "fibre_g": 0.0,
    "folate_ug": 140.0,
    "iron_mg": 1.0,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 170.0,
    "protein_g": 2.1,
    "salt_g": 0.015,
    "sat_fat_g": 0.1,
    "sodium_mg": 6.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 44.0,
    "vitamin_e_mg": 1.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-176",
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
