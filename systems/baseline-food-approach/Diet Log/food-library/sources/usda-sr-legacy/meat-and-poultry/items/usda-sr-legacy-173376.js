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
  "id": "usda-sr-legacy-173376",
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
      "gramsPerUnit": 266.0,
      "key": "steak",
      "kind": "unit",
      "label": "steak"
    }
  ],
  "name": "Beef, plate steak, boneless, outside skirt, separable lean only, trimmed to 0\" fat, all grades, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.19,
    "energy_kcal": 864.0,
    "fat_g": 14.5,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 3.6,
    "magnesium_mg": 20.0,
    "omega3_g": 0.044,
    "phosphorus_mg": 148.0,
    "potassium_mg": 253.0,
    "protein_g": 18.7,
    "salt_g": 0.1675,
    "sat_fat_g": 5.62,
    "sodium_mg": 67.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173376",
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
