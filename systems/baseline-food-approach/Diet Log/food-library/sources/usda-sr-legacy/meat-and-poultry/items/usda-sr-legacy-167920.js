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
  "id": "usda-sr-legacy-167920",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3170.0,
      "key": "roast-shank",
      "kind": "unit",
      "label": "roast shank"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving-3-oz",
      "kind": "unit",
      "label": "serving (3 oz)"
    }
  ],
  "name": "Pork, cured, ham with natural juices, shank, bone-in, separable lean only, heated, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.34,
    "energy_kcal": 605.0,
    "fat_g": 4.97,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.2,
    "magnesium_mg": 21.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 255.0,
    "potassium_mg": 458.0,
    "protein_g": 25.0,
    "salt_g": 2.05,
    "sat_fat_g": 1.56,
    "sodium_mg": 820.0,
    "sugar_g": 0.34,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167920",
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
