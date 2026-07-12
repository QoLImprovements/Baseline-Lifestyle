/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "can-303-x-406",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170421",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 482.0,
      "key": "can-303-x-406",
      "kind": "unit",
      "label": "can (303 x 406)"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Peas, green, canned, regular pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 10.6,
    "energy_kcal": 58.0,
    "fat_g": 0.48,
    "fibre_g": 3.3,
    "folate_ug": 24.0,
    "iron_mg": 1.29,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 106.0,
    "protein_g": 3.01,
    "salt_g": 0.4625,
    "sat_fat_g": 0.086,
    "sodium_mg": 185.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 76.0,
    "vitamin_c_mg": 7.8,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 20.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170421",
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
