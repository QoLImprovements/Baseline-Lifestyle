/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169400",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "bunch",
      "kind": "unit",
      "label": "bunch"
    }
  ],
  "name": "Malabar spinach, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 124.0,
    "carbs_g": 2.71,
    "energy_kcal": 96.0,
    "fat_g": 0.78,
    "fibre_g": 2.1,
    "folate_ug": 114.0,
    "iron_mg": 1.48,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 256.0,
    "protein_g": 2.98,
    "salt_g": 0.1375,
    "sat_fat_g": 0.0,
    "sodium_mg": 55.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 5.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169400",
  "state": "Cooked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "cooked",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
