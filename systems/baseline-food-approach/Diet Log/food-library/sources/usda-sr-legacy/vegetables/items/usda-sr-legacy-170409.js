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
  "id": "usda-sr-legacy-170409",
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
      "gramsPerUnit": 256.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Corn, sweet, yellow, canned, brine pack, regular pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 13.9,
    "energy_kcal": 254.0,
    "fat_g": 0.77,
    "fibre_g": 1.7,
    "folate_ug": 38.0,
    "iron_mg": 0.36,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 136.0,
    "protein_g": 1.95,
    "salt_g": 0.4875,
    "sat_fat_g": 0.077,
    "sodium_mg": 195.0,
    "sugar_g": 4.15,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170409",
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
