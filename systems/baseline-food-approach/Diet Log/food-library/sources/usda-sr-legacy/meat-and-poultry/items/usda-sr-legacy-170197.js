/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-slices",
  "description": "Beef Products",
  "id": "usda-sr-legacy-170197",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "3-slices",
      "kind": "unit",
      "label": "3 slices"
    },
    {
      "gramsPerUnit": 340.0,
      "key": "package-net-weight-12-oz",
      "kind": "unit",
      "label": "package (net weight, 12 oz)"
    }
  ],
  "name": "Beef, cured, breakfast strips, raw or unheated",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 0.7,
    "energy_kcal": 1700.0,
    "fat_g": 38.8,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.23,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 153.0,
    "protein_g": 12.5,
    "salt_g": 2.3875,
    "sat_fat_g": 16.0,
    "sodium_mg": 955.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 24.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170197",
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
