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
  "id": "usda-sr-legacy-167694",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "oz-cooked-yield",
      "kind": "unit",
      "label": "oz cooked, yield"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "patty-cooked",
      "kind": "unit",
      "label": "patty, cooked"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "cup-cooked",
      "kind": "unit",
      "label": "cup, cooked"
    }
  ],
  "name": "Sausage, turkey and pork, fresh, bulk, patty or link, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 0.7,
    "energy_kcal": 307.0,
    "fat_g": 23.0,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.62,
    "magnesium_mg": 19.0,
    "omega3_g": 0.035,
    "phosphorus_mg": 191.0,
    "potassium_mg": 337.0,
    "protein_g": 22.7,
    "salt_g": 2.195,
    "sat_fat_g": 7.95,
    "sodium_mg": 878.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167694",
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
