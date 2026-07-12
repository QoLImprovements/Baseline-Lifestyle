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
  "id": "usda-sr-legacy-170065",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 163.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Vegetables, mixed, canned, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 9.26,
    "energy_kcal": 49.0,
    "fat_g": 0.25,
    "fibre_g": 3.0,
    "folate_ug": 24.0,
    "iron_mg": 1.05,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 291.0,
    "protein_g": 2.59,
    "salt_g": 0.535,
    "sat_fat_g": 0.051,
    "sodium_mg": 214.0,
    "sugar_g": 2.41,
    "vitamin_a_ug": 583.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 18.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170065",
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
