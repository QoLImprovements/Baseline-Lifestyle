/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "As raw, boiled for 4-8 minutes",
  "id": "cofid-current-13-513",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cauliflower, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 3.5,
    "energy_kcal": 29.0,
    "fat_g": 0.9,
    "fibre_g": 1.9,
    "folate_ug": 48.0,
    "iron_mg": 0.45,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 215.0,
    "protein_g": 1.9,
    "salt_g": 0.0175,
    "sat_fat_g": 0.2,
    "sodium_mg": 7.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 30.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 28.5
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-513",
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
