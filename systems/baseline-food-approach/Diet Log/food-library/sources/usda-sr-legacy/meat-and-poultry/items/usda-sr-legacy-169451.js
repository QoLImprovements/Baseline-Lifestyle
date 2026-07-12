/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-169451",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Beef, variety meats and by-products, liver, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 3.89,
    "energy_kcal": 564.0,
    "fat_g": 3.63,
    "fibre_g": 0.0,
    "folate_ug": 290.0,
    "iron_mg": 4.9,
    "magnesium_mg": 18.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 387.0,
    "potassium_mg": 313.0,
    "protein_g": 20.4,
    "salt_g": 0.1725,
    "sat_fat_g": 1.23,
    "sodium_mg": 69.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4970.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169451",
  "state": "Raw",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
