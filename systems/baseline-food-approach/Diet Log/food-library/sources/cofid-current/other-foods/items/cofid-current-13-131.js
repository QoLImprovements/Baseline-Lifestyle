/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Whole peas; soaked 24 hours, boiled 2 hours",
  "id": "cofid-current-13-131",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peas, dried, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 19.9,
    "energy_kcal": 109.0,
    "fat_g": 0.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.4,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 270.0,
    "protein_g": 6.9,
    "salt_g": 0.0325,
    "sat_fat_g": 0.3,
    "sodium_mg": 13.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-131",
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
