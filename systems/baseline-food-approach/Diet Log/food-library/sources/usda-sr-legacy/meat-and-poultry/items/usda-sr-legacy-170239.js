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
  "id": "usda-sr-legacy-170239",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 119.0,
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
  "name": "Beef, loin, top loin steak, boneless, lip off, separable lean and fat, trimmed to 0\" fat, all grades, cooked, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 931.0,
    "fat_g": 11.2,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 3.41,
    "magnesium_mg": 19.0,
    "omega3_g": 0.033,
    "phosphorus_mg": 265.0,
    "potassium_mg": 366.0,
    "protein_g": 28.6,
    "salt_g": 0.1475,
    "sat_fat_g": 4.53,
    "sodium_mg": 59.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170239",
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
