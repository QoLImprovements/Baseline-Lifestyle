/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-173966",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "steak",
      "kind": "unit",
      "label": "steak"
    }
  ],
  "name": "Beef, Australian, imported, Wagyu, loin, tenderloin steak/roast, boneless, separable lean only, Aust. marble score 4/5, raw",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 0.0,
    "energy_kcal": 191.0,
    "fat_g": 12.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.24,
    "magnesium_mg": 0.0,
    "omega3_g": 0.037,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 20.2,
    "salt_g": 0.16,
    "sat_fat_g": 5.51,
    "sodium_mg": 64.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173966",
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
