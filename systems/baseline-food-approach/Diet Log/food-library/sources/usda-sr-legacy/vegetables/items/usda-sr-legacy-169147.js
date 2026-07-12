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
  "id": "usda-sr-legacy-169147",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beets, canned, regular pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 7.14,
    "energy_kcal": 30.0,
    "fat_g": 0.09,
    "fibre_g": 1.2,
    "folate_ug": 29.0,
    "iron_mg": 0.73,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 159.0,
    "protein_g": 0.73,
    "salt_g": 0.3575,
    "sat_fat_g": 0.011,
    "sodium_mg": 143.0,
    "sugar_g": 6.53,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169147",
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
