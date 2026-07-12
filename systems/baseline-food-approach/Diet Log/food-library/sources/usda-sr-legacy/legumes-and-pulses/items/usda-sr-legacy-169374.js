/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169374",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 153.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "10-beans",
      "kind": "unit",
      "label": "10 beans"
    },
    {
      "gramsPerUnit": 262.0,
      "key": "can-303-x-406",
      "kind": "unit",
      "label": "can (303 x 406)"
    }
  ],
  "name": "Beans, snap, yellow, canned, regular pack, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 4.5,
    "energy_kcal": 20.0,
    "fat_g": 0.1,
    "fibre_g": 1.3,
    "folate_ug": 32.0,
    "iron_mg": 0.9,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 109.0,
    "protein_g": 1.15,
    "salt_g": 0.6275,
    "sat_fat_g": 0.022,
    "sodium_mg": 251.0,
    "sugar_g": 0.78,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 39.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169374",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "legumes-and-pulses",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
