/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "10 samples, 7 types including English and French",
  "id": "cofid-current-17-364",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mustard, smooth",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 9.7,
    "energy_kcal": 139.0,
    "fat_g": 8.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.9,
    "magnesium_mg": 82.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 200.0,
    "protein_g": 7.1,
    "salt_g": 7.375,
    "sat_fat_g": 0.5,
    "sodium_mg": 2950.0,
    "sugar_g": 7.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-364",
  "state": "Unspecified",
  "subcategory": "WY",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "wy"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
