/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "roast-rump",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167919",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2673.0,
      "key": "roast-rump",
      "kind": "unit",
      "label": "roast rump"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-3-oz",
      "kind": "unit",
      "label": "3 oz (3 oz)"
    }
  ],
  "name": "Pork, cured, ham with natural juices, rump, bone-in, separable lean only, heated, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.48,
    "energy_kcal": 137.0,
    "fat_g": 4.25,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.04,
    "magnesium_mg": 22.0,
    "omega3_g": 0.021,
    "phosphorus_mg": 271.0,
    "potassium_mg": 511.0,
    "protein_g": 24.1,
    "salt_g": 2.1525,
    "sat_fat_g": 1.42,
    "sodium_mg": 861.0,
    "sugar_g": 0.48,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167919",
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
