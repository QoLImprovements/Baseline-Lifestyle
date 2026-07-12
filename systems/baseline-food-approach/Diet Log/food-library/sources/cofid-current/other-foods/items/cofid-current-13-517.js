/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "22 samples, autumn and winter, UK grown and imported, 'on the vine' and loose",
  "id": "cofid-current-13-517",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tomatoes, standard, raw",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 3.0,
    "energy_kcal": 14.0,
    "fat_g": 0.1,
    "fibre_g": 1.0,
    "folate_ug": 23.0,
    "iron_mg": 0.24,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 223.0,
    "protein_g": 0.5,
    "salt_g": 0.005,
    "sat_fat_g": 0.03,
    "sodium_mg": 2.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 22.0,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 6.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-517",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
