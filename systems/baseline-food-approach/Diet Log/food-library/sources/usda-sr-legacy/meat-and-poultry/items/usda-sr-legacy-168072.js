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
  "id": "usda-sr-legacy-168072",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 574.0,
      "key": "order",
      "kind": "unit",
      "label": "order"
    }
  ],
  "name": "Restaurant, Chinese, beef and vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 7.29,
    "energy_kcal": 440.0,
    "fat_g": 5.3,
    "fibre_g": 1.5,
    "folate_ug": 45.0,
    "iron_mg": 1.11,
    "magnesium_mg": 15.0,
    "omega3_g": 0.274,
    "phosphorus_mg": 76.0,
    "potassium_mg": 204.0,
    "protein_g": 7.08,
    "salt_g": 1.0225,
    "sat_fat_g": 0.978,
    "sodium_mg": 409.0,
    "sugar_g": 2.41,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 11.6,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 51.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168072",
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
