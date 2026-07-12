/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 3 brands. Bottled and canned, drained",
  "id": "cofid-current-13-336",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauerkraut",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 1.1,
    "energy_kcal": 9.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 1.2,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 180.0,
    "protein_g": 1.1,
    "salt_g": 1.475,
    "sat_fat_g": 0.0,
    "sodium_mg": 590.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-336",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
