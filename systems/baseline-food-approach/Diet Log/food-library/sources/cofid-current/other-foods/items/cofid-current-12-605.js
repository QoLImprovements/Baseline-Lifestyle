/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe, containing raspberry sauce, peaches, ice cream, UHT canned spray cream and flaked almonds",
  "id": "cofid-current-12-605",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Knickerbocker glory, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 16.4,
    "energy_kcal": 128.0,
    "fat_g": 6.3,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 0.52,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 186.0,
    "protein_g": 2.4,
    "salt_g": 0.075,
    "sat_fat_g": 2.83,
    "sodium_mg": 30.0,
    "sugar_g": 14.1,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 1.28,
    "vitamin_k_ug": 2.13
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-605",
  "state": "Unspecified",
  "subcategory": "BP",
  "tags": [
    "bp",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
