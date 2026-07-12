/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "10-twists",
  "description": "Snacks",
  "id": "usda-sr-legacy-170249",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "10-twists",
      "kind": "unit",
      "label": "10 twists"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, pretzels, hard, plain, made with enriched flour, unsalted",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 79.2,
    "energy_kcal": 1590.0,
    "fat_g": 3.5,
    "fibre_g": 2.8,
    "folate_ug": 171.0,
    "iron_mg": 4.32,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 146.0,
    "protein_g": 9.1,
    "salt_g": 0.625,
    "sat_fat_g": 0.75,
    "sodium_mg": 250.0,
    "sugar_g": 2.21,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170249",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "grains-bread-and-pasta",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
