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
  "id": "usda-sr-legacy-168622",
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
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Beef, variety meats and by-products, brain, raw",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 1.05,
    "energy_kcal": 600.0,
    "fat_g": 10.3,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 2.55,
    "magnesium_mg": 13.0,
    "omega3_g": 1.225,
    "phosphorus_mg": 362.0,
    "potassium_mg": 274.0,
    "protein_g": 10.9,
    "salt_g": 0.315,
    "sat_fat_g": 2.3,
    "sodium_mg": 126.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 10.7,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168622",
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
