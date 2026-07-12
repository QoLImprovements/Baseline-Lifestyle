/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169837",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Restaurant, family style, chicken fingers, from kid's menu",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 18.8,
    "energy_kcal": 1280.0,
    "fat_g": 17.4,
    "fibre_g": 1.1,
    "folate_ug": 7.0,
    "iron_mg": 0.76,
    "magnesium_mg": 29.0,
    "omega3_g": 0.976,
    "phosphorus_mg": 306.0,
    "potassium_mg": 322.0,
    "protein_g": 18.7,
    "salt_g": 2.0225,
    "sat_fat_g": 3.2,
    "sodium_mg": 809.0,
    "sugar_g": 0.33,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.47,
    "vitamin_k_ug": 28.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169837",
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
