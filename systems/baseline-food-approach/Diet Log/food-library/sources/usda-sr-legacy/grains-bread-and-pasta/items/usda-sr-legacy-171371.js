/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "biscuit",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171371",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "biscuit",
      "kind": "unit",
      "label": "biscuit"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Babyfood, GERBER, GRADUATES Lil Biscuits Vanilla Wheat",
  "nutritionPerBasis": {
    "calcium_mg": 1280.0,
    "carbs_g": 72.5,
    "energy_kcal": 407.0,
    "fat_g": 9.27,
    "fibre_g": 5.9,
    "folate_ug": 49.0,
    "iron_mg": 18.9,
    "magnesium_mg": 63.0,
    "omega3_g": 0.204,
    "phosphorus_mg": 186.0,
    "potassium_mg": 318.0,
    "protein_g": 7.97,
    "salt_g": 0.6475,
    "sat_fat_g": 0.81,
    "sodium_mg": 259.0,
    "sugar_g": 24.9,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 9.1,
    "vitamin_e_mg": 24.7,
    "vitamin_k_ug": 14.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171371",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
