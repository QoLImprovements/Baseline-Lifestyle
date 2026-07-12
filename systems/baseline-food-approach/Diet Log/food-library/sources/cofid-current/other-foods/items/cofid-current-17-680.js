/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Including stock pots, stock melts and squeezy tubes",
  "id": "cofid-current-17-680",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Stock gel",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 27.8,
    "energy_kcal": 163.0,
    "fat_g": 3.6,
    "fibre_g": 1.8,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 6.7,
    "salt_g": 16.125,
    "sat_fat_g": 1.74,
    "sodium_mg": 6450.0,
    "sugar_g": 5.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-680",
  "state": "Unspecified",
  "subcategory": "WY",
  "tags": [
    "other-foods",
    "unspecified",
    "wy"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
