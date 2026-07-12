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
  "id": "usda-sr-legacy-172862",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "thigh-without-skin",
      "kind": "unit",
      "label": "thigh without skin"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 158.0,
      "key": "thigh-with-skin",
      "kind": "unit",
      "label": "thigh with skin"
    }
  ],
  "name": "Chicken, dark meat, thigh, meat and skin, with added solution, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.21,
    "energy_kcal": 215.0,
    "fat_g": 14.6,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.98,
    "magnesium_mg": 21.0,
    "omega3_g": 0.135,
    "phosphorus_mg": 183.0,
    "potassium_mg": 259.0,
    "protein_g": 20.7,
    "salt_g": 0.4625,
    "sat_fat_g": 3.88,
    "sodium_mg": 185.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172862",
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
