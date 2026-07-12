/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "tart",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175069",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "tart",
      "kind": "unit",
      "label": "tart"
    }
  ],
  "name": "Tart, breakfast, low fat",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 76.8,
    "energy_kcal": 1560.0,
    "fat_g": 5.99,
    "fibre_g": 1.5,
    "folate_ug": 100.0,
    "iron_mg": 3.42,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 66.0,
    "protein_g": 3.99,
    "salt_g": 0.9025,
    "sat_fat_g": 1.39,
    "sodium_mg": 361.0,
    "sugar_g": 4.87,
    "vitamin_a_ug": 285.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175069",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
