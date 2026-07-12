/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "As raw; diced and boiled 20 minutes, calculated from boiled in salted water",
  "id": "cofid-current-13-585",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Celeriac, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 1.9,
    "energy_kcal": 15.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 37.0,
    "iron_mg": 0.7,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 330.0,
    "protein_g": 0.9,
    "salt_g": 0.1975,
    "sat_fat_g": 0.0,
    "sodium_mg": 79.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-585",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
