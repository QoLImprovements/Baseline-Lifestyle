/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-169161",
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
      "gramsPerUnit": 453.6,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    }
  ],
  "name": "Pork, cured, ham and water product, slice, bone-in, separable lean and fat, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 2.72,
    "energy_kcal": 624.0,
    "fat_g": 9.29,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.39,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 213.0,
    "potassium_mg": 205.0,
    "protein_g": 13.7,
    "salt_g": 2.75,
    "sat_fat_g": 3.08,
    "sodium_mg": 1100.0,
    "sugar_g": 0.85,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169161",
  "state": "Unspecified",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
