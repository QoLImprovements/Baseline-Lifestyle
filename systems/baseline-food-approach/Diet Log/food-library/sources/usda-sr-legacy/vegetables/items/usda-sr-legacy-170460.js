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
  "id": "usda-sr-legacy-170460",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 822.0,
      "key": "can-29-oz-401-x-411",
      "kind": "unit",
      "label": "can (29 oz) (401 x 411)"
    }
  ],
  "name": "Tomato products, canned, puree, without salt added",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 8.98,
    "energy_kcal": 38.0,
    "fat_g": 0.21,
    "fibre_g": 1.9,
    "folate_ug": 11.0,
    "iron_mg": 1.78,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 439.0,
    "protein_g": 1.65,
    "salt_g": 0.07,
    "sat_fat_g": 0.029,
    "sodium_mg": 28.0,
    "sugar_g": 4.83,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 10.6,
    "vitamin_e_mg": 1.97,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170460",
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
