/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-171624",
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
      "gramsPerUnit": 45.0,
      "key": "link",
      "kind": "unit",
      "label": "link"
    }
  ],
  "name": "Frankfurter, chicken",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 2.74,
    "energy_kcal": 933.0,
    "fat_g": 16.2,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.17,
    "magnesium_mg": 20.0,
    "omega3_g": 0.341,
    "phosphorus_mg": 162.0,
    "potassium_mg": 202.0,
    "protein_g": 15.5,
    "salt_g": 2.575,
    "sat_fat_g": 3.86,
    "sodium_mg": 1030.0,
    "sugar_g": 2.98,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171624",
  "state": "Unspecified",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "sausages-and-luncheon-meats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
