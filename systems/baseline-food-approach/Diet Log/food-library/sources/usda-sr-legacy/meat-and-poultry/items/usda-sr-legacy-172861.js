/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "drumstick-without-skin",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172861",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "drumstick-without-skin",
      "kind": "unit",
      "label": "drumstick without skin"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "drumstick-with-skin",
      "kind": "unit",
      "label": "drumstick with skin"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, dark meat, drumstick, meat and skin, with added solution, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.05,
    "energy_kcal": 754.0,
    "fat_g": 9.0,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.11,
    "magnesium_mg": 20.0,
    "omega3_g": 0.115,
    "phosphorus_mg": 194.0,
    "potassium_mg": 244.0,
    "protein_g": 24.7,
    "salt_g": 0.465,
    "sat_fat_g": 2.66,
    "sodium_mg": 186.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172861",
  "state": "Roasted",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
