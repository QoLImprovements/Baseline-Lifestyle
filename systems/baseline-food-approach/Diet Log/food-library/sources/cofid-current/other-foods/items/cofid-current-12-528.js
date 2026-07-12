/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "7 samples, 6 brands",
  "id": "cofid-current-12-528",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fromage frais, virtually fat free, natural",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 4.6,
    "energy_kcal": 49.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 0.06,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 155.0,
    "protein_g": 7.7,
    "salt_g": 0.0925,
    "sat_fat_g": 0.1,
    "sodium_mg": 37.0,
    "sugar_g": 4.4,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-528",
  "state": "Unspecified",
  "subcategory": "BN",
  "tags": [
    "bn",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
