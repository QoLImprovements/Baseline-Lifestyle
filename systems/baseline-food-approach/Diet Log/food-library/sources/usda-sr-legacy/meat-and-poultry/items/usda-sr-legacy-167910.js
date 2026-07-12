/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167910",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "HORMEL ALWAYS TENDER, Pork Tenderloin, Teriyaki-Flavored",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 4.63,
    "energy_kcal": 499.0,
    "fat_g": 3.07,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.0,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 536.0,
    "protein_g": 18.2,
    "salt_g": 1.0325,
    "sat_fat_g": 1.05,
    "sodium_mg": 413.0,
    "sugar_g": 3.33,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167910",
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
