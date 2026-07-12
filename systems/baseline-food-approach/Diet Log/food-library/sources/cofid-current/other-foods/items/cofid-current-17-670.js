/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "16 samples, 3 brands, including standard, snack and fun size",
  "id": "cofid-current-17-670",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Topic/Snickers and own brand equivalents",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 52.1,
    "energy_kcal": 479.0,
    "fat_g": 28.2,
    "fibre_g": 2.8,
    "folate_ug": 11.0,
    "iron_mg": 1.89,
    "magnesium_mg": 80.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 210.0,
    "potassium_mg": 388.0,
    "protein_g": 7.5,
    "salt_g": 0.4675,
    "sat_fat_g": 9.15,
    "sodium_mg": 187.0,
    "sugar_g": 46.1,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.28,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-670",
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
