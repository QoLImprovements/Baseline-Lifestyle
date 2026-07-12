/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "can-total-can-contents",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169142",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 423.0,
      "key": "can-total-can-contents",
      "kind": "unit",
      "label": "can total can contents"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, snap, green, canned, regular pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 3.27,
    "energy_kcal": 15.0,
    "fat_g": 0.17,
    "fibre_g": 1.5,
    "folate_ug": 26.0,
    "iron_mg": 1.02,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 92.0,
    "protein_g": 0.72,
    "salt_g": 0.48,
    "sat_fat_g": 0.04,
    "sodium_mg": 192.0,
    "sugar_g": 1.25,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 29.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169142",
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
