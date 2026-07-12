/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-169190",
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
    }
  ],
  "name": "Pork, ground, 96% lean / 4% fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.21,
    "energy_kcal": 507.0,
    "fat_g": 4.0,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.86,
    "magnesium_mg": 19.0,
    "omega3_g": 0.044,
    "phosphorus_mg": 190.0,
    "potassium_mg": 310.0,
    "protein_g": 21.1,
    "salt_g": 0.1675,
    "sat_fat_g": 1.42,
    "sodium_mg": 67.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169190",
  "state": "Raw",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
