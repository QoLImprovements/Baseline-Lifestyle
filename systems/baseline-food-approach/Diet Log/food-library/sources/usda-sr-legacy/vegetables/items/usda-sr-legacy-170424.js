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
  "id": "usda-sr-legacy-170424",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Peas and carrots, canned, regular pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 8.48,
    "energy_kcal": 159.0,
    "fat_g": 0.27,
    "fibre_g": 2.0,
    "folate_ug": 18.0,
    "iron_mg": 0.75,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 100.0,
    "protein_g": 2.17,
    "salt_g": 0.65,
    "sat_fat_g": 0.049,
    "sodium_mg": 260.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 289.0,
    "vitamin_c_mg": 6.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170424",
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
