/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173861",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Dutch brand loaf, chicken, pork and beef",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 3.93,
    "energy_kcal": 273.0,
    "fat_g": 22.9,
    "fibre_g": 0.3,
    "folate_ug": 11.0,
    "iron_mg": 0.16,
    "magnesium_mg": 15.0,
    "omega3_g": 0.027,
    "phosphorus_mg": 119.0,
    "potassium_mg": 210.0,
    "protein_g": 12.0,
    "salt_g": 1.965,
    "sat_fat_g": 8.81,
    "sodium_mg": 786.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173861",
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
