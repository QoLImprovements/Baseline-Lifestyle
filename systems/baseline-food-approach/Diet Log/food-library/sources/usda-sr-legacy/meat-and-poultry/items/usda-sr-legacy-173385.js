/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "steak",
  "description": "Beef Products",
  "id": "usda-sr-legacy-173385",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 378.0,
      "key": "steak",
      "kind": "unit",
      "label": "steak"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Beef, rib eye steak, bone-in, lip-on, separable lean and fat, trimmed to 1/8\" fat, choice, cooked, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 0.0,
    "energy_kcal": 313.0,
    "fat_g": 24.7,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 2.29,
    "magnesium_mg": 22.0,
    "omega3_g": 0.055,
    "phosphorus_mg": 156.0,
    "potassium_mg": 242.0,
    "protein_g": 22.7,
    "salt_g": 0.15,
    "sat_fat_g": 10.6,
    "sodium_mg": 60.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173385",
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
