/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples of the same brand",
  "id": "cofid-current-17-765",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mincemeat",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 62.1,
    "energy_kcal": 274.0,
    "fat_g": 4.3,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.6,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 44.0,
    "protein_g": 0.6,
    "salt_g": 0.045,
    "sat_fat_g": 0.0,
    "sodium_mg": 18.0,
    "sugar_g": 62.1,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-765",
  "state": "Unspecified",
  "subcategory": "SC",
  "tags": [
    "other-foods",
    "sc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
