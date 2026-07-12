/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-12-951",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Macaroon, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 64.0,
    "energy_kcal": 442.0,
    "fat_g": 17.8,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 1.15,
    "magnesium_mg": 91.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 184.0,
    "potassium_mg": 302.0,
    "protein_g": 9.9,
    "salt_g": 0.145,
    "sat_fat_g": 1.41,
    "sodium_mg": 58.0,
    "sugar_g": 62.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 7.64,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-951",
  "state": "Unspecified",
  "subcategory": "CDH",
  "tags": [
    "cdh",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
