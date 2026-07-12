/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170461",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tomato powder",
  "nutritionPerBasis": {
    "calcium_mg": 166.0,
    "carbs_g": 74.7,
    "energy_kcal": 1260.0,
    "fat_g": 0.44,
    "fibre_g": 16.5,
    "folate_ug": 120.0,
    "iron_mg": 4.56,
    "magnesium_mg": 178.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 295.0,
    "potassium_mg": 1930.0,
    "protein_g": 12.9,
    "salt_g": 0.335,
    "sat_fat_g": 0.062,
    "sodium_mg": 134.0,
    "sugar_g": 43.9,
    "vitamin_a_ug": 862.0,
    "vitamin_c_mg": 117.0,
    "vitamin_e_mg": 12.2,
    "vitamin_k_ug": 48.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170461",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "unspecified",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
