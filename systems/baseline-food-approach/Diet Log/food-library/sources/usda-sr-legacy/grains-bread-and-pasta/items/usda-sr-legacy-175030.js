/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "roll-1-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175030",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "roll-1-oz",
      "kind": "unit",
      "label": "roll (1 oz)"
    }
  ],
  "name": "Rolls, dinner, wheat",
  "nutritionPerBasis": {
    "calcium_mg": 176.0,
    "carbs_g": 46.0,
    "energy_kcal": 1140.0,
    "fat_g": 6.3,
    "fibre_g": 3.8,
    "folate_ug": 60.0,
    "iron_mg": 3.55,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 104.0,
    "potassium_mg": 115.0,
    "protein_g": 8.6,
    "salt_g": 1.31,
    "sat_fat_g": 1.5,
    "sodium_mg": 524.0,
    "sugar_g": 1.63,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175030",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
