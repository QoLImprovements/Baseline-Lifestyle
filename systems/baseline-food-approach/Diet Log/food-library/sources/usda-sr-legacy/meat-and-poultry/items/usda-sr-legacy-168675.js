/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-168675",
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
      "gramsPerUnit": 453.6,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    }
  ],
  "name": "Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8\" fat, choice, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 1350.0,
    "fat_g": 27.9,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.72,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 154.0,
    "potassium_mg": 267.0,
    "protein_g": 16.3,
    "salt_g": 0.135,
    "sat_fat_g": 11.5,
    "sodium_mg": 54.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168675",
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
