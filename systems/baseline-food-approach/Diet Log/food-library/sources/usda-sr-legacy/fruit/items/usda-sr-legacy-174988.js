/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "croissant-medium",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174988",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "croissant-medium",
      "kind": "unit",
      "label": "croissant, medium"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Croissants, apple",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 37.1,
    "energy_kcal": 1060.0,
    "fat_g": 8.7,
    "fibre_g": 2.5,
    "folate_ug": 57.0,
    "iron_mg": 1.1,
    "magnesium_mg": 13.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 58.0,
    "potassium_mg": 90.0,
    "protein_g": 7.4,
    "salt_g": 0.685,
    "sat_fat_g": 4.99,
    "sodium_mg": 274.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 94.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174988",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
