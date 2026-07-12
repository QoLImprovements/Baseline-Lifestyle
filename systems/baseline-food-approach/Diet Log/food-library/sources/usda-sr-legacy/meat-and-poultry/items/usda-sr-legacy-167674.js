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
  "id": "usda-sr-legacy-167674",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "3-pieces",
      "kind": "unit",
      "label": "3 pieces"
    },
    {
      "gramsPerUnit": 623.0,
      "key": "order",
      "kind": "unit",
      "label": "order"
    }
  ],
  "name": "Restaurant, Chinese, lemon chicken",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 20.6,
    "energy_kcal": 252.0,
    "fat_g": 13.6,
    "fibre_g": 1.0,
    "folate_ug": 9.0,
    "iron_mg": 1.22,
    "magnesium_mg": 16.0,
    "omega3_g": 0.672,
    "phosphorus_mg": 136.0,
    "potassium_mg": 161.0,
    "protein_g": 11.9,
    "salt_g": 0.63,
    "sat_fat_g": 2.03,
    "sodium_mg": 252.0,
    "sugar_g": 8.18,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 1.28,
    "vitamin_k_ug": 24.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167674",
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
