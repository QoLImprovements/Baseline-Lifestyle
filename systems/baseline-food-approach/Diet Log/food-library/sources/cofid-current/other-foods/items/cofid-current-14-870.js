/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-current-14-870",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Almonds, flaked and ground",
  "nutritionPerBasis": {
    "calcium_mg": 240.0,
    "carbs_g": 6.9,
    "energy_kcal": 612.0,
    "fat_g": 55.8,
    "fibre_g": 0.0,
    "folate_ug": 48.0,
    "iron_mg": 3.0,
    "magnesium_mg": 270.0,
    "omega3_g": 0.27,
    "phosphorus_mg": 550.0,
    "potassium_mg": 780.0,
    "protein_g": 21.1,
    "salt_g": 0.035,
    "sat_fat_g": 4.43,
    "sodium_mg": 14.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 23.96,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-870",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
