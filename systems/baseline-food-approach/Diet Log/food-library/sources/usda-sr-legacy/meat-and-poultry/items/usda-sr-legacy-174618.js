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
  "id": "usda-sr-legacy-174618",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Sausage, beef, fresh, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.35,
    "energy_kcal": 332.0,
    "fat_g": 28.0,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.57,
    "magnesium_mg": 14.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 141.0,
    "potassium_mg": 258.0,
    "protein_g": 18.2,
    "salt_g": 2.0325,
    "sat_fat_g": 10.9,
    "sodium_mg": 813.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174618",
  "state": "Cooked",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
