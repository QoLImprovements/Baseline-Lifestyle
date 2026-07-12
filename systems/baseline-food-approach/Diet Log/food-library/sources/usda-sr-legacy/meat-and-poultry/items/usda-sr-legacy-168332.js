/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz-3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168332",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-3-oz",
      "kind": "unit",
      "label": "3 oz (3 oz)"
    },
    {
      "gramsPerUnit": 2533.0,
      "key": "roast-rump",
      "kind": "unit",
      "label": "roast rump"
    }
  ],
  "name": "Pork, cured, ham and water product, rump, bone-in, separable lean only, heated, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 1.15,
    "energy_kcal": 131.0,
    "fat_g": 4.7,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.87,
    "magnesium_mg": 19.0,
    "omega3_g": 0.022,
    "phosphorus_mg": 221.0,
    "potassium_mg": 264.0,
    "protein_g": 21.3,
    "salt_g": 3.175,
    "sat_fat_g": 1.54,
    "sodium_mg": 1270.0,
    "sugar_g": 1.15,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168332",
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
