/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe. Bulgur wheat based salad. Recipe from review of recipe collection",
  "id": "cofid-current-15-885",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tabouleh",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 17.2,
    "energy_kcal": 119.0,
    "fat_g": 4.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.82,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 80.0,
    "potassium_mg": 140.0,
    "protein_g": 2.6,
    "salt_g": 0.01,
    "sat_fat_g": 0.29,
    "sodium_mg": 4.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-885",
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
