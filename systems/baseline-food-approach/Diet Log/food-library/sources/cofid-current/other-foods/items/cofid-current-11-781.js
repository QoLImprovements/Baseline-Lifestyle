/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples, 5 products, including Jordans Natural Muesli and own brands",
  "id": "cofid-current-11-781",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Muesli, Swiss style, no added sugar or salt, unfortified",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 70.7,
    "energy_kcal": 357.0,
    "fat_g": 5.9,
    "fibre_g": 8.5,
    "folate_ug": 45.0,
    "iron_mg": 2.67,
    "magnesium_mg": 87.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 303.0,
    "potassium_mg": 539.0,
    "protein_g": 9.8,
    "salt_g": 0.165,
    "sat_fat_g": 1.19,
    "sodium_mg": 66.0,
    "sugar_g": 13.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-781",
  "state": "Unspecified",
  "subcategory": "AI",
  "tags": [
    "ai",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
