/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Chick pea spread",
  "id": "cofid-current-13-556",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Houmous",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 10.5,
    "energy_kcal": 307.0,
    "fat_g": 26.7,
    "fibre_g": 4.9,
    "folate_ug": 42.0,
    "iron_mg": 1.9,
    "magnesium_mg": 62.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 160.0,
    "potassium_mg": 190.0,
    "protein_g": 6.8,
    "salt_g": 1.025,
    "sat_fat_g": 0.0,
    "sodium_mg": 410.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-556",
  "state": "Unspecified",
  "subcategory": "DB",
  "tags": [
    "db",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
