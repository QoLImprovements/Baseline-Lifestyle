/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Data from the Seafish Industry Authority and literature sources",
  "id": "cofid-current-16-221",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Swordfish, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 0.0,
    "energy_kcal": 109.0,
    "fat_g": 4.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.5,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 260.0,
    "potassium_mg": 350.0,
    "protein_g": 18.0,
    "salt_g": 0.325,
    "sat_fat_g": 0.9,
    "sodium_mg": 130.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-221",
  "state": "Raw",
  "subcategory": "JC",
  "tags": [
    "jc",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
