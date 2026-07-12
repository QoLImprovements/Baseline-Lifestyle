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
  "id": "usda-sr-legacy-168082",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 609.0,
      "key": "order",
      "kind": "unit",
      "label": "order"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "3-pieces",
      "kind": "unit",
      "label": "3 pieces"
    }
  ],
  "name": "Restaurant, Chinese, sweet and sour pork",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 23.3,
    "energy_kcal": 1130.0,
    "fat_g": 15.7,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 3.07,
    "magnesium_mg": 13.0,
    "omega3_g": 0.794,
    "phosphorus_mg": 133.0,
    "potassium_mg": 152.0,
    "protein_g": 8.91,
    "salt_g": 0.76,
    "sat_fat_g": 2.68,
    "sodium_mg": 304.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 27.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168082",
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
