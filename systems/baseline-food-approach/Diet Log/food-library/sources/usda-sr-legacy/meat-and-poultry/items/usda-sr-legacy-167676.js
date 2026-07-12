/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "order",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167676",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 604.0,
      "key": "order",
      "kind": "unit",
      "label": "order"
    }
  ],
  "name": "Restaurant, Chinese, kung pao chicken",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 6.87,
    "energy_kcal": 129.0,
    "fat_g": 6.98,
    "fibre_g": 1.5,
    "folate_ug": 16.0,
    "iron_mg": 0.76,
    "magnesium_mg": 24.0,
    "omega3_g": 0.254,
    "phosphorus_mg": 94.0,
    "potassium_mg": 218.0,
    "protein_g": 9.76,
    "salt_g": 1.005,
    "sat_fat_g": 1.35,
    "sodium_mg": 402.0,
    "sugar_g": 3.03,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 7.1,
    "vitamin_e_mg": 1.02,
    "vitamin_k_ug": 13.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167676",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "meat-and-poultry",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
