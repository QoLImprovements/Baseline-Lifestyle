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
  "id": "usda-sr-legacy-170203",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 349.0,
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
  "name": "Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean only, trimmed to 0\" fat, select, cooked, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.0,
    "energy_kcal": 209.0,
    "fat_g": 11.5,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 3.37,
    "magnesium_mg": 23.0,
    "omega3_g": 0.028,
    "phosphorus_mg": 202.0,
    "potassium_mg": 306.0,
    "protein_g": 26.5,
    "salt_g": 0.185,
    "sat_fat_g": 4.73,
    "sodium_mg": 74.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170203",
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
