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
  "id": "usda-sr-legacy-170067",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "0-5-cup-slices",
      "kind": "unit",
      "label": "0.5 cup slices"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "4-waterchestnuts",
      "kind": "unit",
      "label": "4 waterchestnuts"
    }
  ],
  "name": "Waterchestnuts, chinese, canned, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 12.3,
    "energy_kcal": 210.0,
    "fat_g": 0.06,
    "fibre_g": 2.5,
    "folate_ug": 6.0,
    "iron_mg": 0.87,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 118.0,
    "protein_g": 0.88,
    "salt_g": 0.02,
    "sat_fat_g": 0.016,
    "sodium_mg": 8.0,
    "sugar_g": 2.46,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170067",
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
