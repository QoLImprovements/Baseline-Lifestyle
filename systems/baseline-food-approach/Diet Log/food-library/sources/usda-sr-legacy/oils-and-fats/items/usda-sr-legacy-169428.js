/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "oz",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-169428",
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
    }
  ],
  "name": "Nuts, mixed nuts, oil roasted, without peanuts, lightly salted",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 25.0,
    "energy_kcal": 607.0,
    "fat_g": 50.0,
    "fibre_g": 7.1,
    "folate_ug": 104.0,
    "iron_mg": 5.18,
    "magnesium_mg": 275.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 433.0,
    "potassium_mg": 714.0,
    "protein_g": 17.9,
    "salt_g": 0.3575,
    "sat_fat_g": 7.14,
    "sodium_mg": 143.0,
    "sugar_g": 5.21,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 7.68,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169428",
  "state": "Roasted",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "oils-and-fats",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
