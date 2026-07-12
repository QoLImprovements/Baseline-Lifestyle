/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169362",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 482.0,
      "key": "can-303-x-406",
      "kind": "unit",
      "label": "can (303 x 406)"
    }
  ],
  "name": "Corn, sweet, white, canned, cream style, regular pack",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 18.6,
    "energy_kcal": 311.0,
    "fat_g": 0.42,
    "fibre_g": 1.2,
    "folate_ug": 45.0,
    "iron_mg": 0.31,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 119.0,
    "protein_g": 1.74,
    "salt_g": 0.6525,
    "sat_fat_g": 0.065,
    "sodium_mg": 261.0,
    "sugar_g": 6.09,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.6,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169362",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "milk-dairy-and-eggs",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
