/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 700g fruit, 210g water, 84g sugar",
  "id": "cofid-current-14-054",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Blackcurrants, stewed with sugar",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 15.0,
    "energy_kcal": 58.0,
    "fat_g": 0.0,
    "fibre_g": 2.8,
    "folate_ug": 0.0,
    "iron_mg": 1.0,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 290.0,
    "protein_g": 0.7,
    "salt_g": 0.005,
    "sat_fat_g": 0.0,
    "sodium_mg": 2.0,
    "sugar_g": 15.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 115.0,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-054",
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
