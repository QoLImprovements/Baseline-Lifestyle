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
  "id": "usda-sr-legacy-167882",
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
      "gramsPerUnit": 172.0,
      "key": "chop",
      "kind": "unit",
      "label": "chop"
    }
  ],
  "name": "Pork, fresh, loin, center loin (chops), bone-in, separable lean only, cooked, pan-fried",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 0.0,
    "energy_kcal": 817.0,
    "fat_g": 7.66,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.99,
    "magnesium_mg": 24.0,
    "omega3_g": 0.042,
    "phosphorus_mg": 268.0,
    "potassium_mg": 378.0,
    "protein_g": 29.6,
    "salt_g": 0.2475,
    "sat_fat_g": 2.6,
    "sodium_mg": 99.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167882",
  "state": "Fried",
  "subcategory": "Pork Products",
  "tags": [
    "fried",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
