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
  "id": "usda-sr-legacy-171636",
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
      "gramsPerUnit": 343.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    }
  ],
  "name": "Pork sausage, link/patty, reduced fat, cooked, pan-fried",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 0.15,
    "energy_kcal": 267.0,
    "fat_g": 20.3,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.91,
    "magnesium_mg": 22.0,
    "omega3_g": 0.134,
    "phosphorus_mg": 185.0,
    "potassium_mg": 328.0,
    "protein_g": 20.9,
    "salt_g": 1.745,
    "sat_fat_g": 6.03,
    "sodium_mg": 698.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171636",
  "state": "Fried",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "fried",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
