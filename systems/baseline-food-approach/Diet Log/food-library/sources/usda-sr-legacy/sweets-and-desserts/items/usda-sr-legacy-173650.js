/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving",
  "description": "Beverages",
  "id": "usda-sr-legacy-173650",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Beverages, dairy drink mix, chocolate, reduced calorie, with aspartame, powder, prepared with water and ice",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 4.51,
    "energy_kcal": 121.0,
    "fat_g": 0.23,
    "fibre_g": 0.8,
    "folate_ug": 3.0,
    "iron_mg": 0.68,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 197.0,
    "protein_g": 2.19,
    "salt_g": 0.1525,
    "sat_fat_g": 0.164,
    "sodium_mg": 61.0,
    "sugar_g": 2.89,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173650",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
