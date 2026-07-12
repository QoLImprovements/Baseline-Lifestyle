/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "roast-shank",
  "description": "Pork Products",
  "id": "usda-sr-legacy-169175",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2800.0,
      "key": "roast-shank",
      "kind": "unit",
      "label": "roast shank"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-3-oz",
      "kind": "unit",
      "label": "3 oz (3 oz)"
    }
  ],
  "name": "Pork, cured, ham, shank, bone-in, separable lean only, heated, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.68,
    "energy_kcal": 582.0,
    "fat_g": 3.68,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.54,
    "magnesium_mg": 23.0,
    "omega3_g": 0.029,
    "phosphorus_mg": 269.0,
    "potassium_mg": 378.0,
    "protein_g": 26.5,
    "salt_g": 2.07,
    "sat_fat_g": 1.13,
    "sodium_mg": 828.0,
    "sugar_g": 0.68,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169175",
  "state": "Roasted",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
