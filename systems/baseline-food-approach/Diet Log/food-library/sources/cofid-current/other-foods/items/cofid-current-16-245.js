/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Purchased cooked, probably in sea or salt water",
  "id": "cofid-current-16-245",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Shrimps, boiled",
  "nutritionPerBasis": {
    "calcium_mg": 320.0,
    "carbs_g": 0.0,
    "energy_kcal": 117.0,
    "fat_g": 2.4,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.8,
    "magnesium_mg": 110.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 270.0,
    "potassium_mg": 400.0,
    "protein_g": 23.8,
    "salt_g": 9.6,
    "sat_fat_g": 0.4,
    "sodium_mg": 3840.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-245",
  "state": "Boiled",
  "subcategory": "JK",
  "tags": [
    "boiled",
    "jk",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
