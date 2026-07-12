/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Whole peas, no pods. Boiled 20 minutes",
  "id": "cofid-current-13-439",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peas, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 10.0,
    "energy_kcal": 79.0,
    "fat_g": 1.6,
    "fibre_g": 5.6,
    "folate_ug": 27.0,
    "iron_mg": 1.5,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 230.0,
    "protein_g": 6.7,
    "salt_g": 0.0,
    "sat_fat_g": 0.3,
    "sodium_mg": 0.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 16.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 39.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-439",
  "state": "Boiled",
  "subcategory": "DF",
  "tags": [
    "boiled",
    "df",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
