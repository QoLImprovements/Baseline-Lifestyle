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
  "id": "usda-sr-legacy-174610",
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
    }
  ],
  "name": "Bologna, pork, turkey and beef",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 6.66,
    "energy_kcal": 336.0,
    "fat_g": 29.2,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.2,
    "magnesium_mg": 14.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 128.0,
    "potassium_mg": 222.0,
    "protein_g": 11.6,
    "salt_g": 2.65,
    "sat_fat_g": 11.7,
    "sodium_mg": 1060.0,
    "sugar_g": 1.35,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174610",
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
