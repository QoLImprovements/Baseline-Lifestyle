/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171524",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Chicken, broiler, rotisserie, BBQ, skin",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 0.7,
    "energy_kcal": 1580.0,
    "fat_g": 35.2,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.86,
    "magnesium_mg": 22.0,
    "omega3_g": 0.146,
    "phosphorus_mg": 230.0,
    "potassium_mg": 223.0,
    "protein_g": 15.2,
    "salt_g": 0.8375,
    "sat_fat_g": 9.33,
    "sodium_mg": 335.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171524",
  "state": "Unspecified",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
