/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Manufacturer's data (Mars). milk chocolate",
  "id": "cofid-current-17-766",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bounty bar and own brand equivalents",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 61.0,
    "energy_kcal": 480.0,
    "fat_g": 26.3,
    "fibre_g": 3.2,
    "folate_ug": 4.0,
    "iron_mg": 1.5,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 102.0,
    "potassium_mg": 320.0,
    "protein_g": 3.7,
    "salt_g": 0.45,
    "sat_fat_g": 20.5,
    "sodium_mg": 180.0,
    "sugar_g": 50.4,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-766",
  "state": "Unspecified",
  "subcategory": "SEA",
  "tags": [
    "other-foods",
    "sea",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
