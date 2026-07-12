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
  "id": "usda-sr-legacy-173063",
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
      "gramsPerUnit": 135.0,
      "key": "fillet",
      "kind": "unit",
      "label": "fillet"
    }
  ],
  "name": "Beef, top loin filet, boneless, separable lean and fat, trimmed to 1/8\" fat, all grades, cooked, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.6,
    "energy_kcal": 239.0,
    "fat_g": 14.1,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 3.3,
    "magnesium_mg": 27.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 236.0,
    "potassium_mg": 376.0,
    "protein_g": 27.4,
    "salt_g": 0.2325,
    "sat_fat_g": 4.82,
    "sodium_mg": 93.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173063",
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
