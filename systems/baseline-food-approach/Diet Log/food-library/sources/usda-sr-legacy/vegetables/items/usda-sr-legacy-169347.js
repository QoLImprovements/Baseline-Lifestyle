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
  "id": "usda-sr-legacy-169347",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 340.0,
      "key": "can-303-x-406",
      "kind": "unit",
      "label": "can (303 x 406)"
    }
  ],
  "name": "Corn, sweet, yellow, canned, vacuum pack, no salt added",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 19.4,
    "energy_kcal": 331.0,
    "fat_g": 0.5,
    "fibre_g": 2.0,
    "folate_ug": 49.0,
    "iron_mg": 0.42,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 186.0,
    "protein_g": 2.41,
    "salt_g": 0.0075,
    "sat_fat_g": 0.077,
    "sodium_mg": 3.0,
    "sugar_g": 5.59,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 8.1,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169347",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
