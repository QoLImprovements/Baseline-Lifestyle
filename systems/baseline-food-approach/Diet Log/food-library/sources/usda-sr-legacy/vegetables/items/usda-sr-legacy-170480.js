/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-slices",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170480",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    }
  ],
  "name": "Beets, pickled, canned, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 16.3,
    "energy_kcal": 272.0,
    "fat_g": 0.08,
    "fibre_g": 0.8,
    "folate_ug": 27.0,
    "iron_mg": 0.41,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 115.0,
    "protein_g": 0.8,
    "salt_g": 0.3725,
    "sat_fat_g": 0.013,
    "sodium_mg": 149.0,
    "sugar_g": 11.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170480",
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
