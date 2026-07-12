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
  "id": "usda-sr-legacy-170799",
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
      "gramsPerUnit": 227.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Beef, chuck eye Country-Style ribs, boneless, separable lean only, trimmed to 0\" fat, all grades, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 228.0,
    "fat_g": 11.4,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 2.93,
    "magnesium_mg": 19.0,
    "omega3_g": 0.024,
    "phosphorus_mg": 203.0,
    "potassium_mg": 286.0,
    "protein_g": 31.4,
    "salt_g": 0.1725,
    "sat_fat_g": 4.99,
    "sodium_mg": 69.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170799",
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
