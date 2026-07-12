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
  "id": "usda-sr-legacy-173882",
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
    }
  ],
  "name": "Pork sausage, reduced sodium, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 8.13,
    "energy_kcal": 1140.0,
    "fat_g": 22.4,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.85,
    "magnesium_mg": 11.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 110.0,
    "potassium_mg": 160.0,
    "protein_g": 9.41,
    "salt_g": 0.735,
    "sat_fat_g": 8.24,
    "sodium_mg": 294.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173882",
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
