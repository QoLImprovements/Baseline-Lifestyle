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
  "id": "usda-sr-legacy-168087",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 547.0,
      "key": "order",
      "kind": "unit",
      "label": "order"
    }
  ],
  "name": "Restaurant, Chinese, sesame chicken",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 26.9,
    "energy_kcal": 1230.0,
    "fat_g": 14.2,
    "fibre_g": 0.7,
    "folate_ug": 8.0,
    "iron_mg": 1.09,
    "magnesium_mg": 22.0,
    "omega3_g": 0.788,
    "phosphorus_mg": 130.0,
    "potassium_mg": 204.0,
    "protein_g": 14.3,
    "salt_g": 1.205,
    "sat_fat_g": 2.41,
    "sodium_mg": 482.0,
    "sugar_g": 16.0,
    "vitamin_a_ug": 83.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.31,
    "vitamin_k_ug": 27.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168087",
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
