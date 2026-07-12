/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "can-15-oz-303-x-406",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170057",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 425.0,
      "key": "can-15-oz-303-x-406",
      "kind": "unit",
      "label": "can, 15 oz (303 x 406)"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Tomato products, canned, sauce, with herbs and cheese",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 10.2,
    "energy_kcal": 247.0,
    "fat_g": 1.93,
    "fibre_g": 2.2,
    "folate_ug": 8.0,
    "iron_mg": 0.87,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 356.0,
    "protein_g": 2.13,
    "salt_g": 1.3575,
    "sat_fat_g": 0.627,
    "sodium_mg": 543.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170057",
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
