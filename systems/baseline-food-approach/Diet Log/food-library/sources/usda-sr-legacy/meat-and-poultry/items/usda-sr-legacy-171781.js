/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-171781",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Beef, shoulder steak, boneless, separable lean only, trimmed to 0\" fat, all grades, cooked, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 175.0,
    "fat_g": 5.82,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 2.94,
    "magnesium_mg": 26.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 249.0,
    "potassium_mg": 372.0,
    "protein_g": 28.6,
    "salt_g": 0.17,
    "sat_fat_g": 2.43,
    "sodium_mg": 68.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171781",
  "state": "Grilled",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
