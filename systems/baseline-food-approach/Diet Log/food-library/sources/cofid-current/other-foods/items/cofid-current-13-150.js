/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculation from raw",
  "id": "cofid-current-13-150",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Amaranth leaves, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 220.0,
    "carbs_g": 0.3,
    "energy_kcal": 16.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 51.0,
    "iron_mg": 2.4,
    "magnesium_mg": 110.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 540.0,
    "protein_g": 3.0,
    "salt_g": 0.0275,
    "sat_fat_g": 0.1,
    "sodium_mg": 11.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 245.0,
    "vitamin_c_mg": 31.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-150",
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
