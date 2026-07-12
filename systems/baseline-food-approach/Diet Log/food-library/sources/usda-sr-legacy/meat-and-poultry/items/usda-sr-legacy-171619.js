/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "sausage",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-171619",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "sausage",
      "kind": "unit",
      "label": "sausage"
    }
  ],
  "name": "Bockwurst, pork, veal, raw",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 2.95,
    "energy_kcal": 301.0,
    "fat_g": 25.9,
    "fibre_g": 1.0,
    "folate_ug": 17.0,
    "iron_mg": 1.15,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 169.0,
    "potassium_mg": 270.0,
    "protein_g": 14.0,
    "salt_g": 1.89,
    "sat_fat_g": 10.3,
    "sodium_mg": 756.0,
    "sugar_g": 1.33,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 70.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171619",
  "state": "Raw",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "raw",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
