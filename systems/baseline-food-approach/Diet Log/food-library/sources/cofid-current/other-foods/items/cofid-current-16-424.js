/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples, 5 products",
  "id": "cofid-current-16-424",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sardines, canned in brine, drained",
  "nutritionPerBasis": {
    "calcium_mg": 679.0,
    "carbs_g": 0.0,
    "energy_kcal": 170.0,
    "fat_g": 9.1,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 2.73,
    "magnesium_mg": 42.0,
    "omega3_g": 2.5,
    "phosphorus_mg": 545.0,
    "potassium_mg": 287.0,
    "protein_g": 22.1,
    "salt_g": 0.92,
    "sat_fat_g": 2.61,
    "sodium_mg": 368.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-424",
  "state": "Canned",
  "subcategory": "JC",
  "tags": [
    "canned",
    "jc",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
