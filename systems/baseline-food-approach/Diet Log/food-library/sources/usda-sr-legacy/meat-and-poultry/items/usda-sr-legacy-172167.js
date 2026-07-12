/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "ribs",
  "description": "Beef Products",
  "id": "usda-sr-legacy-172167",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1197.0,
      "key": "ribs",
      "kind": "unit",
      "label": "ribs"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Beef, rib, back ribs, bone-in, separable lean and fat, trimmed to 0\" fat, choice, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 0.0,
    "energy_kcal": 1560.0,
    "fat_g": 31.0,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 2.34,
    "magnesium_mg": 22.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 160.0,
    "potassium_mg": 248.0,
    "protein_g": 23.3,
    "salt_g": 0.1525,
    "sat_fat_g": 13.8,
    "sodium_mg": 61.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172167",
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
