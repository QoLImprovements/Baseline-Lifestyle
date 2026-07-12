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
  "id": "usda-sr-legacy-172970",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Bologna, chicken, turkey, pork",
  "nutritionPerBasis": {
    "calcium_mg": 82.0,
    "carbs_g": 5.65,
    "energy_kcal": 1240.0,
    "fat_g": 26.2,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.16,
    "magnesium_mg": 15.0,
    "omega3_g": 0.252,
    "phosphorus_mg": 185.0,
    "potassium_mg": 152.0,
    "protein_g": 9.88,
    "salt_g": 2.305,
    "sat_fat_g": 7.99,
    "sodium_mg": 922.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 19.7,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172970",
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
