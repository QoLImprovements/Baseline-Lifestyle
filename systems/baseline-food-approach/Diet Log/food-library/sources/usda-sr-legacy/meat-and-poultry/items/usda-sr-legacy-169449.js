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
  "id": "usda-sr-legacy-169449",
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
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Beef, variety meats and by-products, kidneys, raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.29,
    "energy_kcal": 413.0,
    "fat_g": 3.09,
    "fibre_g": 0.0,
    "folate_ug": 98.0,
    "iron_mg": 4.6,
    "magnesium_mg": 17.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 257.0,
    "potassium_mg": 262.0,
    "protein_g": 17.4,
    "salt_g": 0.455,
    "sat_fat_g": 0.868,
    "sodium_mg": 182.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 419.0,
    "vitamin_c_mg": 9.4,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169449",
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
