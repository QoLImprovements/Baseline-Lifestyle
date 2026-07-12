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
  "id": "usda-sr-legacy-169165",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3054.0,
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
  "name": "Pork, cured, ham -- water added, shank, bone-in, separable lean and fat, heated, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 1.35,
    "energy_kcal": 838.0,
    "fat_g": 13.4,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.37,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 207.0,
    "potassium_mg": 232.0,
    "protein_g": 18.6,
    "salt_g": 2.47,
    "sat_fat_g": 4.37,
    "sodium_mg": 988.0,
    "sugar_g": 0.79,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169165",
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
