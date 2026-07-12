/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172928",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Pate, chicken liver, canned",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 6.55,
    "energy_kcal": 841.0,
    "fat_g": 13.1,
    "fibre_g": 0.0,
    "folate_ug": 321.0,
    "iron_mg": 9.19,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 175.0,
    "potassium_mg": 95.0,
    "protein_g": 13.4,
    "salt_g": 0.965,
    "sat_fat_g": 4.0,
    "sodium_mg": 386.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 217.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172928",
  "state": "Canned",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "canned",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
