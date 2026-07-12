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
  "id": "usda-sr-legacy-171632",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Sausage, pork and turkey, pre-cooked",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 3.63,
    "energy_kcal": 342.0,
    "fat_g": 30.6,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.3,
    "magnesium_mg": 25.0,
    "omega3_g": 0.201,
    "phosphorus_mg": 136.0,
    "potassium_mg": 230.0,
    "protein_g": 12.0,
    "salt_g": 2.19,
    "sat_fat_g": 9.88,
    "sodium_mg": 876.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171632",
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
