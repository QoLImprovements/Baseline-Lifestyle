/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-5-cup-slices",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169340",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "0-5-cup-slices",
      "kind": "unit",
      "label": "0.5 cup slices"
    },
    {
      "gramsPerUnit": 454.0,
      "key": "can-303-x-406",
      "kind": "unit",
      "label": "can (303 x 406)"
    }
  ],
  "name": "Carrots, canned, no salt added, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 5.36,
    "energy_kcal": 98.0,
    "fat_g": 0.14,
    "fibre_g": 1.8,
    "folate_ug": 8.0,
    "iron_mg": 0.52,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 158.0,
    "protein_g": 0.59,
    "salt_g": 0.085,
    "sat_fat_g": 0.024,
    "sodium_mg": 34.0,
    "sugar_g": 2.46,
    "vitamin_a_ug": 558.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 9.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169340",
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
