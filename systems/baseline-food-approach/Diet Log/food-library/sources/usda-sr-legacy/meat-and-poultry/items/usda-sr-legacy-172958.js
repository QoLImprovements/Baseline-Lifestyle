/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-2-33-oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172958",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "serving-2-33-oz",
      "kind": "unit",
      "label": "serving 2.33 oz"
    }
  ],
  "name": "Bratwurst, pork, beef and turkey, lite, smoked",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 1.62,
    "energy_kcal": 186.0,
    "fat_g": 13.5,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.94,
    "magnesium_mg": 14.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 132.0,
    "potassium_mg": 246.0,
    "protein_g": 14.4,
    "salt_g": 2.455,
    "sat_fat_g": 0.0,
    "sodium_mg": 982.0,
    "sugar_g": 1.57,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172958",
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
