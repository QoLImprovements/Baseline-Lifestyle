/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "drumstick",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172373",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "drumstick",
      "kind": "unit",
      "label": "drumstick"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "drumstick-with-skin",
      "kind": "unit",
      "label": "drumstick with skin"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Chicken, broilers or fryers, drumstick, meat and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.11,
    "energy_kcal": 161.0,
    "fat_g": 9.2,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.71,
    "magnesium_mg": 18.0,
    "omega3_g": 0.097,
    "phosphorus_mg": 163.0,
    "potassium_mg": 211.0,
    "protein_g": 18.1,
    "salt_g": 0.265,
    "sat_fat_g": 2.46,
    "sodium_mg": 106.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172373",
  "state": "Raw",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
