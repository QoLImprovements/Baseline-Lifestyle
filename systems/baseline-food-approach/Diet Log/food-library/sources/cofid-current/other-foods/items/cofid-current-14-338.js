/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 9 brands",
  "id": "cofid-current-14-338",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peel, mixed",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 74.1,
    "energy_kcal": 287.0,
    "fat_g": 0.9,
    "fibre_g": 4.5,
    "folate_ug": 0.0,
    "iron_mg": 1.3,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 21.0,
    "protein_g": 0.3,
    "salt_g": 0.7,
    "sat_fat_g": 0.0,
    "sodium_mg": 280.0,
    "sugar_g": 51.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-338",
  "state": "Unspecified",
  "subcategory": "FA",
  "tags": [
    "fa",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
