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
  "id": "usda-sr-legacy-174494",
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
  "name": "Turkey, ground, 85% lean, 15% fat, pan-broiled crumbles",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 0.0,
    "energy_kcal": 1080.0,
    "fat_g": 17.4,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.98,
    "magnesium_mg": 28.0,
    "omega3_g": 0.257,
    "phosphorus_mg": 263.0,
    "potassium_mg": 276.0,
    "protein_g": 25.1,
    "salt_g": 0.2125,
    "sat_fat_g": 4.57,
    "sodium_mg": 85.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174494",
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
