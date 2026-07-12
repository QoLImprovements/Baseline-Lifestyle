/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "lb-whole",
  "description": "Pork Products",
  "id": "usda-sr-legacy-169159",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 453.6,
      "key": "lb-whole",
      "kind": "unit",
      "label": "lb whole"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-whole",
      "kind": "unit",
      "label": "3 oz whole"
    }
  ],
  "name": "Pork, cured, ham with natural juices, whole, boneless, separable lean and fat, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 1.02,
    "energy_kcal": 469.0,
    "fat_g": 3.43,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.87,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 302.0,
    "potassium_mg": 346.0,
    "protein_g": 19.4,
    "salt_g": 2.75,
    "sat_fat_g": 1.0,
    "sodium_mg": 1100.0,
    "sugar_g": 1.02,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169159",
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
