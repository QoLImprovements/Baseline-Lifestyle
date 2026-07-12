/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "16 samples, 3 brands, including standard and fun size",
  "id": "cofid-current-17-669",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milky Way and own brand equivalents",
  "nutritionPerBasis": {
    "calcium_mg": 117.0,
    "carbs_g": 76.6,
    "energy_kcal": 444.0,
    "fat_g": 15.7,
    "fibre_g": 1.0,
    "folate_ug": 5.0,
    "iron_mg": 1.98,
    "magnesium_mg": 25.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 114.0,
    "potassium_mg": 240.0,
    "protein_g": 3.8,
    "salt_g": 0.55,
    "sat_fat_g": 7.73,
    "sodium_mg": 220.0,
    "sugar_g": 69.7,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.96,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-669",
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
