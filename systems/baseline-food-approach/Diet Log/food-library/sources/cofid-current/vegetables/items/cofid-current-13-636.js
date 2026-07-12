/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "11 samples, UK, including whole heads, hearts and sticks, stem only",
  "id": "cofid-current-13-636",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Celery, raw",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 1.4,
    "energy_kcal": 9.0,
    "fat_g": 0.1,
    "fibre_g": 1.5,
    "folate_ug": 11.0,
    "iron_mg": 0.06,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 304.0,
    "protein_g": 0.5,
    "salt_g": 0.1925,
    "sat_fat_g": 0.0,
    "sodium_mg": 77.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 4.9
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-636",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
