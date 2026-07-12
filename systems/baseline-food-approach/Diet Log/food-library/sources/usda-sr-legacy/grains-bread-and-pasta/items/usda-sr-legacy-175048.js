/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175048",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "waffle-square-4-square",
      "kind": "unit",
      "label": "waffle, square (4\" square)"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "waffle-round-4-dia",
      "kind": "unit",
      "label": "waffle, round (4\" dia)"
    }
  ],
  "name": "Waffles, plain, frozen, ready -to-heat, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 307.0,
    "carbs_g": 49.3,
    "energy_kcal": 312.0,
    "fat_g": 9.61,
    "fibre_g": 2.4,
    "folate_ug": 75.0,
    "iron_mg": 6.91,
    "magnesium_mg": 24.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 429.0,
    "potassium_mg": 144.0,
    "protein_g": 7.19,
    "salt_g": 1.1675,
    "sat_fat_g": 1.64,
    "sodium_mg": 467.0,
    "sugar_g": 5.02,
    "vitamin_a_ug": 398.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 6.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175048",
  "state": "Frozen",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "frozen",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
