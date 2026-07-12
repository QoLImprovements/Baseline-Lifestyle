/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "frankfurter",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173875",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 51.0,
      "key": "frankfurter",
      "kind": "unit",
      "label": "frankfurter"
    }
  ],
  "name": "Frankfurter, meat and poultry, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 5.02,
    "energy_kcal": 277.0,
    "fat_g": 24.2,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.04,
    "magnesium_mg": 11.0,
    "omega3_g": 0.264,
    "phosphorus_mg": 175.0,
    "potassium_mg": 359.0,
    "protein_g": 9.72,
    "salt_g": 2.44,
    "sat_fat_g": 7.58,
    "sodium_mg": 976.0,
    "sugar_g": 2.75,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 22.5,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173875",
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
