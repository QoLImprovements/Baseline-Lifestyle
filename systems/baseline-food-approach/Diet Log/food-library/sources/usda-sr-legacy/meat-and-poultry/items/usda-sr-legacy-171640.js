/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-171640",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Bacon, turkey, low sodium",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 4.8,
    "energy_kcal": 253.0,
    "fat_g": 20.0,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.72,
    "magnesium_mg": 19.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 145.0,
    "potassium_mg": 156.0,
    "protein_g": 13.3,
    "salt_g": 2.25,
    "sat_fat_g": 6.67,
    "sodium_mg": 900.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 24.0,
    "vitamin_e_mg": 2.7,
    "vitamin_k_ug": 10.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171640",
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
