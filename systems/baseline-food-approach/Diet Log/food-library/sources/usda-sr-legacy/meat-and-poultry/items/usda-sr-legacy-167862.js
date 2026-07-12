/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167862",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Pork, fresh, variety meats and by-products, liver, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 2.47,
    "energy_kcal": 561.0,
    "fat_g": 3.65,
    "fibre_g": 0.0,
    "folate_ug": 212.0,
    "iron_mg": 23.3,
    "magnesium_mg": 18.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 288.0,
    "potassium_mg": 273.0,
    "protein_g": 21.4,
    "salt_g": 0.2175,
    "sat_fat_g": 1.17,
    "sodium_mg": 87.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6500.0,
    "vitamin_c_mg": 25.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167862",
  "state": "Raw",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
