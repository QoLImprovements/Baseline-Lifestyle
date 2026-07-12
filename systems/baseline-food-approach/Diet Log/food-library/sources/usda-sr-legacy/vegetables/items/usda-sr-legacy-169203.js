/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "medium",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169203",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    }
  ],
  "name": "Arrowhead, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 20.2,
    "energy_kcal": 414.0,
    "fat_g": 0.29,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 2.57,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 174.0,
    "potassium_mg": 922.0,
    "protein_g": 5.33,
    "salt_g": 0.055,
    "sat_fat_g": 0.0,
    "sodium_mg": 22.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169203",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
