/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "lb",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-175292",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 453.6,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Game meat, antelope, raw",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 0.0,
    "energy_kcal": 477.0,
    "fat_g": 2.03,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 3.19,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 188.0,
    "potassium_mg": 353.0,
    "protein_g": 22.4,
    "salt_g": 0.1275,
    "sat_fat_g": 0.74,
    "sodium_mg": 51.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175292",
  "state": "Raw",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "lamb-veal-and-game-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
