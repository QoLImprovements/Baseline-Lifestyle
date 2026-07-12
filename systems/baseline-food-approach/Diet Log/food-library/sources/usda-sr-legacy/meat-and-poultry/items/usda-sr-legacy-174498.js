/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "thigh-without-skin",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-174498",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 111.0,
      "key": "thigh-without-skin",
      "kind": "unit",
      "label": "thigh without skin"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "thigh-with-skin",
      "kind": "unit",
      "label": "thigh with skin"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, broilers or fryers, dark meat, thigh, meat and skin, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 229.0,
    "fat_g": 15.4,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.21,
    "magnesium_mg": 23.0,
    "omega3_g": 0.139,
    "phosphorus_mg": 187.0,
    "potassium_mg": 245.0,
    "protein_g": 22.6,
    "salt_g": 0.19,
    "sat_fat_g": 4.25,
    "sodium_mg": 76.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174498",
  "state": "Cooked",
  "subcategory": "Poultry Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
