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
  "id": "usda-sr-legacy-173991",
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
    },
    {
      "gramsPerUnit": 481.0,
      "key": "roast",
      "kind": "unit",
      "label": "roast"
    }
  ],
  "name": "Beef, loin, tenderloin roast, boneless, separable lean and fat, trimmed to 0\" fat, all grades, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 183.0,
    "fat_g": 8.14,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 3.2,
    "magnesium_mg": 18.0,
    "omega3_g": 0.032,
    "phosphorus_mg": 254.0,
    "potassium_mg": 346.0,
    "protein_g": 27.3,
    "salt_g": 0.14,
    "sat_fat_g": 3.24,
    "sodium_mg": 56.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173991",
  "state": "Roasted",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
