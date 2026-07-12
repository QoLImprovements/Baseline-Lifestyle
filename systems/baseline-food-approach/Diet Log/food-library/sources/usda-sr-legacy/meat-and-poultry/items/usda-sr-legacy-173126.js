/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "roast",
  "description": "Beef Products",
  "id": "usda-sr-legacy-173126",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1392.0,
      "key": "roast",
      "kind": "unit",
      "label": "roast"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Beef, round, tip round, roast, separable lean only, trimmed to 0\" fat, choice, raw",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.0,
    "energy_kcal": 130.0,
    "fat_g": 4.55,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 1.92,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 200.0,
    "potassium_mg": 318.0,
    "protein_g": 20.8,
    "salt_g": 0.13,
    "sat_fat_g": 1.56,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173126",
  "state": "Raw",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
