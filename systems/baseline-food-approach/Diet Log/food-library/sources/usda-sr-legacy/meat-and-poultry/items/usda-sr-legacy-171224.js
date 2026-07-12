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
  "id": "usda-sr-legacy-171224",
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
      "gramsPerUnit": 787.0,
      "key": "roast",
      "kind": "unit",
      "label": "roast"
    }
  ],
  "name": "Beef, shoulder pot roast, boneless, separable lean and fat, trimmed to 0\" fat, all grades, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 855.0,
    "fat_g": 8.92,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 3.53,
    "magnesium_mg": 25.0,
    "omega3_g": 0.019,
    "phosphorus_mg": 230.0,
    "potassium_mg": 352.0,
    "protein_g": 31.0,
    "salt_g": 0.1525,
    "sat_fat_g": 3.11,
    "sodium_mg": 61.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171224",
  "state": "Cooked",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "cooked",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
