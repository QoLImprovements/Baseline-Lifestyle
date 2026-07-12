/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Soaked and boiled",
  "id": "cofid-current-13-059",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Black gram, chilki urad dahl, dried, split, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 13.6,
    "energy_kcal": 90.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 33.0,
    "iron_mg": 2.0,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 260.0,
    "protein_g": 8.0,
    "salt_g": 0.0325,
    "sat_fat_g": 0.1,
    "sodium_mg": 13.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-059",
  "state": "Boiled",
  "subcategory": "DB",
  "tags": [
    "boiled",
    "db",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
