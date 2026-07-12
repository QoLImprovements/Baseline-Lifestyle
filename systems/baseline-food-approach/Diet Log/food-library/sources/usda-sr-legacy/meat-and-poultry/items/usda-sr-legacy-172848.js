/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172848",
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
  "name": "Turkey, ground, fat free, pan-broiled crumbles",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.0,
    "energy_kcal": 632.0,
    "fat_g": 2.71,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 1.02,
    "magnesium_mg": 35.0,
    "omega3_g": 0.053,
    "phosphorus_mg": 290.0,
    "potassium_mg": 357.0,
    "protein_g": 31.7,
    "salt_g": 0.1525,
    "sat_fat_g": 0.717,
    "sodium_mg": 61.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172848",
  "state": "Grilled",
  "subcategory": "Poultry Products",
  "tags": [
    "grilled",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
