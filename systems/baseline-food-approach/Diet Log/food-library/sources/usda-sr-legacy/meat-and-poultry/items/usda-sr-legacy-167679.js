/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-pieces",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167679",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "3-pieces",
      "kind": "unit",
      "label": "3 pieces"
    },
    {
      "gramsPerUnit": 648.0,
      "key": "order",
      "kind": "unit",
      "label": "order"
    }
  ],
  "name": "Restaurant, Chinese, orange chicken",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 22.5,
    "energy_kcal": 262.0,
    "fat_g": 12.7,
    "fibre_g": 0.8,
    "folate_ug": 10.0,
    "iron_mg": 0.94,
    "magnesium_mg": 20.0,
    "omega3_g": 0.628,
    "phosphorus_mg": 130.0,
    "potassium_mg": 209.0,
    "protein_g": 14.5,
    "salt_g": 1.3825,
    "sat_fat_g": 2.42,
    "sodium_mg": 553.0,
    "sugar_g": 13.6,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 1.07,
    "vitamin_k_ug": 24.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167679",
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
