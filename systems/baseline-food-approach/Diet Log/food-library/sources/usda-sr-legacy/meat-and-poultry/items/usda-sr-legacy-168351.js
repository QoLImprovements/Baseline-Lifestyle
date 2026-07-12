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
  "id": "usda-sr-legacy-168351",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3204.0,
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
  "name": "Pork, cured, ham and water product, shank, bone-in, separable lean and fat, heated, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 1.42,
    "energy_kcal": 234.0,
    "fat_g": 17.3,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.0,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 193.0,
    "potassium_mg": 216.0,
    "protein_g": 18.2,
    "salt_g": 2.3625,
    "sat_fat_g": 5.72,
    "sodium_mg": 945.0,
    "sugar_g": 0.99,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168351",
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
