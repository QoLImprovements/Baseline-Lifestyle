/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-173243",
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
    },
    {
      "gramsPerUnit": 340.0,
      "key": "cake",
      "kind": "unit",
      "label": "cake"
    }
  ],
  "name": "Cake, pound, commercially prepared, fat-free",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 61.0,
    "energy_kcal": 1180.0,
    "fat_g": 1.2,
    "fibre_g": 1.1,
    "folate_ug": 43.0,
    "iron_mg": 2.06,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 146.0,
    "potassium_mg": 110.0,
    "protein_g": 5.4,
    "salt_g": 0.8525,
    "sat_fat_g": 0.259,
    "sodium_mg": 341.0,
    "sugar_g": 34.3,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173243",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
