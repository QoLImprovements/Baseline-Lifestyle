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
  "id": "usda-sr-legacy-170103",
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
  "name": "Peas, green, canned, no salt added, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 9.75,
    "energy_kcal": 53.0,
    "fat_g": 0.3,
    "fibre_g": 3.3,
    "folate_ug": 29.0,
    "iron_mg": 1.02,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 53.0,
    "potassium_mg": 100.0,
    "protein_g": 3.19,
    "salt_g": 0.0225,
    "sat_fat_g": 0.054,
    "sodium_mg": 9.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 72.0,
    "vitamin_c_mg": 9.8,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 16.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170103",
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
