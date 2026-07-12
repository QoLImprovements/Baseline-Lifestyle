/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172867",
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
  "name": "Turkey, skin from whole, (light and dark), with added solution, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 0.0,
    "energy_kcal": 1890.0,
    "fat_g": 40.3,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.08,
    "magnesium_mg": 28.0,
    "omega3_g": 0.7,
    "phosphorus_mg": 244.0,
    "potassium_mg": 263.0,
    "protein_g": 22.2,
    "salt_g": 0.585,
    "sat_fat_g": 11.4,
    "sodium_mg": 234.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172867",
  "state": "Roasted",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
